import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

export const generateAudit = async (
  productName: string,
  category: string,
  revenue: string
): Promise<AuditResult> => {
  
  // Safety check for deployment
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("CRITICAL ERROR: API_KEY is missing. Please set the 'API_KEY' environment variable in your Vercel/Hosting project settings.");
    throw new Error("System Configuration Error: API Key missing.");
  }

  // Initialize here to safely access process.env at runtime
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an Amazon "Profit Defense" Strategist utilizing the "Moneyball" approach to ecommerce.
    
    Target Product: ${productName}
    Category: ${category}
    Monthly Revenue Context: ${revenue}

    Your goal is to identify where this product is "leaking" traffic to Social Search (TikTok, Instagram/Facebook Reels, YouTube Shorts) and provide a plan to intercept it.
    Crucially, you must write a "Founder Origin Story" script outline that differentiates this product from generic Chinese competitors.

    Generate the following JSON response:
    1. "searchLeakage": List 3 specific search phrases customers use on Social Video Platforms (TikTok/Reels/Shorts) BEFORE buying this product (e.g., "${productName} vs competitor").
    2. "objectionCrushers": Identify 3 likely customer objections/fears for this category that need to be addressed in video overlays.
    3. "searchInterceptHooks": 3 Direct-Response Video Titles/Hooks that would capture this off-platform traffic.
    4. "founderStory": Create a 3-part "Origin Story" structure for the founder video:
       - "hook": Visual/Audio hook (e.g. "I almost lost my business because of this...")
       - "conflict": The specific moment generic products failed the founder or caused a disaster.
       - "resolution": The exact moment they invented the solution (The "Aha!" moment).
    5. "competitorVulnerability": Identify one specific weakness of "generic" competitors in this niche.
    6. "estimatedLostRevenue": A calculated estimate of monthly revenue lost due to "Visual Leaks" (Assume ~20% of traffic leaves to search for video reviews). Format as currency string (e.g. "$12,400/mo").
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            searchLeakage: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            objectionCrushers: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            searchInterceptHooks: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            founderStory: {
              type: Type.OBJECT,
              properties: {
                hook: { type: Type.STRING },
                conflict: { type: Type.STRING },
                resolution: { type: Type.STRING }
              },
              required: ["hook", "conflict", "resolution"]
            },
            competitorVulnerability: { type: Type.STRING },
            estimatedLostRevenue: { type: Type.STRING }
          },
          required: ["searchLeakage", "objectionCrushers", "searchInterceptHooks", "founderStory", "competitorVulnerability", "estimatedLostRevenue"]
        }
      }
    });

    let text = response.text;
    if (!text) throw new Error("No response from AI");

    text = text.replace(/^```json\s*/, "").replace(/```$/, "").trim();

    return JSON.parse(text) as AuditResult;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw new Error("Failed to generate audit. Please try again.");
  }
};
# Authentik Studio Amazon 2026

This is the official repository for [www.authentikstudio.com](https://www.authentikstudio.com).

**Current Strategy:** "Burn The Boats" (Profit Defense & Founder Stories).

## Repository
**URL:** `https://github.com/Eurmthewurm/authentikstudio_foundersignal.git`

## Tech Stack
- **Framework:** React 19
- **Styling:** Tailwind CSS (via CDN)
- **AI:** Google Gemini 1.5 Flash (via `@google/genai`)

## 🚀 Deployment Guide (Vercel)

1. **Push code to GitHub** (`authentikstudio_foundersignal`).
2. **Go to [Vercel.com](https://vercel.com) and Log in.**
3. **Add New Project:**
   - Import `authentikstudio_foundersignal`.
4. **Environment Variables (Required):**
   - Go to "Environment Variables" in the deploy settings.
   - Key: `API_KEY`
   - Value: [Your Google Gemini API Key]
   - *Note: Without this key, the Audit Tool and Founder Story Generator will not work.*
5. **Click "Deploy".**

### Domain Setup
1. In Vercel Project Settings > Domains.
2. Add `www.authentikstudio.com`.
3. Configure your DNS (A Record) as instructed by Vercel.

## Local Development
1. Clone the repo:
   `git clone https://github.com/Eurmthewurm/authentikstudio_foundersignal.git`
2. Create `.env`:
   `API_KEY=your_key_here`
3. Install & Run:
   `npm install`
   `npm run dev`

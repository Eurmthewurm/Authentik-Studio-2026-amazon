UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36"
REF="https://www.authentikstudio.com/"
mkdir -p dist/assets
cp index.html dist/index.html
cp setup.mp4 dist/assets/setup.mp4 || true
cp nurse.mp4 dist/assets/nurse.mp4 || true
cp "john camera.jpeg" dist/assets/field1.jpg || true
cp "john camera 2.jpeg" dist/assets/field2.jpg || true
cp "john on set.jpeg" dist/assets/field3.jpg || true
cp "john truck.jpeg" dist/assets/field4.jpg || true
cp "john back truck.jpeg" dist/assets/field5.jpg || true
curl -sSL -A "$UA" -e "$REF" "https://www.authentikstudio.com/ee2%20(1%20of%201).jpg" -o dist/assets/ermo.jpg || true
curl -sSL -A "$UA" -e "$REF" "https://www.authentikstudio.com/7c7c58d9-4b00-4c0f-a331-2e74403a1959.jpeg" -o dist/assets/john.jpg || true
curl -sSL -A "$UA" -e "$REF" "https://www.authentikstudio.com/bc02b6b2-56a6-4316-b8ed-1586242cc000.jpeg" -o dist/assets/onlocation.jpg || true

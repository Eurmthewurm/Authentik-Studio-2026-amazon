set -e
mkdir -p dist/assets
cp index.html dist/index.html
curl -sL "https://www.authentikstudio.com/ee2%20(1%20of%201).jpg" -o dist/assets/ermo.jpg
curl -sL "https://www.authentikstudio.com/7c7c58d9-4b00-4c0f-a331-2e74403a1959.jpeg" -o dist/assets/john.jpg
curl -sL "https://www.authentikstudio.com/bc02b6b2-56a6-4316-b8ed-1586242cc000.jpeg" -o dist/assets/onlocation.jpg

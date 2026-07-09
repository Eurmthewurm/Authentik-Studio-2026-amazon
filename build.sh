UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36"
REF="https://www.authentikstudio.com/"
mkdir -p dist/assets
cp index.html dist/index.html
cp ermo_01.jpg dist/assets/ermo.jpg || true
cp robots.txt dist/robots.txt || true
cp sitemap.xml dist/sitemap.xml || true
cp -r insights dist/insights || true
cp og.jpg dist/assets/og.jpg || true
cp setup.mp4 dist/assets/setup.mp4 || true
cp nurse.mp4 dist/assets/nurse.mp4 || true
cp reel.mp4 dist/assets/reel.mp4 || true
cp reel-poster.jpg dist/assets/reel-poster.jpg || true
cp "john camera.jpeg" dist/assets/field1.jpg || true
cp "john camera 2.jpeg" dist/assets/field2.jpg || true
cp "john on set.jpeg" dist/assets/field3.jpg || true
cp "john truck.jpeg" dist/assets/field4.jpg || true
cp "john back truck.jpeg" dist/assets/field5.jpg || true

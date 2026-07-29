const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('c:/Users/dura/codes/prime-capital/scraped_register.html', 'utf8');

const match = html.match(/src="([^"]+register\/page[^"]+)"/);
if (match) {
  const jsUrl = 'https://awashcapital.com' + match[1];
  console.log('Fetching JS chunk:', jsUrl);
  fetch(jsUrl)
    .then((r) => r.text())
    .then((js) => {
      fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', js);
      console.log('Saved register_chunk.js, size:', js.length);
    })
    .catch((err) => console.error(err));
} else {
  console.log('No chunk match found in HTML');
}

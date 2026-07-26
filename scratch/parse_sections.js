const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Find all occurrences of section blocks: num: "01", title: "...", etc.
const sectionMatches = [...js.matchAll(/num:"(\d+)",title:"([^"]+)"/g)];
console.log('Found sections:');
sectionMatches.forEach(m => console.log(`${m[1]}: ${m[2]}`));

// Find all input names, labels, placeholders, options
const inputMatches = [...js.matchAll(/name:"([^"]+)"/g)].map(m => m[1]);
const uniqueInputs = Array.from(new Set(inputMatches));
console.log('\nUnique form field names (' + uniqueInputs.length + '):', uniqueInputs);

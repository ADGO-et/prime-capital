const fs = require('fs');

const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Print readable chunks or regex matches of field labels, placeholders, inputs
console.log('--- Register Page JS content preview / structure ---');

// Let's find strings in the JS file to get all form labels and fields
const strings = js.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g) || [];
const uniqueStrings = Array.from(new Set(strings.map(s => s.slice(1, -1)))).filter(s => s.length > 1);

fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/extracted_strings.json', JSON.stringify(uniqueStrings, null, 2));

console.log('Extracted', uniqueStrings.length, 'unique strings.');

const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Let's beautify or search key component parts
console.log('JS Length:', js.length);

// Let's dump text that looks like form labels, section headers, inputs, state keys
fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/formatted_js.js', js.replace(/;/g, ';\n').replace(/,/g, ',\n'));

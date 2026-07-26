const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Find all JSX element structures, labels, placeholders, options, input names
const matches = js.match(/[\w]+:\s*"(?:[^"\\]|\\.)*"/g) || [];
console.log('Sample key-values:', matches.slice(0, 50));

// Also find labels
const labels = js.match(/children:\s*"([^"]+)"/g) || [];
console.log('\nSample Children strings:', labels.filter(l => !l.includes('class') && l.length > 5).slice(0, 80));

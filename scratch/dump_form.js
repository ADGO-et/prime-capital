const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Let's extract all inputs with name, label, title, placeholder, etc.
const formFields = [];
const regex = /(?:num:"(\d+)",\s*title:"([^"]+)"|name:"([^"]+)"(?:,\s*label:"([^"]+)")?|placeholder:"([^"]+)"|title:"([^"]+)")/g;

let match;
while ((match = regex.exec(js)) !== null) {
  formFields.push(match[0]);
}

fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/field_matches.txt', formFields.join('\n'));

// Let's also do a more comprehensive dump of strings around section headers
const allTextChunks = [];
const textRegex = /children:\s*(?:"([^"]+)"|`([^`]+)`)/g;
while ((match = textRegex.exec(js)) !== null) {
  const val = match[1] || match[2];
  if (val && val.length > 1 && !val.includes('className') && !val.startsWith('http')) {
    allTextChunks.push(val);
  }
}

fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/jsx_children.txt', allTextChunks.join('\n'));

console.log('Saved field_matches.txt & jsx_children.txt');

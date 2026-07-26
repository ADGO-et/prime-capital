const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Let's search for objects or data structures or string patterns in JS
// Find strings with capital letters and form-like words
const lines = js.split('\n');

// Find sections and field labels
const sectionTitles = [
  'Personal Information',
  'Address and Contact Details',
  'Employment Information',
  'Beneficiary Information',
  'Payment Instructions',
  'Client\'s Identity Verification',
  'Ownership & Employment Disclosure',
  'Financial Information',
  'Politically Exposed Person (PEP)',
  'Bankruptcy Disclosure',
  'Criminal Record Disclosure',
  'Client\'s Risk Tolerance',
  'Client\'s Investment Experience',
  'Client\'s Investment Objectives',
  'Agreements & Declaration',
  'Application Verification'
];

console.log('Sections to look for:');
sectionTitles.forEach(s => console.log(' - ' + s));

// Search for state fields in initial state object
const initialStateMatch = js.match(/const\s+[\w]+\s*=\s*({[\s\S]*?fullName[\s\S]*?});/);
if (initialStateMatch) {
  console.log('Found initial state:', initialStateMatch[1].slice(0, 500));
} else {
  // Try regex for fields
  const fieldMatches = js.match(/([a-zA-Z0-0_]+):\s*(?:"[^"]*"|true|false|\[\])/g);
  console.log('State-like fields count:', fieldMatches ? fieldMatches.length : 0);
  if (fieldMatches) {
    console.log('Sample state fields:', Array.from(new Set(fieldMatches)).filter(f => !f.startsWith('className')).slice(0, 60));
  }
}

const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Search for all text literals in register_chunk.js
// Look for sections: 1. Personal Information, 2. Address & Contact, 3. Employment, 4. Beneficiary, 5. Payment, 6. Identity Verification, 7. Ownership & Employment, 8. Financial, 9. PEP, 10. Bankruptcy, 11. Criminal Record, 12. Risk Tolerance, 13. Investment Experience, 14. Investment Objectives, 15. Agreements & Declaration, 16. Application Verification

// Let's dump all english string blocks
const regex = /"([^"\\]|\\.)*"/g;
let match;
const allStrings = [];
while ((match = regex.exec(js)) !== null) {
  allStrings.push(match[0]);
}

fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/all_strings.txt', allStrings.join('\n'));
console.log('Saved all_strings.txt, count:', allStrings.length);

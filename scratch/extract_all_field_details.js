const fs = require('fs');
const js = fs.readFileSync('c:/Users/dura/codes/prime-capital/scratch/register_chunk.js', 'utf8');

// Parse out options and dropdown choices from js
const fieldDetails = {};

// Let's dump snippet around each field name
const fieldNames = [
  'firstName', 'fatherName', 'grandfatherName', 'phone', 'email', 'dob', 'age', 'placeOfBirth', 'nationality', 'countryOfResidence', 'tinNumber',
  'cityAdministration', 'zone', 'subCity', 'woredaKebele', 'houseNumber', 'preferredContact', 'marketingCommunications',
  'employmentStatus', 'beneficiaryName', 'beneficiaryRelationship',
  'bankName', 'bankBranch', 'accountNumber', 'bankChangeAck', 'settlementOptions',
  'investorType', 'faydaNumber', 'faydaIssueDate', 'faydaExpiryDate', 'faydaFront', 'faydaBack', 'kebeleId', 'drivingLicense',
  'publiclyTradedOwner', 'brokerageEmployee',
  'sourceOfFunds', 'sourceOfIncome', 'annualNetIncome', 'netWorth',
  'pepStatus', 'bankruptcyDisclosure', 'criminalRecord',
  'riskTolerance', 'stockExperience', 'bondExperience', 'investmentObjective', 'stockMonthlyValue', 'fixedIncomeMonthlyValue',
  'dateOfApplication', 'applicantName', 'submitConsent'
];

fieldNames.forEach(name => {
  const idx = js.indexOf(`name:"${name}"`);
  if (idx !== -1) {
    const snippet = js.substring(Math.max(0, idx - 100), Math.min(js.length, idx + 400));
    fieldDetails[name] = snippet;
  }
});

fs.writeFileSync('c:/Users/dura/codes/prime-capital/scratch/field_snippets.json', JSON.stringify(fieldDetails, null, 2));

console.log('Saved field_snippets.json for all 52 fields!');

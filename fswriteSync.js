const fs = require('fs');

const fileData = 'Date with fs writeFileSync';

//We need to write the data into data.txt in Sync

console.log('The Program started.');

fs.writeFileSync(`data.txt`, fileData);

console.log('The Program Ended.');
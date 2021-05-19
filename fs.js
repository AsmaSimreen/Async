const fs = require('fs');

const fileData = 'This is a Node FS Day.';

/*
    Sync/Blocking    -
    Async/NonBlocking   -
*/
//We need to write the data into data.txt
//FCB : Function CallBacks
console.log('The Program started.');

fs.writeFile(`data.txt`, fileData, (err) => {
    if (err) {
        console.log(err);
    } else {
        //This is a block, where file got created successfully
        console.log(`The File Data Sent Successfully`);
        console.log('The Program Ended.');
    }
});

// console.log('The Program Ended.');
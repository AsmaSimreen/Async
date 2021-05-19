const fs = require('fs');
const fileData = 'AB CD';
//We need to write the data into data.txt and read the data from data.txt
//FCB : Function CallBacks (Async)
fs.writeFile(`data.txt`, fileData, (err) => {
    if (err) {
        console.log(err);
    } else {
        //This is a block, where file got created successfully
        console.log(`The File Data Sent Successfully`);
        fs.readFile(`data.txt`, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data.toString());
            }
        });
    }
}); //CallBackHell


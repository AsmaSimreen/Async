const fs = require('fs');
// const fileData = 'AB CD';
// //FCB : Function CallBacks (Async)
// fs.writeFile(`data.txt`, fileData, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         //This is a block, where file got created successfully
//         console.log(`The File Data Sent Successfully`);
//         fs.readFile(`data.txt`, (err, data) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log(data.toString());
//             }
//         });
//     }
// });

//Using Promises

function writeFile() {
    return new Promise((resolve, reject) => {
        const fileData = 'This data created by a Promise';
        fs.writeFile(`data.txt`, fileData, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File Created Successfully`);
            }
        });
    });
}
writeFile()
    .then((msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            fs.readFile(`data.txt`, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        });
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });


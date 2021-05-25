const axios = require('axios');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

async function getIP() {
    try {
        const res = await axios.get(`https://api.ipify.org?format=json`);
        await writeFile('ip2.txt', JSON.stringify(res.data));
        console.log("IP Recorded in ip2.txt");
    } catch (err) {
        console.error(err);
    }
}
getIP();

// axios.get(`https://api.ipify.org?format=json`)
//     .then((response) => {
//         console.log(response.data);
//         fs.writeFile('ip.txt', JSON.stringify(response.data), (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log('IP Recorded Successfully');
//         });
//     })
//     .catch((err) => {
//         console.error(err);
//         // console.log("Try Again Later");
//     });



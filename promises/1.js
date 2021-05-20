/*
    Sync/ASync
    JS : i) FCB ii) Promises iii) Async-await

    Promises :
    3 States : a) pending
              b) fulfilled
                c) rejected

1) You consume a Promise
2) You create a Promise
Axios/Fetch
*/

const axios = require('axios');

console.log('start');

axios.get(`https://api.ipify.org?format=json`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        // console.error(err);
        console.log("Try Again Later");
    });

console.log('end');
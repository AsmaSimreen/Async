const axios = require('axios');
const readlineSync = require('readline-sync');

function main() {
    const number1 = readlineSync.questionInt(`Enter Number 1 :  `);
    const number2 = readlineSync.questionInt(`Enter Number 2 :  `);

    axios.get(`http://59.92.225.188/add/${number1}/${number2}`)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    
} main();
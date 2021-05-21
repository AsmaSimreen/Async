const axios = require('axios');
const readlineSync = require('readline-sync');


//Method 1
// function main() {
//     const number1 = readlineSync.questionInt(`Enter Number 1 :  `);
//     const number2 = readlineSync.questionInt(`Enter Number 2 :  `);

//     axios.get(`http://59.92.225.188/add/${number1}/${number2}`)
//         .then((res) => {
//             console.log(`The Sum of First Two Numbers :`, res.data);
//             const sum1 = res.data;
//             const number3 = readlineSync.questionInt(`Enter Number 3 :  `);
//             axios.get(`http://59.92.225.188/add/${sum1}/${number3}`)
//                 .then((res) => {
//                     console.log(res.data);
//                 });
//         })
//         .catch((err) => {
//             console.error(err);
//         })

// } main();

//Promise Chaining

const number1 = readlineSync.questionInt(`Enter Number 1 :  `);
const number2 = readlineSync.questionInt(`Enter Number 2 :  `);

function hitAPI(a, b) {
    return new Promise((resolve, reject) => {
        axios.get(`http://59.92.225.188/add/${a}/${b}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            })
    })
}
hitAPI(number1, number2)
    .then((sum) => {
        console.log(`The sum of first Two Numbers  :`, sum);
        const number3 = readlineSync.questionInt(`Enter Number 3 :  `);
        return hitAPI(sum, number3);
    })
    .then((sum2) => {
        console.log(`The Updated Sum 2  :`, sum2);
        const number4 = readlineSync.questionInt(`Enter Number 4 :  `);
        return hitAPI(sum2,number4);
    })
    .then((sum3)=>{
        console.log(`The Updated Sum 3 : ${sum3}`);
    })
    .catch((err) => {
        console.error(err);
    });
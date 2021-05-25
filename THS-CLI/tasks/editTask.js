const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function editTask() {
    try {
        let id = readline.question('Enter The ID To Edit That Task: ');
        let taskContent = readline.question('Enter The New Task: ');
        const data = await readFile(path.resolve('data', 'todo.json'));
        let taskData = JSON.parse(data);
        taskData.forEach(ele => (id === ele.id) ? ele.task = taskContent : null);
        await writeFile(path.resolve('data', 'todo.json'), JSON.stringify(taskData));
        console.log("Task Is Updated Successfully");
    } catch (err) {
        console.error(err);
    }
}
module.exports = editTask;


// function editTask() {
//     let id = readline.question('Enter The ID To Edit That Task: ');
//     let taskContent = readline.question('Enter The New Task: ');
//     fs.readFile(path.resolve('data', 'todo.json'), (err, data) => {
//         if (err) {
//             console.error(err);
//         }
//         else {
//             let taskData = JSON.parse(data);
//             taskData.forEach((ele) => {
//                 if (id === ele.id) {
//                     ele.task = taskContent;
//                 }
//             });
//             console.log(taskData)
//             fs.writeFile(path.resolve('data', 'todo.json'), JSON.stringify(taskData), (err) => {
//                 if (err) {
//                     console.error(err);
//                 }
//                 else {
//                     console.log("Task Is Updated Successfully");
//                 }
//             });
//         }
//     })
// }

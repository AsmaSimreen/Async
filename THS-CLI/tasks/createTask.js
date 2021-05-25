const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
function createTask() {
    let task = readline.question(`Enter The Task:`);
    fs.readFile(path.resolve('data', 'todo.json'), (err, fileData) => {
        if (err) {
            console.error(err);
        } else {
            let data = JSON.parse(fileData.toString());
            let newTask = { id: uuidv4(), task: task };
            data.push(newTask);
            fs.writeFile(path.resolve('data', 'todo.json'), JSON.stringify(data), (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log("Task Is Added Successfully");
                }
            })
        }
    })
}
module.exports = createTask;



fs.readFile('data/todo2.json', (err, data) => {
    if (err) {
        throw err;
        // console.error(err);
        // return;
    }
    console.log(data.toString());
});
const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
function getParticularTask() {
    const id = readline.question(`Know the Task by it's Particular ID:  `);
    fs.readFile(path.resolve('data', 'todo.json'), (err, fileData) => {
        if (err) {
            throw err;
        } else {
            let data = JSON.parse(fileData);
            let ref = false;
            data.forEach((ele, index) => {
                if (id == data[index].id) {
                    console.log(data[index].task.toString());
                    ref = true;
                }
            });
            if (!ref) {
                console.log("Invalid ID");
                getParticularTask();
            }
        }
    });
}
module.exports = getParticularTask;
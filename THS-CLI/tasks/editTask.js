const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
function editTask() {
    let id = readline.question('Enter The ID To Edit That Task: ');
    let taskContent = readline.question('Enter The New Task: ');
    fs.readFile(path.resolve('data', 'todo.json'), (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            let taskData = JSON.parse(data);
            taskData.forEach((ele) => {
                if (id === ele.id) {
                    ele.task = taskContent;
                }
            });
            console.log(taskData)
            fs.writeFile(path.resolve('data', 'todo.json'), JSON.stringify(taskData), (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log("Task Is Updated Successfully");
                }
            });
        }
    })
}
module.exports = editTask;
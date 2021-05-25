const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
function deleteTask() {
    const id = readline.questionInt(`Enter the ID to Delete the Task:  `);
    fs.readFile(path.resolve('data', 'todo.json'), (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let taskData = JSON.parse(data);
            let result = taskData.filter(item => item.id !== id);
            fs.writeFile(path.resolve('data', 'todo.json'), JSON.stringify(result), (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log("Task Is Deleted Successfully");
                }
            })
        }
    })
}
module.exports = deleteTask;
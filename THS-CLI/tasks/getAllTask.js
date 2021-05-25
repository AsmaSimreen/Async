const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
function getAllTask() {
    fs.readFile(path.resolve('data', 'todo.json'), (err, fileData) => {
        if (err) {
            throw err;
        } else {
            let data = JSON.parse(fileData);
            data.forEach((ele, index) => {
                console.log(data[index].task.toString());
            });
        }
    });
}
module.exports = getAllTask;
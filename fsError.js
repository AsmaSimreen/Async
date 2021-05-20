const fs = require('fs');

fs.readFile(`data.txt`, (err, data) => {
    if (err) {
        // console.log(err);
        console.error('Something Went Wrong.');
    } else {
        console.log(data.toString());
    }
});
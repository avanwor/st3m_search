const fs = require('fs');

const pullWords = () => {
    fs.readFile('./server/unix_words', function(err, data) {
        if(err) throw err;
        let array = data.toString().split("\n");
        for(let i = 0; i < 5; i++) {
            console.log(array[i]);
        }
    });
}

exports.pullWords = pullWords
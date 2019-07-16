const fs = require('fs');

const pullWords = () => {
    fs.readFile('./server/unix_words', function(err, data) {
        if(err) throw err;
        let array = data.toString().split("\n");
    });
}

exports.pullWords = pullWords
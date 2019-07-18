const fs = require('fs');

//this function reads the dictionary file
const pullWords = () => {
    return fs.readFileSync('./server/unix_words', function(err, data) {
        if(err) throw err;
        let dictionary = data.toString().split("\n");
        return dictionary
    });
    
}

exports.pullWords = pullWords
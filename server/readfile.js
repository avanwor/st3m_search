const fs = require('fs');

const pullWords = () => {
    //let dictionary = []
    return fs.readFileSync('./server/unix_words', function(err, data) {
        if(err) throw err;
        let dictionary = data.toString().split("\n");
        for (let i = 0; i < 5; i++) {
            console.log(dictionary[i])
            
        }
        return dictionary
    });
    
}

exports.pullWords = pullWords
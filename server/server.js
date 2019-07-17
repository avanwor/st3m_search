const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');
const findWord = require('./findword.js')
const key = require('../key')


const app = express();
const port = 3008;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + './../client/dist'));

//Pull words from a dictionary file into memory.
//++ edge case where server restarts and user makes a request immeditaely before 
const dict = fs.readFileSync('./server/unix_words','utf8')

//++I like the idea of running cat cet cit cot cut on a multithreaded approach to search the array. Maybe run each on a promise?
app.get('/api', (req, res) => {
    let input = req.query.input

    //++should spaces be included in search?
    input = input.toLowerCase().replace(/[^a-z ]/gi, '').split(' ').filter(ele => ele.length && ele).join(' ')
    //let lettersOnly = this.state.input.toLowerCase().replace(/[^a-z ]/gi, '')
    

    if (dict.indexOf(input) === -1) {
        //does this make a huge copy of the dict? It's a lot of memory, but it's also just on the server, it's still constant space
        input = findWord.findWord(input,dict)
        
        if (!input) res.end(JSON.stringify(null))
    }

    console.log('from find word function:', input)
    //spaces are supported
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key.key}&q=${input}&limit=5`)
        .then(gifs => {
            console.log(gifs.data.data)
            res.end(JSON.stringify(gifs.data.data))
        })
});

app.listen(port,() => console.log('serving at port ' + port));

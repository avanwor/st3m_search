const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');
const findWord = require('./findword.js')
const key = require('./key')


const app = express();
const port = 3008;

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client/dist'));

//Pull words from a dictionary file into memory.
const dict = fs.readFileSync('./server/unix_words','utf8')

//listen for get requests to /api
app.get('/api', (req, res) => {
    let input = req.query.input

    //Spaces not supported for now, but if want; input = input.toLowerCase().replace(/[^a-z ]/gi, '').split(' ').filter(ele => ele.length && ele).join(' ')
    input = input.replace(/[^a-z]/gi, '')
    
    //should be a binary search since sorted, or use an indexed postrgres
    if (dict.indexOf(input) === -1) {
        input = findWord.findWord(input,dict)
        if (!input) res.end(JSON.stringify([]))
    }

    //call to giphy with key imported from another file and results limited to 10
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key.key}&q=${input}&limit=10`)
        .then(gifs => {
            res.end(JSON.stringify({
                data: gifs.data.data,
                corrected: input
            }))
        })
        .catch(err => {
            console.log(err.message)
            res.end(JSON.stringify('Error with Giphy API'))
        })
});

app.listen(port,() => console.log('serving at port ' + port));
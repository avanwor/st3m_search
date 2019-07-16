const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const pullWords = require('./readfile')
const key = require('../key')


const app = express();
const port = 3008;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + './../client/dist'));

//Pull words from a dictionary file into memory
let dictionary = pullWords.pullWords()

//create post listener, and send array of possible correct user input to bst dictionary. 
    //I like the idea of running cat cet cit cot cut on a multithreaded approach to search the array. Maybe run each on a promise?

app.get('/api', (req, res) => {
    console.log('on server', req.query.input)
    //check if that word is in the dictionary
    //if yes, perfor, the giphy search
    //set up the giphy request
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${key.key}&q=${req.query.input}&limit=5`)
        .then(gifs => {
            console.log(gifs.data.data)
            res.end(JSON.stringify(gifs.data.data))
        })
});


app.listen(port,() => console.log('serving at port ' + port));
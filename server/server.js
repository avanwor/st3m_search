const express = require('express');
const bodyParser = require('body-parser');
const pullWords = require('./readfile.js')

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
    res.end(JSON.stringify('hey from server'))
});


app.listen(port,() => console.log('serving at port ' + port));
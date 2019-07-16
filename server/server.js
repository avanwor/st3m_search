const express = require('express');
const pullWords = require('./readfile.js')

const app = express();
const port = 3008;

app.use(express.static(__dirname + './../client/dist'));

//Pull words from a dictionary file into memory
let dictionary = pullWords.pullWords()

//create post listener, and send array of possible correct user input to bst dictionary. 
    //I like the idea of running cat cet cit cot cut on a multithreaded approach to search the array. Maybe run each on a promise?

// app.post()

app.listen(port,() => console.log('serving at port ' + port));
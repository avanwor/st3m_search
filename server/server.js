const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');
const findWord = require('./findword.js')
const key = require('./key')
//const https = require('https')


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

    //Spaces not supported for now, but if want; input = input.toLowerCase().replace(/[^a-z ]/gi, '').split(' ').filter(ele => ele.length && ele).join(' ')
    input = input.replace(/[^a-z]/gi, '')
    
    //should be a binary search since sorted
    if (dict.indexOf(input) === -1) {
        input = findWord.findWord(input,dict)
        if (!input) res.end(JSON.stringify([]))
    }

    //call to giphy
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key.key}&q=${input}&limit=5`)
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
// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
// }, app).listen(3000, () => {
//     console.log('Listening...')
// })
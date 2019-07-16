const express = require('express');

const app = express();
const port = 3008;

app.use(express.static(__dirname + './../client/dist'));

app.listen(port,() => console.log('serving at port ' + port));
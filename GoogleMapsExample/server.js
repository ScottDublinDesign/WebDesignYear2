var express = require('express');
var path = require('path');
var opn = require('opn');
var app = express();

// Define the port to run on
app.set('port', 3000);
const port = app.get('port');

app.use(express.static(path.join(__dirname, 'app')));

// Listen for requests
var server = app.listen(port);
console.log('Im listening on port 3000');
opn('http://localhost:'+ port);


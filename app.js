var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var resume = require('./routes/resume');
app.use('/resume', resume);

module.exports = app;
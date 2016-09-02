var express = require('express');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

var props = require('./routes/props');
app.use('/props', props);

app.listen(8080, function () {
    console.log('Listening on 8080');
})
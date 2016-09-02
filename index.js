var express = require('express');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//https://graph.facebook.com/me?fields=id&access_token=EAANFvPVGEqEBAESvGwkv9x1hIEt36MpRKIvMTluaKXi0tJpspsCACioFv7xvQR6ZChCHixfj1dW0oTqzhTVqWtmRZAmwzxXXqj8YiA4pMvPHkhMdWfavH3AmPpPpfugyBwzuz8kyF8S3APoxHoVYrKxYiXMWNkq0ZALgBw01gZDZD

var props = require('./routes/props');
app.use('/props', props);

app.listen(8080, function () {
    console.log('Listening on 8080');
})
var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var parseJson = bodyParser.json();
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

router.route('/')
    .get(function (request, response) {
        //response.sendFile(__dirname + '/mocks/props.JSON');
        response.sendFile(path.join(__dirname, '../mocks', 'props.JSON'));
    })
    .post(parseUrlEncoded, function (request, response) {
        console.log(request.body);
        
        response.status(200).json('OK: '+JSON.stringify(request.body));
    });

module.exports = router;
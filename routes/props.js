var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var parseJson = bodyParser.json();
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });
var request = require('request');

/*
 *  checks of the access_token is valid, then pass the request forward.
 */

var auth = function (req, res, next) {
    request('https://graph.facebook.com/me?fields=id&access_token=' + req.query.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body).id)
            next();
        } else {
            res.send('error', 401);
        }
    });
}

router.route('/')
    .get(auth, function (request, response) {
        response.sendFile(path.join(__dirname, '../mocks', 'props.JSON'));
    })
    .post(parseUrlEncoded, function (request, response) {
        console.log(request.body);

        response.status(200).json('OK: ' + JSON.stringify(request.body));
    });

module.exports = router;
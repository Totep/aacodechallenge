/**
 * Created by Totep on 3/5/16.
 */
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var auth;

//Auth post
request({
    method: 'POST',
    url: 'https://proofapi.herokuapp.com/sessions',
    headers: {
        'Content-Type': 'application/json'
    },
    //Manually add in email address and password as they are not committed on github
    body: "{ \"email\": \"samuelgrichard@gmail.com\", \"password\": \"taillessly-autotoxin-knoblike\"}"
}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    //returns JSON data as JSON data (was coming in a javascript)
    body = JSON.parse(body);
    console.log('Response:', body);
    console.log(body.data.attributes.auth_token);
    auth = JSON.stringify(body.data.attributes.auth_token);
    authRequest();
});

//Gets all videos
function authRequest () {
    request({
        method: 'GET',
        url: 'https://proofapi.herokuapp.com/videos',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });


//Gets a video
    request({
        method: 'GET',
        url: 'https://proofapi.herokuapp.com/videos/video_id',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Create a video

    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/videos',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        },
        body: "{  \"title\": \"The Highest Mountain\",  \"url\": \"http://vimeo.com/22439234\",  \"slug\": \"the-highest-mountain\"}"
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });


//Update a video

    request({
        method: 'PATCH',
        url: 'https://proofapi.herokuapp.com/videos/video_id',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        },
        body: "{  \"title\": \"The Highest Mountain\",  \"slug\": \"the-highest-mountain\"}"
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Delete a video

    request({
        method: 'DELETE',
        url: 'https://proofapi.herokuapp.com/videos/video_id',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Get all video views
    request({
        method: 'GET',
        url: 'https://proofapi.herokuapp.com/views',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });


//Get a video's views
    request({
        method: 'GET',
        url: 'https://proofapi.herokuapp.com/views/view_id',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Create a views for a video
    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/views',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        },
        body: "{  \"video_id\": \"4d142443-60d6-47b3-a355-3fe16e1018c9\"}"
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Get all votes
    request({
        method: 'GET',
        url: 'https://proofapi.herokuapp.com/votes',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Get a vote
    request({
        method: 'GET',
        url: 'https://proofapi.herokuapp.com/votes/vote_id',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });

//Creates a new vote
    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/votes',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': auth
        },
        body: "{  \"video_id\": \"4d142443-60d6-47b3-a355-3fe16e1018c9\",  \"opinion\": -1}"
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });
};

//Places homepage
app.get( '/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});
//Server setup
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;


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
    body:
}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    //returns JSON data as JSON data (was coming in a javascript)
    body = JSON.parse(body);
    console.log('Response:', body);
    console.log(body.data.attributes.auth_token);
    auth = JSON.stringify(body.data.attributes.auth_token);
});

//Gets all videos

request({
    method: 'GET',
    url: 'https://proofapi.herokuapp.com/videos?page&per_page',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});




//Gets a video
request({
    method: 'GET',
    url: 'https://proofapi.herokuapp.com/videos/' + '{video_id}',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
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
    url: 'https://proofapi.herokuapp.com/videos/' + '{video_id}',
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
    url: 'https://proofapi.herokuapp.com/videos/' +'{video_id}',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});








app.get( '/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;




//Recent video logic

//10 Top Voted video logic
    //Voting logic

//10 Top viewed video logic

//Submit Video URL logic
    //unique urls only - no video twice
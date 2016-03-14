/**
 * Created by Totep on 3/5/16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var Video = require('../models/videos');
var auth;

//Auth post
request({
    method: 'POST',
    url: 'https://proofapi.herokuapp.com/sessions',
    headers: {
        'Content-Type': 'application/json'
    },
    //Manually add in email address and password as they are not committed on github
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

module.exports = router;
var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var Vote = require('../models/votes');
var auth;

//Get all votes
request({
    method: 'GET',
    url: 'https://proofapi.herokuapp.com/votes',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});

//Get a vote
request({
    method: 'GET',
    url: 'https://proofapi.herokuapp.com/votes' + '{vote_id}',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
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


module.exports = router;
/**
 * Created by Totep on 3/7/16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var View = require('../models/views');
var auth;

//Get all video views
request({
    method: 'GET',
    url: 'https://proofapi.herokuapp.com/views',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});


//Get a video's views
request({
    method: 'GET',
    url: 'https://proofapi.herokuapp.com/views/' + '{view_id}',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
    }}, function (error, response, body) {
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



module.exports = router;
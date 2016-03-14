/**
 * Created by Totep on 3/14/16.
 */
var express = require('express');
var router = express.Router();

//Places homepage
router.get( '/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});

module.exports = router;
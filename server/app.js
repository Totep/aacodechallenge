/**
 * Created by Totep on 3/5/16.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));



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
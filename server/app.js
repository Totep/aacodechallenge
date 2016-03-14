/**
 * Created by Totep on 3/5/16.
 */
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var Validator = require('jsonschema').Validator;
var v = new Validator();

var routes = require('./routes/index');
var videos = require('./routes/videos');
var views = require('./routes/views');
var votes = require('./routes/votes');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/', videos);
app.use('/', views);
app.use('/', votes);


//Server setup
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


//Places homepage
app.get( '/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});
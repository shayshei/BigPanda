var express = require('express');
var path = require('path');
var routes = require('./routes');

// COSTS
var SERVER_PORT = 8081;

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


// Server definition
var server = app.listen(SERVER_PORT, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is up. listening at http://%s:%s", host, port)

});

module.exports = app;

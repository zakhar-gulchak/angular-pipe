var express = require("express");
var app = express();
var logger = require('morgan');
app.use(logger('combined'));

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

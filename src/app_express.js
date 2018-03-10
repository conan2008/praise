var path = require('path');
var express = require('express');
var app = express();

app.use(express.static("./src"));

// app.get('/praise.js', function (req, res) {
//     res.status(200).sendFile(path.join(__dirname,'./src/js/test.js'));
// });

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;
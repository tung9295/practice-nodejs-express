var express = require('express');
var app = express();
var port = 8000;

app.get('/', function(req, res) {
    res.send('HELLO');
});
app.listen(port, () => console.log('Listening on port ' + port));
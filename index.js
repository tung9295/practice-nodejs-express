var express = require('express');
var app = express();
var port = 5000;

var users= [
    {id: 1, name: 'tung'},
    {id: 2, name: 'tan'},
    {id: 3, name: 'trung'},
    {id: 4, name: 'hung'},
    {id: 5, name: 'lan'}
];

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/users', function(req, res) {
    res.render('users/index', {
        users: users      
    })
});

app.get('/users/search', function(req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function(user) {
        return user.name.indexOf(q) >= 0
    });
    res.render('users/index', {
        users: matchedUsers
    })
});

app.listen(port, () => console.log('Listening on port ' + port + '...'));
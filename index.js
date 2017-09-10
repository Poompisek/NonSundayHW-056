var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var app= express();
app.set('num', 1);
var num = app.get('num');


console.log(num); //1

app.use(function(req, res, next) {
    console.log('Record timestamp');
    next();
});

app.use(bodyparser.json());

app.post('/calculator/rest/plus', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result" : x + y
    }
    res.json(obj);
});

app.post('/calculator/rest/minus', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result" : x - y
    }
    res.json(obj);
});

app.post('/calculator/rest/multiply', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result" : x * y
    }
    res.json(obj);
});

app.post('/calculator/rest/divide', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result" : x / y
    }
    res.json(obj);
});

app.post('/calculator/rest/power2', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    // var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "result" : x * x
    }
    res.json(obj);
});

app.post('/calculator/rest/powery', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result" : Math.pow(x, y)
    }
    res.json(obj);
});

app.post('/calculator/rest/squareroot', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    // var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "result" : Math.sqrt(x)
    }
    res.json(obj);
});

app.post('/calculator/rest/cmtoinch', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    // var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "result" : x * 0.39370
    }
    res.json(obj);
});

app.post('/calculator/rest/kbtotb', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    // var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "result" : x * (Math.pow(10, -9))
        //"result" : (x * (Math.pow(10, -9))).toFixed(10)
    }
    res.json(obj);
});

app.get('/help', function(req, res, next) {
    res.send('Help me');
});

app.listen(3000);
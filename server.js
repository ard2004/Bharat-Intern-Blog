var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 5001 !== null && 5001 !== void 0 ? 5001 : process.env.PORT;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
var newItem = '';
app.get('/', function (req, res) {
    res.send("<h1>Hello world</h1>");
});
app.post('/', function (req, res) {
    newItem = req.body.newItem;
    res.redirect('/');
});
app.listen(PORT, function (req, res) {
    console.log("listening on http://localhost:".concat(PORT, "/"));
});

var express = require('express');
var browserify = require('browserify-middleware');
var app = express();

app.set('views', './views');
app.engine('html', function (path, options, callback) {
  require('ejs').renderFile(path, options, callback);
});

app.get('/', function (req, res) {
  res.render('index.html');
});

app.use('/public/app.js', browserify(__dirname + '/public/app.js'));

app.listen(9000, function () {
  console.log('Listening on port 9000')
});

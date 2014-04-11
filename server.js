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

var libs = Object.keys(require('./package.json').browser).concat('jquery');
console.log('External libs:');
console.dir(libs);

app.use('/public/app.js', browserify(__dirname + '/public/app.js', {
  external: libs
}));
app.use('/public/libs.js', browserify(libs));

app.listen(9000, function () {
  console.log('Listening on port 9000');

  // if we have a parent, tell them we started
  if (process.send) {
    process.send({
      started: true,
      url: 'http://localhost:' + 9000
    });
  }
});

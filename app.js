var express = require('express');
require('dotenv').config()
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var app = express();
/* Mongoose Setup */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MURI, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
/* front with vue.js*/
app.use('/', express.static(path.join(__dirname, 'dist')));
/* node server.js */
app.use('/v1', index);
app.use('*', express.static(path.join(__dirname, 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
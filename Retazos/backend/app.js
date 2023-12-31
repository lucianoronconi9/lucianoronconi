var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var novedadesRouter = require('./routes/novedades/novedades');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( session({
  secret: 'asderwregdfdswtuohmn',
  resave: false,
  saveUninitialized : true,
  cookie: { maxAge: null }
}));

secured = async (req, res, next) => {
  try {
    if(req.session.id_usuario) {
      next();
    } else {
      res.redirect('./login');
    }
  } catch ( error ) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/novedades/novedades', secured ,novedadesRouter);
app.use('/api', cors(), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

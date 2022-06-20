var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride=require('method-override');
const session= require('express-session');

const cors = require('cors');


//require routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter=require('./routes/products');
var servicesRouter=require('./routes/services');
var usersRouter=require('./routes/users');


// require routers DH API
var apiUsersRouter = require('./routes/APIS/apiUsersRouter');
var apiProductsRouter = require('./routes/APIS/apiProductRouter');

// require sendgrid api
var contactRouter = require('./routes/APIS/apiSendGrid/contactapi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//----------------MIDDLEWARES---------------------//
app.use(session({secret: 'aca no entiendo que va pero meto un texto'}));

app.use(cors())
//-------------------------------------------------//





//------------------- ROUTERS ---------------------//

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', productsRouter);
app.use('/', servicesRouter);
app.use('/',usersRouter);

//-------------------------------------------------//

//-------------------- API ROUTERS -----------------------------//
app.use('/', apiUsersRouter);
app.use('/', apiProductsRouter);


// --- SendGrid -----//

app.use(contactRouter);

//-------------------------------------------------//


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

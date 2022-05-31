var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var express = require("express"); // Express web server framework
var cookieParser = require("cookie-parser");
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const spotifyRouter = require('./routes/spotify')

var app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
 });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/spotify', spotifyRouter)

var client_id = process.env.clientID; // Your client id
var client_secret = process.env.clientSecret; // Your secret
var redirect_uri =  "http://localhost:3000/home"; // Your redirect uri
var frontend_home = process.env.FRONTEND_HOME;

var request = require("request"); // "Request" library
var cors = require("cors");
var querystring = require("querystring");
 /**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
  var generateRandomString = function (length) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
  var stateKey = "spotify_auth_state"

  app.get("/login" ,function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = "user-top-read playlist-modify-public user-read-private user-read-email playlist-read-collaborative user-library-read";
  res.send(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

const PORT = process.env.PORT || 8888;
console.log(`Listening on ${PORT}`);
app.listen(PORT);


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

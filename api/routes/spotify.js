var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
var cookieParser = require("cookie-parser");
require('dotenv').config();
const router = express.Router()
var client_id = process.env.clientID; // Your client id
var client_secret = process.env.clientSecret; // Your secret
var redirect_uri =  "http://localhost:3000/home"; // Your redirect uri
var frontend_home = process.env.FRONTEND_HOME;
// var cors = require("cors");
var querystring = require("querystring");


// /**
//  * Generates a random string containing numbers and letters
//  * @param  {number} length The length of the string
//  * @return {string} The generated string
//  */
// var generateRandomString = function (length) {
//   var text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };

var stateKey = "spotify_auth_state";

// router.get("/login", function (req, res) {
//   var state = generateRandomString(16);
//   res.cookie(stateKey, state);

//   // your application requests authorization
//   var scope = "user-top-read playlist-modify-public";
//   res.send(
//     "https://accounts.spotify.com/authorize?" +
//       querystring.stringify({
//         response_type: "code",
//         client_id: client_id,
//         scope: scope,
//         redirect_uri: redirect_uri,
//         state: state,
//       })
//   );
// });



// const PORT = process.env.PORT || 8888;
// console.log(`Listening on ${PORT}`);
// app.listen(PORT);

// module.exports = router
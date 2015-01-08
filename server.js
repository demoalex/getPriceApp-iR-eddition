var http = require('http');
var path = require('path');
var async = require('async');
var express = require('express');
var passport = require("passport"), LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
      var user = 0;
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    
  }
));

var app = express();
var server = http.createServer(app);

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

app.use(express.static(__dirname + "/client"));
app.use(app.router);

app.use('/download', passport.authenticate('local', { failureFlash: 'Invalid username or password.' }));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
    console.error("Unauthorized!!");
    res.redirect((req.headers && req.headers['referer']) ? req.headers['referer'] : '/')
    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
}

app.get('/download', ensureAuthenticated, function(req, res){
  var file = __dirname + '/downloads/price.xls';
  
  res.download(file, encodeURI('Д+ iReanimator 29.12.xls'), function(err){
    if (err) {
      // handle error, keep in mind the response may be partially-sent
      // so check res.headersSent
      console.error(err);
    } else {
      // decrement a download credit etc
      console.log(res);
    }
  }); // Set disposition and send it.
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});

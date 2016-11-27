var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ghost = require('ghost');

// Podcast module for managing podcast feeds
var podcast = require(path.join(__dirname, '/modules/podcast'));

// Seperate modules for URL routes outside of the blog and redirects
var routes = require('./routes/index');
var redirects = require('./routes/redirects');

var app = express();


ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  // Ghost stuff
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(app);

  // View engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/public', express.static(path.join(__dirname, 'public')));

  /*
  * All routes below sit behind /blog/*
  */

  // App entry point
  app.get('/', redirects.home);

  // Page routes
  app.get('/contact', routes.contact);
  app.get('/bio', routes.bio);
  app.get('/hire-me', routes.contact);
  app.get('/now', routes.now);

  // Podcast
  app.get('/podcast', podcast.rss);

  // Wufoo themes
  app.get('/wufoo-theme-kit', redirects.wufoo);
  app.get('/wufoo', redirects.wufoo);

  // Redirects
  app.get('toddcast', redirects.toddcast);
  app.get('session9', redirects.session9);
  app.get('session8', redirects.session8);
  app.get('session2', redirects.session2);
  app.get('session4', redirects.session4);
  app.get('session7', redirects.session7);
  app.get('session6', redirects.session6);
  app.get('session3', redirects.session3);
  app.get('session9', redirects.session9);
  app.get('session11', redirects.session11);
  app.get('session12', redirects.session12);
  app.get('session10', redirects.session10);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
});

module.exports = app;

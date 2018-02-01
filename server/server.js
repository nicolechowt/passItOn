// Dependencies
// ============
const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const mongoose 	= require('mongoose');


// Express settings
// ================

// instantiate our app
const app            = express();

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

require('./routes')(app);

const configDB = require('./config/database');
mongoose.connect(configDB.url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
console.log("Mongoose connection successful.");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	  message: err.message,
	  error: (app.get('env') === 'development') ? err : {}
	})
});

const debug = require('debug')('express-example');

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {

	debug('Express server listening on port ' + server.address().port);
});

app.get('*', (req, res) => {
  var testHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(testHtmlPath);
})




// our module get's exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.

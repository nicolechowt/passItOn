module.exports = function(app){

	const examples = require('./routes/examples');
	const api = require('./routes/api');

	app.use('/examples', examples);
	app.use('/api', api);
}
module.exports = function(app){

	const examples = require('./routes/examples');
	const api = require('./routes/api');
	// const main = require('./routes/main');
	
	// app.use('/request', main);
	app.use('/api', api);
}
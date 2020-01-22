const mongoose = require('mongoose');
const properties = require('./properties.json')
const environment = "production"

const mongoDB = properties[environment].databaseURL+properties[environment].databaseName

mongoose.connect(mongoDB,{useNewUrlParser: true ,useUnifiedTopology: true });

mongoose.connection.on('disconnected', function() {
	setTimeout(function(){
		mongoose.connect(mongoDB);
	}, 3000);
});

mongoose.connection.on('error', function(error) {
	console.error('Error in MongoDb connection: ' + error);
	mongoose.disconnect();
});

mongoose.connection.on('connected', function(){
	console.log('connected with mongodb');
});

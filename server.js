const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongooseConnection = require('./config/database')
const jwt = require('jsonwebtoken');
const app = express();
const router = require('./router')
const environment = "production"
const properties = require('./config/properties.json')
const port = process.env.PORT || properties[environment].port
const cors = require("cors")
app.use(cors())
app.set('secretKey', 'key'); // jwt secret token
app.use(logger('dev'));
app.use(bodyParser.json({}));

router(app)

app.listen(port, function(){
	console.log('Node server listening on port '+port);
});

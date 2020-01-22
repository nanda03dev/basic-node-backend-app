const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String},
	email: { type: String},
	password: { type: String},
});
module.exports = mongoose.model('User', UserSchema);
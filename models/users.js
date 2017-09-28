const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
	googleId: String,
	name: String,
	gender: String,
	avatar: String,
	highScore: Number
}, { collection: 'users' })

mongoose.model('users', userSchema);

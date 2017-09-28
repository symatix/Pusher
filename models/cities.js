const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const pricesSchema = require('./prices_sub')

const citySchema = new Schema({
	name: String,
	raids: String,
	gangs: String,
	priceDrop: String,
	prices: [pricesSchema]
}, { collection: 'cities' })

mongoose.model('cities', citySchema);

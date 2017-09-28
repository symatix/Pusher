const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const pricesSchema = new Schema({
	name: String,
	min: Number,
	max: Number
});

module.exports = pricesSchema

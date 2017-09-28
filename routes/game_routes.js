const mongoose = require("mongoose");

const Cities = mongoose.model('cities')
module.exports = (app) => {
	// google oauth
	app.get('/api/city', async(req, res) => {
		const city = await Cities.findOne({});
		res.send(city)
	});

	app.post('/api/prices', async(req, res) => {
		console.log(req.body)
		const city = await Cities.findOne(req.body, 'prices');

		res.send(city);
	})
}

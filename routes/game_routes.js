const mongoose = require("mongoose");

const Cities = mongoose.model('cities')
module.exports = (app) => {
	// google oauth
	app.get('/api/city', async(req, res) => {
		const city = await Cities.findOne({});
		res.send(city)
	});

	app.get('/api/citylist', async(req, res) => {
		const cityList = await Cities.find({}, { name: 1, _id: false });
		res.send(cityList)
	});

	app.post('/api/move', async(req, res) => {
		const newState = await Cities.findOne(req.body, { prices: false, _id: false })
		res.send(newState)
	})

	app.post('/api/prices', async(req, res) => {
		const city = await Cities.findOne(req.body, 'prices');

		res.send(city);
	})
}

const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/dev');
// pull in user schema at init boot
require('./models/users');
require('./models/cities');
require('./services/passport');


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri, { useMongoClient: true })

const app = express();

app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKeyOne, keys.cookieKeyTwo]
	})
);

app.use(passport.initialize())
app.use(passport.session())

require('./routes/auth_routes.js')(app)
require('./routes/game_routes.js')(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT)

const passport = require('passport');

module.exports = (app) => {
	// google oauth
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/new');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	})

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	})
}

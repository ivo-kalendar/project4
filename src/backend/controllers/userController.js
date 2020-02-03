
exports.homeGuest = (req, res) => {
	res.render('index', {
		root: '/test',
		title: 'Home Guest',
		footer: '<h1>This is a Home Footer.</h1>'
	})
}

exports.testGuest = (req,res) => {
	res.render('./test/test', {
		root: '/',
		title: 'Test Guest',
		footer: '<h3>This is a Test Footer.</h3>'
	})
}
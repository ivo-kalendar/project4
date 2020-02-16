
const footer = `<p>Copyright © 2020 Ivo Kalendarov</p>
				<p>All rights reserved.</p>`

exports.homeGuest = (req, res) => {
	res.render('index', {
		root: '/test',
		title: 'Home Guest',
		footer: footer,
		photoID: 'https://i.picsum.photos/id/184/'
	})
}

exports.testGuest = (req,res) => {
	res.render('./test/test', {
		root: '/',
		title: 'Test Guest',
		footer: footer,
		photoID: 'https://i.picsum.photos/id/499/'
	})
}
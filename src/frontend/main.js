require('../views/test/test.html')
require('../views/test/test.ejs')
require('../views/index.ejs')

require('../views/includes/header.ejs')
require('../views/includes/hero-image.ejs')
require('../views/includes/cards.ejs')
require('../views/includes/lorem.ejs')
require('../views/includes/footer.ejs')

require('../styles/main.css')

import vars from './modules/_variables'
import OnLoad from './modules/_OnLoad'
import MobileMenu from './modules/_MobileMenu'
import OnScroll from './modules/_OnScroll'


// for (var i = 0; i < vars.mainAll.length; i++) {
// 	new OnScroll(vars.mainAll[i])
// }

// for (var i = 0; i < vars.loremAll.length; i++) {
// 	new OnScroll(vars.loremAll[i])
// }

for (var i = 0; i < vars.allVisible.length; i++) {
	new OnScroll(vars.allVisible[i])
}

import header from './_variables'

class OnLoad {
	constructor() {
		window.addEventListener('load', () => {
			header.logo.classList.add('site-header__logo--on-load')
			header.primary.menuIcon.classList.add('primary__menu-icon--on-load')
			// header.menuContent.classList.add('site-header__menu-content--on-load')
			// header.primary.nav.classList.add('primary__nav--on-load')
			setTimeout(() => {
				header.primary.menuIcon.classList.add('primary__menu-icon--after-3s')
				header.logo.classList.add('site-header__logo--after-3s')
			},3000)
		})
	}
}

export default new OnLoad()
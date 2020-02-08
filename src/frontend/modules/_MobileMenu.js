
import header from './_variables'

class MobileMenu {
	constructor() {
		this.events()
	}

	events() {
		header.primary.menuIcon.addEventListener('click', () => {
			this.classExists = document.getElementsByClassName('primary__nav--is-visible').length
			if (this.classExists) {
				header.primary.nav.classList.remove('primary__nav--is-visible')
				header.primary.menuIconWrapper.classList.remove('primary__menu-icon__wrapper--is-visible')
			} else {
				header.primary.nav.classList.add('primary__nav--is-visible')
				header.primary.menuIconWrapper.classList.add('primary__menu-icon__wrapper--is-visible')
			}
		})
	}
}

export default new MobileMenu()
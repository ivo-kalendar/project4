
class MobileMenu {
	constructor() {
		this.siteHeader = document.querySelector('.site-header')
		this.menuIcon = document.querySelector('.site-header__menu-icon')
		this.menuContent = document.querySelector('.primary-nav')
		this.events()
	}

	events() {
		this.menuIcon.addEventListener('click', () => {
			this.classExists = document.getElementsByClassName('primary-nav--is-visible').length
			if (this.classExists) {
				this.menuContent.classList.remove('primary-nav--is-visible')
			} else {
				this.menuContent.classList.add('primary-nav--is-visible')
			}
		})
	}
}

export default MobileMenu
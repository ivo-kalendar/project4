
class MobileMenu {
	constructor() {
		this.headerLogo = document.querySelector('.site-header__logo')
		this.menuIcon = document.querySelector('.site-header__menu-icon')
		this.menuContent = document.querySelector('.primary-nav')
		this.events()
	}

	events() {
		window.addEventListener('load', () => {
			this.menuContent.classList.add('primary-nav--on-load')
			this.headerLogo.classList.add('site-header__logo--on-load')
			this.menuIcon.classList.add('site-header__menu-icon--on-load')
		})

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
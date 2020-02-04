
class MobileMenu {
	constructor() {
		this.siteHeader = document.querySelector('.site-header')
		this.menuIcon = document.querySelector('.site-header__menu-icon')
		this.menuContent = document.querySelector('.primary-nav')
	}

	events() {
		console.log(this.siteHeader)
		console.log(this.menuIcon)
		console.log(this.menuContent)
	}
}

export default MobileMenu
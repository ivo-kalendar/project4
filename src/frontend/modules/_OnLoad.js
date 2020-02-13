
import header from './_variables'

class OnLoad {
	constructor() {
		window.addEventListener('load', () => {
			header.logo.classList.add('site-header__logo--on-load')
			header.primary.menuIcon.classList.add('primary__menu-icon--on-load')
			setTimeout(() => {
				header.primary.menuIcon.classList.add('primary__menu-icon--after-3s')
				header.logo.classList.add('site-header__logo--after-3s')

				header.logo.textContent.split('').map((el) => {
					this.char = header.logo.innerHTML.replace(el, `<span>${el}</span>`)
					header.logo.innerHTML = this.char
				}).join('')

			}, 3000)
		})
	}
}

export default new OnLoad()
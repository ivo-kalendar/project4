
class OnScroll {
	constructor(el) {
		this.events(el)
	}

	events(el) {
		window.addEventListener('scroll', () => {
			if (el.offsetTop - (.7 * window.innerHeight) < window.scrollY) {
				el.classList.add('on--scroll')
			} else {
				el.classList.remove('on--scroll')
			}
		})
	}
}

export default OnScroll
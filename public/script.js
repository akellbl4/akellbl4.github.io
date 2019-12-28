;((window, document) => {
	const wrapNameLetters = (name) =>
		name
			.split('')
			.map((item) => (item !== ' ' ? `<span>${item}</span>` : ' '))
			.join('')

	const generateKerning = () => {
		const kerningSize = [55, 45, 45, 45, 0, 35, 4, 35, 1, 55]
		const kerningTemplate = (value, i) => `.pm--my-name-is span:nth-child(${i}){margin-right:-.${value}vmin}`
		const kerningStyle = kerningSize.reduce((value, item, i) => {
			if (item > 0) {
				value += kerningTemplate(item, i + 1)
			}

			return value
		}, '')

		return kerningStyle
	}

	const insertStyles = (css) => {
		const styletag = document.createElement('style')

		styletag.type = 'text/css'
		styletag.appendChild(document.createTextNode(css))

		document.head.appendChild(styletag)
	}

	try {
		const nameContainer = document.querySelector('.pm--my-name-is')
		const name = nameContainer.innerHTML
		const wrappedName = wrapNameLetters(name)
		const kerningStyle = generateKerning()

		nameContainer.innerHTML = wrappedName
		insertStyles(kerningStyle)

		window.__inited = 1
	} catch (e) {}
})(window, document)

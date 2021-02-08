import {
	defineDocument,
	Html,
	Head,
	Main,
	MicrositeScript,
} from 'microsite/document'

const Document = () => (
	<Html>
		<Head>
			<meta charset="UTF-8" />
			<title>Pavel Mineev</title>
			<link rel="canonical" href="https://pavel.mineev.me" />
			<meta
				name="viewport"
				content="width=device-width, minimum-scale=1, initial-scale=1"
			/>
			<meta name="author" content="Pavel Mineev" />
			<meta name="description" content="Be my guest on my site and check out what I've done for the last time" />
			<meta name="keywords" content="Павел Минеев, Pavel Mineev, akellbl4" />
		</Head>
		<body>
			<Main />
			<MicrositeScript />
		</body>
	</Html>
)

export default defineDocument(Document, {
	async prepare({ renderPage }) {
		const page = await renderPage()
		return { ...page }
	},
})

import { definePage } from 'microsite/page'

function Home() {
	return (
		<div className="pm--content">
			<div className="pm--me">
				<h1 className="pm--my-name-is">Pavel Mineev</h1>
				<p className="pm--my-job">
					Team Lead at{' '}
					<a rel="nofollow" href="https://junehomes.com">
						June Homes
					</a>
				</p>
			</div>
			<div className="pm--my-links">
				<a
					className="pm--link pm--link_email"
					href="mailto:pavel@mineev.me"
					target="_blank"
					rel="noopener noreferrer"
				>
					Email
				</a>
				<a
					className="pm--link pm--link_telegram"
					href="https://t.me/akellbl4"
					target="_blank"
					rel="noopener noreferrer"
				>
					Telegram
				</a>
				<a
					className="pm--link pm--link_facebook"
					href="https://facebook.com/akellbl4"
					target="_blank"
					rel="noopener noreferrer"
				>
					Facebook
				</a>
				<a
					className="pm--link pm--link_instagram"
					href="https://www.instagram.com/akellbl4"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram
				</a>
				<a
					className="pm--link pm--link_github"
					href="https://github.com/akellbl4"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
				<a
					className="pm--link pm--link_linkedin"
					href="https://www.linkedin.com/in/akellbl4"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				<a
					className="pm--link pm--link_solvery"
					href="https://solvery.io/mentor/pavel_mineev"
					target="_blank"
					rel="noopener"
				>
					Solvery
				</a>
			</div>
		</div>
	)
}

export default definePage(Home)

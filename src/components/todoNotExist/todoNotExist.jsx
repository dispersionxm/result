import { Link } from 'react-router-dom'
import classes from './todoNotExist.module.css'

export const TodoNotExist = () => {
	return (
		<section style={{ backgroundColor: '#111827' }}>
			<div className={classes.container}>
				<div className={classes.innerContainer}>
					<h1 className={classes.title}>404</h1>
					<p className={classes.firstMessage}>Something&apos;s missing.</p>
					<p className={classes.secondMessage}>
						Sorry, we can&apos;t find that todo. You&apos;ll find lots to
						explore on the home page.
					</p>
					<Link to="/" className={classes.link}>
						Back to Homepage
					</Link>
				</div>
			</div>
		</section>
	)
}

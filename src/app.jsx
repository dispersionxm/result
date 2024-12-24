import { User, ControlPanel } from './components'
import classes from './app.module.css'

export const App = () => {
	return (
		<div className={classes.app}>
			<User />
			<ControlPanel />
		</div>
	)
}

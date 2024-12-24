import { Information, Field } from './components'
import PropTypes from 'prop-types'
import classes from './game.module.css'

export const GameLayout = ({ handleRestart }) => (
	<article className={classes.game}>
		<Information />
		<Field />
		<button onClick={handleRestart}>Начать заново</button>
	</article>
)

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
}

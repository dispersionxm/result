import { Information, Field } from './components'
import PropTypes from 'prop-types'
import classes from './game.module.css'

export const GameLayout = ({ handleCellClick, handleRestart }) => (
	<article className={classes.game}>
		<Information />
		<Field handleCellClick={handleCellClick} />
		<button onClick={handleRestart}>Начать заново</button>
	</article>
)

GameLayout.propTypes = {
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
}

import { Information, Field } from './components'
import PropTypes from 'prop-types'
import { PLAYER, STATUS } from './constants/index.js'
import classes from './game.module.css'

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestart,
}) => (
	<article className={classes.game}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleCellClick={handleCellClick} />
		<button onClick={handleRestart}>Начать заново</button>
	</article>
)

GameLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT]),
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
}

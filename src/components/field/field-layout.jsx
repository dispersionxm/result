import PropTypes from 'prop-types'
import { PLAYER, PLAYER_SIGN } from '../../constants/index.js'
import classes from './field.module.css'

export const FieldLayout = ({ field, handleCellClick }) => (
	<section className={classes.field}>
		{field.map((cellPlayer, index) => (
			<button
				key={index}
				className={classes.cell}
				onClick={() => handleCellClick(index)}
			>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</section>
)

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
}

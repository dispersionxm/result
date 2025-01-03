import { Component } from 'react'
import PropTypes from 'prop-types'
import { PLAYER, PLAYER_SIGN } from '../../constants/index.js'
import classes from './field.module.css'

export class FieldLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section
				className={
					'grid grid-cols-3 w-75 mx-5 my-0 box-border border-1 border-solid border-black'
				}
			>
				{this.props.field.map((cellPlayer, index) => (
					<button
						key={index}
						className={classes.cell}
						onClick={() => this.props.handleCellClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</section>
		)
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
}

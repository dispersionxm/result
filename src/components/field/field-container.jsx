import { Component } from 'react'
import { PLAYER, STATUS } from '../../constants/index.js'
import { checkEmptyCell, checkWin } from '../../utils/index.js'
import { FieldLayout } from './field-layout.jsx'
import PropTypes from 'prop-types'

export class FieldContainer extends Component {
	handleCellClick = cellIndex => {
		const {
			status,
			field,
			currentPlayer,
			updateField,
			changeStatus,
			changeCurrentPlayer,
		} = this.props

		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return
		}

		const newField = [...field]

		newField[cellIndex] = currentPlayer

		updateField(newField)

		if (checkWin(newField, currentPlayer)) {
			changeStatus(STATUS.WIN)
		} else if (checkEmptyCell(newField)) {
			changeCurrentPlayer(
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
			)
		} else {
			changeStatus(STATUS.DRAW)
		}
	}

	render() {
		return (
			<FieldLayout
				field={this.props.field}
				handleCellClick={this.handleCellClick}
			/>
		)
	}
}

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT]),
	updateField: PropTypes.func,
	changeStatus: PropTypes.func,
	changeCurrentPlayer: PropTypes.func,
}

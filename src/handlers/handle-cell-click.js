import { store } from '../store.js'
import { PLAYER, STATUS } from '../constants'
import { checkWin, checkEmptyCell } from '../utils'
import {
	changeCurrentPlayer,
	changeStatus,
	updateField,
} from '../actions/index.js'

export const handleCellClick = cellIndex => {
	const { status, currentPlayer, field } = store.getState()

	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return
	}

	const newField = [...field]

	newField[cellIndex] = currentPlayer

	store.dispatch(updateField(newField))

	if (checkWin(newField, currentPlayer)) {
		store.dispatch(changeStatus(STATUS.WIN))
	} else if (checkEmptyCell(newField)) {
		store.dispatch(
			changeCurrentPlayer(
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
			),
		)
	} else {
		store.dispatch(changeStatus(STATUS.DRAW))
	}
}

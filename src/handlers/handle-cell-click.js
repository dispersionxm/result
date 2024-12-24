import { useDispatch, useStore } from 'react-redux'
import { PLAYER, STATUS } from '../constants'
import { checkEmptyCell, checkWin } from '../utils'
import {
	changeCurrentPlayer,
	changeStatus,
	updateField,
} from '../actions/index.js'

export const useHandleCellClick = () => {
	const { status, currentPlayer, field } = useStore().getState()

	const dispatch = useDispatch()

	return cellIndex => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return
		}

		const newField = [...field]

		newField[cellIndex] = currentPlayer

		dispatch(updateField(newField))

		if (checkWin(newField, currentPlayer)) {
			dispatch(changeStatus(STATUS.WIN))
		} else if (checkEmptyCell(newField)) {
			dispatch(
				changeCurrentPlayer(
					currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
				),
			)
		} else {
			dispatch(changeStatus(STATUS.DRAW))
		}
	}
}

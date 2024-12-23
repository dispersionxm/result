import { INITIAL_FIELD, PLAYER, STATUS } from '../constants/index.js'
import { CHANGE_STATUS, CHANGE_CURRENT_PLAYER, UPDATE_FIELD } from '../actions'

export const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: INITIAL_FIELD,
}

export const gameReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case CHANGE_STATUS:
			return {
				...state,
				status: payload,
			}
		case CHANGE_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			}
		case UPDATE_FIELD:
			return {
				...state,
				field: payload,
			}
		default:
			return state
	}
}

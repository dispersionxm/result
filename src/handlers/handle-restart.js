import { INITIAL_FIELD, PLAYER, STATUS } from '../constants/index.js'
import { store } from '../store.js'
import {
	changeCurrentPlayer,
	changeStatus,
	updateField,
} from '../actions/index.js'

export const handleRestart = () => {
	store.dispatch(updateField(INITIAL_FIELD))
	store.dispatch(changeStatus(STATUS.TURN))
	store.dispatch(changeCurrentPlayer(PLAYER.CROSS))
}

import { INITIAL_FIELD, PLAYER, STATUS } from '../constants/index.js'
import {
	changeCurrentPlayer,
	changeStatus,
	updateField,
} from '../actions/index.js'
import { useDispatch } from 'react-redux'

export const useHandleRestart = () => {
	const dispatch = useDispatch()

	return () => {
		dispatch(updateField(INITIAL_FIELD))
		dispatch(changeStatus(STATUS.TURN))
		dispatch(changeCurrentPlayer(PLAYER.CROSS))
	}
}

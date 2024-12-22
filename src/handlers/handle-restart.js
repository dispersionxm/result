import { INITIAL_FIELD, PLAYER, STATUS } from '../constants/index.js'

export const handleRestart = ({ setField, setStatus, setCurrentPlayer }) => {
	setField(INITIAL_FIELD)
	setStatus(STATUS.TURN)
	setCurrentPlayer(PLAYER.CROSS)
}

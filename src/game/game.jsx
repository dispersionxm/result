import { connect } from 'react-redux'
import {
	changeCurrentPlayer,
	changeStatus,
	updateField,
} from '../actions/index.js'
import { INITIAL_FIELD, PLAYER, STATUS } from '../constants/index.js'
import { GameContainer } from './game-container.jsx'

const mapDispatchToProps = dispatch => ({
	handleRestart: () => {
		dispatch(updateField(INITIAL_FIELD))
		dispatch(changeStatus(STATUS.TURN))
		dispatch(changeCurrentPlayer(PLAYER.CROSS))
	},
})

export const Game = connect(null, mapDispatchToProps)(GameContainer)

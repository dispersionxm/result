import { useState } from 'react'
import { STATUS, PLAYER, INITIAL_FIELD } from './constants'
import { handleCellClick, handleRestart } from './handlers'
import { GameLayout } from './game-layout.jsx'

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN)
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS)
	const [field, setField] = useState(INITIAL_FIELD)

	const state = {
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
	}

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={cellIndex => handleCellClick(state, cellIndex)}
			handleRestart={() => handleRestart(state)}
		/>
	)
}

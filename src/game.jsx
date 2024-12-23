import { handleCellClick, handleRestart } from './handlers'
import { GameLayout } from './game-layout.jsx'

export const Game = () => {
	return (
		<GameLayout
			handleCellClick={cellIndex => handleCellClick(cellIndex)}
			handleRestart={() => handleRestart()}
		/>
	)
}

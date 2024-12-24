import { handleRestart } from './handlers'
import { GameLayout } from './game-layout.jsx'

export const Game = () => {
	return <GameLayout handleRestart={handleRestart} />
}

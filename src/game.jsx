import { useHandleRestart } from './handlers'
import { GameLayout } from './game-layout.jsx'

export const Game = () => {
	const handleRestart = useHandleRestart()

	return <GameLayout handleRestart={handleRestart} />
}

import { store } from '../../store.js'
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants/index.js'
import { InformationLayout } from './information-layout.jsx'
import { useEffect, useState } from 'react'

export const Information = () => {
	// хотел чтобы не было неиспользуемых свойств informationState

	const { status, currentPlayer } = store.getState()
	const [informationState, setInformationState] = useState({
		status,
		currentPlayer,
	})

	useEffect(() => {
		return store.subscribe(() => {
			const currentState = store.getState()
			setInformationState({
				status: currentState.status,
				currentPlayer: currentState.currentPlayer,
			})
		})
	}, [])

	const playerAction = PLAYER_ACTION[informationState.status]
	const playerName = PLAYER_NAME[informationState.currentPlayer]

	const information =
		informationState.status === STATUS.DRAW
			? `Ничья`
			: `${playerAction}: ${playerName}`

	return <InformationLayout information={information} />
}

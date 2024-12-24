import { useSelector } from 'react-redux'
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants/index.js'
import { InformationLayout } from './information-layout.jsx'
import { selectCurrentPlayer, selectStatus } from '../../selectors/index.js'

export const Information = () => {
	const status = useSelector(selectStatus)
	const currentPlayer = useSelector(selectCurrentPlayer)

	const playerAction = PLAYER_ACTION[status]
	const playerName = PLAYER_NAME[currentPlayer]

	const information =
		status === STATUS.DRAW ? `Ничья` : `${playerAction}: ${playerName}`

	return <InformationLayout information={information} />
}

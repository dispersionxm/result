import { InformationLayout } from './information-layout.jsx'
import {
	PLAYER,
	PLAYER_ACTION,
	PLAYER_NAME,
	STATUS,
} from '../../constants/index.js'
import PropTypes from 'prop-types'

export const Information = ({ status, currentPlayer }) => {
	const playerAction = PLAYER_ACTION[status]
	const playerName = PLAYER_NAME[currentPlayer]

	const information =
		status === STATUS.DRAW ? `Ничья` : `${playerAction}: ${playerName}`

	return <InformationLayout information={information} />
}

Information.propTypes = {
	status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT]),
}

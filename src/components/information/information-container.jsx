import { Component } from 'react'
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants/index.js'
import { InformationLayout } from './information-layout.jsx'
import PropTypes from 'prop-types'

export class InformationContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props

		const playerAction = PLAYER_ACTION[status]
		const playerName = PLAYER_NAME[currentPlayer]

		this.information =
			status === STATUS.DRAW ? `Ничья` : `${playerAction}: ${playerName}`

		return <InformationLayout information={this.information} />
	}
}

InformationContainer.propTypes = {
	status: PropTypes.number,
	currentPlayer: PropTypes.number,
}

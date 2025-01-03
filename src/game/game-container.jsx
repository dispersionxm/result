import { Component } from 'react'
import PropTypes from 'prop-types'
import { GameLayout } from './game-layout.jsx'

export class GameContainer extends Component {
	render() {
		return <GameLayout handleRestart={this.props.handleRestart} />
	}
}

GameContainer.propTypes = {
	handleRestart: PropTypes.func,
}

import { Component } from 'react'
import PropTypes from 'prop-types'
import { Information, Field } from '../components/index.js'

export class GameLayout extends Component {
	render() {
		return (
			<article>
				<Information />
				<Field />
				<button
					className={
						'border-black border-2 border-solid bg-gray-300 rounded mt-10 px-2'
					}
					onClick={this.props.handleRestart}
				>
					Начать заново
				</button>
			</article>
		)
	}
}

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
}

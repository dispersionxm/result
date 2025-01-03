import { connect } from 'react-redux'
import { InformationContainer } from './information-container.jsx'

const mapStateToProps = state => ({
	status: state.status,
	currentPlayer: state.currentPlayer,
})

export const Information = connect(mapStateToProps)(InformationContainer)

import { connect } from 'react-redux'
import { FieldContainer } from './field-container.jsx'
import { changeCurrentPlayer, changeStatus, updateField } from '../../actions'

const mapStateToProps = state => ({
	field: state.field,
	status: state.status,
	currentPlayer: state.currentPlayer,
})

const mapDispatchToProps = dispatch => ({
	dispatch,
	updateField: field => dispatch(updateField(field)),
	changeStatus: status => dispatch(changeStatus(status)),
	changeCurrentPlayer: player => dispatch(changeCurrentPlayer(player)),
})

export const Field = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FieldContainer)

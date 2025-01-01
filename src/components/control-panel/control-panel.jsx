import { connect /*useDispatch*/ } from 'react-redux'
import { increaseAge, RESET_AGE } from '../../actions'
import { changeUser } from '../../actions/change-user.js'

export const ControlPanelContainer = ({
	onAgeIncrease,
	onAgeReset,
	onUserChange,
}) => {
	// const dispatch = useDispatch()

	return (
		<article>
			<button onClick={onAgeIncrease}>Увеличить возраст</button>
			<button onClick={onAgeReset}>Сбросить возраст</button>
			<button onClick={onUserChange}>Сменить пользователя</button>
		</article>
	)
}

const mapDispatchToProp = dispatch => ({
	onAgeIncrease: () => dispatch(increaseAge(5)),

	onAgeReset: () => dispatch(RESET_AGE),

	onUserChange: () => dispatch(changeUser()),
})

export const ControlPanel = connect(
	null,
	mapDispatchToProp,
)(ControlPanelContainer)

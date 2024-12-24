import { useDispatch } from 'react-redux'
import { increaseAge, RESET_AGE } from '../../actions'
import { changeUser } from '../../actions/change-user.js'

export const ControlPanel = () => {
	const dispatch = useDispatch()

	const onAgeIncrease = () => {
		dispatch(increaseAge(5))
	}

	const onAgeReset = () => {
		dispatch(RESET_AGE)
	}

	const onUSerChange = () => {
		dispatch(changeUser())
	}

	return (
		<article>
			<button onClick={onAgeIncrease}>Увеличить возраст</button>
			<button onClick={onAgeReset}>Сбросить возраст</button>
			<button onClick={onUSerChange}>Сменить пользователя</button>
		</article>
	)
}

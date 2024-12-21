import { store } from '@/store'

export const UserPersonalInfo = () => {
	const { name, age } = store.getState()
	const { dispatch } = store

	const onUserUpdate = () => {
		const { name, email, phone } = store.getState()
		const newUserData = { name, age: 30, email, phone }
		dispatch({ type: 'SET_USER_DATA', payload: newUserData })
	}

	const onUserAgeDecrease = () => {
		dispatch({ type: 'SET_USER_AGE', payload: 15 })
	}

	return (
		<div>
			<h3>Персональные данные: </h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Update User...</button>
			<button onClick={onUserAgeDecrease}>Decrease User age...</button>
		</div>
	)
}

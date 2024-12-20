import { useEffect, useReducer } from 'react'
import { AppContext } from './context.jsx'
import { Header, UserBlock } from './components'
import classes from './app.module.css'

const getUserFromServer = () => ({
	id: '001',
	name: 'Ivan',
	age: 23,
	email: 'ivan@ivanovich.com',
	phone: '+998 99 999 99 99',
})

const getAnotherUserFromServer = () => ({
	id: '001',
	name: 'Lexa',
	age: 23,
	email: 'ivan@ivanovich.com',
	phone: '+998 99 999 99 99',
})

const reducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_USER_DATA': {
			return payload
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			}
		}
		default:
			return state
	}
}

export const App = () => {
	const [userData, dispatch] = useReducer(reducer, {})

	useEffect(() => {
		const userDataFromServer = getUserFromServer()

		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer })
	}, [])

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer()

		dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer })
	}

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={classes.app}>
				<Header />
				<hr />

				<UserBlock />

				<button onClick={onUserChange}>change user</button>
			</div>
		</AppContext.Provider>
	)
}

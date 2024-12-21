import { useEffect } from 'react'
import { Header, UserBlock } from './components'
import { store } from './store.js'
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

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer()

		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer })
	}, [])

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer()

		store.dispatch({
			type: 'SET_USER_DATA',
			payload: anotherUserDataFromServer,
		})
	}

	return (
		<div className={classes.app}>
			<Header />
			<hr />

			<UserBlock />

			<button onClick={onUserChange}>change user</button>
		</div>
	)
}

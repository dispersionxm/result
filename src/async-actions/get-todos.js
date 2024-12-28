import { setLoading, setTodos } from '../actions'

export const getTodos = () => dispatch => {
	dispatch(setLoading(true))
	return fetch('http://localhost:4242/todos')
		.then(response => response.json())
		.then(loadedTodos => dispatch(setTodos(loadedTodos)))
		.catch(error => console.error(error))
		.finally(() => {
			dispatch(setLoading(false))
		})
}

import {
	setError,
	setLoading,
	setNewTodoValue,
	setActiveModalIdAction,
	setModalActive,
} from '../actions/index.js'

export const addTodo = title => dispatch => {
	dispatch(setLoading(true))

	return fetch('http://localhost:4242/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title,
		}),
	})
		.then(response => {
			if (!response.ok) {
				dispatch(setError('Ошибка при отправке'))
			}
			return response.json()
		})
		.then(() => {
			dispatch(setNewTodoValue(''))
			dispatch(setActiveModalIdAction(null))
			dispatch(setModalActive(false))
		})
		.catch(() => {
			alert('Не удалось добавить задачу. Попробуйте снова.')
			dispatch(setError('Не удалось добавить задачу. Попробуйте снова.'))
		})
		.finally(() => dispatch(setLoading(false)))
}

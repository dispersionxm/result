import { setError, setLoading } from '../actions/index.js'

export const deleteTodo = id => dispatch => {
	dispatch(setLoading(true))

	return fetch(`http://localhost:4242/todos/${id}`, {
		method: 'Delete',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
	})
		.then(response => {
			if (!response.ok) {
				dispatch(setError('Ошибка при удалении'))
			}
		})
		.catch(() => {
			alert('Не удалось удалить задачу. Попробуйте снова.')
			dispatch(setError('Не удалось удалить задачу. Попробуйте снова.'))
		})
		.finally(() => dispatch(setLoading(false)))
}

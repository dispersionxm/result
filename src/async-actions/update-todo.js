import {
	setActiveModalIdAction,
	setError,
	setLoading,
} from '../actions/index.js'

export const updateTodo = (id, content) => dispatch => {
	dispatch(setLoading(true))

	fetch(`http://localhost:4242/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: content,
		}),
	})
		.then(response => {
			if (!response.ok) {
				dispatch(setError('Ошибка при обновлении'))
			}
			dispatch(setActiveModalIdAction(null))
		})
		.catch(() => {
			alert('Не удалось обновить задачу. Попробуйте снова.')
			dispatch(setError('Не удалось обновить задачу. Попробуйте снова.'))
		})
		.finally(() => dispatch(setLoading(false)))
}

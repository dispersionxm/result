import { useState } from 'react'

export const useRequestPostServer = (
	refreshProducts,
	setRefreshProducts,
	setNewTodoValue,
	setActiveModalId,
) => {
	const [isCreating, setIsCreating] = useState(false)

	const handleCreate = title => {
		setIsCreating(true)
		fetch('http://localhost:4242/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
			}),
		})
			.then(response => {
				if (!response.ok) throw new Error('Ошибка при отправке')
				return response.json()
			})
			.then(() => {
				setNewTodoValue('')
				setActiveModalId(null)
				setRefreshProducts(!refreshProducts)
			})
			.catch(error => {
				console.error(error)
				alert('Не удалось добавить задачу. Попробуйте снова.')
			})
			.finally(setIsCreating(false))
	}

	return {
		isCreating,
		handleCreate,
	}
}

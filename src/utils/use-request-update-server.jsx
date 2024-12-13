import { useState } from 'react'

export const useRequestUpdateServer = (
	refreshProducts,
	setRefreshProducts,
	setActiveModalId,
) => {
	const [isUpdating, setIsUpdating] = useState(false)

	const handleUpdate = (id, content) => {
		setIsUpdating(true)

		fetch(`http://localhost:4242/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: content,
			}),
		})
			.then(response => {
				if (!response.ok) throw new Error('Ошибка при обновлении')
				setRefreshProducts(!refreshProducts)
				setActiveModalId(null)
			})
			.catch(error => {
				console.error(error)
				alert('Не удалось обновить задачу. Попробуйте снова.')
			})
			.finally(() => setIsUpdating(false))
	}

	return {
		isUpdating,
		handleUpdate,
	}
}

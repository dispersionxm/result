import { useState } from 'react'

export const useRequestDeleteServer = (refreshProducts, setRefreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false)

	const handleDelete = id => {
		setIsDeleting(true)
		fetch(`http://localhost:4242/todos/${id}`, {
			method: 'Delete',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
		})
			.then(response => {
				if (!response.ok) throw new Error('Ошибка при удалении')
				setRefreshProducts(!refreshProducts)
			})
			.catch(error => {
				console.error(error)
				alert('Не удалось удалить задачу. Попробуйте снова.')
			})
			.finally(() => setIsDeleting(false))
	}

	return {
		isDeleting,
		handleDelete,
	}
}

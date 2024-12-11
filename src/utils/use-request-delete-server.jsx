import { useState } from 'react'
import { ref, remove } from 'firebase/database'
import { db } from '../firebase'

export const useRequestDeleteServer = id => {
	const [isDeleting, setIsDeleting] = useState(false)

	const handleDelete = async () => {
		setIsDeleting(true)

		try {
			const deletingTodoDbRef = ref(db, `todos/${id}`)
			await remove(deletingTodoDbRef)
		} catch (error) {
			console.error('Ошибка при удалении:', error)
			alert('Не удалось удалить задачу. Попробуйте снова.')
		} finally {
			setIsDeleting(false)
		}
	}

	return {
		isDeleting,
		handleDelete,
	}
}

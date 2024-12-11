import { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../firebase'

export const useRequestUpdateServer = (id, setActiveModalId) => {
	const [isUpdating, setIsUpdating] = useState(false)

	const handleUpdate = async title => {
		setIsUpdating(true)
		try {
			const updatingTodoDbRef = ref(db, `todos/${id}`)
			await set(updatingTodoDbRef, {
				title,
			})
			setActiveModalId(null)
		} catch (error) {
			console.error('Ошибка при обновлении:', error)
			alert('Не удалось обновить задачу. Попробуйте снова.')
		} finally {
			setIsUpdating(false)
		}
	}

	return {
		isUpdating,
		handleUpdate,
	}
}

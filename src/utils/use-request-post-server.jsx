import { ref, push } from 'firebase/database'
import { db } from '../firebase'

export const useRequestPostServer = (
	setNewTodoValue,
	setModalActive,
	setIsLoading,
) => {
	const todosDbRef = ref(db, 'todos')

	const createTodo = title => {
		setIsLoading(true)

		push(todosDbRef, {
			title,
		})
			.then(() => {
				setNewTodoValue('')
				setModalActive(false)
			})
			.catch(error => {
				console.error('Ошибка при добавлении:', error)
				alert('Не удалось добавить заметку. Попробуйте снова.')
			})
			.finally(() => setIsLoading(false))
	}

	return { createTodo }
}

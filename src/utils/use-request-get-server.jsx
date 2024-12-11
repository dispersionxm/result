import { useState, useEffect } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase'

export const useRequestGetServer = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const todosDbRef = ref(db, 'todos')

		return onValue(todosDbRef, snapshot => {
			const todos = snapshot.val()
			const todosArray = todos
				? Object.entries(todos).map(([id, value]) => ({ id, ...value }))
				: []
			setTodos(todosArray || [])
		})
	}, [])

	return {
		todos,
	}
}

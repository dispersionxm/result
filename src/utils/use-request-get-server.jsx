import { useState, useEffect } from 'react'

export const useRequestGetServer = refreshProducts => {
	const [todos, setTodos] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetch('http://localhost:4242/todos')
			.then(response => response.json())
			.then(loadedTodos => {
				setTodos(loadedTodos)
			})
			.finally(() => setIsLoading(false))
	}, [refreshProducts])

	return {
		isLoading,
		todos,
	}
}

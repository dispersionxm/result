import { useEffect, useState } from 'react'
import classes from './app.module.css'

export const App = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(todosArray => setTodos(todosArray))
			.catch(error => console.error(error))
	}, [])

	return (
		<div className={classes.app}>
			<h1>Список задач</h1>
			<ol className={classes.todosList}>
				{todos.map(({ id, title }) => (
					<li key={id} className={classes.todosItem}>
						{title}
					</li>
				))}
			</ol>
		</div>
	)
}

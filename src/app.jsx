import { useEffect, useState } from 'react'
import { createTodo, readTodos, updateTodo, deleteTodo } from './api'
import {
	addTodoInTodos,
	findTodo,
	removeTodoInTodos,
	setTodoInTodos,
} from './utils/index.js'
import { ControlPanel, Todo } from './components/index.js'
import classes from './app.module.css'
import { NEW_TODO_ID } from './constants/index.js'

export const App = () => {
	const [todos, setTodos] = useState([])
	const [searchPhrase, setSearchPhrase] = useState('')
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false)

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then(loadedTodos =>
			setTodos(loadedTodos),
		)
	}, [searchPhrase, isAlphabetSorting])

	const onTodoEdit = id => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }))
	}

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }))
	}

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }))
		})
	}

	const onTodoAdd = () => {
		setTodos(addTodoInTodos(todos))
	}

	const onTodoSave = todoId => {
		const rawTodo = findTodo(todos, todoId) || {}
		const { title, completed } = Object.assign({}, ...rawTodo)

		if (todoId === NEW_TODO_ID) {
			createTodo({ title, completed }).then(todo => {
				let updatedTodos = addTodoInTodos(todos, {
					id: NEW_TODO_ID,
					isEditing: false,
				})

				updatedTodos = removeTodoInTodos(updatedTodos, NEW_TODO_ID)
				updatedTodos = addTodoInTodos(updatedTodos, todo)

				setTodos(updatedTodos)
			})
		} else {
			updateTodo({ id: todoId, title }).then(() => {
				setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false }))
			})
		}
	}

	const onTodoRemove = id => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)))
	}

	return (
		<div className={classes.app}>
			<ControlPanel
				onTodoAdd={onTodoAdd}
				onSearch={setSearchPhrase}
				onSorting={setIsAlphabetSorting}
			/>
			{todos.map(({ id, title, completed, isEditing = false }) => (
				<Todo
					key={id}
					id={id}
					title={title}
					completed={completed}
					isEditing={isEditing}
					onTitleChange={newTitle => onTodoTitleChange(id, newTitle)}
					onTodoCompletedChange={newCompleted =>
						onTodoCompletedChange(id, newCompleted)
					}
					onEdit={() => onTodoEdit(id)}
					onSave={() => onTodoSave(id)}
					onRemove={() => onTodoRemove(id)}
				/>
			))}
		</div>
	)
}

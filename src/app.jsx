import { useState, useEffect, useRef } from 'react'
import classes from './app.module.css'
import { Navigation, TodoList } from './components'
import { Modal } from './components/modal/modal.jsx'
import { useRequestGetServer, useRequestPostServer } from './utils'

export const App = () => {
	const [modalActive, setModalActive] = useState(false)
	const [activeModalId, setActiveModalId] = useState(null)
	const [newTodoValue, setNewTodoValue] = useState('')
	const [searchingInputValue, setSearchingInputValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const creationInputRef = useRef(null)

	const { todos } = useRequestGetServer()

	const { createTodo } = useRequestPostServer(
		setNewTodoValue,
		setModalActive,
		setIsLoading,
	)

	const filteredTodos = searchingInputValue
		? todos.filter(todo =>
				todo.title.toLowerCase().includes(searchingInputValue.toLowerCase()),
			)
		: todos

	useEffect(() => {
		if (modalActive && creationInputRef.current) {
			creationInputRef.current.focus()
		}
	}, [modalActive])

	return (
		<>
			<Navigation
				setModalActive={setModalActive}
				creationInputRef={creationInputRef}
				searchingInputValue={searchingInputValue}
				setSearchingInputValue={setSearchingInputValue}
			/>
			{isLoading ? (
				<div className={classes.loader}></div>
			) : filteredTodos.length === 0 ? (
				<div className={classes.noResults}>Ничего не найдено</div>
			) : (
				<TodoList
					todos={filteredTodos}
					isLoading={isLoading}
					activeModalId={activeModalId}
					setActiveModalId={setActiveModalId}
				/>
			)}
			<Modal active={modalActive} setActive={setModalActive}>
				<div className={classes.modalTitle}>Создать заметку</div>
				<form
					className={classes.creatingForm}
					onSubmit={event => {
						event.preventDefault()
						if (!newTodoValue.trim()) {
							alert('Задача не может быть пустой!')
							return null
						}
						createTodo(newTodoValue)
					}}
				>
					<label className={classes.modalLabel}>Введите заметку:</label>
					<input
						value={newTodoValue}
						onChange={event => setNewTodoValue(event.target.value)}
						ref={creationInputRef}
					/>
					<div className={classes.buttons}>
						<button type="submit">
							{isLoading ? 'Загрузка...' : 'Готово'}
						</button>
					</div>
				</form>
			</Modal>
		</>
	)
}

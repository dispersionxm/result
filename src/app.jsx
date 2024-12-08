import { useEffect, useState, useRef } from 'react'
import classes from './app.module.css'
import { Navigation, TodoList } from './components'
import { Modal } from './components/modal/modal.jsx'

export const App = () => {
	const [todos, setTodos] = useState([])
	const [modalActive, setModalActive] = useState(false)
	const [activeModalId, setActiveModalId] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [newTodoValue, setNewTodoValue] = useState('')
	const [searchingInputValue, setSearchingInputValue] = useState('')
	const [refreshProducts, setRefreshProducts] = useState(false)

	const creationInputRef = useRef(null)

	const filteredTodos = todos.filter(todo =>
		todo.title.toLowerCase().includes(searchingInputValue.toLowerCase()),
	)

	useEffect(() => {
		setIsLoading(true)
		fetch('http://localhost:4242/todos')
			.then(response => response.json())
			.then(loadedTodos => {
				setTodos(loadedTodos)
				console.log(loadedTodos)
			})
			.finally(() => setIsLoading(false))
	}, [refreshProducts])

	const requestPostServer = title => {
		setIsLoading(true)
		fetch('http://localhost:4242/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
			}),
		})
			.then(response => {
				if (!response.ok) throw new Error('Ошибка при отправке')
				return response.json()
			})
			.then(() => {
				console.log('servers answer')
				setNewTodoValue('')
				setModalActive(false)
				setRefreshProducts(!refreshProducts)
			})
			.catch(error => {
				console.error(error)
				alert('Не удалось добавить задачу. Попробуйте снова.')
			})
			.finally(setIsLoading(false))
	}

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
			) : (
				(filteredTodos.length === 0 && !isLoading && (
					<div className={classes.noResults}>Ничего не найдено</div>
				)) || (
					<TodoList
						todos={filteredTodos}
						refreshProducts={refreshProducts}
						setRefreshProducts={setRefreshProducts}
						isLoading={isLoading}
						activeModalId={activeModalId}
						setActiveModalId={setActiveModalId}
					/>
				)
			)}
			<Modal active={modalActive} setActive={setModalActive}>
				<div className={classes.modalTitle}>Создать заметку</div>
				<form
					className={classes.creatingForm}
					onSubmit={event => {
						event.preventDefault()
						requestPostServer(newTodoValue)
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

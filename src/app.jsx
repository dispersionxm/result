import { useEffect, useState } from 'react'
import classes from './app.module.css'
import { Navigation, TodoList } from './components'
import { Modal } from './components/modal/modal.jsx'

export const App = () => {
	const [modalActive, setModalActive] = useState(false)
	const [newTodoValue, setNewTodoValue] = useState('')
	const [todos, setTodos] = useState([])
	const [refreshProducts, setRefreshProducts] = useState(false)

	useEffect(() => {
		fetch('http://localhost:4242/todos')
			.then(response => response.json())
			.then(loadedTodos => setTodos(loadedTodos))
	}, [refreshProducts])

	const useRequestPostServer = event => {
		event.preventDefault()
		useEffect(() => {
			fetch('http://localhost:4242/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: newTodoValue,
				}),
			})
				.then(response => response.json())
				.then(() => {
					console.log('servers answer')
					setRefreshProducts(!refreshProducts)
				})
		}, [])
	}

	return (
		<>
			<Navigation setModalActive={setModalActive} />
			<TodoList todos={todos} />
			<Modal active={modalActive} setActive={setModalActive}>
				<div className={classes.modalTitle}>Создать заметку</div>
				<form className={classes.creatingForm} onSubmit={useRequestPostServer}>
					<label className={classes.modalLabel}>Введите заметку:</label>
					<input onChange={event => setNewTodoValue(event.target.value)} />
					<div className={classes.buttons}>
						<button type="submit">Готово</button>
					</div>
				</form>
			</Modal>
		</>
	)
}

import { useState, useRef } from 'react'
import { useRequestGetServer, useRequestPostServer } from '../../utils'
import { Navigation, TodoList, Modal } from '../../components'
import classes from './homePage.module.css'

export const HomePage = () => {
	const [modalActive, setModalActive] = useState(false)
	const [activeModalId, setActiveModalId] = useState(null)
	const [newTodoValue, setNewTodoValue] = useState('')
	const [searchingInputValue, setSearchingInputValue] = useState('')
	const [refreshProducts, setRefreshProducts] = useState(false)

	const creationInputRef = useRef(null)

	// get
	const { isLoading, todos } = useRequestGetServer(refreshProducts)

	// post
	const { isCreating, handleCreate } = useRequestPostServer(
		setNewTodoValue,
		setModalActive,
		refreshProducts,
		setRefreshProducts,
	)

	// filter
	const filteredTodos = todos.filter(todo =>
		todo.title.toLowerCase().includes(searchingInputValue.toLowerCase()),
	)

	return (
		<>
			<Navigation
				setModalActive={setModalActive}
				creationInputRef={creationInputRef}
				searchingInputValue={searchingInputValue}
				setSearchingInputValue={setSearchingInputValue}
			/>

			{isLoading && <div className={classes.loader}></div>}

			{!isLoading && filteredTodos.length === 0 && (
				<div className={classes.noResults}>Ничего не найдено</div>
			)}

			{!isLoading && filteredTodos.length > 0 && (
				<TodoList
					todos={filteredTodos}
					refreshProducts={refreshProducts}
					setRefreshProducts={setRefreshProducts}
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
						newTodoValue ? handleCreate(newTodoValue) : null
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
							{isCreating ? 'Загрузка...' : 'Готово'}
						</button>
					</div>
				</form>
			</Modal>
		</>
	)
}

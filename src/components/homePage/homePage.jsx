/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import { useRequestGetServer, useRequestPostServer } from '../../utils'
import { Navigation, TodoList, Modal, CreationForm } from '../../components'
import classes from './homePage.module.css'

export const HomePage = ({
	refreshProducts,
	setRefreshProducts,
	setActiveModalId,
}) => {
	const [modalActive, setModalActive] = useState(false)
	const [newTodoValue, setNewTodoValue] = useState('')
	const [searchingInputValue, setSearchingInputValue] = useState('')

	const creationInputRef = useRef(null)

	// get
	const { isLoading, todos } = useRequestGetServer(refreshProducts)

	// post
	const { isCreating, handleCreate } = useRequestPostServer(
		refreshProducts,
		setRefreshProducts,
		setNewTodoValue,
		setActiveModalId,
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
				<TodoList todos={filteredTodos} />
			)}

			<Modal active={modalActive} setActive={setModalActive}>
				<div className={classes.modalTitle}>Создать заметку</div>
				<CreationForm
					newTodoValue={newTodoValue}
					setNewTodoValue={setNewTodoValue}
					creationInputRef={creationInputRef}
					isCreating={isCreating}
					handleCreate={handleCreate}
					setModalActive={setModalActive}
				/>
			</Modal>
		</>
	)
}

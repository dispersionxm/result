import { useState, useRef, useEffect } from 'react'
import { useRequestGetServer, useRequestPostServer } from './utils'
import { Navigation, TodoList, Modal, CreationForm } from './components'
import { AppContext } from './contexts'
import classes from './app.module.css'

export const App = () => {
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
		refreshProducts,
		setRefreshProducts,
		setNewTodoValue,
		setModalActive,
	)

	// filter
	const filteredTodos = todos.filter(todo =>
		todo.title.toLowerCase().includes(searchingInputValue.toLowerCase()),
	)

	useEffect(() => {
		if (modalActive) {
			creationInputRef.current.focus()
		}
	}, [modalActive])

	return (
		<AppContext.Provider
			value={{
				refreshProducts,
				setRefreshProducts,
				modalActive,
				setModalActive,
				activeModalId,
				setActiveModalId,
				searchingInputValue,
				setSearchingInputValue,
				filteredTodos,
			}}
		>
			<Navigation />

			{isLoading && <div className={classes.loader}></div>}

			{!isLoading && filteredTodos.length === 0 && (
				<div className={classes.noResults}>Ничего не найдено</div>
			)}

			{!isLoading && filteredTodos.length > 0 && <TodoList />}

			<Modal active={modalActive} setActive={setModalActive}>
				<div className={classes.modalTitle}>Создать заметку</div>
				<CreationForm
					newTodoValue={newTodoValue}
					setNewTodoValue={setNewTodoValue}
					creationInputRef={creationInputRef}
					isCreating={isCreating}
					handleCreate={handleCreate}
				/>
			</Modal>
		</AppContext.Provider>
	)
}

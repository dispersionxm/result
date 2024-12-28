import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigation, TodoList, Modal, CreationForm } from '../../components'
import {
	selectTodos,
	selectIsLoading,
	selectSearchingInput,
	selectIsModalActive,
} from '../../selectors'
import { getTodos } from '../../async-actions/index.js'
import { filterTodos, useSetModalActive } from '../../utils/index.js'
import classes from './homePage.module.css'
import { store } from '../../store.js'

export const HomePage = () => {
	const dispatch = useDispatch()
	const todos = useSelector(selectTodos)
	const searchingInputValue = useSelector(selectSearchingInput)
	const isLoading = useSelector(selectIsLoading)
	const modalActive = useSelector(selectIsModalActive)
	const setModalActive = useSetModalActive()

	const creationInputRef = useRef(null)

	// focus on creation
	useEffect(() => {
		if (modalActive) {
			creationInputRef.current.focus()
		}
	}, [modalActive])

	// initialization
	useEffect(() => {
		dispatch(getTodos())
	}, [dispatch, todos])

	// filter
	const filteredTodos = filterTodos(todos, searchingInputValue)

	return (
		<>
			<Navigation creationInputRef={creationInputRef} />

			{isLoading && <div className={classes.loader}></div>}

			{!isLoading && filteredTodos.length === 0 && (
				<div className={classes.noResults}>Ничего не найдено</div>
			)}

			{!isLoading && filteredTodos.length > 0 && (
				<TodoList todos={filteredTodos} />
			)}

			<Modal active={modalActive} setActive={setModalActive}>
				<div className={classes.modalTitle}>Создать заметку</div>
				<CreationForm creationInputRef={creationInputRef} />
			</Modal>
		</>
	)
}

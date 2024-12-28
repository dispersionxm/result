import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../async-actions/add-todo.js'
import { selectNewTodoValue, selectIsLoading } from '../../selectors'
import { setNewTodoValue } from '../../actions/index.js'
import { useSetModalActive } from '../../utils/index.js'
import classes from './creationForm.module.css'

// eslint-disable-next-line react/prop-types
export const CreationForm = ({ creationInputRef }) => {
	const dispatch = useDispatch()
	const newTodoValue = useSelector(selectNewTodoValue)
	const isLoading = useSelector(selectIsLoading)

	const setModalActive = useSetModalActive()

	const handleChange = event => dispatch(setNewTodoValue(event.target.value))

	return (
		<form
			className={classes.creatingForm}
			onSubmit={event => {
				event.preventDefault()
				newTodoValue
					? dispatch(addTodo(newTodoValue))
					: alert('Поле не должно быть пустым!')
				setModalActive(false)
			}}
		>
			<label className={classes.modalLabel}>Введите заметку:</label>
			<input
				value={newTodoValue}
				onChange={handleChange}
				ref={creationInputRef}
			/>
			<div className={classes.buttons}>
				<button type="submit">{isLoading ? 'Загрузка...' : 'Готово'}</button>
			</div>
		</form>
	)
}

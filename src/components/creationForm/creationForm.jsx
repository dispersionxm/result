/* eslint-disable react/prop-types */
import classes from './creationForm.module.css'

export const CreationForm = ({
	newTodoValue,
	setNewTodoValue,
	setModalActive,
	creationInputRef,
	isCreating,
	handleCreate,
}) => {
	return (
		<form
			className={classes.creatingForm}
			onSubmit={event => {
				event.preventDefault()
				newTodoValue
					? handleCreate(newTodoValue)
					: alert('Поле не должно быть пустым!')
				setModalActive(false)
			}}
		>
			<label className={classes.modalLabel}>Введите заметку:</label>
			<input
				value={newTodoValue}
				onChange={event => setNewTodoValue(event.target.value)}
				ref={creationInputRef}
			/>
			<div className={classes.buttons}>
				<button type="submit">{isCreating ? 'Загрузка...' : 'Готово'}</button>
			</div>
		</form>
	)
}

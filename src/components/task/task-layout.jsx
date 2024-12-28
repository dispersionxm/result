import { setActiveModalIdAction } from '../../actions/index.js'
import editIcon from '../icons/edit-icon.svg'
import { deleteTodo, updateTodo } from '../../async-actions/index.js'
import deleteIcon from '../icons/delete-icon.svg'
import { Modal } from '../modal/modal.jsx'
import classes from './task.module.css'

export const TaskLayout = ({
	content,
	setContent,
	isLoading,
	onGoBackButtonClick,
	id,
	dispatch,
	activeModalId,
	setActiveModalId,
	navigate,
}) => (
	<>
		<button className={classes.goBackButton} onClick={onGoBackButtonClick}>
			Go Back
		</button>

		<div className={classes.todoListItem}>
			<div className={classes.todoItemContent}>{content}</div>

			<div className={classes.todoItemButtons}>
				<button
					className={classes.todoItemNavButton}
					onClick={() => {
						dispatch(setActiveModalIdAction(id))
					}}
					disabled={isLoading}
				>
					<img src={`${editIcon}`} alt="" title="Редактировать..." />
				</button>
				<button
					className={classes.todoItemNavButton}
					onClick={() => {
						dispatch(deleteTodo(id))
						navigate(-1)
					}}
					disabled={isLoading}
				>
					<img
						src={`${deleteIcon}`}
						alt=""
						title={isLoading ? 'Удаляется...' : 'Удалить..'}
					/>
				</button>
			</div>
		</div>
		<Modal active={activeModalId === id} setActive={setActiveModalId}>
			<div className={classes.modalTitle}>Обновить заметку</div>
			<form
				className={classes.creatingForm}
				onSubmit={event => {
					event.preventDefault()
					dispatch(updateTodo(id, content))
				}}
			>
				<label className={classes.modalLabel}>Введите заметку:</label>
				<input
					value={content}
					onChange={event => setContent(event.target.value)}
				/>
				<div className={classes.buttons}>
					<button type="submit">
						{isLoading ? 'Обновление...' : 'Готово'}
					</button>
				</div>
			</form>
		</Modal>
	</>
)

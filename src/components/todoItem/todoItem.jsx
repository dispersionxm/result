/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useRequestUpdateServer, useRequestDeleteServer } from '../../utils'
import { Modal } from '../modal/modal'
import classes from './todoItem.module.css'
import editIcon from '../icons/edit-icon.svg'
import deleteIcon from '../icons/delete-icon.svg'

export const TodoItem = ({
	id,
	title,
	refreshProducts,
	setRefreshProducts,
	activeModalId,
	setActiveModalId,
}) => {
	const [content, setContent] = useState(title)

	const { isUpdating, handleUpdate } = useRequestUpdateServer(
		refreshProducts,
		setRefreshProducts,
		setActiveModalId,
	)

	const { isDeleting, handleDelete } = useRequestDeleteServer(
		refreshProducts,
		setRefreshProducts,
	)

	const handleBackgroundClick = event => {
		if (event.target === event.currentTarget) setActiveModalId(null)
	}

	return (
		<li key={id} className={classes.todoListItem}>
			<div className="todoItemContent">{content}</div>

			<div className={classes.todoItemButtons}>
				<button
					className={classes.todoItemNavButton}
					onClick={() => {
						setActiveModalId(id)
					}}
					disabled={isUpdating}
				>
					<img src={`${editIcon}`} alt="" title="Редактировать..." />
				</button>
				<button
					className={classes.todoItemNavButton}
					onClick={() => handleDelete(id)}
					disabled={isDeleting}
				>
					<img
						src={`${deleteIcon}`}
						alt=""
						title={isDeleting ? 'Удаляется...' : 'Удалить..'}
					/>
				</button>
			</div>

			<Modal
				active={activeModalId === id}
				setActive={() => setActiveModalId(null)}
			>
				<div className={classes.modalTitle} onClick={handleBackgroundClick}>
					Обновить заметку
				</div>
				<form
					className={classes.creatingForm}
					onSubmit={event => {
						event.preventDefault()
						handleUpdate(id, content)
					}}
				>
					<label className={classes.modalLabel}>Введите заметку:</label>
					<input
						value={content}
						onChange={event => setContent(event.target.value)}
					/>
					<div className={classes.buttons}>
						<button type="submit">
							{isUpdating ? 'Обновление...' : 'Готово'}
						</button>
					</div>
				</form>
			</Modal>
		</li>
	)
}

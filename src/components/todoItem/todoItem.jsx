/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react'
import { Modal } from '../modal/modal'
import { useRequestUpdateServer, useRequestDeleteServer } from '../../utils'
import classes from './todoItem.module.css'
import editIcon from '../icons/edit-icon.svg'
import deleteIcon from '../icons/delete-icon.svg'

export const TodoItem = ({ id, title, activeModalId, setActiveModalId }) => {
	const [content, setContent] = useState(title)

	const { isUpdating, handleUpdate } = useRequestUpdateServer(
		id,
		setActiveModalId,
	)

	const { isDeleting, handleDelete } = useRequestDeleteServer(id)

	const updatingInputRef = useRef(null)

	useEffect(() => {
		if (activeModalId !== null && updatingInputRef.current) {
			updatingInputRef.current.focus()
		}
	}, [activeModalId])

	const handleBackgroundClick = event => {
		if (event.target === event.currentTarget) {
			setActiveModalId(null)
		}
	}

	return (
		<li key={id} className={classes.todoListItem}>
			<div className="todoItemContent">
				<span>{content}</span>
			</div>

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
					onClick={handleDelete}
					disabled={isDeleting}
				>
					<img src={`${deleteIcon}`} alt="" title="Удалить..." />
				</button>
			</div>

			<Modal
				active={activeModalId === id}
				setActive={() => {
					setActiveModalId(null)
					setContent(title)
				}}
			>
				<div className={classes.modalTitle} onClick={handleBackgroundClick}>
					Обновить заметку
				</div>
				<form
					className={classes.creatingForm}
					onSubmit={event => {
						event.preventDefault()
						handleUpdate(content)
						setActiveModalId(null)
					}}
				>
					<label className={classes.modalLabel}>Введите заметку:</label>
					<input
						value={content}
						onChange={event => setContent(event.target.value)}
						ref={updatingInputRef}
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

/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react'
import { useRequestUpdateServer, useRequestDeleteServer } from '../../utils'
import { Modal } from '../modal/modal'
import { AppContext } from '../../contexts/index.js'
import classes from './todoItem.module.css'
import editIcon from '../icons/edit-icon.svg'
import deleteIcon from '../icons/delete-icon.svg'

export const TodoItem = ({ id, title }) => {
	const [content, setContent] = useState(title)
	const [tempContent, setTempContent] = useState(title)
	const {
		refreshProducts,
		setRefreshProducts,
		activeModalId,
		setActiveModalId,
	} = useContext(AppContext)

	const updatingInputRef = useRef(null)

	const { isUpdating, handleUpdate } = useRequestUpdateServer(
		refreshProducts,
		setRefreshProducts,
		setActiveModalId,
	)

	const { isDeleting, handleDelete } = useRequestDeleteServer(
		refreshProducts,
		setRefreshProducts,
	)

	useEffect(() => {
		if (activeModalId === id) {
			updatingInputRef.current.focus()
			setTempContent(content)
		}
	}, [activeModalId, id, content])

	const handleCloseModal = () => {
		setActiveModalId(null)
		setTempContent(content)
	}

	const handleFormSubmit = event => {
		event.preventDefault()
		setContent(tempContent)
		handleUpdate(id, tempContent)
		handleCloseModal()
	}

	return (
		<li key={id} className={classes.todoListItem}>
			<div className={classes.todoItemContent}>
				<span>{content}</span>
			</div>

			<div className={classes.todoItemButtons}>
				<button
					className={classes.todoItemNavButton}
					onClick={() => setActiveModalId(id)}
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

			<Modal active={activeModalId === id} setActive={handleCloseModal}>
				<div className={classes.modalTitle}>Обновить заметку</div>
				<form className={classes.creatingForm} onSubmit={handleFormSubmit}>
					<label className={classes.modalLabel}>Введите заметку:</label>
					<input
						value={tempContent} // Используем временное состояние для отображения в input
						ref={updatingInputRef}
						onChange={event => setTempContent(event.target.value)}
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

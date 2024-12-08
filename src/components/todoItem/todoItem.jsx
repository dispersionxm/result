/* eslint-disable react/prop-types */
import classes from './todoItem.module.css'
import editIcon from '../icons/edit-icon.svg'
import deleteIcon from '../icons/delete-icon.svg'
import { useState, useRef } from 'react'
import { Modal } from '../modal/modal'

export const TodoItem = ({
	id,
	title,
	refreshProducts,
	setRefreshProducts,
	activeModalId,
	setActiveModalId,
}) => {
	const [content, setContent] = useState(title)
	const [modalActive, setModalActive] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const [isUpdating, setIsUpdating] = useState(false)

	const handleDelete = () => {
		setIsDeleting(true)
		fetch(`http://localhost:4242/todos/${id}`, {
			method: 'Delete',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
		})
			.then(response => {
				if (!response.ok) throw new Error('Ошибка при удалении')
				setRefreshProducts(!refreshProducts)
			})
			.catch(error => {
				console.error(error)
				alert('Не удалось удалить задачу. Попробуйте снова.')
			})
			.finally(() => setIsDeleting(false))
	}

	const handleUpdate = () => {
		setIsUpdating(true)

		fetch(`http://localhost:4242/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: content,
			}),
		})
			.then(response => {
				if (!response.ok) throw new Error('Ошибка при обновлении')
				setRefreshProducts(!refreshProducts)
				setActiveModalId(null)
			})
			.catch(error => {
				console.error(error)
				alert('Не удалось обновить задачу. Попробуйте снова.')
			})
			.finally(() => setIsUpdating(false))
	}

	const handleBackgroundClick = event => {
		if (event.target === event.currentTarget) setModalActive(false)
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
				setActive={() => setActiveModalId(null)}
			>
				<div className={classes.modalTitle} onClick={handleBackgroundClick}>
					Обновить заметку
				</div>
				<form
					className={classes.creatingForm}
					onSubmit={event => {
						event.preventDefault()
						handleUpdate()
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

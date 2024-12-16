/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useRequestUpdateServer, useRequestDeleteServer } from '../../utils'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal } from '../../components'
import classes from './task.module.css'
import editIcon from '../icons/edit-icon.svg'
import deleteIcon from '../icons/delete-icon.svg'

const LOADING_TIMEOUT = 5000

export const Task = ({
	refreshProducts,
	setRefreshProducts,
	activeModalId,
	setActiveModalId,
}) => {
	const [content, setContent] = useState('')

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		let isLoadingTimeout = false
		let isProductLoaded = false

		setTimeout(() => {
			isLoadingTimeout = true

			if (!isProductLoaded) {
				navigate('/todo-loaded-error', { replace: true })
			}
		}, LOADING_TIMEOUT)

		fetch(`http://localhost:4242/todos/${id}`)
			.then(response => response.json())
			.then(todo => {
				isProductLoaded = true

				if (!isLoadingTimeout) {
					if (todo.title === undefined) {
						navigate('/todo-not-exist')
					}
					setContent(todo.title)
				}
			})
			.catch(error => {
				console.error(error)
			})
	}, [id, navigate])

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

	const onGoBackButtonClick = () => {
		navigate(-1)
	}

	return (
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
							setActiveModalId(id)
						}}
						disabled={isUpdating}
					>
						<img src={`${editIcon}`} alt="" title="Редактировать..." />
					</button>
					<button
						className={classes.todoItemNavButton}
						onClick={() => {
							handleDelete(id)
							navigate(-1)
						}}
						disabled={isDeleting}
					>
						<img
							src={`${deleteIcon}`}
							alt=""
							title={isDeleting ? 'Удаляется...' : 'Удалить..'}
						/>
					</button>
				</div>
			</div>
			<Modal active={activeModalId === id} setActive={setActiveModalId}>
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
		</>
	)
}

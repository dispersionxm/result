import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveModalId, selectIsLoading } from '../../selectors/index.js'
import { useSetActiveModalId } from '../../utils/index.js'
import { TaskLayout } from './task-layout.jsx'

const LOADING_TIMEOUT = 5000

export const Task = () => {
	const [content, setContent] = useState('')

	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)

	const activeModalId = useSelector(selectActiveModalId)
	const setActiveModalId = useSetActiveModalId()

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

	const onGoBackButtonClick = () => {
		navigate(-1)
	}

	return (
		<TaskLayout
			content={content}
			setContent={setContent}
			isLoading={isLoading}
			onGoBackButtonClick={onGoBackButtonClick}
			id={id}
			dispatch={dispatch}
			activeModalId={activeModalId}
			setActiveModalId={setActiveModalId}
			navigate={navigate}
		/>
	)
}

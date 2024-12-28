import { setActiveModalIdAction } from '../actions/index.js'
import { useDispatch } from 'react-redux'

export const useSetActiveModalId = () => {
	const dispatch = useDispatch()

	return value => {
		dispatch(setActiveModalIdAction(value))
	}
}

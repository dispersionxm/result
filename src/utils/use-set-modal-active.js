import { setModalActive } from '../actions/index.js'
import { useDispatch } from 'react-redux'

export const useSetModalActive = () => {
	const dispatch = useDispatch()

	return value => {
		dispatch(setModalActive(value))
	}
}

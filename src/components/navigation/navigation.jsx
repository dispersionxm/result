/* eslint-disable react/prop-types */
import { NavigationLayout } from './navigationLayout.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setModalActive, setSearchingInput } from '../../actions'
import { selectSearchingInput } from '../../selectors'

export const Navigation = ({ creationInputRef }) => {
	const dispatch = useDispatch()
	const searchingInputValue = useSelector(selectSearchingInput)

	const modalActive = value => {
		dispatch(setModalActive(value))
	}

	const setSearchingInputValue = value => {
		dispatch(setSearchingInput(value))
	}

	return (
		<NavigationLayout
			searchingInputValue={searchingInputValue}
			setSearchingInputValue={setSearchingInputValue}
			modalActive={modalActive}
			creationInputRef={creationInputRef}
		/>
	)
}

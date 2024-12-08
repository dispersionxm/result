/* eslint-disable react/prop-types */
import { NavigationLayout } from './navigationLayout.jsx'

export const Navigation = ({
	setModalActive,
	creationInputRef,
	searchingInputValue,
	setSearchingInputValue,
}) => {
	return (
		<NavigationLayout
			searchingInputValue={searchingInputValue}
			setSearchingInputValue={setSearchingInputValue}
			setModalActive={setModalActive}
			creationInputRef={creationInputRef}
		/>
	)
}

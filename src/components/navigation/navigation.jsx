import { useState } from 'react'
import { NavigationLayout } from './navigationLayout.jsx'

export const Navigation = ({ setModalActive }) => {
	const [inputValue, setInputValue] = useState('')

	return (
		<NavigationLayout
			inputValue={inputValue}
			setInputValue={setInputValue}
			setModalActive={setModalActive}
		/>
	)
}

import { useContext } from 'react'
import { AppContext } from '../../../../context.jsx'

export const CurrentUser = () => {
	const { name } = useContext(AppContext)

	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	)
}

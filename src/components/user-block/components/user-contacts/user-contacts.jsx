import { useContext } from 'react'
import { AppContext } from '../../../../context.jsx'

export const UserContacts = () => {
	const { email, phone } = useContext(AppContext)

	return (
		<div>
			<h3>Контакты:</h3>
			<div>Почта: {email}</div>
			<div>Номер: {phone}</div>
		</div>
	)
}

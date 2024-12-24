import { useSelector } from 'react-redux'
import { selectField } from '../../selectors'
import { FieldLayout } from './field-layout.jsx'
import { useHandleCellClick } from '../../handlers/index.js'

export const Field = () => {
	const field = useSelector(selectField)
	const handleCellClick = useHandleCellClick()

	return <FieldLayout field={field} handleCellClick={handleCellClick} />
}

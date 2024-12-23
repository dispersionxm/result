import { store } from '../../store.js'
import { FieldLayout } from './field-layout.jsx'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export const Field = ({ handleCellClick }) => {
	const [field, setField] = useState(store.getState().field)

	useEffect(() => {
		return store.subscribe(() => {
			const currentState = store.getState()
			setField(currentState.field)
		})
	}, [])

	return <FieldLayout field={field} handleCellClick={handleCellClick} />
}

Field.propTypes = {
	handleCellClick: PropTypes.func,
}

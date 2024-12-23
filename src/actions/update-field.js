export const UPDATE_FIELD = 'UPDATE_FIELD'

export const updateField = newField => ({
	type: UPDATE_FIELD,
	payload: newField,
})

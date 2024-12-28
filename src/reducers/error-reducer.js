export const initialError = {
	error: '',
}

export const errorReducer = (state = initialError, action) => {
	switch (action.type) {
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}

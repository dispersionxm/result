export const initialLoading = {
	isLoading: false,
}

export const loadingReducer = (state = initialLoading, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}

		default:
			return state
	}
}

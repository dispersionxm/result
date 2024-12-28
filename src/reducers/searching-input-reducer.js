export const initialSearchingInput = {
	value: '',
}

export const searchingInputReducer = (
	state = initialSearchingInput,
	action,
) => {
	switch (action.type) {
		case 'SET_SEARCHING_INPUT_VALUE':
			return {
				...initialSearchingInput,
				value: action.payload,
			}

		case 'RESET_SEARCHING_INPUT_VALUE':
			return {
				...initialSearchingInput,
			}

		default:
			return state
	}
}

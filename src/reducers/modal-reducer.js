export const initialModal = {
	isModalActive: false,
	activeModalId: null,
}

export const modalReducer = (state = initialModal, action) => {
	switch (action.type) {
		case 'SET_MODAL_ACTIVE':
			return {
				...state,
				isModalActive: action.payload,
			}

		case 'SET_ACTIVE_MODAL_ID':
			return {
				...state,
				activeModalId: action.payload,
			}

		default:
			return state
	}
}

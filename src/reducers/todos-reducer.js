export const initialTodos = {
	todos: [],
}

export const todosReducer = (state = initialTodos, action) => {
	switch (action.type) {
		case 'SET_TODOS':
			return {
				...state,
				todos: action.payload,
			}

		case 'GET_TODOS':
			return state

		default:
			return state
	}
}

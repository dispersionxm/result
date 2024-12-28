export const initialTodo = {
	newTodoValue: '',
}

export const newTodoReducer = (state = initialTodo, action) => {
	switch (action.type) {
		case 'SET_NEW_TODO_VALUE':
			return {
				...state,
				newTodoValue: action.payload,
			}

		default:
			return state
	}
}

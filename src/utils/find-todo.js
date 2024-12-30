export const findTodo = (todos, todoId) =>
	todos.filter(({ id }) => id === todoId)

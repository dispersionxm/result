export const filterTodos = (todos, searchingInputValue) =>
	todos.filter(todo =>
		todo.title.toLowerCase().includes(searchingInputValue.toLowerCase()),
	)

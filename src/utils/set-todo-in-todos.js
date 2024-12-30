export const setTodoInTodos = (todos, newTodoData) =>
	todos.map(todo => {
		return todo.id === newTodoData.id
			? {
					...todo,
					...newTodoData,
				}
			: todo
	})

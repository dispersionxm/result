import { getTodos } from '../async-actions'

export const handleUpdateTodos = () => dispatch => {
	dispatch(getTodos())
}

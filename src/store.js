import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from 'redux'
import { thunk } from 'redux-thunk'
import {
	modalReducer,
	newTodoReducer,
	loadingReducer,
	errorReducer,
	searchingInputReducer,
	todosReducer,
} from './reducers'

const reducer = combineReducers({
	modal: modalReducer,
	newTodo: newTodoReducer,
	loading: loadingReducer,
	todos: todosReducer,
	error: errorReducer,
	searchingInput: searchingInputReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
)

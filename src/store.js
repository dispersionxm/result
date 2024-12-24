import { createStore, compose } from 'redux'
import { gameReducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(gameReducer, composeEnhancers())

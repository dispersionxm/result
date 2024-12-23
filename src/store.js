import { legacy_createStore as createStore } from 'redux'
import { gameReducer } from './reducers'

export let store = createStore(gameReducer)

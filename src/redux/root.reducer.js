import { combineReducers } from 'redux'
import { popularReducer } from './Popular/popular.reducer'

export const rootReducer = combineReducers({
	popularReducer,
})

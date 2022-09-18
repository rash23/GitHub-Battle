import { combineReducers } from 'redux'
import { popularReducer } from './Popular/popular.reducer'
import { battleReducer } from './Battle/battle.reducer'

export const rootReducer = combineReducers({
	popularReducer,
	battleReducer,
})

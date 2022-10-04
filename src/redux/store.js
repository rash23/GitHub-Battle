import { configureStore } from '@reduxjs/toolkit'
import popularSlice  from "./Popular/popular.slice"
import battleSlice from './Battle/battle.slice'
import thunk from 'redux-thunk'

export const store = configureStore({
	reducer: {
		battle: battleSlice,
		popular: popularSlice,
	},
	middleware: [thunk],
})

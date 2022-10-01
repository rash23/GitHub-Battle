import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import store from 'src/redux/store'

export type RootState = ReturnType<typeof store.getState>
export type addDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

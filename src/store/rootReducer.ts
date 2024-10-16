import { combineReducers } from 'redux'
import tableSlice from './slice/bookingSlice'

export const rootReducer = combineReducers({
    table: tableSlice,
})

export type RootState = ReturnType<typeof rootReducer>
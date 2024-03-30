import { configureStore } from '@reduxjs/toolkit'
import listReducer from '../features/list/listSlice'
import renameListModalWindowReducer from '../features/renameListModalWindow/renameListModalWindow'

export const store = configureStore({
  reducer: {
    list: listReducer,
    renameListModalWindow: renameListModalWindowReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
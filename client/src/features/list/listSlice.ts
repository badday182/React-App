import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IlistState {
    
    id: number | null,
    title: string | null,
  }
const initialState: IlistState = {
  id: null,
  title: null,
}

export const listSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    takeId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    resetId: (state) => {
      state.id = null
    },
    takeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { takeId, takeTitle,resetId } = listSlice.actions

export default listSlice.reducer
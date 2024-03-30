import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IrenameListModalWindowSlice {
    
    isVisible: boolean | null
   
  }
const initialState: IrenameListModalWindowSlice = {
    isVisible: false,
    // isVisible: true,
 
}

export const renameListModalWindowSlice = createSlice({
  name: 'isVisible',
  initialState,
  reducers: {
   
    changeVisibility: (state) => {
      state.isVisible = !state.isVisible
    }

    
  },
})

// Action creators are generated for each case reducer function
export const { changeVisibility } = renameListModalWindowSlice.actions

export default renameListModalWindowSlice.reducer
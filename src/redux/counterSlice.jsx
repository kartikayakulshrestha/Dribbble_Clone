import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    email: "",
  },
  reducers: {
    
    theemail: (state,action)=>{
        state.email= action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { theemail } = counterSlice.actions

export default counterSlice.reducer
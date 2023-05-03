import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    persons:[]
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      
      state.value = state.value >action.payload
      ?state.value-action.payload
      :0;
    },
    addPerson: (state,action)=>{
       state.persons=[action.payload,...state.persons]
       
    }
    
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement,addPerson} = counterSlice.actions

export default counterSlice.reducer
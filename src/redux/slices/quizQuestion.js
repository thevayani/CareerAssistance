import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        question : [],            //state
    },
    reducers: {
        setquestion:(state,action)=>{
        state.question = action.payload
       }
    },
})


// Action creators are generated for each case reducer function
export const { setquestion } = questionSlice.actions

export default questionSlice.reducer
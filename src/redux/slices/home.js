import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        userProfile : [], 
        userGoal :[]           
    },
    reducers: {
        setUserProfile:(state,action)=>{
        state.userProfile = action.payload
       },
       setUserGoal:(state,action)=>{
        state.userGoal = action.payload
       }
    },
})


// Action creators are generated for each case reducer function
export const { setUserProfile,setUserGoal } = homeSlice.actions

export default homeSlice.reducer
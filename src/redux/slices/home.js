import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        userProfile : [],            
    },
    reducers: {
        setUserProfile:(state,action)=>{
        state.userProfile = action.payload
       }
    },
})


// Action creators are generated for each case reducer function
export const { setUserProfile } = homeSlice.actions

export default homeSlice.reducer
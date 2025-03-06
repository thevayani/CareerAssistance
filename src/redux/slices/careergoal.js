import { createSlice } from '@reduxjs/toolkit'

export const careergoalSlice = createSlice({
    name: 'careergoal',
    initialState: {
        careerGoalUsers : [],            //state
    },
    reducers: {
        setCareerGoalUsers:(state,action)=>{
        state.careerGoalUsers = action.payload
       }
    },
})


// Action creators are generated for each case reducer function
export const { setCareerGoalUsers } = careergoalSlice.actions

export default careergoalSlice.reducer


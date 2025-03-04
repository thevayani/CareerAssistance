import { configureStore } from '@reduxjs/toolkit'
import registerSliceReducer from './slices/register'
import careergoalSlice from './slices/careergoal'


export default configureStore({
  reducer: {
    register : registerSliceReducer,
    careerGoal : careergoalSlice,
 
  },
})
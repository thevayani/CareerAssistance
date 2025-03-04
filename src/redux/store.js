import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/login'
import registerSliceReducer from './slices/register'
import careergoalSlice from './slices/careergoal'



export default configureStore({
  reducer: {
    login: loginReducer,
    register : registerSliceReducer,
    careerGoal : careergoalSlice,
  },
})
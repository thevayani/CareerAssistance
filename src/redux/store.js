import { configureStore } from '@reduxjs/toolkit'
import careerSliceReducer from './slices/career'



export default configureStore({
  reducer: {
    register : careerSliceReducer,
    login: careerSliceReducer,
    personalDetails: careerSliceReducer,
    CareerGuidance:careerSliceReducer,
    careerGoals:careerSliceReducer,
  },
})
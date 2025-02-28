import { configureStore } from '@reduxjs/toolkit'
import careerSliceReducer from './slices/career'
import userDetailSlice from './slices/userDetails'


export default configureStore({
  reducer: {
    register : careerSliceReducer,
    login: careerSliceReducer,
    userDetail: userDetailSlice,
    CareerGuidance:careerSliceReducer,
    careerGoals:careerSliceReducer,
  },
})
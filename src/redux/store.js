import { configureStore } from '@reduxjs/toolkit'
import registerSliceReducer from './slices/login'



export default configureStore({
  reducer: {
   
    register: registerSliceReducer,
   
  },
})
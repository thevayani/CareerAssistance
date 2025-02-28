import { configureStore } from '@reduxjs/toolkit'
import registerSliceReducer from './slices/register'



export default configureStore({
  reducer: {
    register : registerSliceReducer,
 
  },
})
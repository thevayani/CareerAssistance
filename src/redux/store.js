import { configureStore } from '@reduxjs/toolkit'
import  homeReducer from './slices/home'




export default configureStore({
  reducer: {

    home:homeReducer,

  },
})
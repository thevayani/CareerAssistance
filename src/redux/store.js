import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/login'
import registerSliceReducer from './slices/register'
import careergoalSlice from './slices/careergoal'
import quizSlice  from './slices/quiz'
import  questionSlice  from './slices/quizQuestion'


export default configureStore({
  reducer: {
    login: loginReducer,
    register : registerSliceReducer,
    careerGoal : careergoalSlice,
    quiz : quizSlice,
    question : questionSlice
  },
})
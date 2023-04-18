import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Reducers/taskSlice'

export default configureStore({
  reducer: {
    toDo: todoReducer
  }
})
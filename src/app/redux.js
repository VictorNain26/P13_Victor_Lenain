import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/user'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

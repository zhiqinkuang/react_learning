
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store_reducer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
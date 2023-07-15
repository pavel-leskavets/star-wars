import { configureStore } from '@reduxjs/toolkit'
import { peopleApi } from '../services/people.service'

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
})

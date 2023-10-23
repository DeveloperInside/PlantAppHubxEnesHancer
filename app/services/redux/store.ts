import { configureStore } from '@reduxjs/toolkit'
import Reactotron from 'helpers/ReactotronConfig'
import { api } from 'services/api/api'
import categoriesReducer from './slices/categories/categoriesSlice'
import questionsReducer from './slices/questions/questionsSlice'
import hideOnboardingReducer from './slices/hideOnboarding/hideOnboardingSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    categories: categoriesReducer,
    questions: questionsReducer,
    hideOnboarding: hideOnboardingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(api.middleware),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  enhancers: [Reactotron.createEnhancer!()],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

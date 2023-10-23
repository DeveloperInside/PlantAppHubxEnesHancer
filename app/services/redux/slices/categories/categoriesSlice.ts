import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'services/redux/store'
import { ICategoriesState } from './categories.types'
import { categoriesApi } from 'features/home/api/categories'
import { STATUS } from 'constants/serviceStatus'


const initialState: ICategoriesState = {
  status: STATUS.IDLE,
  data: [],
  error: null,
}

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(categoriesApi.endpoints.categories.matchPending, state => {
      state.status = STATUS.PENDING  
    })
    builder.addMatcher(categoriesApi.endpoints.categories.matchRejected, (state, action) => {
      state.status = STATUS.ERROR
      state.error = action?.error?.message
    })
    builder.addMatcher(categoriesApi.endpoints.categories.matchFulfilled, (state, action) => {
      state.status = STATUS.FULFILLED
      state.data = action.payload.data
    })
  },
})

export const { resetCategories } = slice.actions

export default slice.reducer

export const selectCategories = (state: RootState) => state.categories.data

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'services/redux/store'
import { IQuestionsState } from './questions.types'
import { STATUS } from 'constants/serviceStatus'
import { questionsApi } from 'features/home/api/questions'


const initialState: IQuestionsState = {
  status: STATUS.IDLE,
  data: [],
  error: null,
}

const slice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    resetQuestions: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(questionsApi.endpoints.questions.matchPending, state => {
      state.status = STATUS.PENDING  
    })
    builder.addMatcher(questionsApi.endpoints.questions.matchRejected, (state, action) => {
      state.status = STATUS.ERROR
      state.error = action?.error?.message
    })
    builder.addMatcher(questionsApi.endpoints.questions.matchFulfilled, (state, action) => {
      state.status = STATUS.FULFILLED
      // warning: api is not responding as expected with data prop.
      // action.payload turns directly the data.
      // update: error fixed with transformResponse. These just a reminder comments now.
      state.data = action.payload.data
    })
  },
})

export const { resetQuestions } = slice.actions

export default slice.reducer

export const selectQuestions = (state: RootState) => state.questions.data

import { api } from 'services/api/api'
import { PATH } from 'services/api/apiPaths'
import { IQuestionsState } from 'services/redux/slices/questions/questions.types'

export const questionsApi = api.injectEndpoints({
  endpoints: builder => ({
    questions: builder.query<IQuestionsState, void>({
      query: () => PATH.GET_QUESTIONS,
      transformResponse(baseQueryReturnValue: any) {
        return { data: baseQueryReturnValue } as IQuestionsState
      },
    }),
  }),
})

export const { useQuestionsQuery } = questionsApi

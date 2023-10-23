import { api } from 'services/api/api'
import { PATH } from 'services/api/apiPaths'
import { ICategoriesState } from 'services/redux/slices/categories/categories.types'

export const categoriesApi = api.injectEndpoints({
  endpoints: builder => ({
    categories: builder.query<ICategoriesState, void>({
      query: () => PATH.GET_CATEGORIES,
    }),
  }),
})

export const { useCategoriesQuery } = categoriesApi

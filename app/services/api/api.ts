import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE } from './apiPaths'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE,
})

/**
 * This api has endpoints injected in adjacent files,
 * which is why no endpoints are shown below.
 */
export const api = createApi({ baseQuery, tagTypes: ['Categories', 'Questions'], endpoints: () => ({}) })

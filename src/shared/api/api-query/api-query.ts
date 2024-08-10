import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com/',
})

const baseQueryWithRetry = retry(baseQuery, {
  maxRetries: 3,
})

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Users'],
  endpoints: () => ({}),
})

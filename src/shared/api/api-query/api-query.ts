import { Cookies } from 'react-cookie'

import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  prepareHeaders: (headers) => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    headers.set('authorization', token)
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, {
  maxRetries: 3,
})

export const api = createApi({
  reducerPath: 'splitApiGQL',
  baseQuery: baseQueryWithRetry,
  tagTypes: [],
  endpoints: () => ({}),
})

import { api } from 'shared/api/api-query/api-query'

const usersQuery = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users',
      providesTags: ['Users'],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: 'users/add',
        method: 'POST',
        body,
      }),
      invalidateTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery, useCreateUserMutation } = usersQuery

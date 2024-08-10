import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: undefined,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserTable: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUserTable } = usersSlice.actions

export default usersSlice.reducer

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { IUsers } from '@/hooks/IUsers'

interface Users {
  entities: IUsers[]
  loading: boolean
}

export const fetchUsers = createAsyncThunk<IUsers[]>('users/getAllUsers', async (thunkApi) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return data
})

const initialState: Users = {
  entities: [],
  loading: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUsers[]>) => {
      state.loading = false
      state.entities.push(...action.payload)
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
  }
})

export default usersSlice.reducer
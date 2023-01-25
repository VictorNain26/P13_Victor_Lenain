import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email, password },
        config
      )

      localStorage.setItem('userToken', data.body.token)

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserDetails = createAsyncThunk(
  'user/profile',
  async ({ getState, rejectWithValue }) => {
    try {
      const { user } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }

      const { data } = await axios.post(`http://localhost:3001/api/v1/user/profile`, user, config)

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const editUser = createAsyncThunk(
  'user/profile',
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }

      const { data } = await axios.put(
        `http://localhost:3001/api/v1/user/profile`,
        { firstName, lastName },
        config
      )

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

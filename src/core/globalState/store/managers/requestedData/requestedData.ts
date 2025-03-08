/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '../../types'
import type { ServerList } from 'core/types'
import { NAME, initialState } from './constants'
import { requestServerList } from './thunk'

const requestedDataSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    clearServerList: (state) => {
      state.serverList = initialState.serverList
    },
  },
  extraReducers(builder) {
    builder
      .addCase(requestServerList.pending, (state) => {
        console.log('pending')
      })
      .addCase(
        requestServerList.fulfilled,
        (state, action: PayloadAction<ServerList>) => {
          console.log('fulfilled', state, action.payload)
          state.serverList = action.payload
        }
      )
      .addCase(requestServerList.rejected, (state) => {
        console.log('rejected')
      })
  },
})

export default requestedDataSlice

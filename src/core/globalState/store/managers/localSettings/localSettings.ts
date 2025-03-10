import { createSlice } from '@reduxjs/toolkit'
import { Sorting } from 'core/types'
import type { PayloadAction } from '../../types'
import { NAME, initialState } from './constants'

const requestedDataSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    toggleListSorting: (state, action: PayloadAction<Sorting>) => {
      state.list.sorting = action.payload
    },
  },
})

export default requestedDataSlice

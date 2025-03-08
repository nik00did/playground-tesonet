import { configureStore } from '@reduxjs/toolkit'

import { reducer as requestedDataReducer } from './managers/requestedData'

const store = configureStore({
  reducer: {
    requestedData: requestedDataReducer,
  },
})

export default store

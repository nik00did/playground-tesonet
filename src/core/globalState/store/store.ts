import { configureStore } from '@reduxjs/toolkit'

import { reducer as requestedDataReducer } from './managers/requestedData'
import { reducer as localSettingsReducer } from './managers/localSettings'

const store = configureStore({
  reducer: {
    requestedData: requestedDataReducer,
    localSettings: localSettingsReducer,
  },
})

export default store

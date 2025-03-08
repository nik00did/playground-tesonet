import requestedDataSlice from './requestedData'
import { requestServerList } from './thunk'

export const { reducer } = requestedDataSlice

export const actions = {
  ...requestedDataSlice.actions,
  requestServerList,
}

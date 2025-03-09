import requestedDataSlice from './requestedData'
import { requestServerList } from './thunk'
export * as selectors from './selectors'

export const { reducer } = requestedDataSlice

export const actions = {
  ...requestedDataSlice.actions,
  requestServerList,
}

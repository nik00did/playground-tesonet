import { ServerList } from 'src/core/types'
import { RootState } from '../../types'

export const getServerList = (state: RootState): ServerList =>
  state.requestedData.serverList

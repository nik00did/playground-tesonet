import { RootState } from '../../types'

export const getListSorting = (state: RootState) =>
  state.localSettings.list.sorting

import { Sorting } from 'src/core/types'

export type List = {
  sorting: Sorting
}

export interface LocalSettingsState {
  list: List
}

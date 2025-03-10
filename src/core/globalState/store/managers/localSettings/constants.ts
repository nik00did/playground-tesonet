import { SORTING_FIELD, SORTING_DIRECTION } from 'core/types'
import type { LocalSettingsState } from './types'

export const NAME = 'localSettings'

export const initialState: LocalSettingsState = {
  list: {
    sorting: {
      field: SORTING_FIELD.none,
      direction: SORTING_DIRECTION.none,
    },
  },
}

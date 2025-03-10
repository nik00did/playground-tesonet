import {
  Server,
  ServerList,
  Sorting,
  SORTING_DIRECTION,
  SORTING_FIELD,
} from './types'

export const getSortDirectionByField = (
  sorting: Sorting,
  field: SORTING_FIELD
): SORTING_DIRECTION =>
  sorting.field === field ? sorting.direction : SORTING_DIRECTION.none

export const getSortedServerList = (
  serverList: ServerList,
  sorting: Sorting
): ServerList =>
  [...serverList].sort((a, b) =>
    sorting.direction === SORTING_DIRECTION.ascending
      ? SORTING_CALLBACK[sorting.field](a, b)
      : SORTING_CALLBACK[sorting.field](b, a)
  )

export const SORTING_CALLBACK: {
  [key in SORTING_FIELD]: (a: Server, b: Server) => number
} = {
  [SORTING_FIELD.name]: (a, b) => a.name.localeCompare(b.name),
  [SORTING_FIELD.none]: () => 0,
  [SORTING_FIELD.distance]: (a, b) =>
    parseInt(a.distance) - parseInt(b.distance),
}

export enum SORTING_DIRECTION {
  none = 'none',
  ascending = 'ascending',
  descending = 'descending',
}

export enum SORTING_FIELD {
  none = 'none',
  name = 'name',
  distance = 'distance',
}

export type Server = {
  name: string
  distance: string
}

export type ServerList = Array<Server>

export type Sorting = {
  field: SORTING_FIELD
  direction: SORTING_DIRECTION
}

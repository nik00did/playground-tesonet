import { SORTING_DIRECTION } from 'src/core/types'

export type Props = {
  title: string
  direction: SORTING_DIRECTION
  clickCallback?: () => void
}

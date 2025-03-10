import { SORTING_DIRECTION } from 'src/core/types'
import JSXIcons from 'src/assets/jsxIcons'

export const directionIconData: {
  [key in SORTING_DIRECTION]: React.ReactNode
} = {
  [SORTING_DIRECTION.none]: JSXIcons.bars,
  [SORTING_DIRECTION.ascending]: JSXIcons.barsArrowDown,
  [SORTING_DIRECTION.descending]: JSXIcons.barsArrowUp,
}

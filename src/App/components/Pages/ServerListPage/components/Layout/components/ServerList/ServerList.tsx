import React, { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ACTIONS, SELECTORS, useDispatch } from 'core/globalState'
import { SORTING_DIRECTION, SORTING_FIELD } from 'core/types'
import { getSortDirectionByField, getSortedServerList } from 'core/utils'
import SortingItem from './components/SortingItem'
import ServerItemContent from './components/ServerItemContent'

const NEXT_SORTING_DIRECTION_DATA: {
  [key in SORTING_DIRECTION]: SORTING_DIRECTION
} = {
  [SORTING_DIRECTION.none]: SORTING_DIRECTION.ascending,
  [SORTING_DIRECTION.ascending]: SORTING_DIRECTION.descending,
  [SORTING_DIRECTION.descending]: SORTING_DIRECTION.ascending,
}

const ServerList: React.FC = () => {
  const dispatch = useDispatch()
  const serverList = useSelector(SELECTORS.getServerList)
  const listSorting = useSelector(SELECTORS.getListSorting)

  const sortedServerList = useMemo(
    () =>
      listSorting.direction !== SORTING_DIRECTION.none
        ? getSortedServerList(serverList, listSorting)
        : serverList,
    [serverList, listSorting]
  )

  const nameSortingDirection = getSortDirectionByField(
    listSorting,
    SORTING_FIELD.name
  )
  const distanceSortingDirection = getSortDirectionByField(
    listSorting,
    SORTING_FIELD.distance
  )

  const toggleNameSorting = useCallback(() => {
    dispatch(
      ACTIONS.toggleListSorting({
        field: SORTING_FIELD.name,
        direction: NEXT_SORTING_DIRECTION_DATA[nameSortingDirection],
      })
    )
  }, [dispatch, nameSortingDirection])

  const toggleDistanceSorting = useCallback(() => {
    dispatch(
      ACTIONS.toggleListSorting({
        field: SORTING_FIELD.distance,
        direction: NEXT_SORTING_DIRECTION_DATA[distanceSortingDirection],
      })
    )
  }, [dispatch, distanceSortingDirection])

  return (
    <div className="flex max-h-full flex-col">
      <div
        className="flex justify-between 
          rounded-t-md bg-blue-400 bg-gray-100 p-5"
      >
        <ServerItemContent
          name={
            <SortingItem
              title="Name"
              direction={nameSortingDirection}
              clickCallback={toggleNameSorting}
            />
          }
          distance={
            <SortingItem
              title="Distance"
              direction={distanceSortingDirection}
              clickCallback={toggleDistanceSorting}
            />
          }
        />
      </div>
      <ul
        role="list"
        className="max-h-full divide-y divide-gray-100 overflow-auto"
      >
        {sortedServerList.map(({ name, distance }) => (
          <li
            key={`${name}_${distance}`}
            className="flex justify-between gap-x-6 p-5"
          >
            <ServerItemContent name={name} distance={distance} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(ServerList)

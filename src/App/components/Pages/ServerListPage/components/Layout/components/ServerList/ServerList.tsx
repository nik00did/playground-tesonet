import React from 'react'
import { useSelector } from 'react-redux'
import { SELECTORS } from 'core/globalState'
import ServerItemContent from './components/ServerItemContent'

const ServerList: React.FC = () => {
  const serverList = useSelector(SELECTORS.getServerList)

  return (
    <div className="flex max-h-full flex-col">
      <div className="flex justify-between rounded-t-md bg-blue-400 bg-gray-100 p-5">
        <ServerItemContent name={<>Name</>} distance={'Distance'} />
      </div>
      <ul
        role="list"
        className="max-h-full divide-y divide-gray-100 overflow-auto"
      >
        {serverList.map(({ name, distance }) => (
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

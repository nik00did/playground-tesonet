import React from 'react'

import { Props } from './types'

const ServerItemContent: React.FC<Props> = ({ name, distance }) => (
  <>
    <div className="flex min-w-0 gap-x-4">
      <p className="text-sm/6 font-semibold text-gray-900">{name}</p>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-xs/5 text-gray-500">{distance}</p>
    </div>
  </>
)

export default React.memo(ServerItemContent)

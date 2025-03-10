import React from 'react'

import { Props } from './types'

const Alert: React.FC<Props> = ({ message }) => (
  <div
    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  "
    role="alert"
  >
    {message}
  </div>
)

export default React.memo(Alert)

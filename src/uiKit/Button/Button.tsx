import React from 'react'

import { Props } from './types'

const Button: React.FC<Props> = ({ onClick, label, type = 'button' }) => (
  <button
    onClick={onClick}
    type={type}
    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5
      text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500
      focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-indigo-600 cursor-pointer"
  >
    {label}
  </button>
)

export default React.memo(Button)

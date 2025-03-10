import React, { useState, useCallback, useEffect } from 'react'

import { Props } from './types'
import { directionIconData } from './constants'

const SortingItem: React.FC<Props> = ({ title, direction, clickCallback }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = useCallback(() => {
    if (!isActive) {
      setIsActive(true)
    }

    clickCallback?.()
  }, [isActive, clickCallback])

  useEffect(() => {
    if (direction !== 'none') {
      return
    }

    setIsActive(false)
  }, [direction])

  return (
    <span
      onClick={handleClick}
      className={`
        ${isActive ? 'font-bold' : 'font-medium'} 
        hover:cursor-pointer flex items-center gap-2
      `}
    >
      <span>{title}</span>
      {directionIconData[direction]}
    </span>
  )
}

export default React.memo(SortingItem)

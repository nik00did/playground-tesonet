import React from 'react'

import { Props } from './types'

const PageLayout: React.FC<Props> = ({ children, header }) => (
  <div className="flex max-h-full min-h-full flex-1 flex-col overflow-hidden">
    {header}
    <div className="flex min-h-full flex-1 px-6 py-12" children={children} />
  </div>
)

export default React.memo(PageLayout)

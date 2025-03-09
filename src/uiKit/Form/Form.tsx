import React from 'react'
import { Props } from './types'

const Form: React.FC<Props> = ({ action, children }) => (
  <div className="mt-10">
    <form action={action} className="space-y-6" children={children} />
  </div>
)

export default React.memo(Form)

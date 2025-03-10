import React from 'react'
import { Props } from './types'

const Form: React.FC<Props> = ({ onSubmit, children }) => (
  <div className="mt-10">
    <form onSubmit={onSubmit} className="space-y-6" children={children} />
  </div>
)

export default React.memo(Form)

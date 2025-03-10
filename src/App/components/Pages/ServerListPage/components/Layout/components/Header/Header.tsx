import React from 'react'

import LogoutButton from './components/LogoutButton'

const Header: React.FC = () => (
  <header className="flex w-full justify-between bg-white px-6 py-4 shadow-md border border-gray-100">
    <div className="align-center flex">
      <div className="flex justify-center">
        <span>Playground Tesonet</span>
      </div>
    </div>
    <div className="w-fit">
      <LogoutButton />
    </div>
  </header>
)

export default React.memo(Header)

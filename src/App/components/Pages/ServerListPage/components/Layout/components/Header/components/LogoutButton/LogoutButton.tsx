import React from 'react'

import Button from 'uiKit/Button'
import { useAuth } from 'src/core/auth'

const LogoutButton: React.FC = () => {
  const auth = useAuth()

  return <Button label="Logout ->" onClick={() => auth?.logout()} />
}

export default React.memo(LogoutButton)

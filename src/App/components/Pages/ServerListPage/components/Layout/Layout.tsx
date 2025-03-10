import React, { useEffect } from 'react'
import PageLayout from 'uiKit/PageLayout'
import { useAuth } from 'core/auth'
import { ACTIONS, useDispatch } from 'core/globalState'
import Header from './components/Header'
import ServerList from './components/ServerList'

const Layout: React.FC = () => {
  const auth = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!auth) {
      return
    }

    dispatch(ACTIONS.requestServerList(auth.token))

    return () => {
      dispatch(ACTIONS.clearServerList())
    }
  }, [auth, dispatch])

  return (
    <PageLayout header={<Header />}>
      <div className="w-full sm:w-auto mx-auto flex flex-col justify-center">
        <div className="w-full h-full sm:w-lg sm:rounded bg-white px-6 py-4 sm:px-10 sm:py-14 shadow-md">
          <ServerList />
        </div>
      </div>
    </PageLayout>
  )
}

export default React.memo(Layout)

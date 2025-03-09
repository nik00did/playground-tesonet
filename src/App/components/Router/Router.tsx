import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTERS } from 'core/constants'
import PrivateRoute from './components/PrivateRoute'
import DefaultRoute from './components/DefaultRoute'

const Login = lazy(() => import('../Pages/LoginPage'))
const ServerListPage = lazy(() => import('../Pages/ServerListPage'))

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<DefaultRoute />}></Route>
      <Route path={ROUTERS.login} element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTERS.serverList} element={<ServerListPage />} />
      </Route>
    </Routes>
  )
}

export default Router

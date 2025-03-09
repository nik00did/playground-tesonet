import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from 'core/auth'
import { ROUTERS } from 'core/constants'

const PrivateRoute: React.FC = () => {
  const auth = useAuth()

  if (!auth?.token) {
    return <Navigate to={ROUTERS.login} />
  }

  return <Outlet />
}

export default PrivateRoute

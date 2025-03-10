import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import { Props } from './types'
import { ROUTERS, TOKEN_KEY } from '../../constants'
import { LoginParams } from '../types'
import API from '../../api'

const Provider: React.FC<Props> = (props) => {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || '')
  const [error, setError] = useState<Error | null>(null)
  const navigate = useNavigate()

  const login = async (params: LoginParams) => {
    try {
      
      const response = await API.authorizeRequest(params)
      const res = await response.json()

      if (!res.token) {
        throw new Error(res.message)
      }

      setToken(res.token)
      localStorage.setItem(TOKEN_KEY, res.token)
      navigate(ROUTERS.serverList)
    } catch (err) {
      setError(err as Error)
    }
  }

  const logout = () => {
    setToken('')
    localStorage.removeItem(TOKEN_KEY)
    navigate(ROUTERS.login)
  }

  const clearError = () => {
    setError(null)
  }

  return (
    <Context.Provider
      value={{ token, login, logout, clearError, error }}
      children={props.children}
    />
  )
}

export default Provider

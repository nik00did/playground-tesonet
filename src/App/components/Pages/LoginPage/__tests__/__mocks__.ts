import { Context } from 'core/auth/Context/types'

export const mockContext: Context = {
  token: 'test',
  login: () => {},
  logout: () => {},
}

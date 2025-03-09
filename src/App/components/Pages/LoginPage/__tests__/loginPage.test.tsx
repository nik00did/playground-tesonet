import { render } from '@testing-library/react'
import * as auth from 'core/auth'
import LoginPage from '../LoginPage'
import { mockContext } from './__mocks__'

jest.mock('core/auth', () => ({
  useAuth: jest.fn(),
}))

describe('LoginPage component', () => {
  test('should be rendered when auth data exists', () => {
    const mockUseAuth = jest.spyOn(auth, 'useAuth').mockReturnValue(mockContext)

    const renderedLogin = render(<LoginPage />)

    expect(mockUseAuth).toHaveBeenCalled()
    expect(renderedLogin.container).toBeTruthy()
  })

  test('should be rendered data when there is no auth data', () => {
    const mockUseAuth = jest.spyOn(auth, 'useAuth').mockReturnValue(null)

    render(<LoginPage />)

    expect(mockUseAuth).toHaveBeenCalled()
  })
})

import { render } from '@testing-library/react'
import ServerListPage from '../ServerListPage'

describe('ServerList component', () => {
  test('should be rendered successfully', () => {
    const renderedServerListPage = render(<ServerListPage />)

    expect(renderedServerListPage.container).toBeTruthy()
  })
})

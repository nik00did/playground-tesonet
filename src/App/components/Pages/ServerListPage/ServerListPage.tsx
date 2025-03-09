import { StoreProvider } from 'core/globalState'
import Layout from './components/Layout'

const ServerListPage: React.FC = () => (
  <StoreProvider>
    <Layout />
  </StoreProvider>
)

export default ServerListPage

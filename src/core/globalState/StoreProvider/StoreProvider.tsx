import { Provider } from 'react-redux'
import store from '../store'
import { Props } from './types'

const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store} children={children} />
}

export default StoreProvider

import { useDispatch as useDispatchRedux } from 'react-redux'
import { actions as requestDataActions } from './managers/requestedData'
import store from './store'

export const ACTIONS = {
    ...requestDataActions
}

export const useDispatch = () => useDispatchRedux<typeof store.dispatch>()

export default store



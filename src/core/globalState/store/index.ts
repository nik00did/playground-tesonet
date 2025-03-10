import { useDispatch as useDispatchRedux } from 'react-redux'
import {
  actions as requestDataActions,
  selectors as requestDataSelectors,
} from './managers/requestedData'
import {
  actions as localSettingsActions,
  selectors as localSettingsSelectors,
} from './managers/localSettings'
import store from './store'

export const ACTIONS = {
  ...requestDataActions,
  ...localSettingsActions,
}

export const SELECTORS = {
  ...requestDataSelectors,
  ...localSettingsSelectors,
}

export const useDispatch = () => useDispatchRedux<typeof store.dispatch>()

export default store

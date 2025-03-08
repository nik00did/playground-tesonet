import type { PayloadAction as PayloadActionType } from '@reduxjs/toolkit'
import store from './store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type PayloadAction<T> = PayloadActionType<T>

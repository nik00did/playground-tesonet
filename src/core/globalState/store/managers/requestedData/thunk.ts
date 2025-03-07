import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../../api'
import { NAME } from './constants'

export const requestServerList = createAsyncThunk(
    `${NAME}/requestServerList`,
    async (token: string) => {
        try {
            const response = await API.getServerList(token)

            return response
        } catch (error) {
            console.error(error)
            return []
        }
    },
)
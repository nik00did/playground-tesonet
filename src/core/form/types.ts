import { FormEvent } from "react"

export type Params = {
    onSubmit: (formData: FormData) => void
}
export type ReturnData = {
    errors: object
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export type UseForm = (params: Params) => ReturnData
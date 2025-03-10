import React, { useCallback } from 'react'
import Button from 'uiKit/Button'
import Form from 'uiKit/Form'
import Input from 'uiKit/Input'
import { useAuth } from 'core/auth'
import { useForm } from 'core/form'
import { LOGIN_FIELDS } from 'src/core/types'
import Alert from '../Alert'
import { ERROR_MESSAGES } from 'src/core/auth/constants'

const Content: React.FC = () => {
  const auth = useAuth()

  const handleSubmit = useCallback(
    (formData: FormData) => {
      auth?.clearError()

      const username = formData.get(LOGIN_FIELDS.username) as string
      const password = formData.get(LOGIN_FIELDS.password) as string

      auth?.login({ username, password })
    },
    [auth]
  )

  const errorMessage =
    auth?.error?.message &&
    (ERROR_MESSAGES[auth.error.message] || 'Ooops! Something went wrong')

  const { onSubmit } = useForm({ onSubmit: handleSubmit })

  return (
    <div className="w-full flex flex-col justify-center">
      <div
        className="w-full h-full mx-auto sm:w-lg 
        sm:h-auto rounded bg-white px-10 py-14
        shadow-md flex flex-col justify-center"
      >
        <div
          className="flex-col justify-center items-center sm:mx-auto sm:w-full
           sm:max-w-sm"
        >
          <h2
            className="text-center text-2xl/9 font-bold tracking-tight
             text-gray-900"
          >
            Sign in to your account
          </h2>
        </div>
        <Form onSubmit={onSubmit}>
          {errorMessage && <Alert message={errorMessage} />}
          <Input label={LOGIN_FIELDS.username} isRequired></Input>
          <Input
            label={LOGIN_FIELDS.password}
            type="password"
            isRequired
          ></Input>
          <div>
            <Button type="submit" label="Sign in"></Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default React.memo(Content)

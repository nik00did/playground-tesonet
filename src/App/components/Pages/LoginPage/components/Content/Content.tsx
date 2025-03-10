import React, { useCallback } from 'react'
import Button from 'uiKit/Button'
import Form from 'uiKit/Form'
import Input from 'uiKit/Input'
import { useAuth } from 'core/auth'
import { useForm } from 'core/form'
import { LOGIN_FIELDS } from 'src/core/types'

const Content: React.FC = () => {
  const auth = useAuth()

  const handleSubmit = useCallback(
    (formData: FormData) => {
      const username = formData.get(LOGIN_FIELDS.username) as string
      const password = formData.get(LOGIN_FIELDS.password) as string

      auth?.login({ username, password })
    },
    [auth]
  )

  const { onSubmit } = useForm({ onSubmit: handleSubmit })

  return (
    <div className="mx-auto flex flex-col justify-center">
      <div className="h-auto w-lg rounded bg-white px-10 py-14 shadow-md">
        <div
          className="flex-col justify-center sm:mx-auto sm:w-full
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
          <Input label={LOGIN_FIELDS.username}></Input>
          <Input label={LOGIN_FIELDS.password} type="password"></Input>
          <div>
            <Button type="submit" label="Sign in"></Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default React.memo(Content)

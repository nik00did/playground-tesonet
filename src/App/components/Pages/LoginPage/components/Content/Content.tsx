import React from 'react'
import Button from 'uiKit/Button'
import Form from 'uiKit/Form'
import Input from 'uiKit/Input'
import { useAuth } from 'core/auth'

const Content: React.FC = () => {
  const auth = useAuth()

  if (!auth) {
    return <>no auth data</>
  }

  return (
    <div className="mx-auto flex flex-col justify-center">
      <div className="h-auto w-lg rounded bg-white px-10 py-14 shadow-md">
        <div className="flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form
          action={() =>
            auth.login({ username: 'tesonet', password: 'partyanimal' })
          }
        >
          <Input
            label="Email"
            type="email"
            placeholder="example@mail.com"
          ></Input>
          <Input label="Password" type="password"></Input>

          <div>
            <Button type="submit" label="Sign in"></Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default React.memo(Content)

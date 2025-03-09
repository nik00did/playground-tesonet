import { useAuth } from 'core/auth'

const Login: React.FC = () => {
  const auth = useAuth()

  if (!auth) {
    return <>no auth data</>
  }

  return (
    <>
      <button
        onClick={() =>
          auth.login({ username: 'tesonet', password: 'partyanimal' })
        }
      >
        Login
      </button>
    </>
  )
}

export default Login

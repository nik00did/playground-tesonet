import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'
import { AuthProvider } from 'core/auth'
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

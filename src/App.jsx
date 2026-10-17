import { useEffect, useState } from 'react'
import Start from './pages/Start.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'

// Simple hash-based routing: #/ , #/login , #/signup
// (No extra library needed. Swap to react-router later if the app grows.)
const routes = {
  '/': Start,
  '/login': Login,
  '/signup': SignUp,
}

function getPath() {
  return window.location.hash.replace(/^#/, '') || '/'
}

function App() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    function onHashChange() {
      setPath(getPath())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = routes[path] ?? Start
  return <Page />
}

export default App

import { useState } from 'react'
import AuthLayout from '../components/AuthLayout.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import './Login.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setError('Enter a valid email address, like juan@email.com.')
      return
    }
    if (password.length < 8) {
      setError('Your password should be at least 8 characters.')
      return
    }

    setError('')
    // TODO: connect to the backend, e.g. POST `${import.meta.env.VITE_API_URL}/auth/login`
    // with { email, password }. Never log or store the password in the browser.
    alert(`Logging in ${trimmedEmail} (demo only)`)
  }

  return (
    <AuthLayout
      title="Save a little, every day."
      subtitle="Send money, pay bills, and grow your savings, all in one place."
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="auth-heading">
          <h2>Log in to sinop</h2>
          <p>Welcome back! Enter your details to continue.</p>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <div className="label-row">
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="link-button"
              onClick={() => alert('Password reset is coming soon.')}
            >
              Forgot password?
            </button>
          </div>
          <PasswordInput
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label className="check-row login-remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember this device
        </label>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary">
          Log in
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <a href="#/signup" className="btn-secondary">
          Create an account
        </a>
      </form>
    </AuthLayout>
  )
}

export default Login

import { useState } from 'react'
import './Login.css'

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="28" fill="#14532D" />
      <path
        d="M63.9 26 A16 16 0 1 0 50 50 A16 16 0 1 1 36.1 74"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CardsIllustration() {
  return (
    <svg className="login-art" viewBox="0 0 280 280" role="img" aria-label="Stacked wallet cards">
      <rect x="40" y="58" width="200" height="124" rx="22" fill="#1E3A2B" transform="rotate(-10 140 120)" />
      <rect x="40" y="96" width="200" height="124" rx="22" fill="#FFFFFF" opacity="0.95" />
      <rect x="60" y="116" width="44" height="32" rx="8" fill="#BEF264" />
      <rect x="60" y="176" width="110" height="12" rx="6" fill="#86EFAC" />
      <circle cx="210" cy="132" r="14" fill="#22C55E" />
      <circle cx="192" cy="132" r="14" fill="#064E3B" opacity="0.8" />
    </svg>
  )
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
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
    <main className="login">
      <section className="login-brand">
        <div className="login-logo">
          <Logo />
          <span>sinop</span>
        </div>
        <CardsIllustration />
        <div className="login-pitch">
          <h1>Save a little, every day.</h1>
          <p>Send money, pay bills, and grow your savings, all in one place.</p>
        </div>
      </section>

      <section className="login-panel">
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-heading">
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
              <a href="#forgot">Forgot password?</a>
            </div>
            <div className="password-row">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((shown) => !shown)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <label className="remember">
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

          <button type="button" className="btn-secondary">
            Email me a sign-in link
          </button>

          <p className="signup">
            New to sinop? <a href="#signup">Create an account</a>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Login

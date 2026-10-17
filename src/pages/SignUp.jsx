import { useState } from 'react'
import AuthLayout from '../components/AuthLayout.jsx'
import PasswordInput from '../components/PasswordInput.jsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Returns an object of { fieldName: 'error message' } for anything invalid.
function validate({ email, mobile, password, confirmPassword, agreed }) {
  const errors = {}
  const digits = mobile.replace(/\D/g, '')

  if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = 'Enter a valid email address, like juan@email.com.'
  }
  if (digits.length !== 10 || !digits.startsWith('9')) {
    errors.mobile = 'Enter your 10-digit mobile number, like 917 123 4567.'
  }
  if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    errors.password = 'Use at least 8 characters with letters and numbers.'
  }
  if (confirmPassword !== password || confirmPassword === '') {
    errors.confirmPassword = 'Passwords don’t match.'
  }
  if (!agreed) {
    errors.agreed = 'Please agree to the Terms and Privacy Policy.'
  }
  return errors
}

function SignUp() {
  const [form, setForm] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function update(field) {
    return (event) => {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
      setForm((current) => ({ ...current, [field]: value }))
      // Clear a field's error as soon as the user edits it
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }))
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      return
    }

    // TODO: connect to the backend, e.g. POST `${import.meta.env.VITE_API_URL}/auth/register`
    // with { email, mobile: '+63' + digits, password }.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <AuthLayout
        title="Welcome to sinop."
        subtitle="Your account is ready. Start saving a little every day."
      >
        <div className="auth-form">
          <div className="auth-heading">
            <h2>Account created</h2>
            <p>We’ve set up your account for {form.email.trim()}.</p>
          </div>
          <p className="form-success" role="status">
            This is a demo. Your account isn’t saved yet until the backend is connected.
          </p>
          <a href="#/login" className="btn-primary">
            Go to log in
          </a>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Start saving the smart way."
      subtitle="Create your sinop account in a minute. All you need is an email and your mobile number."
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <a href="#/login" className="back-link">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to log in
        </a>

        <div className="auth-heading">
          <h2>Create your account</h2>
          <p>It only takes a minute.</p>
        </div>

        <div className="field">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'signup-email-error' : undefined}
          />
          {errors.email && (
            <p className="field-error" id="signup-email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="signup-mobile">Mobile number</label>
          <div className="phone-row">
            <span className="prefix">+63</span>
            <input
              id="signup-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="917 123 4567"
              value={form.mobile}
              onChange={update('mobile')}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? 'signup-mobile-error' : undefined}
            />
          </div>
          {errors.mobile && (
            <p className="field-error" id="signup-mobile-error">
              {errors.mobile}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="signup-password">Password</label>
          <PasswordInput
            id="signup-password"
            autoComplete="new-password"
            placeholder="Create a password"
            value={form.password}
            onChange={update('password')}
            describedBy="signup-password-help"
          />
          {errors.password ? (
            <p className="field-error" id="signup-password-help">
              {errors.password}
            </p>
          ) : (
            <p className="field-hint" id="signup-password-help">
              At least 8 characters, with letters and numbers.
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="signup-confirm">Confirm password</label>
          <PasswordInput
            id="signup-confirm"
            autoComplete="new-password"
            placeholder="Type it again"
            value={form.confirmPassword}
            onChange={update('confirmPassword')}
            describedBy={errors.confirmPassword ? 'signup-confirm-error' : undefined}
          />
          {errors.confirmPassword && (
            <p className="field-error" id="signup-confirm-error">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="field">
          <label className="check-row">
            <input type="checkbox" checked={form.agreed} onChange={update('agreed')} />
            <span>
              I agree to the <a href="#/signup">Terms</a> and <a href="#/signup">Privacy Policy</a>.
            </span>
          </label>
          {errors.agreed && <p className="field-error">{errors.agreed}</p>}
        </div>

        <button type="submit" className="btn-primary">
          Create account
        </button>

        <p className="switch-auth">
          Already have an account? <a href="#/login">Log in</a>
        </p>
      </form>
    </AuthLayout>
  )
}

export default SignUp

import Logo from './Logo.jsx'
import CardsIllustration from './CardsIllustration.jsx'
import '../styles/auth.css'

// Shared two-column layout for Log in and Create account:
// mint brand panel on the left, the form on the right.
function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="auth">
      <section className="auth-brand">
        <a className="auth-logo" href="#/">
          <Logo />
          <span>sinop</span>
        </a>
        <CardsIllustration className="auth-art" />
        <div className="auth-pitch">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      <section className="auth-panel">{children}</section>
    </main>
  )
}

export default AuthLayout

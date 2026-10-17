import Logo from '../components/Logo.jsx'
import CardsIllustration from '../components/CardsIllustration.jsx'
import './Start.css'

// Edit these to change the three feature cards on the start page.
const features = [
  {
    title: 'Send and pay',
    text: 'Send money, pay bills, and buy load in a few taps.',
    icon: (
      <path d="M7 17 17 7M7 7h10v10" />
    ),
  },
  {
    title: 'Save with goals',
    text: 'Set savings goals and watch them grow with auto-save.',
    icon: (
      <path d="M12 20V10M18 20V4M6 20v-4" />
    ),
  },
  {
    title: 'Safe and secure',
    text: 'Your account is protected with a password and verification codes.',
    icon: (
      <>
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
]

function Start() {
  return (
    <div className="start">
      <header className="start-header">
        <a className="start-logo" href="#/">
          <Logo size={36} />
          <span>sinop</span>
        </a>
        <a className="start-login-link" href="#/login">
          Log in
        </a>
      </header>

      <main>
        <section className="start-hero">
          <div className="start-copy">
            <p className="start-eyebrow">Your digital wallet</p>
            <h1>Your money, all in one place.</h1>
            <p className="start-sub">
              sinop helps you send, pay, and save a little every day, without the hassle.
            </p>
            <div className="start-actions">
              <a className="start-btn start-btn-primary" href="#/signup">
                Create an account
              </a>
              <a className="start-btn start-btn-secondary" href="#/login">
                I already have an account
              </a>
            </div>
          </div>
          <CardsIllustration className="start-art" />
        </section>

        <section className="start-features" aria-label="What you can do with sinop">
          {features.map((feature) => (
            <article className="start-feature" key={feature.title}>
              <span className="start-feature-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </span>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="start-footer">
        <p>© {new Date().getFullYear()} sinop. A student project.</p>
      </footer>
    </div>
  )
}

export default Start

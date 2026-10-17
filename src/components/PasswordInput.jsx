import { useState } from 'react'

// Password field with a Show/Hide button.
function PasswordInput({ id, value, onChange, placeholder, autoComplete, describedBy }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="password-row">
      <input
        id={id}
        type={visible ? 'text' : 'password'}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-describedby={describedBy}
      />
      <button
        type="button"
        className="toggle-password"
        onClick={() => setVisible((shown) => !shown)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        aria-pressed={visible}
      >
        {visible ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default PasswordInput

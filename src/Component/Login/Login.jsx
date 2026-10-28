
import './Login.css'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Eye, EyeOff } from 'lucide-react'
import { assets } from '../../assets/assets'


const empty = { name: '', email: '', password: '', confirm: '' }

export default function Login({ mode, setMode, onClose, onSuccess }) {
  const isSignup = mode === 'signup'
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)

  // close with the Esc key, and stop the page behind from scrolling
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const switchMode = (next) => {
    setMode(next)
    setForm(empty)
    setErrors({})
    setShowPw(false)
  }

  const validate = () => {
    const e = {}
    if (isSignup && !form.name.trim()) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (isSignup && form.confirm !== form.password) e.confirm = 'Passwords do not match'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    // TODO: replace this with a real API call (fetch to your backend)
    const name = isSignup ? form.name.trim() : form.email.split('@')[0]
    onSuccess({ name, email: form.email })
  }

  return createPortal(
    <div className="auth-overlay" onClick={onClose}>
      <div
        className="auth-box"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}   // clicks inside don't close it
      >
        <button className="auth-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <img className="auth-bee" src={assets.bee} alt="" />
        <h2>{isSignup ? 'Create your account' : 'Welcome back'}</h2>
        <p className="auth-sub">
          {isSignup
            ? 'Join Edudu and start your learning journey'
            : 'Log in to continue learning with Edudu'}
        </p>

        <form onSubmit={submit} noValidate>
          {isSignup && (
            <label className="auth-field">
              Full name
              <input name="name" value={form.name} onChange={change} placeholder="Your full name" />
              {errors.name && <span className="auth-error">{errors.name}</span>}
            </label>
          )}

          <label className="auth-field">
            Email
            <input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" />
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </label>

          <label className="auth-field">
            Password
            <div className="auth-pw">
              <input
                name="password"
                type={showPw ? 'text' : 'password'}
                value={form.password}
                onChange={change}
                placeholder="At least 6 characters"
              />
              <button type="button" onClick={() => setShowPw(!showPw)} aria-label="Show or hide password">
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </label>

          {isSignup && (
            <label className="auth-field">
              Confirm password
              <input
                name="confirm"
                type={showPw ? 'text' : 'password'}
                value={form.confirm}
                onChange={change}
                placeholder="Repeat your password"
              />
              {errors.confirm && <span className="auth-error">{errors.confirm}</span>}
            </label>
          )}

          {!isSignup && <a href="#" className="auth-forgot">Forgot password?</a>}

          <button className="btn btn-brand auth-submit">
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
        </form>

        <p className="auth-switch">
          {isSignup ? (
            <>Already have an account?{' '}
              <button type="button" onClick={() => switchMode('login')}>Log in</button></>
          ) : (
            <>Don't have an account?{' '}
              <button type="button" onClick={() => switchMode('signup')}>Create account</button></>
          )}
        </p>
      </div>
    </div>,
    document.body
  )
}
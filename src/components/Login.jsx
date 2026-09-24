import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '../firebaseAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (!password) {
      setError('Please enter your password')
      return
    }

    try {
      const user = await loginUser(email.toLowerCase().trim(), password)
      if (user) {
        navigate('/')
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="max-w-md mx-auto border-2 border-blue-200 rounded-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-blue-600">Log in</h3>
          <Link to="/signup" className="text-xs text-blue-600 hover:underline">Sign up</Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded-sm text-sm"
            />
          </div>

          <div>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              type="password"
              className="w-full border border-gray-300 p-2 rounded-sm text-sm"
            />
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 text-sm">Login</button>
        </form>
      </div>
    </div>
  )
}


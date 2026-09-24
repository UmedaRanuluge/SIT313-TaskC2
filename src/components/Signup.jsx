import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../firebaseAuth'

export default function Signup() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    if (!fullName.trim()) {
      setError('Full name is required')
      return
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      await createUser(fullName.trim(), email.toLowerCase().trim(), password)
      navigate('/login')
    } catch (err) {
      setError(err.message || 'Signup failed')
    }
  }
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="max-w-md mx-auto border-2 border-blue-200 rounded-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-blue-600">Create a DEV@Deakin Account</h3>
          <a href="/login" className="text-xs text-blue-600 hover:underline">Login</a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Name*" className="w-full border border-gray-300 p-2 rounded-sm text-sm" />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email*" type="email" className="w-full border border-gray-300 p-2 rounded-sm text-sm" />
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password*" type="password" className="w-full border border-gray-300 p-2 rounded-sm text-sm" />
          <input value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm password*" type="password" className="w-full border border-gray-300 p-2 rounded-sm text-sm" />

          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 text-sm">Create</button>
        </form>
      </div>
    </div>
  )
}








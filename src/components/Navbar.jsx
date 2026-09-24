import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-sm font-bold tracking-tight text-gray-800">DEV@Deakin</Link>
          </div>

         
          <div className="flex-1 px-6">
            <div className="max-w-2xl mx-auto">
              <input
                aria-label="Search"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Search..."
              />
            </div>
          </div>

          
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/post" className="px-3 py-1 text-gray-700 border border-transparent hover:text-gray-900">Post</Link>
            <Link to="/login" className="px-3 py-1 text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-100">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
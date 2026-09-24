import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'
import Login from './components/Login'
import Signup from './components/Signup.jsx'
import Post from './components/Post.jsx'  

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full">
        <Navbar />
        <main className="py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
//app
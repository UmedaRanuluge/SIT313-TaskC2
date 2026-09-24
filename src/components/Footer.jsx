import { Share2, Mail, Stethoscope  } from 'lucide-react'

function Footer() {

  const handleSubscribe = () => {
    alert('Thanks for subscribing to DEV@Deakin!')
  }

  return (
    <footer className="bg-gray-800 text-white mt-12">

      <div className="bg-gray-700 px-8 py-6 flex items-center justify-center gap-4">
        <span className="font-bold tracking-widest uppercase text-sm">
          Sign Up For Our Daily Insider
        </span>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-beige-800 rounded w-64 border-2"
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800"
        >
          Subscribe
        </button>
      </div>

      <div className="px-8 py-10 grid grid-cols-3 gap-8 max-w-5xl mx-auto">

        {/* Column 1 - Explore */}
        <div>
          <h3 className="font-bold text-blue-400 mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Questions</a></li>
            <li><a href="#" className="hover:text-white">Articles</a></li>
            <li><a href="#" className="hover:text-white">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-blue-400 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Help</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-blue-400 mb-4">Stay Connected</h3>
          <div className="flex gap-4">
            <a href="#"
              className="bg-blue-600 p-2 rounded hover:bg-blue-700">
              <Share2 size={20} />
            </a>
            <a href="#"
              className="bg-sky-500 p-2 rounded hover:bg-sky-600">
              <Mail size={20} />
            </a>
            <a href="#"
              className="bg-pink-600 p-2 rounded hover:bg-pink-700">
              <Stethoscope  size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-600 px-8 py-4 text-center text-gray-400 text-sm">
        <p className="font-bold text-white mb-2">DEV@Deakin 2022</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Code of Conduct</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
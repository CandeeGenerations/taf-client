import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="text-gray-600 hover:text-gray-900">
                Tasks
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

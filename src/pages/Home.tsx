import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="flex justify-center items-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-800 text-transparent bg-clip-text">
        Welcome to React Router
      </h1>
      <div className="space-y-8">
        <p className="text-lg text-primary-900 text-center max-w-2xl mx-auto">
          This is a modern React application built with Vite, React Router, and Tailwind CSS.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/about" 
            className="
              inline-flex items-center px-6 py-3 rounded-lg
              bg-primary-600 text-white
              hover:bg-primary-700 hover:scale-105
              transform transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            <span>Go to About Page</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

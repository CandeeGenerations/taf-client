import {Link, Route, Routes, Navigate} from 'react-router-dom'
import {SignedIn, SignedOut, UserButton, useAuth} from '@clerk/clerk-react'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './components/SignIn'

function ProtectedRoute({children}: {children: React.ReactNode}) {
  const {isSignedIn, isLoaded} = useAuth()

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return <>{children}</>
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SignedIn>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-gray-800">
                    Logo
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/sign-in" />
              </div>
            </div>
          </div>
        </nav>
      </SignedIn>

      <Routes>
        <Route path="/sign-in" element={<SignedOut><SignIn /></SignedOut>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

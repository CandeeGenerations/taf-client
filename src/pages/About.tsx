import {Link} from 'react-router-dom'
import {useQuery} from 'convex/react'
import {api} from '../../convex/_generated/api'
import Loader from '../components/Loader'

export default function About() {
  const homeSettings = useQuery(api.homeSettings.get)

  if (homeSettings === undefined) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="animate-fade-in">
          <div className="h-12 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>
          <Loader />
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        About {homeSettings?.headline}
      </h1>
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          This is an example of React Router integration with a modern tech
          stack including:
        </p>
        <ul className="list-none space-y-3 text-gray-600">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Vite for lightning-fast development
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            React Router for seamless navigation
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Tailwind CSS for beautiful styling
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

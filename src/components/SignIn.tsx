import {SignIn as ClerkSignIn} from '@clerk/clerk-react'

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in with your Microsoft account to continue
          </p>
        </div>
        
        <ClerkSignIn 
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'bg-white shadow-lg rounded-lg p-6',
              socialButtonsBlockButton: 'w-full'
            }
          }}
          signInUrl="/sign-in"
          afterSignInUrl="/"
          routing="path"
          path="/sign-in"
        />
      </div>
    </div>
  )
}

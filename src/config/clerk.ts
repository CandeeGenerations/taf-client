import {getEnvVar} from './env'

export const clerkConfig = {
  publishableKey: getEnvVar('clerk.publishableKey'),
  appearance: {
    elements: {
      formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      footerActionLink: 'text-blue-600 hover:text-blue-700',
      formFieldInput: 'rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    },
  },
  signIn: {
    // Only allow Microsoft OAuth
    allowedIdentityProviders: ['oauth_microsoft'],
  },
}

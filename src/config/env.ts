interface EnvConfig {
  aws: {
    accessKeyId: string
    secretAccessKey: string
    region: string
    sqs: {
      bucket: string
      url: string
    }
  }
  azure: {
    clientId: string
    clientSecret: string
    tenantId: string
  }
  imageBuckets: {
    converted: string
    original: string
  }
  posthog: {
    apiHost: string
    host: string
    key: string
  }
  convexUrl: string
  lightboxKey: string
  appVersion: string
  isDevelopment: boolean
  port: number
}

function requireEnvVar(name: string): string {
  const value = import.meta.env[name]
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const env: EnvConfig = {
  convexUrl: requireEnvVar('VITE_CONVEX_URL'),
  appVersion: requireEnvVar('VITE_APP_VERSION'),
  isDevelopment: import.meta.env.DEV,
  port: parseInt(import.meta.env.PORT || '5123', 10),
  lightboxKey: requireEnvVar('VITE_LIGHTBOX_KEY'),
  aws: {
    accessKeyId: requireEnvVar('VITE_AWS_ACCESS_KEY_ID'),
    secretAccessKey: requireEnvVar('VITE_AWS_SECRET_ACCESS_KEY'),
    region: requireEnvVar('VITE_AWS_REGION'),
    sqs: {
      bucket: requireEnvVar('VITE_SQS_BUCKET'),
      url: requireEnvVar('VITE_SQS_URL'),
    },
  },
  azure: {
    clientId: requireEnvVar('VITE_AZURE_AD_CLIENT_ID'),
    clientSecret: requireEnvVar('VITE_AZURE_AD_CLIENT_SECRET'),
    tenantId: requireEnvVar('VITE_AZURE_AD_TENANT_ID'),
  },
  imageBuckets: {
    converted: requireEnvVar('VITE_CONVERTED_IMAGES_BUCKET'),
    original: requireEnvVar('VITE_ORIGINAL_IMAGES_BUCKET'),
  },
  posthog: {
    apiHost: requireEnvVar('VITE_POSTHOG_API_HOST'),
    host: requireEnvVar('VITE_POSTHOG_HOST'),
    key: requireEnvVar('VITE_POSTHOG_KEY'),
  },
}

type NestedPaths<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${K & string}` | `${K & string}.${NestedPaths<T[K]> & string}`
        : `${K & string}`
    }[keyof T]
  : never

type NestedValue<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? T[K] extends object
      ? NestedValue<T[K], R>
      : never
    : never
  : never

// Type-safe way to access environment variables with dot notation
export function getEnvVar<P extends NestedPaths<EnvConfig>>(
  path: P,
): NestedValue<EnvConfig, P> {
  const value = path.split('.').reduce<unknown>((obj, key) => {
    if (obj && typeof obj === 'object' && key in obj) {
      return (obj as Record<string, unknown>)[key]
    }
    throw new Error(`Invalid environment path: ${path}`)
  }, env)

  return value as NestedValue<EnvConfig, P>
}

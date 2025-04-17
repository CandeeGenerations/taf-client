/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly AAWS_ACCESS_KEY_ID: string
  readonly AAWS_REGION: string
  readonly AAWS_SECRET_ACCESS_KEY: string
  readonly AZURE_AD_CLIENT_ID: string
  readonly AZURE_AD_CLIENT_SECRET: string
  readonly AZURE_AD_TENANT_ID: string
  readonly SQS_BUCKET: string
  readonly SQS_URL: string
  readonly VITE_CONVERTED_IMAGES_BUCKET: string
  readonly VITE_CONVEX_URL: string
  readonly VITE_LIGHTBOX_KEY: string
  readonly VITE_ORIGINAL_IMAGES_BUCKET: string
  readonly VITE_POSTHOG_API_HOST: string
  readonly VITE_POSTHOG_HOST: string
  readonly VITE_POSTHOG_KEY: string
  readonly VITE_APP_VERSION: string
  readonly PORT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

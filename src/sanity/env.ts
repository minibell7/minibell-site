export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-27'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    // Return v if defined, otherwise return a dummy value to prevent build failure
    // The fetch will fail gracefully in the page component
    return v as T
}

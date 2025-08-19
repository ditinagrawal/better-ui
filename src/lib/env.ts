// Public environment variables (accessible on client-side)
export const publicEnv = {
  SITE_URL: import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321",
  BETTER_UI_URL:
    import.meta.env.PUBLIC_BETTER_UI_URL || "https://better-ui.ditin.in",
  GITHUB_URL:
    import.meta.env.PUBLIC_GITHUB_URL ||
    "https://github.com/ditinagrawal/better-ui",
  TWITTER_URL:
    import.meta.env.PUBLIC_TWITTER_URL || "https://x.com/ditinagrawal",
} as const;

// Private environment variables (server-side only)
// These should only be used in server-side code (.astro files, API routes, etc.)
export const privateEnv = {
  NODE_ENV: import.meta.env.NODE_ENV || "development",
} as const;

// Helper function to check if we're in development
export const isDevelopment = () => privateEnv.NODE_ENV === "development";
export const isProduction = () => privateEnv.NODE_ENV === "production";

// Validation function for required environment variables
export function validateRequiredEnvVars(requiredVars: string[]) {
  const missing = requiredVars.filter((varName) => {
    const value = import.meta.env[varName];
    return !value || value.trim() === "";
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}

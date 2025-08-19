/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  // Public environment variables (accessible in client-side code)
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_BETTER_UI_URL: string;
  readonly PUBLIC_GITHUB_URL: string;
  readonly PUBLIC_X_URL: string;

  readonly NODE_ENV: "development" | "production" | "test";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

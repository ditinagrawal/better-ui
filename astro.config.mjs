// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // FIXME: Once starlight supports Zod 4 we can probably remove this.
      // Zod should normally be imported from astro, but I want my code to use its own zod version to reflect the version used in the shadcn components.
      noExternal: ["zod"],
    },
  },

  integrations: [
    react(),
    starlight({
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: "Docs",
              link: "/getting-started/installation",
            },
            {
              label: "Components",
              link: "/components",
            },
            {
              label: "Changelog",
              link: "/changelog",
            },
          ],
          footerText:
            "Built & designed by [@ditinagrawal](https://portfolio.ditin.in). The source code is available on [GitHub](https://github.com/ditinagrawal/better-ui).",
        }),
      ],
      editLink: {
        baseUrl: "https://github.com/ditinagrawal/better-ui/tree/main",
      },
      title: "Better Shadcn Components Every Week",
      logo: {
        dark: "./src/assets/dark.svg",
        light: "./src/assets/light.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "x.com",
          label: "X",
          href: "https://x.com/ditinagrawal",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ditinagrawal/better-ui",
        },
      ],
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
          ],
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
        {
          label: "Contributing",
          items: [
            { label: "How to Contribute", slug: "contributing" },
            {
              label: "Thank You",
              slug: "contributing/thank-you",
            },
          ],
        },
      ],
    }),
  ],
});

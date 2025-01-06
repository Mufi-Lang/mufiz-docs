import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://mufi-lang.github.io",
  base: "mufiz-docs",
  integrations: [
    starlight({
      title: "Mufi-Lang",
      logo: {
        src: "./src/assets/Mufi.svg",
      },
      social: {
        github: "https://github.com/Mufi-Lang/MufiZ",
      },
      sidebar: [
        {
          label: "[home] Home",
          link: "/",
        },
        {
          label: "[rocket] Installation",
          autogenerate: {
            directory: "installation",
          },
        },
        {
          label: "[box] Reference",
          autogenerate: {
            directory: "ref",
          },
        },
        {
          label: "[book] Standard Library",
          autogenerate: {
            directory: "std",
          },
        },
      ],
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Pagination: "./src/components/Pagination.astro",
        Hero: "./src/components/Hero.astro",
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      customCss: [
        "@fontsource-variable/space-grotesk/index.css",
        "@fontsource/space-mono/400.css",
        "@fontsource/space-mono/700.css",
        "./src/styles/theme.css",
      ],
      expressiveCode: {
        themes: ["github-dark"],
      },
      pagination: false,
      lastUpdated: true,
    }),
  ],
  output: "static",
});

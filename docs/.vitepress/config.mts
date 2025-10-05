import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "#PPCC25 - Custom Connectors Masterclass",
  base: "/ppcc25-cc-masterclass/",
  description: "#PPCC25 - Custom Connectors Masterclass workshop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Lab 01", link: "/lab-01/" },
          { text: "Lab 02", link: "/lab-02/" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/microsoft/ppcc25-cc-masterclass",
      },
    ],
  },
});

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "#PPCC25",
  base: "/ppcc25-cc-masterclass/",
  description: "#PPCC25 - Custom Connectors Masterclass",
  head: [["link", { rel: "icon", href: "/ppcc25-cc-masterclass/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Labs",
        items: [
          { text: "Lab 00", link: "/lab-00/" },
          { text: "Lab 01", link: "/lab-01/" },
          { text: "Lab 02", link: "/lab-02/" },
          { text: "Lab 03", link: "/lab-03/" },
          { text: "Lab 04", link: "/lab-04/" },
        ],
      },
      { text: "Resources", link: "/resources" },
    ],

    sidebar: [
      { text: "Home", link: "/" },
      {
        text: "Labs",
        items: [
          { text: "Lab 00", link: "/lab-00/" },
          { text: "Lab 01", link: "/lab-01/" },
          { text: "Lab 02", link: "/lab-02/" },
          { text: "Lab 03", link: "/lab-03/" },
          { text: "Lab 04", link: "/lab-04/" },
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

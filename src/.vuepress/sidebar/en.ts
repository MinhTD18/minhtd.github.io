import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    // {
    //   icon: "discover",
    //   text: "Demo",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "About",
      link: "about"
    },
    // "intro",
    // "slides",
  ],
});

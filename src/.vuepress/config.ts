import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    [
      "vuepress-plugin-blog-multidir",
      {
        postsDir: {
          // Specify the directory path where your posts are located
          // This can be relative to the config file or an absolute path
          directory: "../posts",
          // Exclude posts with "hidden: true" in their front matter from the home page
          frontmatter: { hidden: { $ne: true } }
        }
      }
    ]
  ],
});

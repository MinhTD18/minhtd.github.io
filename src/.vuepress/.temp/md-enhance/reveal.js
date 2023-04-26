import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/Users/minhtd/Desktop/Blogs/vuepress_hope_blog/my_blogs/node_modules/vuepress-plugin-md-enhance/lib/client/reveal/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];

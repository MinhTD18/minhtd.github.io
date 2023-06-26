import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Posts",
    icon: "article",
    prefix: "/posts/",
    children: [
      {
        text: "Articles", icon: "article", children: [
          { text: "Python custom formatting", icon: "read", link: "python-custom-formatting.html" },
          { text: "How to create a simple todo list with FastAPI", icon: "read", link: "how-to-create-a-simple-todolist-with-fastapi.html" },
          { text: "Moving a git branch to a new base", icon: "read", link: "moving-a-git-branch-to-a-new-base.html" },
          { text: "Python developer career path", icon: "read", link: "python-developer-career-path.html" },
          { text: "AWS introduction", icon: "read", link: "aws-introduction.html" },
          { text: "Building a simple infrastructure in AWS", icon: "read", link: "aws-build-a-simple-infrastructure.html" },
          { text: "Essential mindset for frontend developer", icon: "read", link: "essential-mindset-for-frontend-developer.html" },
          { text: "AWS TIPS I WISH I'D KNOWN BEFORE I STARTED", icon: "read", link: "aws-tips.html" },
          // { text: "Markdown example", icon: "read", link: "markdown.html" },
        ]
      },
    ],
  },
  {
    text: "About", 
    link: "about.html" 
  }
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
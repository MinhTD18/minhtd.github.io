module.exports = {
  title: "Home",
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/all_posts/' },
      { text: 'About', link: '/about/' },
    ],
  },
  plugins: [
    ["vuepress-plugin-code-copy", {
        backgroundTransition: true,
        successText: 'Copied!', 
        backgroundTransition: true,
        }
    ]
  ],
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  markdown: {
    config: md => {
      md.renderer.rules.heading_open = (tokens, idx) => {
        const level = tokens[idx].hLevel;
        const text = tokens[idx + 1].content;
        return `<h${level}><img src="/path/to/your-image-file.png" alt="${text}" /></h${level}>`;
      };
    }
  }
}

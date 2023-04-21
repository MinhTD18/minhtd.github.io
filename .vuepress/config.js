module.exports = {
  title: "Minh's blog",
  description: 'This is a blog about web app knowledge',
  // locales: {
  //   '/vi': {
  //     lang: 'vi-VN',
  //     title: 'Blog của Minh',
  //     description: 'Mô tả tiếng việt',
  //   },
  //   '/en': {
  //     lang: 'en-EN',
  //     title: 'Blog',
  //     description: 'Mô tả tiếng anh',
  //   },
  // },
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      // { text: 'Youtube', link: 'https://youtube.com' },
    ],
  },
  dest: 'docs',
}

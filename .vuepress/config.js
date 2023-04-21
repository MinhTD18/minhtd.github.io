module.exports = {
  title: "MinhTD's blog",
  description: "Developing web apps is like creating a virtual world where anything is possible. It's the perfect blend of creativity and technical expertise, and the possibilities are endless.",
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

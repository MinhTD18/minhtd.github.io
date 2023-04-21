module.exports = {
  title: 'Blog của Minh',
  description: 'Đây là blog của Minh chứa một vài kiến thức về web app',
  locales: {
    '/vi': {
      lang: 'vi-VN',
      title: 'Blog của Minh',
      description: 'Mô tả tiếng việt',
    },
    '/en': {
      lang: 'en-EN',
      title: 'Blog',
      description: 'Mô tả tiếng anh',
    },
  },
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Giới Thiệu', link: '/about/' },
      { text: 'Youtube', link: 'https://youtube.com' },
    ],
  },
  dest: 'docs',
}

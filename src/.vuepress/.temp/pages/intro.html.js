export const data = JSON.parse("{\"key\":\"v-184f4da6\",\"path\":\"/intro.html\",\"title\":\"About me\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"info\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"About me Place your introduction and profile here.\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"intro.md\",\"excerpt\":\"<h1> About me</h1>\\n<p>Place your introduction and profile here.</p>\\n\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

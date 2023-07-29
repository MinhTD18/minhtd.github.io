export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Guide":{"path":"/category/guide/","keys":["v-ca65d0f6","v-160dd8fc","v-58c8628a","v-1a48e06b","v-4675065a","v-34003d17","v-1c936a17","v-0e271f74"]}}}},"tag":{"/":{"path":"/tag/","map":{"AWS":{"path":"/tag/aws/","keys":["v-ca65d0f6","v-160dd8fc","v-1a48e06b","v-4675065a"]},"Frontend":{"path":"/tag/frontend/","keys":["v-58c8628a"]},"Python":{"path":"/tag/python/","keys":["v-34003d17","v-0e271f74"]},"FastAPI":{"path":"/tag/fastapi/","keys":["v-34003d17"]},"Git":{"path":"/tag/git/","keys":["v-1c936a17"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });



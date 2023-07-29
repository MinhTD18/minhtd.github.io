export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-ca65d0f6","v-160dd8fc","v-58c8628a","v-22a39d25","v-1a48e06b","v-4675065a","v-34003d17","v-1c936a17","v-0e271f74","v-44da3324"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-ca65d0f6","v-160dd8fc","v-58c8628a","v-22a39d25","v-1a48e06b","v-4675065a","v-34003d17","v-1c936a17","v-0e271f74","v-44da3324"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });


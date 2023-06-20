import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h as h$3, inject, getCurrentInstance, camelize, capitalize, Transition, resolveComponent, watch, nextTick, onUnmounted, toRef, TransitionGroup, provide, useSSRContext, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isLinkMailto, isLinkTel, isLinkExternal, isPlainObject, ensureEndingSlash, removeEndingSlash } from "@vuepress/shared";
import { useElementSize, useWindowSize, useWindowScroll, useStyleTag, useClipboard, useEventListener, useStorage, useDebounceFn, useMutationObserver, useFullscreen, useScrollLock, useToggle, useThrottleFn, usePreferredDark, useSessionStorage, onClickOutside } from "@vueuse/core";
import "ts-debounce";
import { useRouter, RouterLink, useRoute, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { compareSync } from "bcrypt-ts/browser";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-c588c54d.js"
  ).then(({ data }) => data),
  // path: /about.html
  "v-22a39d25": () => import(
    /* webpackChunkName: "v-22a39d25" */
    "./assets/about.html-80f1d88b.js"
  ).then(({ data }) => data),
  // path: /posts/aws-build-a-simple-infrastructure.html
  "v-1a48e06b": () => import(
    /* webpackChunkName: "v-1a48e06b" */
    "./assets/aws-build-a-simple-infrastructure.html-6b811992.js"
  ).then(({ data }) => data),
  // path: /posts/aws-introduction.html
  "v-4675065a": () => import(
    /* webpackChunkName: "v-4675065a" */
    "./assets/aws-introduction.html-95d7cdf4.js"
  ).then(({ data }) => data),
  // path: /posts/essential-mindset-for-frontend-developers.html
  "v-58c8628a": () => import(
    /* webpackChunkName: "v-58c8628a" */
    "./assets/essential-mindset-for-frontend-developers.html-bd8662b2.js"
  ).then(({ data }) => data),
  // path: /posts/how-to-create-a-simple-todolist-with-fastapi.html
  "v-34003d17": () => import(
    /* webpackChunkName: "v-34003d17" */
    "./assets/how-to-create-a-simple-todolist-with-fastapi.html-650cea4d.js"
  ).then(({ data }) => data),
  // path: /posts/moving-a-git-branch-to-a-new-base.html
  "v-1c936a17": () => import(
    /* webpackChunkName: "v-1c936a17" */
    "./assets/moving-a-git-branch-to-a-new-base.html-30b10a87.js"
  ).then(({ data }) => data),
  // path: /posts/python-custom-formatting.html
  "v-0e271f74": () => import(
    /* webpackChunkName: "v-0e271f74" */
    "./assets/python-custom-formatting.html-64caf435.js"
  ).then(({ data }) => data),
  // path: /posts/python-developer-career-path.html
  "v-44da3324": () => import(
    /* webpackChunkName: "v-44da3324" */
    "./assets/python-developer-career-path.html-88858460.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-73b5c5c1.js"
  ).then(({ data }) => data),
  // path: /posts/
  "v-e1e3da16": () => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-527a47af.js"
  ).then(({ data }) => data),
  // path: /category/
  "v-5bc93818": () => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-ed11decb.js"
  ).then(({ data }) => data),
  // path: /tag/
  "v-744d024e": () => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-22178110.js"
  ).then(({ data }) => data),
  // path: /article/
  "v-e52c881c": () => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-08a0f3aa.js"
  ).then(({ data }) => data),
  // path: /star/
  "v-154dc4c4": () => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-23883c45.js"
  ).then(({ data }) => data),
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-599e0309.js"
  ).then(({ data }) => data),
  // path: /category/guide/
  "v-ac0c2a6a": () => import(
    /* webpackChunkName: "v-ac0c2a6a" */
    "./assets/index.html-ed0b7284.js"
  ).then(({ data }) => data),
  // path: /tag/aws/
  "v-b315dfc0": () => import(
    /* webpackChunkName: "v-b315dfc0" */
    "./assets/index.html-a8a7a6d0.js"
  ).then(({ data }) => data),
  // path: /tag/frontend/
  "v-1b3ae9cf": () => import(
    /* webpackChunkName: "v-1b3ae9cf" */
    "./assets/index.html-166c723d.js"
  ).then(({ data }) => data),
  // path: /tag/python/
  "v-245f5676": () => import(
    /* webpackChunkName: "v-245f5676" */
    "./assets/index.html-858a3265.js"
  ).then(({ data }) => data),
  // path: /tag/fastapi/
  "v-72723002": () => import(
    /* webpackChunkName: "v-72723002" */
    "./assets/index.html-2e426471.js"
  ).then(({ data }) => data),
  // path: /tag/git/
  "v-b310d42a": () => import(
    /* webpackChunkName: "v-b310d42a" */
    "./assets/index.html-ae2b7430.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-cd97d14b.js"
  )),
  // path: /about.html
  "v-22a39d25": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-22a39d25" */
    "./assets/about.html-23b05501.js"
  )),
  // path: /posts/aws-build-a-simple-infrastructure.html
  "v-1a48e06b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1a48e06b" */
    "./assets/aws-build-a-simple-infrastructure.html-fd105bf0.js"
  )),
  // path: /posts/aws-introduction.html
  "v-4675065a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4675065a" */
    "./assets/aws-introduction.html-d7a34416.js"
  )),
  // path: /posts/essential-mindset-for-frontend-developers.html
  "v-58c8628a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-58c8628a" */
    "./assets/essential-mindset-for-frontend-developers.html-52a12931.js"
  )),
  // path: /posts/how-to-create-a-simple-todolist-with-fastapi.html
  "v-34003d17": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-34003d17" */
    "./assets/how-to-create-a-simple-todolist-with-fastapi.html-40f3a9ce.js"
  )),
  // path: /posts/moving-a-git-branch-to-a-new-base.html
  "v-1c936a17": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1c936a17" */
    "./assets/moving-a-git-branch-to-a-new-base.html-aba3d908.js"
  )),
  // path: /posts/python-custom-formatting.html
  "v-0e271f74": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0e271f74" */
    "./assets/python-custom-formatting.html-2ba3bbae.js"
  )),
  // path: /posts/python-developer-career-path.html
  "v-44da3324": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-44da3324" */
    "./assets/python-developer-career-path.html-d5b2918a.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  )),
  // path: /posts/
  "v-e1e3da16": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-6e0c39df.js"
  )),
  // path: /category/
  "v-5bc93818": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-d8e9a019.js"
  )),
  // path: /tag/
  "v-744d024e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-dbcf72de.js"
  )),
  // path: /article/
  "v-e52c881c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-6fe96b5b.js"
  )),
  // path: /star/
  "v-154dc4c4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-e9483f18.js"
  )),
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-0e2d15e2.js"
  )),
  // path: /category/guide/
  "v-ac0c2a6a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ac0c2a6a" */
    "./assets/index.html-67b80d71.js"
  )),
  // path: /tag/aws/
  "v-b315dfc0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b315dfc0" */
    "./assets/index.html-8353f060.js"
  )),
  // path: /tag/frontend/
  "v-1b3ae9cf": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1b3ae9cf" */
    "./assets/index.html-fcd34804.js"
  )),
  // path: /tag/python/
  "v-245f5676": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-245f5676" */
    "./assets/index.html-31390da0.js"
  )),
  // path: /tag/fastapi/
  "v-72723002": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-72723002" */
    "./assets/index.html-73304375.js"
  )),
  // path: /tag/git/
  "v-b310d42a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b310d42a" */
    "./assets/index.html-c794ecac.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var usePageHeadTitle = () => {
  const pageHeadTitle = inject(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page) => page.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h$3(pageComponent.value)
    ) : (
      // fallback content
      h$3(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a$1 = freb(fleb, 2), fl$1 = _a$1[0], revfl = _a$1[1];
fl$1[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$5 = 0; i$5 < 32768; ++i$5) {
  var x$2 = (i$5 & 43690) >>> 1 | (i$5 & 21845) << 1;
  x$2 = (x$2 & 52428) >>> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >>> 4 | (x$2 & 3855) << 4;
  rev[i$5] = ((x$2 & 65280) >>> 8 | (x$2 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le2 = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le2[i2] = le2[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le2[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le2[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$5 = 0; i$5 < 144; ++i$5)
  flt[i$5] = 8;
for (var i$5 = 144; i$5 < 256; ++i$5)
  flt[i$5] = 9;
for (var i$5 = 256; i$5 < 280; ++i$5)
  flt[i$5] = 7;
for (var i$5 = 280; i$5 < 288; ++i$5)
  flt[i$5] = 8;
var fdt = new u8(32);
for (var i$5 = 0; i$5 < 32; ++i$5)
  fdt[i$5] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p, m2) {
  var o2 = p / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p & 7) & m2;
};
var bits16 = function(d2, p) {
  var o2 = p / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st) {
  var sl2 = dat.length;
  if (!sl2 || st && st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st;
  var noSt = !st || st.i;
  if (!st)
    st = {};
  if (!buf)
    buf = new u8(sl2 * 3);
  var cbuf = function(l3) {
    var bl2 = buf.length;
    if (l3 > bl2) {
      var nbuf = new u8(Math.max(bl2 * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl2 * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl2) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl2 = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl2);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl2; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl$1[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const c$3 = ({ name: e2 = "", color: n2 = "currentColor" }, { slots: t2 }) => {
  var o2;
  return h$3("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${e2} icon` }, (o2 = t2.default) == null ? void 0 : o2.call(t2));
};
c$3.displayName = "IconBase";
const k$4 = ({ size: e2 = 48, stroke: n2 = 4, wrapper: t2 = true, height: o2 = 2 * e2 }) => {
  const s2 = h$3("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$3("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$3("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h$3("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$3("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return t2 ? h$3("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${o2}px` }, s2) : s2;
};
k$4.displayName = "LoadingIcon";
const F$3 = (e2, { slots: n2 }) => {
  var t2;
  return ((t2 = n2.default) == null ? void 0 : t2.call(n2)) || null;
}, I = () => h$3(c$3, { name: "github" }, () => h$3("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
I.displayName = "GitHubIcon";
const x$1 = () => h$3(c$3, { name: "gitlab" }, () => h$3("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
x$1.displayName = "GitLabIcon";
const L$2 = () => h$3(c$3, { name: "gitee" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
L$2.displayName = "GiteeIcon";
const C$4 = () => h$3(c$3, { name: "bitbucket" }, () => h$3("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
C$4.displayName = "BitbucketIcon";
const z$2 = () => h$3(c$3, { name: "source" }, () => h$3("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
z$2.displayName = "SourceIcon";
const d$2 = Array.isArray, q$2 = (e2) => typeof e2 == "function", Y$2 = (e2) => typeof e2 == "string";
var h$2 = (e2) => /^(https?:)?\/\//.test(e2), u$2 = (e2) => Object.prototype.toString.call(e2) === "[object Object]";
const oe = (e2, n2) => {
  const t2 = n2 ? n2._instance : getCurrentInstance();
  return u$2(t2 == null ? void 0 : t2.appContext.components) && (e2 in t2.appContext.components || camelize(e2) in t2.appContext.components || capitalize(camelize(e2)) in t2.appContext.components);
};
function ae() {
  const e2 = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e2.value = true;
  }), e2;
}
function ce$2(e2) {
  return ae(), computed(() => !!e2());
}
const $$2 = () => ce$2(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), le = () => {
  const e2 = $$2();
  return computed(() => e2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, ue$1 = (e2) => {
  const n2 = useRouteLocale();
  return computed(() => e2[n2.value]);
}, Ee$2 = (e2 = "") => {
  if (e2) {
    if (typeof e2 == "number")
      return new Date(e2);
    const n2 = Date.parse(e2.toString());
    if (!Number.isNaN(n2))
      return new Date(n2);
  }
  return null;
}, Se = (e2, n2) => {
  let t2 = 1;
  for (let o2 = 0; o2 < e2.length; o2++)
    t2 += e2.charCodeAt(o2), t2 += t2 << 10, t2 ^= t2 >> 6;
  return t2 += t2 << 3, t2 ^= t2 >> 11, t2 % n2;
}, a$3 = (e2) => typeof e2 == "string", N = (e2, n2) => a$3(e2) && e2.startsWith(n2), Le$1 = (e2, n2) => a$3(e2) && e2.endsWith(n2), A$3 = Object.entries, g$4 = Object.keys, f$4 = (e2, ...n2) => {
  if (n2.length === 0)
    return e2;
  const t2 = n2.shift() || null;
  return t2 && A$3(t2).forEach(([o2, s2]) => {
    o2 === "__proto__" || o2 === "constructor" || (u$2(e2[o2]) && u$2(s2) ? f$4(e2[o2], s2) : d$2(s2) ? e2[o2] = [...s2] : u$2(s2) ? e2[o2] = { ...s2 } : e2[o2] = t2[o2]);
  }), f$4(e2, ...n2);
}, _$2 = (e2) => u$2(e2) && a$3(e2.name), Me$1 = (e2, n2 = false) => e2 ? d$2(e2) ? e2.map((t2) => a$3(t2) ? { name: t2 } : _$2(t2) ? t2 : null).filter((t2) => t2 !== null) : a$3(e2) ? [{ name: e2 }] : _$2(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], v$1 = (e2, n2) => {
  if (e2) {
    if (d$2(e2) && e2.every(a$3))
      return e2;
    if (a$3(e2))
      return [e2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, $e$1 = (e2) => v$1(e2, "category"), Ne$1 = (e2) => v$1(e2, "tag"), _e$1 = (e2) => N(e2, "/");
let je$1 = class je {
  constructor() {
    this.messageElements = {};
    const n2 = "message-container", t2 = document.getElementById(n2);
    t2 ? this.containerElement = t2 : (this.containerElement = document.createElement("div"), this.containerElement.id = n2, document.body.appendChild(this.containerElement));
  }
  pop(n2, t2 = 2e3) {
    const o2 = document.createElement("div"), s2 = Date.now();
    return o2.className = "message move-in", o2.innerHTML = n2, this.containerElement.appendChild(o2), this.messageElements[s2] = o2, t2 > 0 && setTimeout(() => {
      this.close(s2);
    }, t2), s2;
  }
  close(n2) {
    if (n2) {
      const t2 = this.messageElements[n2];
      t2.classList.remove("move-in"), t2.classList.add("move-out"), t2.addEventListener("animationend", () => {
        t2.remove(), delete this.messageElements[n2];
      });
    } else
      g$4(this.messageElements).forEach((t2) => this.close(Number(t2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
const j$2 = /#.*$/u, T$4 = (e2) => {
  const n2 = j$2.exec(e2);
  return n2 ? n2[0] : "";
}, b$4 = (e2) => decodeURI(e2).replace(j$2, "").replace(/(index)?\.(md|html)$/, ""), Te = (e2, n2) => {
  if (n2 === void 0)
    return false;
  const t2 = b$4(e2.path), o2 = b$4(n2), s2 = T$4(n2);
  return s2 ? s2 === e2.hash && (!o2 || t2 === o2) : t2 === o2;
};
const Re$1 = (e2) => {
  const n2 = Buffer.from(e2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(n2, true)));
}, We$2 = (e2) => h$2(e2) ? e2 : `https://github.com/${e2}`, Oe$1 = (e2) => !h$2(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, B$2 = (e2, ...n2) => {
  const t2 = e2.resolve(...n2), o2 = t2.matched[t2.matched.length - 1];
  if (!(o2 != null && o2.redirect))
    return t2;
  const { redirect: s2 } = o2, r2 = q$2(s2) ? s2(t2) : s2, l2 = Y$2(r2) ? { path: r2 } : r2;
  return B$2(e2, { hash: t2.hash, query: t2.query, params: t2.params, ...l2 });
};
const badge = "";
const t$3 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h$3("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$3.displayName = "Badge";
const fontIcon = "";
var m$3 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"iconfont icon-"}${o2.icon}`;
    return n2.push(t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), g$4(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$3("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const l$3 = () => h$3(c$3, { name: "back-to-top" }, () => [h$3("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$3("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$3.displayName = "BackToTopIcon";
const balloon = "";
const backToTop = "";
var y$2 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 100 }, noProgress: Boolean }, setup(e2) {
  const l2 = usePageFrontmatter(), s2 = ue$1({ "/": { "backToTop": "Back to top" } }), a2 = ref(), { height: n2 } = useElementSize(a2), { height: p } = useWindowSize(), { y: t2 } = useWindowScroll(), u2 = computed(() => l2.value.backToTop !== false && t2.value > e2.threshold), c2 = computed(() => t2.value / (n2.value - p.value));
  return onMounted(() => {
    a2.value = document.body;
  }), () => h$3(Transition, { name: "fade" }, () => u2.value ? h$3("button", { type: "button", class: "back-to-top", "aria-label": s2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, [e2.noProgress ? null : h$3("svg", { class: "scroll-progress" }, h$3("circle", { cx: "50%", cy: "50%", r: "calc(50% - 2px)", style: { "stroke-dasharray": `${Math.PI * c2.value * 100}% ${Math.PI * 100}%` } })), h$3(l$3)]) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!oe("Badge"))
      app.component("Badge", t$3);
    if (!oe("FontIcon"))
      app.component("FontIcon", m$3);
  },
  setup: () => {
    useStyleTag(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h$3(y$2, {})
  ]
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
const autoCatalog = "";
var D$1 = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(c2, { slots: h2 }) {
  const f2 = ue$1({ "/": { "title": "Catalog" } }), O2 = usePageData(), g2 = useRouter(), T2 = useSiteData(), v2 = (i2) => {
    const u2 = i2["I"];
    return typeof u2 > "u" || u2;
  }, E2 = () => {
    const i2 = c2.base || O2.value.path.replace(/\/[^/]+$/, "/"), u2 = g2.getRoutes(), p = [];
    return u2.filter(({ meta: l2, path: e2 }) => {
      if (!N(e2, i2) || e2 === i2)
        return false;
      if (i2 === "/") {
        const t2 = g$4(T2.value.locales).filter((n2) => n2 !== "/");
        if (e2 === "/404.html" || t2.some((n2) => N(e2, n2)))
          return false;
      }
      return (Le$1(e2, ".html") && !Le$1(e2, "/index.html") || Le$1(e2, "/")) && v2(l2);
    }).map(({ path: l2, meta: e2 }) => {
      const t2 = l2.substring(i2.length).split("/").length;
      return { title: e2["t"] || "", icon: e2["i"], base: l2.replace(/\/[^/]+\/?$/, "/"), order: e2["O"] || null, level: Le$1(l2, "/") ? t2 - 1 : t2, path: l2 };
    }).filter(({ title: l2, level: e2 }) => typeof l2 == "string" && l2 && e2 <= c2.level).sort(({ title: l2, level: e2, path: t2, order: n2 }, { title: r2, level: o2, path: d2, order: s2 }) => e2 - o2 || (Le$1(t2, "/index.html") ? -1 : Le$1(d2, "/index.html") ? 1 : n2 === null ? s2 === null ? l2.localeCompare(r2) : s2 : s2 === null ? n2 : n2 > 0 ? s2 > 0 ? n2 - s2 : -1 : s2 < 0 ? n2 - s2 : 1)).forEach((l2) => {
      var e2;
      const { base: t2, level: n2 } = l2;
      switch (n2) {
        case 1:
          p.push(l2);
          break;
        case 2: {
          const r2 = p.find((o2) => o2.path === t2);
          r2 && (r2.children ?? (r2.children = [])).push(l2);
          break;
        }
        default: {
          const r2 = p.find((o2) => o2.path === t2.replace(/\/[^/]+\/$/, "/"));
          if (r2) {
            const o2 = (e2 = r2.children) == null ? void 0 : e2.find((d2) => d2.path === t2);
            o2 && (o2.children ?? (o2.children = [])).push(l2);
          }
        }
      }
    }), p;
  }, b2 = computed(() => E2());
  return () => h$3("div", { class: "auto-catalog-wrapper" }, [h$3("h2", { class: "main-title" }, f2.value.title), b2.value.map(({ children: i2 = [], icon: u2, path: p, title: l2 }, e2) => [h$3("h3", { id: l2, class: ["child-title", { "has-children": i2.length }] }, [h$3("a", { href: `#${l2}`, class: "header-anchor" }, "#"), h$3(RouterLink, { class: "catalog-title", to: p }, () => [c2.index ? `${e2 + 1}.` : null, u2 && h2.icon ? h2.icon({ icon: u2 }) : null, l2 || "Unknown"])]), i2.length ? h$3("ul", { class: "child-catalog-wrapper" }, i2.map(({ children: t2 = [], icon: n2, path: r2, title: o2 }, d2) => h$3("li", { class: "child-catalog-item" }, [h$3("div", { class: ["sub-title", { "has-children": t2.length }] }, [h$3("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h$3(RouterLink, { class: "catalog-title", to: r2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}` : null, n2 && h2.icon ? h2.icon({ icon: n2 }) : null, o2 || "Unknown"])]), t2.length ? h$3("div", { class: "sub-catalog-wrapper" }, t2.map(({ icon: s2, path: A2, title: L2 }, $2) => h$3(RouterLink, { class: "sub-catalog-item", to: A2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}.${$2 + 1}` : null, s2 && h2.icon ? h2.icon({ icon: s2 }) : null, L2 || "Unknown"]))) : null]))) : null])]);
} }), K$2 = defineClientConfig({ enhance: ({ app: c2 }) => {
  oe("AutoCatalog", c2) || c2.component("AutoCatalog", (h2) => h$3(D$1, h2, { icon: ({ icon: f2 }) => h$3(resolveComponent("HopeIcon"), { icon: f2 }) }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h$3("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$3("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$3("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$3("span", [
      svg,
      h$3("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$3(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$0OnaqIYv1SrMsmVcDoVeAu8fCY3Y16bB7aFNJcogrk4KjkmMZAQ1S"]}},"author":{"name":"MinhTD","url":"https://minhtd18.github.io"},"logo":"/logo.svg","repo":"https://github.com/MinhTD18/minhtd18.github.io","docsDir":"docs","blog":{"medias":{"Facebook":"https://www.facebook.com/minhnothing97/","GitHub":"https://github.com/MinhTD18","Gmail":"mailto:truongducminh1997@gmail.com","Linkedin":"https://www.linkedin.com/in/minhtd18"}},"locales":{"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"Posts","icon":"article","prefix":"/posts/","children":[{"text":"Articles","icon":"article","children":[{"text":"Python custom formatting","icon":"read","link":"python-custom-formatting.html"},{"text":"How to create a simple todo list with FastAPI","icon":"read","link":"how-to-create-a-simple-todolist-with-fastapi.html"},{"text":"Moving a git branch to a new base","icon":"read","link":"moving-a-git-branch-to-a-new-base.html"},{"text":"Python developer career path","icon":"read","link":"python-developer-career-path.html"},{"text":"AWS introduction","icon":"read","link":"aws-introduction.html"},{"text":"Building a simple infrastructure in AWS","icon":"read","link":"aws-build-a-simple-infrastructure.html"},{"text":"Essential mindset for frontend developer","icon":"read","link":"essential-mindset-for-frontend-developer.html"}]}]},{"text":"About","link":"about.html"}],"sidebar":{"/":["",{"text":"Articles","icon":"note","prefix":"posts/","children":"structure"},{"text":"About","link":"about"}]},"footer":"","displayFooter":false,"blog":{"description":"A Software Engineer"}}},"themeColor":{"blue":"#2196f3","red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f"},"fullscreen":true}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const giscus = "";
const i$4 = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "tr", "vi", "zh-CN", "zh-TW"], e$4 = { "provider": "Giscus", "lightTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.206/templates/giscus/light.css", "darkTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.206/templates/giscus/dark.css" }, k$3 = !!(e$4.repo && e$4.repoId && e$4.category && e$4.categoryId), { repo: T$3, repoId: w$1, category: C$3, categoryId: b$3 } = e$4;
var z$1 = defineComponent({ name: "GiscusComment", props: { darkmode: Boolean }, setup(s2) {
  const p = usePageFrontmatter(), u2 = usePageData(), n2 = ref(false), d2 = computed(() => {
    const t2 = usePageLang().value;
    if (i$4.includes(t2))
      return t2;
    const o2 = t2.split("-")[0];
    return i$4.includes(o2) ? o2 : "en";
  }), m2 = computed(() => {
    if (!k$3)
      return false;
    const t2 = e$4.comment !== false, o2 = p.value.comment;
    return !!o2 || t2 !== false && o2 !== false;
  }), c2 = computed(() => ({ repo: T$3, repoId: w$1, category: C$3, categoryId: b$3, lang: d2.value, theme: s2.darkmode ? e$4.darkTheme : e$4.lightTheme, mapping: e$4.mapping || "pathname", term: withBase(u2.value.path), inputPosition: e$4.inputPosition || "top", reactionsEnabled: e$4.reactionsEnabled === false ? "0" : "1", strict: e$4.strict === false ? "0" : "1", loading: e$4.lazyLoading === false ? "eager" : "lazy", emitMetadata: "0" }));
  return onMounted(async () => {
    await import("giscus"), n2.value = true;
  }), () => h$3("div", { class: ["giscus-wrapper", { "input-top": e$4.inputPosition !== "bottom" }], id: "comment", style: { display: m2.value ? "block" : "none" } }, n2.value ? h$3("giscus-widget", c2.value) : h$3(k$4));
} });
const i$3 = { "provider": "Giscus", "lightTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.206/templates/giscus/light.css", "darkTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.206/templates/giscus/dark.css" }.comment !== false, d$1 = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const o2 = usePageFrontmatter(), m2 = computed(() => o2.value.comment || i$3 && o2.value.comment !== false);
  return () => h$3(z$1, { darkmode: e2.darkmode, style: { display: m2.value ? "block" : "none" } });
} });
var l$2 = defineClientConfig({ enhance: ({ app: e2 }) => {
  e2.component("CommentService", d$1);
} });
const button = "";
const S$4 = 800, u$1 = 2e3, M = { "/": { "copy": "Copy code", "copied": "Copied", "hint": "Copied successfully" } }, n$2 = false, P$2 = ['.theme-hope-content div[class*="language-"] pre'], m$2 = false;
const l$1 = /* @__PURE__ */ new Map(), T$2 = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = ue$1(M), g2 = usePageData(), i2 = le();
  const y2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.type = "button", e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P$2.forEach((e2) => {
        document.querySelectorAll(e2).forEach(y2);
      }), o2();
    }, S$4);
  })), d2 = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l$1.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l$1.delete(t2);
      }, u$1);
      if (l$1.set(t2, c2), n$2)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m$2) && p(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d2(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d2(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m$2) && p();
    });
  });
};
var Y$1 = defineClientConfig({ setup: () => {
  T$2();
} });
const chart = "";
const f$3 = (t2, n2) => n2 === "json" ? JSON.parse(t2) : new Function(`let config,__chart_js_config__;
{
${t2}
__chart_js_config__=config;
}
return __chart_js_config__;`)();
var g$3 = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(t2) {
  const n2 = ref(), a2 = ref(), i2 = ref(true);
  return onMounted(async () => {
    const [{ default: r2 }] = await Promise.all([import("chart.js/auto"), new Promise((c2) => setTimeout(c2, 800))]);
    r2.defaults.maintainAspectRatio = false;
    const s2 = f$3(Re$1(t2.config), t2.type), l2 = a2.value.getContext("2d");
    new r2(l2, s2), i2.value = false;
  }), () => [t2.title ? h$3("div", { class: "chart-title" }, decodeURIComponent(t2.title)) : null, i2.value ? h$3(k$4, { class: "chart-loading", height: 192 }) : null, h$3("div", { ref: n2, class: "chart-wrapper", id: t2.id, style: { display: i2.value ? "none" : "block" } }, h$3("canvas", { ref: a2, height: 400 }))];
} });
const codeTabs = "";
const o$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$3 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: v2 }) {
  const l2 = ref(e2.active), u2 = ref([]), c2 = () => {
    if (e2.tabId) {
      const { title: t2, id: a2 = t2 } = e2.data[l2.value];
      o$2.value[e2.tabId] = a2;
    }
  }, b2 = (t2 = l2.value) => {
    l2.value = t2 < u2.value.length - 1 ? t2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (t2 = l2.value) => {
    l2.value = t2 > 0 ? t2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p = (t2, a2) => {
    if (t2.key === " " || t2.key === "Enter" ? (t2.preventDefault(), l2.value = a2) : t2.key === "ArrowRight" ? (t2.preventDefault(), b2()) : t2.key === "ArrowLeft" && (t2.preventDefault(), f2()), e2.tabId) {
      const { title: d2, id: i2 = d2 } = e2.data[l2.value];
      o$2.value[e2.tabId] = i2;
    }
  }, y2 = () => {
    if (e2.tabId) {
      const t2 = e2.data.findIndex(({ title: a2, id: d2 = a2 }) => o$2.value[e2.tabId] === d2);
      if (t2 !== -1)
        return t2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = y2(), watch(() => o$2.value[e2.tabId], (t2, a2) => {
      if (e2.tabId && t2 !== a2) {
        const d2 = e2.data.findIndex(({ title: i2, id: r2 = i2 }) => r2 === t2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => e2.data.length ? h$3("div", { class: "code-tabs" }, [h$3("div", { class: "code-tabs-nav", role: "tablist" }, e2.data.map(({ title: t2 }, a2) => {
    const d2 = a2 === l2.value;
    return h$3("button", { type: "button", ref: (i2) => {
      i2 && (u2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${e2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p(i2, a2) }, t2);
  })), e2.data.map(({ title: t2, id: a2 = t2 }, d2) => {
    var i2;
    const r2 = d2 === l2.value;
    return h$3("div", { class: ["code-tab", { active: r2 }], id: `codetab-${e2.id}-${d2}`, role: "tabpanel", "aria-expanded": r2 }, (i2 = v2[`tab${d2}`]) == null ? void 0 : i2.call(v2, { title: t2, value: a2, isActive: r2 }));
  })]) : null;
} });
const codeGroup = "";
const c$2 = ({ active: p = false }, { slots: u2 }) => {
  var e2;
  return h$3("div", { class: ["code-group-item", { active: p }], "aria-selected": p }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c$2.displayName = "CodeGroupItem";
const h$1 = defineComponent({ name: "CodeGroup", setup(p, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h$3("div", { class: "code-group" }, [h$3("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h$3("button", { type: "button", ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m2(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$1 = "";
const echarts = "";
const g$2 = (e2, i2, n2) => i2 === "js" ? new Function("myChart", `let width,height,option,__echarts_config__;
{
${e2}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n2) : { option: JSON.parse(e2) };
var f$2 = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const i2 = ref(true), n2 = ref();
  let t2;
  return useEventListener("resize", useDebounceFn(() => t2 == null ? void 0 : t2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((r2) => setTimeout(r2, 800))]).then(([r2]) => {
      t2 = r2.init(n2.value);
      const { option: a2, ...l2 } = g$2(Re$1(e2.config), e2.type, t2);
      t2.resize(l2), t2.setOption(a2), i2.value = false;
    });
  }), onUnmounted(() => {
    t2 == null || t2.dispose();
  }), () => [e2.title ? h$3("div", { class: "echarts-title" }, decodeURIComponent(e2.title)) : null, h$3("div", { class: "echarts-wrapper" }, [h$3("div", { ref: n2, class: "echarts-container", id: e2.id }), i2.value ? h$3(k$4, { class: "echarts-loading", height: 360 }) : null])];
} });
const figure = "";
const flowchart = "";
var f$1 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F$2 = { ...f$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, b$2 = { ...f$1, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, y$1 = { ...f$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, s$1 = { ant: F$2, vue: y$1, pie: b$2 }, g$1 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(l2) {
  let o2 = null;
  const p = ref(), n2 = ref(true), t2 = ref(1), r2 = computed(() => s$1[l2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${l2.preset}`), s$1.vue)), c2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(Re$1(l2.code)), t2.value = c2(window.innerWidth), n2.value = false, o2.draw(l2.id, { ...r2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = c2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(l2.id, { ...r2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h$3(k$4, { class: "flowchart-loading", height: 192 }) : null, h$3("div", { ref: p, class: ["flowchart-wrapper", l2.preset], id: l2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const o$1 = { useMaxWidth: false }, T$1 = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var g = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const n2 = ref(), t2 = ref(""), a2 = ref(false), s2 = computed(() => Re$1(e2.code)), f2 = async () => Promise.all([import("mermaid"), new Promise((r2) => setTimeout(r2, 800))]).then(async ([{ default: r2 }]) => {
    r2.initialize({ theme: "base", themeVariables: T$1(a2.value), flowchart: o$1, sequence: o$1, journey: o$1, gantt: o$1, er: o$1, pie: o$1, ...{}, startOnLoad: false }), t2.value = (await r2.render(e2.id, s2.value)).svg;
  });
  return onMounted(() => {
    const r2 = document.documentElement, i2 = () => r2.classList.contains("dark") || r2.getAttribute("data-theme") === "dark";
    a2.value = i2(), f2(), useMutationObserver(r2, () => {
      a2.value = i2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(a2, () => f2());
  }), () => h$3("div", { ref: n2, class: "mermaid-wrapper" }, t2.value ? h$3("div", { class: "mermaid-content", innerHTML: t2.value }) : h$3(k$4, { class: "mermaid-loading", height: 96 }));
} });
const reveal = "";
const o = () => import("reveal.js/plugin/highlight/highlight.esm.js"), t$2 = () => import("reveal.js/plugin/markdown/markdown.esm.js"), e$3 = () => import("reveal.js/plugin/math/math.esm.js"), r = () => import("reveal.js/plugin/notes/notes.esm.js"), a$2 = () => import("reveal.js/dist/reveal.esm.js"), i$2 = () => import("reveal.js/plugin/search/search.esm.js"), c$1 = () => import("reveal.js/plugin/zoom/zoom.esm.js");
const useReveal = () => [a$2(), t$2(), o(), e$3(), i$2(), r(), c$1()];
const index = "";
const leagueGothic = "";
const sourceSansPro = "";
var S$2 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const t2 = usePageFrontmatter(), s2 = ref(""), u2 = ref(true), d2 = ref();
  let i2 = null;
  const m2 = async (e2) => {
    const p = [new Promise((o2) => setTimeout(o2, 800)), ...useReveal()], [, c2, ...v2] = await Promise.all(p), n2 = new c2.default(e2, { plugins: v2.map(({ default: o2 }) => o2) });
    return await n2.initialize({ backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...t2.value.reveal || {}, embedded: t2.value.layout !== "Slide" }), n2.configure({ backgroundTransition: "slide" }), n2;
  };
  return onMounted(async () => {
    const e2 = d2.value;
    e2 && (s2.value = Re$1(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), i2 = await m2(e2), u2.value = false);
  }), onUnmounted(() => {
    i2 == null || i2.destroy();
  }), () => h$3("div", { class: "presentation-wrapper" }, [h$3("div", { ref: d2, class: ["reveal", "reveal-viewport"] }, h$3("div", { class: "slides", innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s2.value}<\/script></section>` })), u2.value ? h$3(k$4, { class: "reveal-loading", height: 400 }) : null]);
} });
const q$1 = () => h$3(c$3, { name: "back" }, () => h$3("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$1 = () => h$3(c$3, { name: "home" }, () => h$3("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), l = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
const playground = "";
var i$1 = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(r2) {
  return () => [h$3("div", { class: "playground-wrapper" }, [h$3("div", { class: "title-wrapper" }, [r2.title ? h$3("div", { class: "title" }, decodeURIComponent(r2.title)) : null, h$3("div", { class: "actions" }, [h$3("a", { class: "action", href: decodeURIComponent(r2.link), target: "_blank", innerHTML: l })])]), h$3("div", { class: "playground-container" }, h$3("iframe", { src: decodeURIComponent(r2.link) }))])];
} });
const tabs = "";
const v = useStorage("VUEPRESS_TAB_STORE", {});
var S$1 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(a2, { slots: o2 }) {
  const l2 = ref(a2.active), u2 = ref([]), s2 = () => {
    if (a2.tabId) {
      const { title: t2, id: e2 = t2 } = a2.data[l2.value];
      v.value[a2.tabId] = e2;
    }
  }, b2 = (t2 = l2.value) => {
    l2.value = t2 < u2.value.length - 1 ? t2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (t2 = l2.value) => {
    l2.value = t2 > 0 ? t2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p = (t2, e2) => {
    t2.key === " " || t2.key === "Enter" ? (t2.preventDefault(), l2.value = e2) : t2.key === "ArrowRight" ? (t2.preventDefault(), b2()) : t2.key === "ArrowLeft" && (t2.preventDefault(), f2()), s2();
  }, m2 = () => {
    if (a2.tabId) {
      const t2 = a2.data.findIndex(({ title: e2, id: i2 = e2 }) => v.value[a2.tabId] === i2);
      if (t2 !== -1)
        return t2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => v.value[a2.tabId], (t2, e2) => {
      if (a2.tabId && t2 !== e2) {
        const i2 = a2.data.findIndex(({ title: r2, id: n2 = r2 }) => n2 === t2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a2.data.length ? h$3("div", { class: "tab-list" }, [h$3("div", { class: "tab-list-nav", role: "tablist" }, a2.data.map(({ title: t2 }, e2) => {
    const i2 = e2 === l2.value;
    return h$3("button", { type: "button", ref: (r2) => {
      r2 && (u2.value[e2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${a2.id}-${e2}`, "aria-selected": i2, onClick: () => {
      l2.value = e2, s2();
    }, onKeydown: (r2) => p(r2, e2) }, t2);
  })), a2.data.map(({ title: t2, id: e2 = t2 }, i2) => {
    var r2;
    const n2 = i2 === l2.value;
    return h$3("div", { class: ["tab-item", { active: n2 }], id: `tab-${a2.id}-${i2}`, role: "tabpanel", "aria-expanded": n2 }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: t2, value: e2, isActive: n2 }));
  })]) : null;
} });
const tasklist = "";
const katex_min = "";
const katex = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", g$3);
    app.component("CodeTabs", S$3);
    if (!oe("CodeGroup", app))
      app.component("CodeGroup", h$1);
    if (!oe("CodeGroupItem", app))
      app.component("CodeGroupItem", c$2);
    app.component("ECharts", f$2);
    app.component("FlowChart", g$1);
    app.component("Mermaid", g);
    app.component("Presentation", S$2);
    app.component("Playground", i$1);
    app.component("Tabs", S$1);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-5ae6633c.js")));
  }
});
const photoswipe = "";
const photoSwipe = "";
const C$2 = ".theme-hope-content :not(a) > img:not([no-view])", P$1 = { "/": { "closeTitle": "Close", "downloadTitle": "Download Image", "fullscreenTitle": "Switch to full screen", "zoomTitle": "Zoom in/out", "arrowPrevTitle": "Prev (Arrow Left)", "arrowNextTitle": "Next (Arrow Right)" } }, k$2 = 800, L$1 = {}, x = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>', A$2 = (e2) => isString(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((l2) => Array.from(document.querySelectorAll(l2))).flat(), h = (e2) => new Promise((l2, m2) => {
  e2.complete ? l2({ type: "image", element: e2, src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt, msrc: e2.src }) : (e2.onload = () => l2(h(e2)), e2.onerror = (d2) => m2(d2));
}), H = () => {
  const { isSupported: e2, toggle: l2 } = useFullscreen(), m2 = ue$1(P$1), d2 = usePageData();
  let n2;
  const v2 = (a2) => {
    a2.on("uiRegister", () => {
      e2 && a2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
        l2();
      } }), a2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, o2) => {
        r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), o2.on("change", () => {
          r2.setAttribute("href", o2.currSlide.data.src);
        });
      } }), a2.ui.registerElement({ name: "bulletsIndicator", className: "photo-swipe-bullets-indicator", appendTo: "wrapper", onInit: (r2, o2) => {
        const t2 = [];
        let i2 = -1;
        for (let s2 = 0; s2 < o2.getNumItems(); s2++) {
          const c2 = document.createElement("div");
          c2.className = "photo-swipe-bullet", c2.onclick = (g2) => {
            o2.goTo(t2.indexOf(g2.target));
          }, t2.push(c2), r2.appendChild(c2);
        }
        o2.on("change", () => {
          i2 >= 0 && t2[i2].classList.remove("active"), t2[o2.currIndex].classList.add("active"), i2 = o2.currIndex;
        });
      } });
    });
  }, u2 = () => Promise.all([import("photoswipe"), nextTick().then(() => new Promise((a2) => setTimeout(a2, k$2)).then(() => A$2(C$2)))]).then(([{ default: a2 }, r2]) => {
    const o2 = r2.map((t2) => ({ html: x, element: t2, msrc: t2.src }));
    r2.forEach((t2, i2) => {
      const s2 = () => {
        n2 = new a2({ preloaderDelay: 0, showHideAnimationType: "zoom", ...m2.value, ...L$1, dataSource: o2, index: i2, ...{ closeOnVerticalDrag: true, wheelToZoom: false } }), v2(n2), n2.addFilter("thumbEl", () => t2), n2.addFilter("placeholderSrc", () => t2.src), n2.init();
      };
      t2.style.cursor = "zoom-in", t2.addEventListener("click", () => {
        s2();
      }), t2.addEventListener("keypress", ({ key: c2 }) => {
        c2 === "Enter" && s2();
      });
    }), r2.forEach((t2, i2) => {
      h(t2).then((s2) => {
        o2.splice(i2, 1, s2), n2 == null || n2.refreshSlideContent(i2);
      });
    });
  });
  onMounted(() => {
    useEventListener("wheel", () => {
      n2 == null || n2.close();
    }), u2(), watch(() => d2.value.path, () => u2());
  });
};
var b$1 = defineClientConfig({ setup: () => {
  H();
} });
const i = () => {
  const e2 = usePageData();
  return computed(() => e2.value.readingTime ?? null);
}, n$1 = typeof { "/": { "word": "About $word words", "less1Minute": "Less than 1 minute", "time": "About $time min" } } > "u" ? null : { "/": { "word": "About $word words", "less1Minute": "Less than 1 minute", "time": "About $time min" } }, a = (e2, o2) => {
  const { minutes: r2, words: l2 } = e2, { less1Minute: m2, word: c2, time: d2 } = o2;
  return { time: r2 < 1 ? m2 : d2.replace("$time", Math.round(r2).toString()), words: c2.replace("$word", l2.toString()) };
}, u = { words: "", time: "" }, s = () => n$1 ? ue$1(n$1) : computed(() => null), L = () => {
  if (typeof n$1 > "u")
    return computed(() => u);
  const e2 = i(), o2 = s();
  return computed(() => e2.value && o2.value ? a(e2.value, o2.value) : u);
};
const e$2 = () => useThemeData(), m$1 = () => useThemeLocaleData(), t$1 = () => computed(() => !!e$2().value.pure);
var e$1 = defineComponent({ name: "EmptyComponent", setup: () => () => null });
const sidebarData = { "/posts/": ["aws-introduction", "aws-build-a-simple-infrastructure", "how-to-create-a-simple-todolist-with-fastapi", "essential-mindset-for-frontend-developers", "python-developer-career-path", "moving-a-git-branch-to-a-new-base", "python-custom-formatting"] };
const Me = (e2) => {
  const { icon: l2 = "", color: t2, size: n2 } = e2, o2 = {};
  return t2 && (o2.color = t2), n2 && (o2.height = Number.isNaN(Number(n2)) ? n2 : `${n2}px`), isLinkHttp(l2) ? h$3("img", { class: "icon", src: l2, "no-view": "", style: o2 }) : _e$1(l2) ? h$3("img", { class: "icon", src: withBase(l2), "no-view": "", style: o2 }) : h$3(resolveComponent("FontIcon"), e2);
};
Me.displayName = "HopeIcon";
var O = Me, V$1 = ((e2) => (e2.type = "y", e2.title = "t", e2.shortTitle = "s", e2.icon = "i", e2.author = "a", e2.date = "d", e2.localizedDate = "l", e2.category = "c", e2.tag = "g", e2.isEncrypted = "n", e2.isOriginal = "o", e2.readingTime = "r", e2.excerpt = "e", e2.sticky = "u", e2.cover = "v", e2.index = "I", e2.order = "O", e2))(V$1 || {}), $e = ((e2) => (e2.article = "a", e2.home = "h", e2.slide = "s", e2.page = "p", e2))($e || {});
const j$1 = (e2, l2 = false) => {
  const t2 = useRouter(), { fullPath: n2, meta: o2, name: r2 } = B$2(t2, encodeURI(e2));
  return { text: !l2 && o2[V$1.shortTitle] ? o2[V$1.shortTitle] : o2[V$1.title] || e2, link: r2 === "404" ? e2 : n2, ...o2[V$1.icon] ? { icon: o2[V$1.icon] } : {} };
}, Ea = () => {
  const e2 = useRouter(), l2 = useRoute();
  return (t2) => {
    if (t2)
      if (_e$1(t2))
        l2.path !== t2 && e2.push(t2);
      else if (isLinkHttp(t2) || isLinkMailto(t2))
        window && window.open(t2);
      else {
        const n2 = l2.path.slice(0, l2.path.lastIndexOf("/"));
        e2.push(`${n2}/${encodeURI(t2)}`);
      }
  };
}, Be$1 = () => {
  const e2 = m$1(), l2 = usePageFrontmatter();
  return computed(() => {
    const { author: t2 } = l2.value;
    return t2 ? Me$1(t2) : t2 === false ? [] : Me$1(e2.value.author, false);
  });
}, Pa = () => {
  const e2 = usePageFrontmatter();
  return computed(() => $e$1(e2.value.category).map((l2) => {
    var t2, n2;
    return { name: l2, path: ((n2 = (t2 = inject(Symbol.for("categoryMap"))) == null ? void 0 : t2.value.map[l2]) == null ? void 0 : n2.path) || "" };
  }));
}, Oa = () => {
  const e2 = usePageFrontmatter();
  return computed(() => Ne$1(e2.value.tag).map((l2) => {
    var t2, n2;
    return { name: l2, path: ((n2 = (t2 = inject(Symbol.for("tagMap"))) == null ? void 0 : t2.value.map[l2]) == null ? void 0 : n2.path) || "" };
  }));
}, Va = () => {
  const e2 = usePageFrontmatter(), l2 = usePageData();
  return computed(() => {
    const t2 = Ee$2(e2.value.date);
    if (t2)
      return t2;
    const { createdTime: n2 } = l2.value.git || {};
    return n2 ? new Date(n2) : null;
  });
}, Ha = () => {
  const e2 = m$1(), l2 = usePageData(), t2 = usePageFrontmatter(), n2 = Be$1(), o2 = Pa(), r2 = Oa(), u2 = Va(), i$12 = i(), v2 = L(), d2 = computed(() => ({ author: n2.value, category: o2.value, date: u2.value, localizedDate: l2.value.localizedDate, tag: r2.value, isOriginal: t2.value.isOriginal || false, readingTime: i$12.value, readingTimeLocale: v2.value, pageview: "pageview" in t2.value ? t2.value.pageview : true })), c2 = computed(() => "pageInfo" in t2.value ? t2.value.pageInfo : "pageInfo" in e2.value ? e2.value.pageInfo : null);
  return { info: d2, items: c2 };
}, Q$1 = () => {
  const e2 = e$2(), l2 = ref(false), t2 = ref(false), n2 = () => {
    l2.value = window.innerWidth <= (e2.value.mobileBreakPoint || 719), t2.value = window.innerWidth >= (e2.value.pcBreakPoint || 1440);
  };
  return onMounted(() => {
    n2(), useEventListener("resize", n2, false), useEventListener("orientationchange", n2, false);
  }), { isMobile: l2, isPC: t2 };
}, ze$1 = Symbol(""), U = () => {
  const e2 = inject(ze$1);
  if (!e2)
    throw new Error("useDarkmode() is called without provider.");
  return e2;
}, Ra = (e2) => {
  const l2 = e$2(), t2 = usePreferredDark(), n2 = useStorage("vuepress-theme-hope-scheme", "auto"), o2 = computed(() => l2.value.darkmode || "switch"), r2 = computed(() => {
    const i2 = o2.value;
    return i2 === "disable" ? false : i2 === "enable" ? true : i2 === "auto" ? t2.value : i2 === "toggle" ? n2.value === "dark" : n2.value === "dark" || n2.value === "auto" && t2.value;
  }), u2 = computed(() => {
    const i2 = o2.value;
    return i2 === "switch" || i2 === "toggle";
  });
  e2.provide(ze$1, { canToggle: u2, config: o2, isDarkmode: r2, status: n2 }), Object.defineProperties(e2.config.globalProperties, { $isDarkmode: { get: () => r2.value } });
}, Fa = () => {
  const { isDarkmode: e2 } = U(), l2 = (t2 = e2.value) => document.documentElement.setAttribute("data-theme", t2 ? "dark" : "light");
  onMounted(() => {
    watch(e2, l2, { immediate: true });
  });
};
var A$1 = defineComponent({ name: "AutoLink", inheritAttrs: false, props: { config: { type: Object, required: true }, exact: Boolean, noExternalLinkIcon: Boolean }, emits: ["focusout"], setup(e2, { attrs: l2, emit: t2, slots: n2 }) {
  const o2 = useRoute(), r2 = useSiteData(), u2 = toRef(e2, "config"), i2 = computed(() => isLinkHttp(u2.value.link)), v2 = computed(() => isLinkMailto(u2.value.link) || isLinkTel(u2.value.link)), d2 = computed(() => v2.value ? void 0 : u2.value.target || (i2.value ? "_blank" : void 0)), c2 = computed(() => d2.value === "_blank"), h2 = computed(() => !i2.value && !v2.value && !c2.value), L2 = computed(() => v2.value ? void 0 : u2.value.rel || (c2.value ? "noopener noreferrer" : void 0)), f2 = computed(() => u2.value.ariaLabel || u2.value.text), S2 = computed(() => {
    if (e2.exact)
      return false;
    const g2 = g$4(r2.value.locales);
    return g2.length ? g2.every((B2) => B2 !== u2.value.link) : u2.value.link !== "/";
  }), M2 = computed(() => h2.value ? u2.value.activeMatch ? new RegExp(u2.value.activeMatch).test(o2.path) : S2.value ? N(o2.path, u2.value.link) : o2.path === u2.value.link : false);
  return () => {
    var g2, B2, z2;
    const { text: D2, icon: H2, link: R2 } = u2.value;
    return h2.value ? h$3(RouterLink, { to: R2, "aria-label": f2.value, ...l2, class: ["nav-link", { active: M2.value }, l2.class], onFocusout: () => t2("focusout") }, () => {
      var b2, p, F2;
      return ((b2 = n2.default) == null ? void 0 : b2.call(n2)) || [((p = n2.before) == null ? void 0 : p.call(n2)) || h$3(O, { icon: H2 }), D2, (F2 = n2.after) == null ? void 0 : F2.call(n2)];
    }) : h$3("a", { href: R2, rel: L2.value, target: d2.value, "aria-label": f2.value, ...l2, class: ["nav-link", l2.class], onFocusout: () => t2("focusout") }, ((g2 = n2.default) == null ? void 0 : g2.call(n2)) || [((B2 = n2.before) == null ? void 0 : B2.call(n2)) || h$3(O, { icon: H2 }), D2, e2.noExternalLinkIcon ? null : h$3(ExternalLinkIcon), (z2 = n2.after) == null ? void 0 : z2.call(n2)]);
  };
} });
const G$1 = (e2, l2, t2 = false) => "activeMatch" in l2 ? new RegExp(l2.activeMatch).test(e2.path) : Te(e2, l2.link) ? true : l2.children && !t2 ? l2.children.some((n2) => G$1(e2, n2)) : false, xe$2 = (e2, l2) => l2.type === "group" ? l2.children.some((t2) => t2.type === "group" ? xe$2(e2, t2) : t2.type === "page" && G$1(e2, t2, true)) || "prefix" in l2 && Te(e2, l2.prefix) : false, Ne = (e2, l2) => isString(e2.link) ? h$3(A$1, { ...l2, config: e2 }) : h$3("p", l2, [h$3(O, { icon: e2.icon }), e2.text]), De$1 = (e2) => {
  const l2 = useRoute();
  return e2 ? h$3("ul", { class: "sidebar-sub-headers" }, e2.map((t2) => {
    const n2 = G$1(l2, t2, true);
    return h$3("li", { class: "sidebar-sub-header" }, [Ne(t2, { class: ["sidebar-link", "heading", { active: n2 }] }), De$1(t2.children)]);
  })) : null;
}, ce$1 = (e2 = "", l2 = "") => _e$1(l2) ? l2 : `${ensureEndingSlash(e2)}${l2}`, _a = (e2, l2) => {
  const t2 = usePageData();
  return { type: "heading", text: e2.title, link: `${t2.value.path}#${e2.slug}`, children: ve$1(e2.children, l2) };
}, ve$1 = (e2, l2) => l2 > 0 ? e2.map((t2) => _a(t2, l2 - 1)) : [], Ee$1 = (e2) => {
  const l2 = usePageData();
  return ve$1(l2.value.headers, e2);
}, pe$1 = (e2, l2, t2 = "") => {
  const n2 = usePageData(), o2 = (r2, u2 = t2) => {
    var i2;
    const v2 = isString(r2) ? j$1(ce$1(u2, r2)) : r2.link ? { ...r2, ...isLinkExternal(r2.link) ? {} : { link: j$1(ce$1(u2, r2.link)).link } } : r2;
    if ("children" in v2) {
      const d2 = ce$1(u2, v2.prefix), c2 = v2.children === "structure" ? sidebarData[d2] : v2.children;
      return { type: "group", ...v2, prefix: d2, children: c2.map((h2) => o2(h2, d2)) };
    }
    return { type: "page", ...v2, children: v2.link === n2.value.path ? ve$1(((i2 = n2.value.headers[0]) == null ? void 0 : i2.level) === 1 ? n2.value.headers[0].children : n2.value.headers, l2) : [] };
  };
  return e2.map((r2) => o2(r2));
}, ja = (e2, l2) => {
  const t2 = usePageData(), n2 = g$4(e2).sort((o2, r2) => r2.length - o2.length);
  for (const o2 of n2)
    if (N(decodeURI(t2.value.path), o2)) {
      const r2 = e2[o2];
      return r2 ? pe$1(r2 === "structure" ? sidebarData[o2] : r2 === "heading" ? Ee$1(l2) : r2, l2, o2) : [];
    }
  return console.warn(`${t2.value.path} is missing sidebar config.`), [];
}, Ga = () => {
  const e2 = useRouteLocale(), l2 = usePageFrontmatter(), t2 = m$1(), n2 = l2.value.home ? false : l2.value.sidebar ?? t2.value.sidebar ?? "structure", o2 = l2.value.headerDepth ?? t2.value.headerDepth ?? 2;
  return n2 === false ? [] : n2 === "heading" ? Ee$1(o2) : n2 === "structure" ? pe$1(sidebarData[e2.value], o2, e2.value) : isArray(n2) ? pe$1(n2, o2) : isPlainObject(n2) ? ja(n2, o2) : [];
}, Pe$1 = Symbol(""), qa = () => {
  const e2 = computed(() => Ga());
  provide(Pe$1, e2);
}, de$2 = () => {
  const e2 = inject(Pe$1);
  if (!e2)
    throw new Error("useSidebarItems() is called without provider.");
  return e2;
};
var Ua = defineComponent({ name: "PageFooter", setup() {
  const e2 = usePageFrontmatter(), l2 = m$1(), t2 = Be$1(), n2 = computed(() => {
    const { copyright: u2, footer: i2 } = e2.value;
    return i2 !== false && !!(u2 || i2 || l2.value.displayFooter);
  }), o2 = computed(() => {
    const { footer: u2 } = e2.value;
    return u2 === false ? false : isString(u2) ? u2 : l2.value.footer || "";
  }), r2 = computed(() => "copyright" in e2.value ? e2.value.copyright : "copyright" in l2.value ? l2.value.copyright : t2.value.length ? `Copyright © ${new Date().getFullYear()} ${t2.value[0].name}` : false);
  return () => n2.value ? h$3("footer", { class: "footer-wrapper" }, [o2.value ? h$3("div", { class: "footer", innerHTML: o2.value }) : null, r2.value ? h$3("div", { class: "copyright", innerHTML: r2.value }) : null]) : null;
} }), Oe = defineComponent({ name: "NavbarDropdownLink", props: { config: { type: Object, required: true } }, setup(e2, { slots: l2 }) {
  const t2 = usePageData(), n2 = toRef(e2, "config"), o2 = computed(() => n2.value.ariaLabel || n2.value.text), r2 = ref(false);
  watch(() => t2.value.path, () => {
    r2.value = false;
  });
  const u2 = (i2) => {
    i2.detail === 0 && (r2.value = !r2.value);
  };
  return () => {
    var i2;
    return h$3("div", { class: ["dropdown-wrapper", { open: r2.value }] }, [h$3("button", { type: "button", class: "dropdown-title", "aria-label": o2.value, onClick: u2 }, [((i2 = l2.title) == null ? void 0 : i2.call(l2)) || h$3("span", { class: "title" }, [h$3(O, { icon: n2.value.icon }), e2.config.text]), h$3("span", { class: "arrow" }), h$3("ul", { class: "nav-dropdown" }, n2.value.children.map((v2, d2) => {
      const c2 = d2 === n2.value.children.length - 1;
      return h$3("li", { class: "dropdown-item" }, "children" in v2 ? [h$3("h4", { class: "dropdown-subtitle" }, v2.link ? h$3(A$1, { config: v2, onFocusout: () => {
        v2.children.length === 0 && c2 && (r2.value = false);
      } }) : h$3("span", v2.text)), h$3("ul", { class: "dropdown-subitem-wrapper" }, v2.children.map((h2, L2) => h$3("li", { class: "dropdown-subitem" }, h$3(A$1, { config: h2, onFocusout: () => {
        L2 === v2.children.length - 1 && c2 && (r2.value = false);
      } }))))] : h$3(A$1, { config: v2, onFocusout: () => {
        c2 && (r2.value = false);
      } }));
    }))])]);
  };
} });
const Ve = () => h$3(c$3, { name: "i18n" }, () => [h$3("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
Ve.displayName = "I18nIcon";
const He = (e2, l2 = "") => isString(e2) ? j$1(`${l2}${e2}`) : "children" in e2 ? { ...e2, ...e2.link && !isLinkExternal(e2.link) ? j$1(`${l2}${e2.link}`) : {}, children: e2.children.map((t2) => He(t2, `${l2}${e2.prefix || ""}`)) } : { ...e2, link: isLinkExternal(e2.link) ? e2.link : j$1(`${l2}${e2.link}`).link }, Re = () => computed(() => (m$1().value.navbar || []).map((e2) => He(e2))), Wa = () => {
  const e2 = useRouter(), l2 = useRoute(), t2 = useRouteLocale(), n2 = useSiteLocaleData(), o2 = e$2(), r2 = m$1();
  return computed(() => {
    const u2 = g$4(n2.value.locales);
    if (u2.length < 2)
      return null;
    const { path: i2, fullPath: v2 } = e2.currentRoute.value, { navbarLocales: d2 } = r2.value;
    return { text: "", ariaLabel: d2 == null ? void 0 : d2.selectLangAriaLabel, children: [...u2.map((c2) => {
      var h2, L2, f2;
      const S2 = ((h2 = n2.value.locales) == null ? void 0 : h2[c2]) ?? {}, M2 = ((L2 = o2.value.locales) == null ? void 0 : L2[c2]) ?? {}, g2 = S2.lang || "", B2 = ((f2 = M2.navbarLocales) == null ? void 0 : f2.langName) ?? g2;
      let z2;
      if (g2 === n2.value.lang)
        z2 = i2;
      else {
        const D2 = i2.replace(t2.value, c2);
        z2 = e2.getRoutes().some((H2) => H2.path === D2) ? v2.replace(i2, D2) : M2.home ?? c2;
      }
      return { text: B2, link: z2 };
    }), ...A$3(o2.value.extraLocales || {}).map(([c2, h2]) => ({ text: c2, link: h2.replace(":route", l2.path.replace(t2.value, "")) }))] };
  });
}, Ya = () => {
  const e2 = m$1(), l2 = computed(() => e2.value.repo || null), t2 = computed(() => l2.value ? We$2(l2.value) : null), n2 = computed(() => l2.value ? Oe$1(l2.value) : null), o2 = computed(() => t2.value ? e2.value.repoLabel ?? (n2.value === null ? "Source" : n2.value) : null);
  return computed(() => !t2.value || !o2.value || e2.value.repoDisplay === false ? null : { type: n2.value || "Source", label: o2.value, link: t2.value });
};
defineComponent({ name: "LanguageDropdown", setup() {
  const e2 = Wa();
  return () => e2.value ? h$3("div", { class: "nav-item" }, h$3(Oe, { class: "i18n-dropdown", config: e2.value }, { title: () => {
    var l2;
    return h$3(Ve, { "aria-label": (l2 = e2.value) == null ? void 0 : l2.ariaLabel, style: { width: "1rem", height: "1rem", verticalAlign: "middle" } });
  } })) : null;
} });
var Ja = defineComponent({ name: "NavScreenDropdown", props: { config: { type: Object, required: true } }, setup(e2) {
  const l2 = usePageData(), t2 = toRef(e2, "config"), n2 = computed(() => t2.value.ariaLabel || t2.value.text), o2 = ref(false);
  watch(() => l2.value.path, () => {
    o2.value = false;
  });
  const r2 = (u2, i2) => i2[i2.length - 1] === u2;
  return () => [h$3("button", { type: "button", class: ["nav-screen-dropdown-title", { active: o2.value }], "aria-label": n2.value, onClick: () => {
    o2.value = !o2.value;
  } }, [h$3("span", { class: "title" }, [h$3(O, { icon: t2.value.icon }), e2.config.text]), h$3("span", { class: ["arrow", o2.value ? "down" : "end"] })]), h$3("ul", { class: ["nav-screen-dropdown", { hide: !o2.value }] }, t2.value.children.map((u2) => h$3("li", { class: "dropdown-item" }, "children" in u2 ? [h$3("h4", { class: "dropdown-subtitle" }, u2.link ? h$3(A$1, { config: u2, onFocusout: () => {
    r2(u2, t2.value.children) && u2.children.length === 0 && (o2.value = false);
  } }) : h$3("span", u2.text)), h$3("ul", { class: "dropdown-subitem-wrapper" }, u2.children.map((i2) => h$3("li", { class: "dropdown-subitem" }, h$3(A$1, { config: i2, onFocusout: () => {
    r2(i2, u2.children) && r2(u2, t2.value.children) && (o2.value = false);
  } }))))] : h$3(A$1, { config: u2, onFocusout: () => {
    r2(u2, t2.value.children) && (o2.value = false);
  } }))))];
} }), Ka = defineComponent({ name: "NavScreenLinks", setup() {
  const e2 = Re();
  return () => e2.value.length ? h$3("nav", { class: "nav-screen-links" }, e2.value.map((l2) => h$3("div", { class: "navbar-links-item" }, "children" in l2 ? h$3(Ja, { config: l2 }) : h$3(A$1, { config: l2 })))) : null;
} });
const Fe = () => h$3(c$3, { name: "dark" }, () => h$3("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
Fe.displayName = "DarkIcon";
const _e = () => h$3(c$3, { name: "light" }, () => h$3("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
_e.displayName = "LightIcon";
const je2 = () => h$3(c$3, { name: "auto" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
je2.displayName = "AutoIcon";
const Ge = () => h$3(c$3, { name: "enter-fullscreen" }, () => h$3("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
Ge.displayName = "EnterFullScreenIcon";
const qe = () => h$3(c$3, { name: "cancel-fullscreen" }, () => h$3("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
qe.displayName = "CancelFullScreenIcon";
const Ue = () => h$3(c$3, { name: "outlook" }, () => [h$3("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
Ue.displayName = "OutlookIcon";
var We$1 = defineComponent({ name: "AppearanceSwitch", setup() {
  const { config: e2, status: l2 } = U(), t2 = () => {
    e2.value === "switch" ? l2.value = { light: "dark", dark: "auto", auto: "light" }[l2.value] : l2.value = l2.value === "light" ? "dark" : "light";
  };
  return () => h$3("button", { type: "button", id: "appearance-switch", onClick: () => t2() }, [h$3(je2, { style: { display: l2.value === "auto" ? "block" : "none" } }), h$3(Fe, { style: { display: l2.value === "dark" ? "block" : "none" } }), h$3(_e, { style: { display: l2.value === "light" ? "block" : "none" } })]);
} }), Qa = defineComponent({ name: "AppearanceMode", setup() {
  const e2 = m$1(), { canToggle: l2 } = U(), t2 = computed(() => e2.value.outlookLocales.darkmode);
  return () => l2.value ? h$3("div", { class: "appearance-wrapper" }, [h$3("label", { class: "appearance-title", for: "appearance-switch" }, t2.value), h$3(We$1)]) : null;
} }), Za = defineComponent({ name: "ThemeColorPicker", props: { themeColor: { type: Object, required: true } }, setup(e2) {
  const l2 = (t2 = "") => {
    const n2 = document.documentElement.classList, o2 = g$4(e2.themeColor).map((r2) => `theme-${r2}`);
    if (!t2) {
      localStorage.removeItem("theme"), n2.remove(...o2);
      return;
    }
    n2.remove(...o2.filter((r2) => r2 !== `theme-${t2}`)), n2.add(`theme-${t2}`), localStorage.setItem("theme", t2);
  };
  return onMounted(() => {
    const t2 = localStorage.getItem("theme");
    t2 && l2(t2);
  }), () => h$3("ul", { id: "theme-color-picker" }, [h$3("li", h$3("span", { class: "theme-color", onClick: () => l2() })), A$3(e2.themeColor).map(([t2, n2]) => h$3("li", h$3("span", { style: { background: n2 }, onClick: () => l2(t2) })))]);
} }), el = defineComponent({ name: "ThemeColor", setup() {
  const e2 = e$2(), l2 = m$1(), t2 = computed(() => l2.value.outlookLocales.themeColor), n2 = computed(() => {
    const { themeColor: o2 } = e2.value;
    return o2 === false ? null : o2;
  });
  return () => n2.value ? h$3("div", { class: "theme-color-wrapper" }, [h$3("label", { class: "theme-color-title", for: "theme-color-picker" }, t2.value), h$3(Za, { themeColor: n2.value })]) : null;
} }), Ye$1 = defineComponent({ name: "ToggleFullScreenButton", setup() {
  const e2 = m$1(), { isSupported: l2, isFullscreen: t2, toggle: n2 } = useFullscreen(), o2 = computed(() => e2.value.outlookLocales.fullscreen);
  return () => l2 ? h$3("div", { class: "full-screen-wrapper" }, [h$3("label", { class: "full-screen-title", for: "full-screen-switch" }, o2.value), h$3("button", { type: "button", class: "full-screen", id: "full-screen-switch", ariaPressed: t2.value, onClick: () => n2() }, t2.value ? h$3(qe) : h$3(Ge))]) : null;
} }), Xe$1 = defineComponent({ name: "OutlookSettings", setup() {
  const e2 = e$2(), l2 = t$1(), t2 = computed(() => !l2.value && !!e2.value.themeColor), n2 = computed(() => !l2.value && e2.value.fullscreen);
  return () => h$3(ClientOnly, () => [t2.value ? h$3(el) : null, h$3(Qa), n2.value ? h$3(Ye$1) : null]);
} }), al = defineComponent({ name: "NavScreen", props: { show: Boolean }, emits: ["close"], setup(e2, { emit: l2, slots: t2 }) {
  const n2 = usePageData(), { isMobile: o2 } = Q$1(), r2 = ref(), u2 = useScrollLock(r2);
  return onMounted(() => {
    r2.value = document.body, watch(o2, (i2) => {
      !i2 && e2.show && (u2.value = false, l2("close"));
    }), watch(() => n2.value.path, () => {
      u2.value = false, l2("close");
    });
  }), onUnmounted(() => {
    u2.value = false;
  }), () => h$3(Transition, { name: "fade", onEnter: () => {
    u2.value = true;
  }, onAfterLeave: () => {
    u2.value = false;
  } }, () => {
    var i2, v2;
    return e2.show ? h$3("div", { id: "nav-screen" }, h$3("div", { class: "container" }, [(i2 = t2.before) == null ? void 0 : i2.call(t2), h$3(Ka), h$3("div", { class: "outlook-wrapper" }, h$3(Xe$1)), (v2 = t2.after) == null ? void 0 : v2.call(t2)])) : null;
  });
} }), ll = defineComponent({ name: "NavbarBrand", setup() {
  const e2 = useRouteLocale(), l2 = useSiteLocaleData(), t2 = m$1(), n2 = computed(() => t2.value.home || e2.value), o2 = computed(() => l2.value.title), r2 = computed(() => t2.value.logo ? withBase(t2.value.logo) : null), u2 = computed(() => t2.value.logoDark ? withBase(t2.value.logoDark) : null);
  return () => h$3(RouterLink, { to: n2.value, class: "brand" }, () => [r2.value ? h$3("img", { class: ["logo", { light: !!u2.value }], src: r2.value, alt: o2.value }) : null, u2.value ? h$3("img", { class: ["logo dark"], src: u2.value, alt: o2.value }) : null, o2.value ? h$3("span", { class: ["site-name", { "hide-in-pad": r2.value && t2.value.hideSiteNameOnMobile !== false }] }, o2.value) : null]);
} }), tl = defineComponent({ name: "NavbarLinks", setup() {
  const e2 = Re();
  return () => e2.value.length ? h$3("nav", { class: "nav-links" }, e2.value.map((l2) => h$3("div", { class: "nav-item hide-in-mobile" }, "children" in l2 ? h$3(Oe, { config: l2 }) : h$3(A$1, { config: l2 })))) : null;
} }), nl = defineComponent({ name: "RepoLink", components: { BitbucketIcon: C$4, GiteeIcon: L$2, GitHubIcon: I, GitLabIcon: x$1, SourceIcon: z$2 }, setup() {
  const e2 = Ya();
  return () => e2.value ? h$3("div", { class: "nav-item" }, h$3("a", { class: "repo-link", href: e2.value.link, target: "_blank", rel: "noopener noreferrer", "aria-label": e2.value.label }, h$3(resolveComponent(`${e2.value.type}Icon`), { style: { width: "1.25rem", height: "1.25rem", verticalAlign: "middle" } }))) : null;
} });
const Je$1 = ({ active: e2 = false }, { emit: l2 }) => h$3("button", { type: "button", class: ["toggle-navbar-button", { "is-active": e2 }], "aria-label": "Toggle Navbar", "aria-expanded": e2, "aria-controls": "nav-screen", onClick: () => l2("toggle") }, h$3("span", { class: "button-container" }, [h$3("span", { class: "button-top" }), h$3("span", { class: "button-middle" }), h$3("span", { class: "button-bottom" })]));
Je$1.displayName = "ToggleNavbarButton";
var ol = Je$1;
const me$2 = (e2, { emit: l2 }) => h$3("button", { type: "button", class: "toggle-sidebar-button", title: "Toggle Sidebar", onClick: () => l2("toggle") }, h$3("span", { class: "icon" }));
me$2.displayName = "ToggleSidebarButton", me$2.emits = ["toggle"];
var rl = me$2, ul = defineComponent({ name: "OutlookButton", setup() {
  const { isSupported: e2 } = useFullscreen(), l2 = e$2(), t2 = t$1(), n2 = usePageData(), { canToggle: o2 } = U(), r2 = ref(false), u2 = computed(() => !t2.value && !!l2.value.themeColor), i2 = computed(() => !t2.value && l2.value.fullscreen && e2);
  return watch(() => n2.value.path, () => {
    r2.value = false;
  }), () => o2.value || i2.value || u2.value ? h$3("div", { class: "nav-item hide-in-mobile" }, o2.value && !i2.value && !u2.value ? h$3(We$1) : i2.value && !o2.value && !u2.value ? h$3(Ye$1) : h$3("button", { type: "button", class: ["outlook-button", { open: r2.value }], tabindex: "-1", "aria-hidden": true }, [h$3(Ue), h$3("div", { class: "outlook-dropdown" }, h$3(Xe$1))])) : null;
} }), il = defineComponent({ name: "NavBar", emits: ["toggleSidebar"], setup(e2, { emit: l2, slots: t2 }) {
  const n2 = m$1(), { isMobile: o2 } = Q$1(), r2 = ref(false), u2 = computed(() => {
    const { navbarAutoHide: c2 = "mobile" } = n2.value;
    return c2 !== "none" && (c2 === "always" || o2.value);
  }), i2 = computed(() => n2.value.navbarLayout || { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }), v2 = { Brand: ll, Language: e$1, Links: tl, Repo: nl, Outlook: ul, Search: oe("Docsearch") ? resolveComponent("Docsearch") : oe("SearchBox") ? resolveComponent("SearchBox") : e$1 }, d2 = (c2) => v2[c2] ?? (oe(c2) ? resolveComponent(c2) : e$1);
  return () => {
    var c2, h2, L2, f2, S2, M2;
    return [h$3("header", { class: ["navbar", { "auto-hide": u2.value, "hide-icon": n2.value.navbarIcon === false }], id: "navbar" }, [h$3("div", { class: "navbar-start" }, [h$3(rl, { onToggle: () => {
      r2.value && (r2.value = false), l2("toggleSidebar");
    } }), (c2 = t2.startBefore) == null ? void 0 : c2.call(t2), (i2.value.start || []).map((g2) => h$3(d2(g2))), (h2 = t2.startAfter) == null ? void 0 : h2.call(t2)]), h$3("div", { class: "navbar-center" }, [(L2 = t2.centerBefore) == null ? void 0 : L2.call(t2), (i2.value.center || []).map((g2) => h$3(d2(g2))), (f2 = t2.centerAfter) == null ? void 0 : f2.call(t2)]), h$3("div", { class: "navbar-end" }, [(S2 = t2.endBefore) == null ? void 0 : S2.call(t2), (i2.value.end || []).map((g2) => h$3(d2(g2))), (M2 = t2.endAfter) == null ? void 0 : M2.call(t2), h$3(ol, { active: r2.value, onToggle: () => {
      r2.value = !r2.value;
    } })])]), h$3(al, { show: r2.value, onClose: () => {
      r2.value = false;
    } }, { before: () => {
      var g2;
      return (g2 = t2.screenTop) == null ? void 0 : g2.call(t2);
    }, after: () => {
      var g2;
      return (g2 = t2.screenBottom) == null ? void 0 : g2.call(t2);
    } })];
  };
} }), sl = defineComponent({ name: "SidebarChild", props: { config: { type: Object, required: true } }, setup(e2) {
  const l2 = useRoute();
  return () => [Ne(e2.config, { class: ["sidebar-link", `sidebar-${e2.config.type}`, { active: G$1(l2, e2.config, true) }], exact: true }), De$1(e2.config.children)];
} }), cl = defineComponent({ name: "SidebarGroup", props: { config: { type: Object, required: true }, open: { type: Boolean, required: true } }, emits: ["toggle"], setup(e2, { emit: l2 }) {
  const t2 = useRoute(), n2 = computed(() => G$1(t2, e2.config)), o2 = computed(() => G$1(t2, e2.config, true));
  return () => {
    const { collapsible: r2, children: u2 = [], icon: i2, prefix: v2, link: d2, text: c2 } = e2.config;
    return h$3("section", { class: "sidebar-group" }, [h$3(r2 ? "button" : "p", { class: ["sidebar-heading", { clickable: r2 || d2, exact: o2.value, active: n2.value }], ...r2 ? { type: "button", onClick: () => l2("toggle"), onKeydown: (h2) => {
      h2.key === "Enter" && l2("toggle");
    } } : {} }, [h$3(O, { icon: i2 }), d2 ? h$3(A$1, { class: "title", config: { text: c2, link: d2 }, noExternalLinkIcon: true }) : h$3("span", { class: "title" }, c2), r2 ? h$3("span", { class: ["arrow", e2.open ? "down" : "end"] }) : null]), e2.open || !r2 ? h$3(Ke$1, { key: v2, config: u2 }) : null]);
  };
} }), Ke$1 = defineComponent({ name: "SidebarLinks", props: { config: { type: Array, required: true } }, setup(e2) {
  const l2 = useRoute(), t2 = ref(-1), n2 = (o2) => {
    t2.value = o2 === t2.value ? -1 : o2;
  };
  return watch(() => l2.path, () => {
    const o2 = e2.config.findIndex((r2) => xe$2(l2, r2));
    t2.value = o2;
  }, { immediate: true, flush: "post" }), () => h$3("ul", { class: "sidebar-links" }, e2.config.map((o2, r2) => h$3("li", o2.type === "group" ? h$3(cl, { config: o2, open: r2 === t2.value, onToggle: () => n2(r2) }) : h$3(sl, { config: o2 }))));
} }), vl = defineComponent({ name: "SideBar", setup(e2, { slots: l2 }) {
  const t2 = useRoute(), n2 = m$1(), o2 = de$2(), r2 = ref();
  return onMounted(() => {
    watch(() => t2.hash, (u2) => {
      const i2 = document.querySelector(`.sidebar a.sidebar-link[href="${t2.path}${u2}"]`);
      if (!i2)
        return;
      const { top: v2, height: d2 } = r2.value.getBoundingClientRect(), { top: c2, height: h2 } = i2.getBoundingClientRect();
      c2 < v2 ? i2.scrollIntoView(true) : c2 + h2 > v2 + d2 && i2.scrollIntoView(false);
    });
  }), () => {
    var u2, i2, v2;
    return h$3("aside", { class: ["sidebar", { "hide-icon": n2.value.sidebarIcon === false }], id: "sidebar", ref: r2 }, [(u2 = l2.top) == null ? void 0 : u2.call(l2), ((i2 = l2.default) == null ? void 0 : i2.call(l2)) || h$3(Ke$1, { config: o2.value }), (v2 = l2.bottom) == null ? void 0 : v2.call(l2)]);
  };
} }), pl = defineComponent({ name: "CommonWrapper", props: { noNavbar: Boolean, noSidebar: Boolean }, setup(e2, { slots: l2 }) {
  const t2 = useRouter(), n2 = usePageData(), o2 = usePageFrontmatter(), r2 = m$1(), { isMobile: u2, isPC: i2 } = Q$1(), [v2, d2] = useToggle(false), [c2, h2] = useToggle(false), L2 = de$2(), f2 = ref(false), S2 = computed(() => e2.noNavbar || o2.value.navbar === false || r2.value.navbar === false ? false : !!(n2.value.title || r2.value.logo || r2.value.repo || r2.value.navbar)), M2 = computed(() => e2.noSidebar ? false : o2.value.sidebar !== false && L2.value.length !== 0 && !o2.value.home), g2 = { x: 0, y: 0 }, B2 = (b2) => {
    g2.x = b2.changedTouches[0].clientX, g2.y = b2.changedTouches[0].clientY;
  }, z2 = (b2) => {
    const p = b2.changedTouches[0].clientX - g2.x, F2 = b2.changedTouches[0].clientY - g2.y;
    Math.abs(p) > Math.abs(F2) * 1.5 && Math.abs(p) > 40 && (p > 0 && g2.x <= 80 ? d2(true) : d2(false));
  }, D2 = computed(() => o2.value.home ? false : o2.value.toc || r2.value.toc !== false && o2.value.toc !== false), H2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let R2 = 0;
  return useEventListener("scroll", useThrottleFn(() => {
    const b2 = H2();
    b2 <= 58 || b2 < R2 ? f2.value = false : R2 + 200 < b2 && !v2.value && (f2.value = true), R2 = b2;
  }, 300, true)), watch(u2, (b2) => {
    b2 || d2(false);
  }), onMounted(() => {
    const b2 = useScrollLock(document.body);
    watch(v2, (F2) => {
      b2.value = F2;
    });
    const p = t2.afterEach(() => {
      d2(false);
    });
    onUnmounted(() => {
      b2.value = false, p();
    });
  }), () => h$3(oe("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : F$3, () => {
    var b2;
    return h$3("div", { class: ["theme-container", { "no-navbar": !S2.value, "no-sidebar": !M2.value && !(l2.sidebar || l2.sidebarTop || l2.sidebarBottom), "has-toc": D2.value, "hide-navbar": f2.value, "sidebar-collapsed": !u2.value && !i2.value && c2.value, "sidebar-open": u2.value && v2.value }, o2.value.containerClass || ""], onTouchStart: B2, onTouchEnd: z2 }, [S2.value ? h$3(il, { onToggleSidebar: () => d2() }, { startBefore: () => {
      var p;
      return (p = l2.navbarStartBefore) == null ? void 0 : p.call(l2);
    }, startAfter: () => {
      var p;
      return (p = l2.navbarStartAfter) == null ? void 0 : p.call(l2);
    }, centerBefore: () => {
      var p;
      return (p = l2.navbarCenterBefore) == null ? void 0 : p.call(l2);
    }, centerAfter: () => {
      var p;
      return (p = l2.navbarCenterAfter) == null ? void 0 : p.call(l2);
    }, endBefore: () => {
      var p;
      return (p = l2.navbarEndBefore) == null ? void 0 : p.call(l2);
    }, endAfter: () => {
      var p;
      return (p = l2.navbarEndAfter) == null ? void 0 : p.call(l2);
    }, screenTop: () => {
      var p;
      return (p = l2.navScreenTop) == null ? void 0 : p.call(l2);
    }, screenBottom: () => {
      var p;
      return (p = l2.navScreenBottom) == null ? void 0 : p.call(l2);
    } }) : null, h$3(Transition, { name: "fade" }, () => v2.value ? h$3("div", { class: "sidebar-mask", onClick: () => d2(false) }) : null), h$3(Transition, { name: "fade" }, () => u2.value ? null : h$3("div", { class: "toggle-sidebar-wrapper", onClick: () => h2() }, h$3("span", { class: ["arrow", c2.value ? "end" : "start"] }))), h$3(vl, {}, { ...l2.sidebar ? { default: () => {
      var p;
      return (p = l2.sidebar) == null ? void 0 : p.call(l2);
    } } : {}, top: () => {
      var p;
      return (p = l2.sidebarTop) == null ? void 0 : p.call(l2);
    }, bottom: () => {
      var p;
      return (p = l2.sidebarBottom) == null ? void 0 : p.call(l2);
    } }), (b2 = l2.default) == null ? void 0 : b2.call(l2), h$3(Ua)]);
  });
} }), dl = defineComponent({ name: "DropTransition", props: { type: { type: String, default: "single" }, delay: { type: Number, default: 0 }, duration: { type: Number, default: 0.25 }, appear: Boolean }, setup(e2, { slots: l2 }) {
  const t2 = (o2) => {
    o2.style.transition = `transform ${e2.duration}s ease-in-out ${e2.delay}s, opacity ${e2.duration}s ease-in-out ${e2.delay}s`, o2.style.transform = "translateY(-20px)", o2.style.opacity = "0";
  }, n2 = (o2) => {
    o2.style.transform = "translateY(0)", o2.style.opacity = "1";
  };
  return () => h$3(e2.type === "single" ? Transition : TransitionGroup, { name: "drop", appear: e2.appear, onAppear: t2, onAfterAppear: n2, onEnter: t2, onAfterEnter: n2, onBeforeLeave: t2 }, () => {
    var o2;
    return (o2 = l2.default) == null ? void 0 : o2.call(l2);
  });
} });
const he$2 = ({ custom: e2 }) => h$3(Content, { class: ["theme-hope-content", { custom: e2 }] });
he$2.displayName = "MarkdownContent", he$2.props = { custom: Boolean };
var ml = he$2;
const Qe$1 = () => h$3(c$3, { name: "author" }, () => h$3("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
Qe$1.displayName = "AuthorIcon";
const Ze$1 = () => h$3(c$3, { name: "calendar" }, () => h$3("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
Ze$1.displayName = "CalendarIcon";
const ea = () => h$3(c$3, { name: "category" }, () => h$3("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
ea.displayName = "CategoryIcon";
const aa = () => h$3(c$3, { name: "eye" }, () => h$3("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
aa.displayName = "EyeIcon";
const la = () => h$3(c$3, { name: "fire" }, () => h$3("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
la.displayName = "FireIcon";
const ta = () => h$3(c$3, { name: "print" }, () => h$3("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
ta.displayName = "PrintIcon";
const na = () => h$3(c$3, { name: "tag" }, () => h$3("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
na.displayName = "TagIcon";
const oa = () => h$3(c$3, { name: "timer" }, () => h$3("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
oa.displayName = "TimerIcon";
const ra = () => h$3(c$3, { name: "word" }, () => [h$3("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h$3("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
ra.displayName = "WordIcon";
const $$1 = () => {
  const e2 = m$1();
  return computed(() => e2.value.metaLocales);
};
var hl = defineComponent({ name: "AuthorInfo", inheritAttrs: false, props: { author: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const l2 = $$1();
  return () => e2.author.length ? h$3("span", { class: "page-author-info", "aria-label": `${l2.value.author}${e2.pure ? "" : "🖊"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(Qe$1), h$3("span", e2.author.map((t2) => t2.url ? h$3("a", { class: "page-author-item", href: t2.url, target: "_blank", rel: "noopener noreferrer" }, t2.name) : h$3("span", { class: "page-author-item" }, t2.name))), h$3("span", { property: "author", content: e2.author.map((t2) => t2.name).join(", ") })]) : null;
} }), gl = defineComponent({ name: "CategoryInfo", inheritAttrs: false, props: { category: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const l2 = useRouter(), t2 = usePageData(), n2 = $$1(), o2 = (r2, u2 = "") => {
    u2 && t2.value.path !== u2 && (r2.preventDefault(), l2.push(u2));
  };
  return () => e2.category.length ? h$3("span", { class: "page-category-info", "aria-label": `${n2.value.category}${e2.pure ? "" : "🌈"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(ea), e2.category.map(({ name: r2, path: u2 }) => h$3("span", { class: ["page-category-item", { [`category${Se(r2, 9)}`]: !e2.pure, clickable: u2 }], role: u2 ? "navigation" : "", onClick: (i2) => o2(i2, u2) }, r2)), h$3("meta", { property: "articleSection", content: e2.category.map(({ name: r2 }) => r2).join(",") })]) : null;
} }), bl = defineComponent({ name: "DateInfo", inheritAttrs: false, props: { date: { type: Object, default: null }, localizedDate: { type: String, default: "" }, pure: Boolean }, setup(e2) {
  const l2 = usePageLang(), t2 = $$1();
  return () => e2.date ? h$3("span", { class: "page-date-info", "aria-label": `${t2.value.date}${e2.pure ? "" : "📅"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(Ze$1), h$3("span", h$3(ClientOnly, () => e2.localizedDate || e2.date.toLocaleDateString(l2.value))), h$3("meta", { property: "datePublished", content: e2.date.toISOString() || "" })]) : null;
} }), fl = defineComponent({ name: "OriginalInfo", inheritAttrs: false, props: { isOriginal: Boolean }, setup(e2) {
  const l2 = $$1();
  return () => e2.isOriginal ? h$3("span", { class: "page-original-info" }, l2.value.origin) : null;
} });
defineComponent({ name: "PageViewInfo", inheritAttrs: false, props: { pageview: { type: [Boolean, String], default: false }, pure: Boolean }, setup(e2) {
  const l2 = useRoute(), t2 = $$1(), n2 = ref(), o2 = ref(0);
  return useMutationObserver(n2, () => {
    const r2 = n2.value.textContent;
    r2 && !isNaN(Number(r2)) && (o2.value = Number(r2));
  }, { childList: true }), () => e2.pageview ? h$3("span", { class: "page-pageview-info", "aria-label": `${t2.value.views}${e2.pure ? "" : "🔢"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(o2.value < 1e3 ? aa : la), h$3("span", { ref: n2, class: "waline-pageview-count", id: "ArtalkPV", "data-path": isString(e2.pageview) ? e2.pageview : withBase(l2.path) }, "...")]) : null;
} });
var kl = defineComponent({ name: "ReadingTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const l2 = $$1(), t2 = computed(() => {
    if (!e2.readingTime)
      return null;
    const { minutes: n2 } = e2.readingTime;
    return n2 < 1 ? "PT1M" : `PT${Math.round(n2)}M`;
  });
  return () => {
    var n2, o2;
    return (n2 = e2.readingTimeLocale) != null && n2.time ? h$3("span", { class: "page-reading-time-info", "aria-label": `${l2.value.readingTime}${e2.pure ? "" : "⌛"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(oa), h$3("span", (o2 = e2.readingTimeLocale) == null ? void 0 : o2.time), h$3("meta", { property: "timeRequired", content: t2.value })]) : null;
  };
} }), wl = defineComponent({ name: "TagInfo", inheritAttrs: false, props: { tag: { type: Array, default: () => [] }, pure: Boolean }, setup(e2) {
  const l2 = useRouter(), t2 = usePageData(), n2 = $$1(), o2 = (r2, u2 = "") => {
    u2 && t2.value.path !== u2 && (r2.preventDefault(), l2.push(u2));
  };
  return () => e2.tag.length ? h$3("span", { class: "page-tag-info", "aria-label": `${n2.value.tag}${e2.pure ? "" : "🏷"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(na), e2.tag.map(({ name: r2, path: u2 }) => h$3("span", { class: ["page-tag-item", { [`tag${Se(r2, 9)}`]: !e2.pure, clickable: u2 }], role: u2 ? "navigation" : "", onClick: (i2) => o2(i2, u2) }, r2)), h$3("meta", { property: "keywords", content: e2.tag.map(({ name: r2 }) => r2).join(",") })]) : null;
} }), Il = defineComponent({ name: "ReadTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const l2 = $$1();
  return () => {
    var t2, n2, o2;
    return (t2 = e2.readingTimeLocale) != null && t2.words ? h$3("span", { class: "page-word-info", "aria-label": `${l2.value.words}${e2.pure ? "" : "🔠"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(ra), h$3("span", (n2 = e2.readingTimeLocale) == null ? void 0 : n2.words), h$3("meta", { property: "wordCount", content: (o2 = e2.readingTime) == null ? void 0 : o2.words })]) : null;
  };
} }), Ll = defineComponent({ name: "PageInfo", components: { AuthorInfo: hl, CategoryInfo: gl, DateInfo: bl, OriginalInfo: fl, PageViewInfo: () => null, ReadingTimeInfo: kl, TagInfo: wl, WordInfo: Il }, props: { items: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"] }, info: { type: Object, required: true } }, setup(e2) {
  const l2 = t$1();
  return () => e2.items ? h$3("div", { class: "page-info" }, e2.items.map((t2) => h$3(resolveComponent(`${t2}Info`), { ...e2.info, pure: l2.value }))) : null;
} }), Tl = defineComponent({ name: "PrintButton", setup() {
  const e2 = e$2(), l2 = m$1();
  return () => e2.value.print === false ? null : h$3("button", { type: "button", class: "print-button", title: l2.value.metaLocales.print, onClick: () => {
    window.print();
  } }, h$3(ta));
} });
const Sl = ({ title: e2, level: l2, slug: t2 }) => h$3(RouterLink, { to: `#${t2}`, class: ["toc-link", `level${l2}`] }, () => e2), ge$2 = (e2, l2) => {
  const t2 = useRoute();
  return e2.length && l2 > 0 ? h$3("ul", { class: "toc-list" }, e2.map((n2) => {
    const o2 = ge$2(n2.children, l2 - 1);
    return [h$3("li", { class: ["toc-item", { active: Te(t2, `#${n2.slug}`) }] }, Sl(n2)), o2 ? h$3("li", o2) : null];
  })) : null;
};
var Cl = defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, setup(e2, { slots: l2 }) {
  const t2 = useRoute(), n2 = usePageData(), o2 = $$1(), r2 = ref(), u2 = ref("-1.7rem"), i2 = (d2) => {
    var c2;
    (c2 = r2.value) == null || c2.scrollTo({ top: d2, behavior: "smooth" });
  }, v2 = () => {
    if (r2.value) {
      const d2 = document.querySelector(".toc-item.active");
      d2 ? u2.value = `${d2.getBoundingClientRect().top - r2.value.getBoundingClientRect().top + r2.value.scrollTop}px` : u2.value = "-1.7rem";
    } else
      u2.value = "-1.7rem";
  };
  return onMounted(() => {
    watch(() => t2.hash, (d2) => {
      if (r2.value) {
        const c2 = document.querySelector(`#toc a.toc-link[href$="${d2}"]`);
        if (!c2)
          return;
        const { top: h2, height: L2 } = r2.value.getBoundingClientRect(), { top: f2, height: S2 } = c2.getBoundingClientRect();
        f2 < h2 ? i2(r2.value.scrollTop + f2 - h2) : f2 + S2 > h2 + L2 && i2(r2.value.scrollTop + f2 + S2 - h2 - L2);
      }
    }), watch(() => t2.fullPath, () => v2(), { flush: "post", immediate: true });
  }), () => {
    var d2, c2;
    const h2 = e2.items.length ? ge$2(e2.items, e2.headerDepth) : n2.value.headers ? ge$2(n2.value.headers, e2.headerDepth) : null;
    return h2 ? h$3("div", { class: "toc-place-holder" }, [h$3("aside", { id: "toc" }, [(d2 = l2.before) == null ? void 0 : d2.call(l2), h$3("div", { class: "toc-header" }, [o2.value.toc, h$3(Tl)]), h$3("div", { class: "toc-wrapper", ref: r2 }, [h2, h$3("div", { class: "toc-marker", style: { top: u2.value } })]), (c2 = l2.after) == null ? void 0 : c2.call(l2)])]) : null;
  };
} }), Al = defineComponent({ name: "SkipLink", props: { content: { type: String, default: "main-content" } }, setup(e2) {
  const l2 = usePageData(), t2 = m$1(), n2 = ref(), o2 = ({ target: r2 }) => {
    const u2 = document.querySelector(r2.hash);
    if (u2) {
      const i2 = () => {
        u2.removeAttribute("tabindex"), u2.removeEventListener("blur", i2);
      };
      u2.setAttribute("tabindex", "-1"), u2.addEventListener("blur", i2), u2.focus(), window.scrollTo(0, 0);
    }
  };
  return onMounted(() => {
    watch(() => l2.value.path, () => n2.value.focus());
  }), () => [h$3("span", { ref: n2, tabindex: "-1" }), h$3("a", { href: `#${e2.content}`, class: "skip-link sr-only", onClick: o2 }, t2.value.routeLocales.skipToContent)];
} });
let n = null, e = null;
const m = { wait: () => n, pending: () => {
  n = new Promise((l2) => e = l2);
}, resolve: () => {
  e == null || e(), n = null, e = null;
} }, t = () => m;
var f = defineComponent({ name: "FadeSlideY", setup(l2, { slots: o2 }) {
  const { resolve: i2, pending: s2 } = t();
  return () => h$3(Transition, { name: "fade-slide-y", mode: "out-in", onBeforeEnter: i2, onBeforeLeave: s2 }, () => {
    var r2;
    return (r2 = o2.default) == null ? void 0 : r2.call(o2);
  });
} });
var de$1 = defineComponent({ name: "FeaturePanel", props: { items: { type: Object, default: () => [] }, header: { type: String, default: "" } }, setup(t2) {
  return () => h$3("div", { class: "feature-panel" }, [t2.header ? h$3("h2", { class: "feature-header" }, t2.header) : null, t2.items.length ? h$3("div", { class: "feature-wrapper" }, t2.items.map((a2) => {
    const l2 = [h$3("h3", [h$3(O, { icon: a2.icon }), h$3("span", { innerHTML: a2.title })]), h$3("p", { innerHTML: a2.details })];
    return a2.link ? isLinkExternal(a2.link) ? h$3("a", { class: "feature-item link", href: a2.link, role: "navigation", "aria-label": a2.title, target: "_blank" }, l2) : h$3(RouterLink, { class: "feature-item link", to: a2.link, role: "navigation", "aria-label": a2.title }, () => l2) : h$3("div", { class: "feature-item" }, l2);
  })) : null]);
} }), me$1 = defineComponent({ name: "HeroInfo", setup(t2, { slots: a2 }) {
  const l2 = usePageFrontmatter(), o2 = useSiteLocaleData(), r2 = computed(() => l2.value.heroText === false ? false : l2.value.heroText || o2.value.title || "Hello"), n2 = computed(() => l2.value.tagline === false ? false : l2.value.tagline || o2.value.description || "Welcome to your VuePress site"), i2 = computed(() => l2.value.heroImage ? withBase(l2.value.heroImage) : null), u2 = computed(() => l2.value.heroImageDark ? withBase(l2.value.heroImageDark) : null), s2 = computed(() => l2.value.heroAlt || r2.value || "hero"), c2 = computed(() => l2.value.actions ?? []);
  return () => {
    var p, d2;
    return h$3("header", { class: "hero-info-wrapper" }, [((p = a2.heroImage) == null ? void 0 : p.call(a2)) || h$3(dl, { appear: true, type: "group" }, () => [i2.value ? h$3("img", { key: "light", class: { light: u2.value }, src: i2.value, alt: s2.value }) : null, u2.value ? h$3("img", { key: "dark", class: "dark", src: u2.value, alt: s2.value }) : null]), ((d2 = a2.heroInfo) == null ? void 0 : d2.call(a2)) || h$3("div", { class: "hero-info" }, [r2.value ? h$3(dl, { appear: true, delay: 0.04 }, () => h$3("h1", { id: "main-title" }, r2.value)) : null, n2.value ? h$3(dl, { appear: true, delay: 0.08 }, () => h$3("p", { class: "description" }, n2.value)) : null, c2.value.length ? h$3(dl, { appear: true, delay: 0.12 }, () => h$3("p", { class: "actions" }, c2.value.map((L2) => h$3(A$1, { class: ["action-button", L2.type || "default"], config: L2, noExternalLinkIcon: true })))) : null])]);
  };
} }), he$1 = defineComponent({ name: "HopePage", setup(t2, { slots: a2 }) {
  const l2 = t$1(), o2 = usePageFrontmatter(), r2 = computed(() => {
    const { features: n2 } = o2.value;
    return isArray(n2) ? n2.some((i2) => !("items" in i2)) ? [{ items: n2 }] : n2 : [];
  });
  return () => {
    var n2, i2, u2;
    return h$3("main", { class: ["home project", { pure: l2.value }], id: "main-content", "aria-labelledby": o2.value.heroText === null ? void 0 : "main-title" }, [(n2 = a2.top) == null ? void 0 : n2.call(a2), h$3(me$1), r2.value.map(({ header: s2 = "", items: c2 }, p) => h$3(dl, { appear: true, delay: 0.16 + p * 0.08 }, () => h$3(de$1, { header: s2, items: c2 }))), (i2 = a2.center) == null ? void 0 : i2.call(a2), h$3(dl, { appear: true, delay: 0.16 + r2.value.length * 0.08 }, () => h$3(ml)), (u2 = a2.bottom) == null ? void 0 : u2.call(a2)]);
  };
} });
const fe$1 = (t2, a2) => {
  const l2 = t2.replace(a2, "/").split("/"), o2 = [];
  let r2 = removeEndingSlash(a2);
  return l2.forEach((n2, i2) => {
    i2 !== l2.length - 1 ? (r2 += `${n2}/`, o2.push(r2)) : n2 !== "" && (r2 += n2, o2.push(r2));
  }), o2;
};
var be$1 = defineComponent({ name: "BreadCrumb", setup() {
  const t2 = useRouter(), a2 = usePageData(), l2 = useRouteLocale(), o2 = usePageFrontmatter(), r2 = m$1(), n2 = ref([]), i2 = computed(() => (o2.value.breadcrumb || o2.value.breadcrumb !== false && r2.value.breadcrumb !== false) && n2.value.length > 1), u2 = computed(() => o2.value.breadcrumbIcon || o2.value.breadcrumbIcon !== false && r2.value.breadcrumbIcon !== false), s2 = () => {
    const c2 = t2.getRoutes(), p = fe$1(a2.value.path, l2.value).map((d2) => {
      const L2 = c2.find((y2) => y2.path === d2);
      if (L2) {
        const { meta: y2, path: N2 } = B$2(t2, L2.path), x2 = y2[V$1.shortTitle] || y2[V$1.title];
        if (x2)
          return { title: x2, icon: y2[V$1.icon], path: N2 };
      }
      return null;
    }).filter((d2) => d2 !== null);
    p.length > 1 && (n2.value = p);
  };
  return onMounted(() => {
    s2(), watch(() => a2.value.path, s2);
  }), () => h$3("nav", { class: ["breadcrumb", { disable: !i2.value }] }, i2.value ? h$3("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, n2.value.map((c2, p) => h$3("li", { class: { "is-active": n2.value.length - 1 === p }, property: "itemListElement", typeof: "ListItem" }, [h$3(RouterLink, { to: c2.path, property: "item", typeof: "WebPage" }, () => [u2.value ? h$3(O, { icon: c2.icon }) : null, h$3("span", { property: "name" }, c2.title || "Unknown")]), h$3("meta", { property: "position", content: p + 1 })]))) : []);
} });
const $ = (t2) => t2 === false ? false : isString(t2) ? j$1(t2, true) : isPlainObject(t2) ? t2 : null, w = (t2, a2, l2) => {
  const o2 = t2.findIndex((r2) => r2.link === a2);
  if (o2 !== -1) {
    const r2 = t2[o2 + l2];
    return r2 != null && r2.link ? r2 : null;
  }
  for (const r2 of t2)
    if (r2.children) {
      const n2 = w(r2.children, a2, l2);
      if (n2)
        return n2;
    }
  return null;
};
var ge$1 = defineComponent({ name: "PageNav", setup() {
  const t2 = m$1(), a2 = usePageFrontmatter(), l2 = de$2(), o2 = usePageData(), r2 = Ea(), n2 = computed(() => {
    const u2 = $(a2.value.prev);
    return u2 === false ? null : u2 || (t2.value.prevLink === false ? null : w(l2.value, o2.value.path, -1));
  }), i2 = computed(() => {
    const u2 = $(a2.value.next);
    return u2 === false ? null : u2 || (t2.value.nextLink === false ? null : w(l2.value, o2.value.path, 1));
  });
  return useEventListener("keydown", (u2) => {
    u2.altKey && (u2.key === "ArrowRight" ? i2.value && (r2(i2.value.link), u2.preventDefault()) : u2.key === "ArrowLeft" && n2.value && (r2(n2.value.link), u2.preventDefault()));
  }), () => n2.value || i2.value ? h$3("nav", { class: "page-nav" }, [n2.value ? h$3(A$1, { class: "prev", config: n2.value }, () => {
    var u2, s2;
    return [h$3("div", { class: "hint" }, [h$3("span", { class: "arrow start" }), t2.value.metaLocales.prev]), h$3("div", { class: "link" }, [h$3(O, { icon: (u2 = n2.value) == null ? void 0 : u2.icon }), (s2 = n2.value) == null ? void 0 : s2.text])];
  }) : null, i2.value ? h$3(A$1, { class: "next", config: i2.value }, () => {
    var u2, s2;
    return [h$3("div", { class: "hint" }, [t2.value.metaLocales.next, h$3("span", { class: "arrow end" })]), h$3("div", { class: "link" }, [(u2 = i2.value) == null ? void 0 : u2.text, h$3(O, { icon: (s2 = i2.value) == null ? void 0 : s2.icon })])];
  }) : null]) : null;
} });
const ke$1 = { GitHub: ":repo/edit/:branch/:path", GitLab: ":repo/-/edit/:branch/:path", Gitee: ":repo/edit/:branch/:path", Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default" }, Le = ({ docsRepo: t2, docsBranch: a2, docsDir: l2, filePathRelative: o2, editLinkPattern: r2 }) => {
  if (!o2)
    return null;
  const n2 = Oe$1(t2);
  let i2;
  return r2 ? i2 = r2 : n2 !== null && (i2 = ke$1[n2]), i2 ? i2.replace(/:repo/, isLinkHttp(t2) ? t2 : `https://github.com/${t2}`).replace(/:branch/, a2).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(l2)}/${o2}`)) : null;
}, ye$1 = () => {
  const t2 = m$1(), a2 = usePageData(), l2 = usePageFrontmatter();
  return computed(() => {
    const { repo: o2, docsRepo: r2 = o2, docsBranch: n2 = "main", docsDir: i2 = "", editLink: u2, editLinkPattern: s2 = "" } = t2.value;
    if (!(l2.value.editLink ?? u2 ?? true) || !r2)
      return null;
    const c2 = Le({ docsRepo: r2, docsBranch: n2, docsDir: i2, editLinkPattern: s2, filePathRelative: a2.value.filePathRelative });
    return c2 ? { text: t2.value.metaLocales.editLink, link: c2 } : null;
  });
}, Ie = () => {
  const t2 = useSiteLocaleData(), a2 = m$1(), l2 = usePageData(), o2 = usePageFrontmatter();
  return computed(() => {
    var r2, n2;
    return !(o2.value.lastUpdated ?? a2.value.lastUpdated ?? true) || !((r2 = l2.value.git) != null && r2.updatedTime) ? null : new Date((n2 = l2.value.git) == null ? void 0 : n2.updatedTime).toLocaleString(t2.value.lang);
  });
}, De = () => {
  const t2 = m$1(), a2 = usePageData(), l2 = usePageFrontmatter();
  return computed(() => {
    var o2;
    return l2.value.contributors ?? t2.value.contributors ?? true ? ((o2 = a2.value.git) == null ? void 0 : o2.contributors) ?? null : null;
  });
};
var Pe = defineComponent({ name: "PageTitle", setup() {
  const t2 = usePageData(), a2 = usePageFrontmatter(), l2 = m$1(), { info: o2, items: r2 } = Ha();
  return () => h$3("div", { class: "page-title" }, [h$3("h1", [l2.value.titleIcon === false ? null : h$3(O, { icon: a2.value.icon }), t2.value.title]), h$3(Ll, { info: o2.value, ...r2.value === null ? {} : { items: r2.value } }), h$3("hr")]);
} });
const F$1 = () => h$3(c$3, { name: "edit" }, () => [h$3("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h$3("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
F$1.displayName = "EditIcon";
var we = defineComponent({ name: "PageMeta", setup() {
  const t2 = m$1(), a2 = ye$1(), l2 = Ie(), o2 = De();
  return () => {
    const { metaLocales: r2 } = t2.value;
    return h$3("footer", { class: "page-meta" }, [a2.value ? h$3("div", { class: "meta-item edit-link" }, h$3(A$1, { class: "label", config: a2.value }, { before: () => h$3(F$1) })) : null, h$3("div", { class: "meta-item git-info" }, [l2.value ? h$3("div", { class: "update-time" }, [h$3("span", { class: "label" }, `${r2.lastUpdated}: `), h$3(ClientOnly, () => h$3("span", { class: "info" }, l2.value))]) : null, o2.value && o2.value.length ? h$3("div", { class: "contributors" }, [h$3("span", { class: "label" }, `${r2.contributors}: `), o2.value.map(({ email: n2, name: i2 }, u2) => [h$3("span", { class: "contributor", title: `email: ${n2}` }, i2), u2 !== o2.value.length - 1 ? "," : ""])]) : null])]);
  };
} }), xe$1 = defineComponent({ name: "NormalPage", setup(t2, { slots: a2 }) {
  const l2 = usePageFrontmatter(), o2 = usePageData(), { isDarkmode: r2 } = U(), n2 = m$1(), i2 = computed(() => l2.value.toc || l2.value.toc !== false && n2.value.toc !== false);
  return () => h$3("main", { class: "page", id: "main-content" }, h$3(oe("LocalEncrypt") ? resolveComponent("LocalEncrypt") : F$3, () => {
    var u2, s2, c2, p;
    return [(u2 = a2.top) == null ? void 0 : u2.call(a2), l2.value.cover ? h$3("img", { class: "page-cover", src: l2.value.cover, alt: o2.value.title, "no-view": "" }) : null, h$3(be$1), h$3(Pe), i2.value ? h$3(Cl, { headerDepth: l2.value.headerDepth ?? n2.value.headerDepth ?? 2 }, { before: () => {
      var d2;
      return (d2 = a2.tocBefore) == null ? void 0 : d2.call(a2);
    }, after: () => {
      var d2;
      return (d2 = a2.tocAfter) == null ? void 0 : d2.call(a2);
    } }) : null, (s2 = a2.contentBefore) == null ? void 0 : s2.call(a2), h$3(ml), (c2 = a2.contentAfter) == null ? void 0 : c2.call(a2), h$3(we), h$3(ge$1), oe("CommentService") ? h$3(resolveComponent("CommentService"), { darkmode: r2.value }) : null, (p = a2.bottom) == null ? void 0 : p.call(a2)];
  }));
} }), Ae = defineComponent({ name: "Layout", setup() {
  const t2 = e$2(), a2 = m$1(), l2 = usePageData(), o2 = usePageFrontmatter(), { isMobile: r2 } = Q$1(), n2 = computed(() => {
    var i2, u2;
    return ((i2 = a2.value.blog) == null ? void 0 : i2.sidebarDisplay) || ((u2 = t2.value.blog) == null ? void 0 : u2.sidebarDisplay) || "mobile";
  });
  return () => [h$3(Al), h$3(pl, {}, { default: () => o2.value.home ? h$3(he$1) : h$3(f, () => h$3(xe$1, { key: l2.value.path })), ...n2.value !== "none" ? { navScreenBottom: () => h$3(resolveComponent("BloggerInfo")) } : {}, ...!r2.value && n2.value === "always" ? { sidebar: () => h$3(resolveComponent("BloggerInfo")) } : {} })];
} }), Be = defineComponent({ name: "NotFoundHint", setup() {
  const t2 = m$1(), a2 = () => {
    const l2 = t2.value.routeLocales.notFoundMsg;
    return l2[Math.floor(Math.random() * l2.length)];
  };
  return () => h$3("div", { class: "not-found-hint" }, [h$3("p", { class: "error-code" }, "404"), h$3("h1", { class: "error-title" }, t2.value.routeLocales.notFoundTitle), h$3("p", { class: "error-hint" }, a2())]);
} }), Ee = defineComponent({ name: "NotFound", setup(t2, { slots: a2 }) {
  const l2 = useRouteLocale(), o2 = m$1(), { navigate: r2 } = useLink({ to: o2.value.home ?? l2.value });
  return () => [h$3(Al), h$3(pl, { noSidebar: true }, () => {
    var n2;
    return h$3("main", { class: "page not-found", id: "main-content" }, ((n2 = a2.default) == null ? void 0 : n2.call(a2)) || [h$3(Be), h$3("div", { class: "actions" }, [h$3("button", { type: "button", class: "action-button", onClick: () => {
      window.history.go(-1);
    } }, o2.value.routeLocales.back), h$3("button", { type: "button", class: "action-button", onClick: () => r2() }, o2.value.routeLocales.home)])]);
  })];
} });
const icons = { "Facebook": '<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3c599b"/><path fill="#fff" d="M353.357 400.378h68.151v-66.235c0-29.206.737-74.247 21.952-102.142 22.348-29.542 53.026-49.622 105.794-49.622 85.976 0 122.18 12.263 122.18 12.263L654.4 295.61s-28.407-8.213-54.903-8.213c-26.512 0-50.243 9.5-50.243 35.995v76.988h108.687L650.352 499H549.254v342.602H421.508V499h-68.15v-98.622z"/></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>', "Linkedin": '<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#4376B1"/><path fill="#F1F2F2" d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z"/></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "Guide": { "path": "/category/guide/", "keys": ["v-58c8628a", "v-1a48e06b", "v-4675065a", "v-34003d17", "v-1c936a17", "v-0e271f74"] } } } }, "tag": { "/": { "path": "/tag/", "map": { "AWS": { "path": "/tag/aws/", "keys": ["v-1a48e06b", "v-4675065a"] }, "Frontend": { "path": "/tag/frontend/", "keys": ["v-58c8628a"] }, "Python": { "path": "/tag/python/", "keys": ["v-34003d17", "v-0e271f74"] }, "FastAPI": { "path": "/tag/fastapi/", "keys": ["v-34003d17"] }, "Git": { "path": "/tag/git/", "keys": ["v-1c936a17"] } } } } };
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-58c8628a", "v-22a39d25", "v-1a48e06b", "v-4675065a", "v-34003d17", "v-1c936a17", "v-0e271f74", "v-44da3324"] } }, "star": { "/": { "path": "/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-58c8628a", "v-22a39d25", "v-1a48e06b", "v-4675065a", "v-34003d17", "v-1c936a17", "v-0e271f74", "v-44da3324"] } } };
const _$1 = ref(categoryMap), k$1 = (e2 = "") => {
  const m2 = usePageData(), u2 = useRouter(), i2 = useRouteLocale();
  return computed(() => {
    var r2;
    const p = e2 || ((r2 = usePageFrontmatter().value.blog) == null ? void 0 : r2.key) || "";
    if (!p)
      return console.warn("useBlogCategory: key not found"), { path: "/", map: {} };
    const l2 = u2.getRoutes();
    if (!_$1.value[p])
      throw new Error(`useBlogCategory: key ${p} is invalid`);
    const n2 = _$1.value[p][i2.value], o2 = { path: n2.path, map: {} };
    for (const a2 in n2.map) {
      const t2 = n2.map[a2];
      o2.map[a2] = { path: t2.path, items: [] };
      for (const B2 of t2.keys) {
        const f2 = l2.find(({ name: s2 }) => s2 === B2);
        if (f2) {
          const s2 = B$2(u2, f2.path);
          o2.map[a2].items.push({ path: s2.path, info: s2.meta });
        }
      }
      m2.value.path === t2.path && (o2.currentItems = o2.map[a2].items);
    }
    return o2;
  });
};
const c = ref(typeMap), C$1 = (e2 = "") => {
  const m2 = useRouter(), u2 = useRouteLocale();
  return computed(() => {
    var i2;
    const r2 = e2 || ((i2 = usePageFrontmatter().value.blog) == null ? void 0 : i2.key) || "";
    if (!r2)
      return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!c.value[r2])
      throw new Error(`useBlogType: key ${e2} is invalid`);
    const p = m2.getRoutes(), l2 = c.value[r2][u2.value], n2 = { path: l2.path, items: [] };
    for (const o2 of l2.keys) {
      const a2 = p.find(({ name: t2 }) => t2 === o2);
      if (a2) {
        const t2 = B$2(m2, a2.path);
        n2.items.push({ path: t2.path, info: t2.meta });
      }
    }
    return n2;
  });
};
const message = "";
const We = "/assets/hero-197a9d2d.jpg";
const se = Symbol.for("categoryMap"), T = () => {
  const l2 = inject(se);
  if (!l2)
    throw new Error("useCategoryMap() is called without provider.");
  return l2;
}, Ye = () => {
  const l2 = k$1("category");
  provide(se, l2);
}, A = () => {
  const l2 = e$2(), t2 = m$1();
  return computed(() => ({ ...l2.value.blog, ...t2.value.blog }));
}, ne = Symbol.for("tagMap"), G = () => {
  const l2 = inject(ne);
  if (!l2)
    throw new Error("useTagMap() is called without provider.");
  return l2;
}, Ze = () => {
  const l2 = k$1("tag");
  provide(ne, l2);
}, Ke = (l2) => {
  const t2 = m$1();
  return computed(() => {
    const { [V$1.author]: o2 } = l2.value;
    return o2 ? Me$1(o2) : o2 === false ? [] : Me$1(t2.value.author, false);
  });
}, Je = (l2) => {
  const t2 = T();
  return computed(() => $e$1(l2.value[V$1.category]).map((o2) => ({ name: o2, path: t2.value.map[o2].path })));
}, Qe = (l2) => {
  const t2 = G();
  return computed(() => Ne$1(l2.value[V$1.tag]).map((o2) => ({ name: o2, path: t2.value.map[o2].path })));
}, Xe = (l2) => computed(() => {
  const { [V$1.date]: t2 } = l2.value;
  return Ee$2(t2);
}), e1 = (l2) => {
  const t2 = toRef(l2, "info"), o2 = A(), s$12 = Ke(t2), i2 = Je(t2), r2 = Qe(t2), a$12 = Xe(t2), c2 = s(), n2 = computed(() => ({ author: s$12.value, category: i2.value, date: a$12.value, localizedDate: t2.value[V$1.localizedDate] || "", tag: r2.value, isOriginal: t2.value[V$1.isOriginal] || false, readingTime: t2.value[V$1.readingTime] || null, readingTimeLocale: t2.value[V$1.readingTime] && c2.value ? a(t2.value[V$1.readingTime], c2.value) : null, pageview: l2.path })), u2 = computed(() => o2.value.articleInfo);
  return { info: n2, items: u2 };
}, ce = Symbol(""), V = () => {
  const l2 = inject(ce);
  if (!l2)
    throw new Error("useArticles() is called without provider.");
  return l2;
}, l1 = () => {
  const l2 = C$1("article");
  provide(ce, l2);
}, ue = Symbol(""), _ = () => {
  const l2 = inject(ue);
  if (!l2)
    throw new Error("useStars() is called without provider.");
  return l2;
}, a1 = () => {
  const l2 = C$1("star");
  provide(ue, l2);
}, pe = Symbol(""), F = () => {
  const l2 = inject(pe);
  if (!l2)
    throw new Error("useTimelines() is called without provider.");
  return l2;
}, t1 = () => {
  const l2 = C$1("timeline"), t2 = computed(() => {
    const o2 = [];
    return l2.value.items.forEach(({ info: s2, path: i2 }) => {
      const r2 = Ee$2(s2[V$1.date]), a2 = r2 == null ? void 0 : r2.getFullYear(), c2 = r2 ? r2.getMonth() + 1 : null, n2 = r2 == null ? void 0 : r2.getDate();
      a2 && c2 && n2 && ((!o2[0] || o2[0].year !== a2) && o2.unshift({ year: a2, items: [] }), o2[0].items.push({ date: `${c2}/${n2}`, info: s2, path: i2 }));
    }), { ...l2.value, config: o2.reverse() };
  });
  provide(pe, t2);
}, i1 = () => {
  l1(), Ye(), a1(), Ze(), t1();
};
var r1 = defineComponent({ name: "SocialMedia", setup() {
  const l2 = A(), t2 = t$1(), o2 = computed(() => {
    const s2 = l2.value.medias;
    return s2 ? A$3(s2).map(([i2, r2]) => ({ name: i2, icon: icons[i2], url: r2 })) : [];
  });
  return () => o2.value.length ? h$3("div", { class: "social-media-wrapper" }, o2.value.map(({ name: s2, icon: i2, url: r2 }) => h$3("a", { class: "social-media", href: r2, rel: "noopener noreferrer", target: "_blank", "aria-label": s2, ...t2.value ? {} : { "data-balloon-pos": "up" }, innerHTML: i2 }))) : null;
} }), j = defineComponent({ name: "BloggerInfo", setup() {
  const l2 = A(), t2 = useSiteLocaleData(), o2 = m$1(), s2 = V(), i2 = T(), r2 = G(), a2 = F(), c2 = Ea(), n2 = computed(() => {
    var h2;
    return l2.value.name || ((h2 = Me$1(o2.value.author)[0]) == null ? void 0 : h2.name) || t2.value.title;
  }), u2 = computed(() => l2.value.avatar || o2.value.logo), f2 = computed(() => o2.value.blogLocales), m2 = computed(() => l2.value.intro);
  return () => h$3("div", { class: "blogger-info", vocab: "https://schema.org/", typeof: "Person" }, [h$3("div", { class: "blogger", ...m2.value ? { style: { cursor: "pointer" }, "aria-label": f2.value.intro, "data-balloon-pos": "down", role: "navigation", onClick: () => c2(m2.value) } : {} }, [u2.value ? h$3("img", { class: ["blogger-avatar", { round: l2.value.roundAvatar }], src: withBase(u2.value), property: "image", alt: "Blogger Avatar" }) : null, n2.value ? h$3("div", { class: "blogger-name", property: "name" }, n2.value) : null, l2.value.description ? h$3("div", { class: "blogger-description", innerHTML: l2.value.description }) : null, m2.value ? h$3("meta", { property: "url", content: withBase(m2.value) }) : null]), h$3("div", { class: "num-wrapper" }, [h$3(RouterLink, { to: s2.value.path }, () => [h$3("div", { class: "num" }, s2.value.items.length), h$3("div", f2.value.article)]), h$3(RouterLink, { to: i2.value.path }, () => [h$3("div", { class: "num" }, g$4(i2.value.map).length), h$3("div", f2.value.category)]), h$3(RouterLink, { to: r2.value.path }, () => [h$3("div", { class: "num" }, g$4(r2.value.map).length), h$3("div", f2.value.tag)]), h$3(RouterLink, { to: a2.value.path }, () => [h$3("div", { class: "num" }, a2.value.items.length), h$3("div", f2.value.timeline)])]), h$3(r1)]);
} });
const R = () => h$3(c$3, { name: "category" }, () => h$3("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
R.displayName = "CategoryIcon";
const W = () => h$3(c$3, { name: "tag" }, () => h$3("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
W.displayName = "TagIcon";
const Y = () => h$3(c$3, { name: "timeline" }, () => h$3("path", { d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0" }));
Y.displayName = "TimelineIcon";
const de = () => h$3(c$3, { name: "slides" }, () => h$3("path", { d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z" }));
de.displayName = "SlideIcon";
const ve = () => h$3(c$3, { name: "sticky" }, () => [h$3("path", { d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z" })]);
ve.displayName = "StickyIcon";
const q = () => h$3(c$3, { name: "article" }, () => h$3("path", { d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z" }));
q.displayName = "ArticleIcon";
const me = () => h$3(c$3, { name: "book" }, () => h$3("path", { d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z" }));
me.displayName = "BookIcon";
const fe = () => h$3(c$3, { name: "link" }, () => h$3("path", { d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z" }));
fe.displayName = "LinkIcon";
const ge = () => h$3(c$3, { name: "project" }, () => h$3("path", { d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z" }));
ge.displayName = "ProjectIcon";
const ye = () => h$3(c$3, { name: "friend" }, () => h$3("path", { d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z" }));
ye.displayName = "FriendIcon";
const Z = () => h$3(c$3, { name: "slide-down" }, () => h$3("path", { d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z" }));
Z.displayName = "SlideDownIcon";
const he = () => h$3("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", class: "empty-icon", viewBox: "0 0 1024 1024", innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>' });
he.displayName = "EmptyIcon";
const be = () => h$3(c$3, { name: "lock" }, () => h$3("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
be.displayName = "LockIcon";
var o1 = defineComponent({ name: "ArticleItem", props: { info: { type: Object, required: true }, path: { type: String, required: true } }, setup(l2, { slots: t2 }) {
  const o2 = toRef(l2, "info"), { info: s2, items: i2 } = e1(l2);
  return () => {
    var r2, a2, c2;
    const { [V$1.title]: n2, [V$1.type]: u2, [V$1.isEncrypted]: f2, [V$1.cover]: m2, [V$1.excerpt]: h2, [V$1.sticky]: d2 } = o2.value, z2 = s2.value;
    return h$3("div", { class: "article-item" }, h$3("article", { class: "article", vocab: "https://schema.org/", typeof: "Article" }, [((r2 = t2.cover) == null ? void 0 : r2.call(t2, { cover: m2 })) || (m2 ? [h$3("img", { class: "article-cover", src: withBase(m2) }), h$3("meta", { property: "image", content: withBase(m2) })] : []), d2 ? h$3(ve) : null, h$3(RouterLink, { to: l2.path }, () => {
      var M2;
      return ((M2 = t2.title) == null ? void 0 : M2.call(t2, { title: n2, isEncrypted: f2, type: u2 })) || h$3("header", { class: "title" }, [f2 ? h$3(be) : null, u2 === $e.slide ? h$3(de) : null, h$3("span", { property: "headline" }, n2)]);
    }), ((a2 = t2.excerpt) == null ? void 0 : a2.call(t2, { excerpt: h2 })) || (h2 ? h$3("div", { class: "article-excerpt", innerHTML: h2 }) : null), h$3("hr", { class: "hr" }), ((c2 = t2.info) == null ? void 0 : c2.call(t2, { info: z2 })) || h$3(Ll, { info: z2, ...i2.value ? { items: i2.value } : {} })]));
  };
} }), s1 = defineComponent({ name: "Pagination", props: { total: { type: Number, default: 10 }, perPage: { type: Number, default: 10 }, current: { type: Number, default: 1 } }, emits: ["updateCurrentPage"], setup(l2, { emit: t2 }) {
  let o2;
  const s2 = m$1(), i2 = ref(""), r2 = computed(() => s2.value.paginationLocales), a2 = computed(() => Math.ceil(l2.total / l2.perPage)), c2 = computed(() => !!a2.value && a2.value !== 1), n2 = computed(() => a2.value < 7 ? false : l2.current > 4), u2 = computed(() => a2.value < 7 ? false : l2.current < a2.value - 3), f2 = computed(() => {
    const { current: d2 } = l2;
    let z2 = 1, M2 = a2.value;
    const X = [];
    a2.value >= 7 && (d2 <= 4 && d2 < a2.value - 3 ? (z2 = 1, M2 = 5) : d2 > 4 && d2 >= a2.value - 3 ? (M2 = a2.value, z2 = a2.value - 4) : a2.value > 7 && (z2 = d2 - 2, M2 = d2 + 2));
    for (let O2 = z2; O2 <= M2; O2++)
      X.push(O2);
    return X;
  }), m2 = (d2) => t2("updateCurrentPage", d2), h2 = (d2) => {
    const z2 = parseInt(d2);
    z2 <= a2.value && z2 > 0 ? m2(z2) : o2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${r2.value.errorText.replace(/\$page/g, a2.value.toString())}`);
  };
  return onMounted(() => {
    o2 = new je$1();
  }), () => h$3("div", { class: "pagination-wrapper" }, c2.value ? h$3("div", { class: "pagination-list" }, [h$3("div", { class: "page-number" }, [l2.current > 1 ? h$3("div", { class: "prev", role: "navigation", unselectable: "on", onClick: () => m2(l2.current - 1) }, r2.value.prev) : null, n2.value ? [h$3("div", { role: "navigation", onClick: () => m2(1) }, 1), h$3("div", { class: "ellipsis" }, "...")] : null, f2.value.map((d2) => h$3("div", { key: d2, class: { active: l2.current === d2 }, role: "navigation", onClick: () => m2(d2) }, d2)), u2.value ? [h$3("div", { class: "ellipsis" }, "..."), h$3("div", { role: "navigation", onClick: () => m2(a2.value) }, a2.value)] : null, l2.current < a2.value ? h$3("div", { class: "next", role: "navigation", unselectable: "on", onClick: () => m2(l2.current + 1) }, r2.value.next) : null]), h$3("div", { class: "navigate-wrapper" }, [h$3("label", { for: "navigation-text" }, `${r2.value.navigate}: `), h$3("input", { id: "navigation-text", value: i2.value, onInput: ({ target: d2 }) => {
    i2.value = d2.value;
  }, onKeydown: (d2) => {
    d2.key === "Enter" && (d2.preventDefault(), h2(i2.value));
  } }), h$3("button", { class: "navigate", role: "navigation", title: r2.value.action, onClick: () => h2(i2.value) }, r2.value.action)])]) : []);
} }), K$1 = defineComponent({ name: "ArticleList", props: { items: { type: Array, default: () => [] } }, setup(l2) {
  const t2 = useRoute(), o2 = useRouter(), s2 = A(), i2 = ref(1), r2 = computed(() => s2.value.articlePerPage || 10), a2 = computed(() => l2.items.slice((i2.value - 1) * r2.value, i2.value * r2.value)), c2 = (n2) => {
    i2.value = n2;
    const u2 = { ...t2.query };
    u2.page === n2.toString() || n2 === 1 && !u2.page || (n2 === 1 ? delete u2.page : u2.page = n2.toString(), o2.push({ path: t2.path, query: u2 }));
  };
  return onMounted(() => {
    const { page: n2 } = t2.query;
    c2(n2 ? Number(n2) : 1), watch(i2, () => {
      const u2 = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, u2);
      }, 100);
    });
  }), () => h$3("div", { id: "article-list", class: "article-wrapper" }, a2.value.length ? [...a2.value.map(({ info: n2, path: u2 }, f2) => h$3(dl, { appear: true, delay: f2 * 0.04 }, () => h$3(o1, { key: u2, info: n2, path: u2 }))), h$3(s1, { current: i2.value, perPage: r2.value, total: l2.items.length, onUpdateCurrentPage: c2 })] : h$3(he));
} }), J = defineComponent({ name: "CategoryList", setup() {
  const l2 = usePageData(), t2 = T();
  return () => h$3("ul", { class: "category-list-wrapper" }, A$3(t2.value.map).map(([o2, { path: s2, items: i2 }]) => h$3("li", { class: ["category", `category${Se(o2, 9)}`, { active: s2 === l2.value.path }] }, h$3(RouterLink, { to: s2 }, () => [o2, h$3("span", { class: "category-num" }, i2.length)]))));
} }), Q = defineComponent({ name: "TagList", setup() {
  const l2 = usePageFrontmatter(), t2 = G(), o2 = (s2) => {
    var i2;
    return s2 === ((i2 = l2.value.blog) == null ? void 0 : i2.name);
  };
  return () => h$3("ul", { class: "tag-list-wrapper" }, A$3(t2.value.map).map(([s2, { path: i2, items: r2 }]) => h$3("li", { class: ["tag", `tag${Se(s2, 9)}`, { active: o2(s2) }] }, h$3(RouterLink, { to: i2 }, () => [s2, h$3("span", { class: "tag-num" }, r2.length)]))));
} }), n1 = defineComponent({ name: "TimelineList", setup() {
  const l2 = m$1(), t2 = F(), o2 = Ea(), s2 = computed(() => l2.value.blogLocales.timeline);
  return () => h$3("div", { class: "timeline-list-wrapper" }, [h$3("div", { class: "timeline-list-title", onClick: () => o2(t2.value.path) }, [h$3(Y), h$3("span", { class: "num" }, t2.value.items.length), s2.value]), h$3("hr"), h$3("div", { class: "timeline-content" }, h$3("ul", { class: "timeline-list" }, t2.value.config.map(({ year: i2, items: r2 }, a2) => h$3(dl, { appear: true, delay: 0.08 * (a2 + 1) }, () => h$3("li", [h$3("h3", { class: "timeline-year" }, i2), h$3("ul", { class: "timeline-year-wrapper" }, r2.map(({ date: c2, info: n2, path: u2 }) => h$3("li", { class: "timeline-item" }, [h$3("span", { class: "timeline-date" }, c2), h$3(RouterLink, { class: "timeline-title", to: u2 }, () => n2[V$1.title])])))])))))]);
} }), ze = defineComponent({ name: "InfoList", setup() {
  const l2 = m$1(), t2 = V(), o2 = T(), s2 = computed(() => g$4(o2.value.map).length), i2 = _(), r2 = G(), a2 = computed(() => g$4(r2.value.map).length), c2 = Ea(), n2 = ref("article"), u2 = computed(() => l2.value.blogLocales), f2 = [["article", q], ["category", R], ["tag", W], ["timeline", Y]];
  return () => h$3("div", { class: "blog-info-list" }, [h$3("div", { class: "blog-type-wrapper" }, f2.map(([m2, h2]) => h$3("button", { type: "button", class: "blog-type-button", onClick: () => {
    n2.value = m2;
  } }, h$3("div", { class: ["icon-wrapper", { active: n2.value === m2 }], "aria-label": u2.value[m2], "data-balloon-pos": "up" }, h$3(h2))))), h$3(dl, () => n2.value === "article" ? h$3("div", { class: "sticky-article-wrapper" }, [h$3("div", { class: "title", onClick: () => c2(t2.value.path) }, [h$3(q), h$3("span", { class: "num" }, t2.value.items.length), u2.value.article]), h$3("hr"), h$3("ul", { class: "sticky-article-list" }, i2.value.items.map(({ info: m2, path: h2 }, d2) => h$3(dl, { appear: true, delay: 0.08 * (d2 + 1) }, () => h$3("li", { class: "sticky-article" }, h$3(RouterLink, { to: h2 }, () => m2[V$1.title])))))]) : n2.value === "category" ? h$3("div", { class: "category-wrapper" }, [s2.value ? h$3("div", { class: "title", onClick: () => c2(o2.value.path) }, [h$3(R), h$3("span", { class: "num" }, s2.value), u2.value.category]) : null, h$3("hr"), h$3(dl, { delay: 0.04 }, () => h$3(J))]) : n2.value === "tag" ? h$3("div", { class: "tag-wrapper" }, [a2.value ? h$3("div", { class: "title", onClick: () => c2(r2.value.path) }, [h$3(W), h$3("span", { class: "num" }, a2.value), u2.value.tag]) : null, h$3("hr"), h$3(dl, { delay: 0.04 }, () => h$3(Q))]) : h$3(dl, () => h$3(n1)))]);
} }), B$1 = defineComponent({ name: "BlogWrapper", setup(l2, { slots: t2 }) {
  const { isMobile: o2 } = Q$1();
  return () => [h$3(Al), h$3(pl, { noSidebar: true }, { default: () => {
    var s2;
    return (s2 = t2.default) == null ? void 0 : s2.call(t2);
  }, navScreenBottom: () => h$3(j), ...o2.value ? { sidebar: () => h$3(ze) } : {} })];
} });
const xe = () => h$3("aside", { class: "blog-info-wrapper" }, [h$3(dl, () => h$3(j)), h$3(dl, { delay: 0.04 }, () => h$3(ze))]);
xe.displayName = "InfoPanel";
var E = xe, c1 = defineComponent({ name: "BlogPage", components: { CategoryList: J, TagList: Q }, setup() {
  const l2 = usePageData(), t2 = usePageFrontmatter(), o2 = T(), s2 = G(), i2 = computed(() => t2.value.blog || {}), r2 = computed(() => {
    const { key: c2 = "" } = i2.value;
    return c2 === "category" ? "CategoryList" : c2 === "tag" ? "TagList" : null;
  }), a2 = computed(() => {
    const { name: c2 = "", key: n2 = "" } = i2.value;
    return n2 === "category" ? c2 ? o2.value.map[c2].items : [] : n2 === "tag" ? c2 ? s2.value.map[c2].items : [] : [];
  });
  return () => h$3(B$1, () => h$3("div", { class: "page blog" }, h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { class: "blog-main", id: "main-content" }, [h$3(dl, () => r2.value ? h$3(resolveComponent(r2.value)) : null), i2.value.name ? h$3(dl, { appear: true, delay: 0.24 }, () => h$3(K$1, { key: l2.value.path, items: a2.value })) : null]), h$3(dl, { delay: 0.16 }, () => h$3(E))])));
} }), u1 = defineComponent({ name: "BlogHero", setup(l2, { slots: t2 }) {
  const o2 = usePageHeadTitle(), s2 = usePageFrontmatter(), i2 = ref(), r2 = computed(() => s2.value.heroFullScreen ?? false), a2 = computed(() => {
    const { heroText: n2, heroImage: u2, heroImageDark: f2, heroAlt: m2, heroImageStyle: h2, tagline: d2 = null } = s2.value;
    return { text: n2 === false ? null : n2 || o2.value, image: u2 ? withBase(u2) : null, imageDark: f2 ? withBase(f2) : null, heroStyle: h2, alt: m2 || "hero image", tagline: d2, isFullScreen: r2.value };
  }), c2 = computed(() => {
    const { bgImage: n2, bgImageStyle: u2 } = s2.value;
    return { image: isString(n2) ? withBase(n2) : n2 === false ? null : We, bgStyle: u2, isFullScreen: r2.value };
  });
  return () => {
    var n2, u2;
    return s2.value.hero === false ? null : h$3("div", { ref: i2, class: ["blog-hero", { fullscreen: r2.value, "no-bg": !c2.value.image }] }, [((n2 = t2.heroBg) == null ? void 0 : n2.call(t2, c2.value)) || (c2.value.image ? h$3("div", { class: "mask", style: [{ background: `url(${c2.value.image}) center/cover no-repeat` }, c2.value.bgStyle] }) : null), ((u2 = t2.heroInfo) == null ? void 0 : u2.call(t2, a2.value)) || [h$3(dl, { appear: true, type: "group", delay: 0.04 }, () => [a2.value.image ? h$3("img", { key: "light", class: ["hero-image", { light: a2.value.imageDark }], style: a2.value.heroStyle, src: a2.value.image, alt: a2.value.alt }) : null, a2.value.imageDark ? h$3("img", { key: "dark", class: "hero-image dark", style: a2.value.heroStyle, src: a2.value.imageDark, alt: a2.value.alt }) : null]), h$3(dl, { appear: true, delay: 0.08 }, () => a2.value.text ? h$3("h1", a2.value.text) : null), h$3(dl, { appear: true, delay: 0.12 }, () => a2.value.tagline ? h$3("p", { class: "description", innerHTML: a2.value.tagline }) : null)], a2.value.isFullScreen ? h$3("button", { type: "button", class: "slide-down-button", onClick: () => {
      window.scrollTo({ top: i2.value.clientHeight, behavior: "smooth" });
    } }, [h$3(Z), h$3(Z)]) : null]);
  };
} });
const p1 = ["link", "article", "book", "project", "friend"];
var d1 = defineComponent({ name: "ProjectPanel", components: { ArticleIcon: q, BookIcon: me, FriendIcon: ye, LinkIcon: fe, ProjectIcon: ge }, setup() {
  const l2 = usePageFrontmatter(), t2 = t$1(), o2 = Ea(), s2 = (i2 = "", r2 = "icon") => p1.includes(i2) ? h$3(resolveComponent(`${i2}-icon`)) : isLinkHttp(i2) ? h$3("img", { src: i2, alt: r2, class: "image" }) : _e$1(i2) ? h$3("img", { src: withBase(i2), alt: r2, class: "image" }) : h$3(O, { icon: i2 });
  return () => {
    var i2;
    return (i2 = l2.value.projects) != null && i2.length ? h$3("div", { class: "project-panel" }, l2.value.projects.map(({ icon: r2, link: a2, name: c2, desc: n2 }, u2) => h$3("div", { class: ["project-card", { [`project${u2 % 9}`]: !t2.value }], onClick: () => o2(a2) }, [s2(r2, c2), h$3("div", { class: "name" }, c2), h$3("div", { class: "desc" }, n2)]))) : null;
  };
} }), v1 = defineComponent({ name: "BlogHome", setup() {
  const l2 = V();
  return () => h$3("div", { class: "page blog" }, [h$3(u1), h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { class: "blog-home", id: "main-content" }, [h$3(dl, { appear: true, delay: 0.16 }, () => h$3(d1)), h$3(dl, { appear: true, delay: 0.24 }, () => h$3(K$1, { items: l2.value.items }))]), h$3(dl, { appear: true, delay: 0.16 }, () => h$3(E))]), h$3(dl, { appear: true, delay: 0.28 }, () => h$3(ml))]);
} }), m1 = defineComponent({ name: "BlogHome", setup() {
  return () => h$3(B$1, () => h$3(v1));
} }), ke = defineComponent({ name: "ArticleType", setup() {
  const l2 = usePageData(), t2 = useRouteLocale(), o2 = m$1(), s2 = V(), i2 = _(), r2 = computed(() => {
    const a2 = o2.value.blogLocales;
    return [{ text: a2.all, path: s2.value.path }, { text: a2.star, path: i2.value.path }, ...[].map(({ key: c2, path: n2 }) => ({ text: a2[c2], path: n2.replace(/^\//, t2.value) }))];
  });
  return () => h$3("ul", { class: "article-type-wrapper" }, r2.value.map((a2) => h$3("li", { class: ["article-type", { active: a2.path === l2.value.path }] }, h$3(RouterLink, { to: a2.path }, () => a2.text))));
} }), f1 = defineComponent({ name: "BlogPage", setup() {
  const l2 = C$1(), t2 = usePageFrontmatter(), o2 = usePageData(), s2 = V(), i2 = _(), r2 = computed(() => {
    const { key: a2 = "", type: c2 } = t2.value.blog || {};
    return a2 === "star" ? i2.value.items : c2 === "type" && a2 ? l2.value.items : s2.value.items;
  });
  return () => h$3(B$1, () => h$3("div", { class: "page blog" }, h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { class: "blog-main", id: "main-content" }, [h$3(dl, () => h$3(ke)), h$3(dl, { appear: true, delay: 0.24 }, () => h$3(K$1, { key: o2.value.path, items: r2.value }))]), h$3(dl, { delay: 0.16 }, () => h$3(E))])));
} }), g1 = defineComponent({ name: "TimelineItems", setup() {
  const l2 = A(), t2 = m$1(), o2 = F(), s2 = computed(() => l2.value.timeline || t2.value.blogLocales.timelineTitle), i2 = computed(() => o2.value.config.map(({ year: r2 }) => ({ title: r2.toString(), level: 2, slug: r2.toString(), children: [] })));
  return () => h$3("div", { class: "timeline-wrapper" }, h$3("ul", { class: "timeline-content" }, [h$3(dl, () => h$3("li", { class: "motto" }, s2.value)), h$3(Cl, { items: i2.value }), o2.value.config.map(({ year: r2, items: a2 }, c2) => h$3(dl, { appear: true, delay: 0.08 * (c2 + 1), type: "group" }, () => [h$3("h3", { key: "title", id: r2, class: "timeline-year-title" }, h$3("span", r2)), h$3("li", { key: "content", class: "timeline-year-list" }, [h$3("ul", { class: "timeline-year-wrapper" }, a2.map(({ date: n2, info: u2, path: f2 }) => h$3("li", { class: "timeline-item" }, [h$3("span", { class: "timeline-date" }, n2), h$3(RouterLink, { class: "timeline-title", to: f2 }, () => u2[V$1.title])])))])]))]));
} }), y1 = defineComponent({ name: "Timeline", components: { ArticleType: ke, CategoryList: J, TagList: Q }, setup() {
  return () => h$3(B$1, () => h$3("div", { class: "page blog" }, h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { class: "blog-main", id: "main-content" }, [h$3(dl, { appear: true, delay: 0.24 }, () => h$3(g1))]), h$3(dl, { delay: 0.16 }, () => h$3(E))])));
} });
const all$2 = "";
const b = () => h$3(c$3, { name: "lock" }, () => h$3("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
b.displayName = "LockIcon";
var k = defineComponent({ name: "PasswordModal", props: { full: Boolean }, emits: ["verify"], setup(o2, { emit: e2 }) {
  const n2 = usePageFrontmatter(), s2 = m$1(), u2 = ref(""), a2 = ref(false), t2 = ref(false), l2 = computed(() => s2.value.encryptLocales);
  let c2 = null;
  const v2 = () => {
    c2 && clearTimeout(c2), a2.value = false, e2("verify", u2.value, t2.value), nextTick().then(() => {
      a2.value = true, c2 = setTimeout(() => {
        a2.value = false;
      }, 1e3);
    });
  };
  return () => h$3("div", { class: ["password-layer", { expand: o2.full || n2.value.home }] }, h$3("div", { class: "password-modal" }, [h$3("div", { class: ["hint", { tried: a2.value }] }, a2.value ? l2.value.errorHint : h$3(b, { "aria-label": l2.value.iconLabel })), h$3("div", { class: "password" }, [h$3("input", { type: "password", value: u2.value, placeholder: l2.value.placeholder, onInput: ({ target: i2 }) => {
    u2.value = i2.value;
  }, onKeydown: ({ key: i2 }) => {
    i2 === "Enter" && v2();
  } })]), h$3("div", { class: "remember-password" }, [h$3("input", { type: "checkbox", value: t2.value, onChange: () => t2.value = !t2.value }), l2.value.remember]), h$3("button", { type: "button", class: "submit", onClick: () => v2() }, "OK")]));
} });
const P = () => {
  const o2 = e$2();
  return computed(() => o2.value.encrypt || {});
}, S = "VUEPRESS_HOPE_GLOBAL_TOKEN", K = () => {
  const o2 = P(), e2 = useStorage(S, ""), n2 = useSessionStorage(S, ""), s2 = computed(() => {
    const { global: a2 = false, admin: t2 = [] } = o2.value;
    return a2 && t2.length > 0;
  }), u2 = computed(() => {
    if (s2.value) {
      if (e2.value)
        return o2.value.admin.some((a2) => compareSync(e2.value, a2));
      if (n2.value)
        return o2.value.admin.some((a2) => compareSync(n2.value, a2));
    }
    return false;
  });
  return { isEncrypted: s2, isDecrypted: u2, validate: (a2, t2 = false) => {
    (t2 ? e2 : n2).value = a2;
  } };
}, y = (o2 = "", e2) => !!o2 && compareSync(o2, e2), D = "VUEPRESS_HOPE_PATH_TOKEN", z = () => {
  const o2 = usePageData(), e2 = P(), n2 = useStorage(D, {}), s2 = useSessionStorage(D, {}), u2 = (t2) => isPlainObject(e2.value.config) ? g$4(e2.value.config).filter((l2) => N(decodeURI(t2), l2)).sort((l2, c2) => c2.length - l2.length) : [], a2 = (t2) => {
    const l2 = u2(t2);
    if (l2.length > 0) {
      const { config: c2 = {} } = e2.value;
      return { isEncrypted: true, isDecrypted: l2.some((v2) => n2.value[v2] && c2[v2].some((i2) => y(n2.value[v2], i2)) || s2.value[v2] && c2[v2].some((i2) => y(s2.value[v2], i2))) };
    }
    return { isDecrypted: false, isEncrypted: false };
  };
  return { status: computed(() => a2(o2.value.path)), getStatus: a2, validate: (t2, l2 = false) => {
    const { config: c2 = {} } = e2.value, v2 = u2(o2.value.path);
    for (const i2 of v2)
      if (c2[i2].filter((L2) => y(t2, L2))) {
        (l2 ? n2 : s2).value[i2] = t2;
        break;
      }
  } };
};
var B = defineComponent({ name: "GlobalEncrypt", setup(o2, { slots: e2 }) {
  const { isDecrypted: n2, isEncrypted: s2, validate: u2 } = K(), a2 = ref(false);
  return onMounted(() => {
    a2.value = true;
  }), () => h$3(f, () => {
    var t2, l2;
    return s2.value ? a2.value ? n2.value ? (t2 = e2.default) == null ? void 0 : t2.call(e2) : h$3(k, { full: true, onVerify: u2 }) : null : (l2 = e2.default) == null ? void 0 : l2.call(e2);
  });
} }), C = defineComponent({ name: "LocalEncrypt", setup(o2, { slots: e2 }) {
  const { status: n2, validate: s2 } = z(), u2 = ref(false);
  return onMounted(() => {
    u2.value = true;
  }), () => {
    var a2, t2;
    const { isEncrypted: l2, isDecrypted: c2 } = n2.value;
    return l2 ? u2.value ? c2 ? ((a2 = e2.default) == null ? void 0 : a2.call(e2)) || null : h$3(k, { full: true, onVerify: s2 }) : null : ((t2 = e2.default) == null ? void 0 : t2.call(e2)) || null;
  };
} });
const all$1 = "";
const slidePage = "";
var d = defineComponent({ name: "SlidePage", setup() {
  const i2 = useRouter(), o2 = ref(false), n2 = ref(), s2 = () => {
    o2.value = !o2.value;
  }, e2 = () => {
    o2.value = false;
  }, u2 = () => {
    e2(), window.history.go(-1);
  }, r2 = () => {
    e2(), i2.push("/");
  };
  return onClickOutside(n2, e2), () => h$3("div", { class: "presentation" }, [h$3(Content), h$3("div", { ref: n2, class: ["menu", { active: o2.value }] }, [h$3("button", { type: "button", class: "menu-button", onClick: () => s2() }, h$3("span", { class: "icon" })), h$3("button", { type: "button", class: "back-button", onClick: () => u2() }, h$3(q$1)), h$3("button", { type: "button", class: "home-button", onClick: () => r2() }, h$3(a$1))])]);
} });
const all = "";
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await t().wait();
      return scrollBehavior(...args);
    };
    Ra(app);
    app.component("HopeIcon", O);
    app.component("BloggerInfo", j);
    app.component("GlobalEncrypt", B);
    app.component("LocalEncrypt", C);
  },
  setup: () => {
    Fa();
    qa();
    i1();
  },
  layouts: {
    Layout: Ae,
    NotFound: Ee,
    BlogCategory: c1,
    BlogHome: m1,
    BlogType: f1,
    Timeline: y1,
    Slide: d
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  K$2,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  l$2,
  Y$1,
  clientConfig9,
  b$1,
  clientConfig11
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "Home", "i": "home" }, ["/index.html", "/README.md"]],
  ["v-22a39d25", "/about.html", { "a": "MinhTD", "d": 16824672e5, "l": "April 26, 2023", "e": "<p>My name is <strong>Truong Duc Minh</strong>, and I'm <strong>a Software Engineer</strong> based in <strong>VietNam</strong>. Here's some more information about me:</p>\n<h2> Skills</h2>\n<ul>\n<li>Python</li>\n<li>VueJS</li>\n<li>AWS</li>\n</ul>\n<h2> Experience</h2>\n<ul>\n<li>\n<h4> Oct 2020 - Nov 2021: Software Engineer</h4>\n<ul>\n<li>Fabbi JSC, Hanoi\n<ul>\n<li>Create template with HTML, CSS, JS</li>\n<li>Build models, and implement new features according to customers' requests in python Django Framework</li>\n<li>Create and maintain Restful API</li>\n<li>Working with Agile Scrum process</li>\n<li>Technical use: Python3, Django, Docker, Github, AWS EC2, AWS Route53, AWS S3</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<h4> Nov 2021 - Jun 2022: Software Engineer</h4>\n<ul>\n<li>AHT Tech JSC, Hanoi\n<ul>\n<li>Design database, infrastructure</li>\n<li>Create and maintain Restful API</li>\n<li>Working with Agile Scrum process</li>\n<li>Technical use: Python3, Django, Docker, Github, AWS EC2, AWS Route53, AWS S3</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<h4> Jun 2022 - December 2022: Software Engineer</h4>\n<ul>\n<li>CMC Global, Hanoi\n<ul>\n<li>Create and maintain Restful API</li>\n<li>Working with Agile Scrum process</li>\n<li>Technical use: Python3, Django, Docker, Github, AWS EC2, AWS Route53, AWS S3</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<h4> December 2022 - Present: Software Engineer</h4>\n<ul>\n<li>FPT Software, Hanoi\n<ul>\n<li>Create and maintain Restful API</li>\n<li>Working with Agile Scrum process</li>\n<li>Technical use: Python3, VueJS, Docker</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>", "r": { "minutes": 0.99, "words": 297 }, "y": "a", "t": "About Me" }, ["/about", "/about.md"]],
  ["v-1a48e06b", "/posts/aws-build-a-simple-infrastructure.html", { "a": "MinhTD", "d": 16824672e5, "l": "April 26, 2023", "c": ["Guide"], "g": ["AWS"], "e": "<h3> Step 1: Sign up for AWS</h3>\n<p>To sign up for an AWS account, you'll need to provide some basic information about yourself or your company, such as your name, email address, and credit card information. AWS offers a free tier that allows you to use many of its services for free for up to 12 months. This is a great way to try out AWS and experiment with its services without incurring any costs.</p>", "r": { "minutes": 3.97, "words": 1190 }, "y": "a", "t": "Building a simple infrastructure in AWS" }, ["/posts/aws-build-a-simple-infrastructure", "/posts/aws-build-a-simple-infrastructure.md"]],
  ["v-4675065a", "/posts/aws-introduction.html", { "a": "MinhTD", "d": 16824672e5, "l": "April 26, 2023", "c": ["Guide"], "g": ["AWS"], "e": "<p>Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services to help you build, deploy, and manage your applications in the cloud. AWS is a product of Amazon, and it was launched in 2006 with a handful of services. Today, AWS has become the most widely adopted cloud platform in the world, providing businesses and individuals with a flexible, reliable, and scalable infrastructure.</p>", "r": { "minutes": 3.19, "words": 957 }, "y": "a", "t": "AWS Introduction" }, ["/posts/aws-introduction", "/posts/aws-introduction.md"]],
  ["v-58c8628a", "/posts/essential-mindset-for-frontend-developers.html", { "a": "MinhTD", "d": 16872192e5, "l": "June 20, 2023", "c": ["Guide"], "g": ["Frontend"], "e": "<p>As a frontend developer, adopting the right mindset is crucial for success in various areas of web development. In this blog, we will explore three essential mindsets that frontend developers should cultivate: CSS mindset, ReactJS mindset, and Pattern Design mindset. We will dive deeper into each mindset, providing insights, code samples, and practical tips to help you excel in these areas. Let's get started!</p>", "r": { "minutes": 2.95, "words": 885 }, "y": "a", "t": "Essential Mindsets for Frontend Developers" }, ["/posts/essential-mindset-for-frontend-developers", "/posts/essential-mindset-for-frontend-developers.md"]],
  ["v-34003d17", "/posts/how-to-create-a-simple-todolist-with-fastapi.html", { "a": "MinhTD", "d": 16823808e5, "l": "April 25, 2023", "c": ["Guide"], "g": ["Python", "FastAPI"], "e": "<h1> Create A Simple Todo List API Using FastAPI</h1>\n<h2> To create a simple to-do list API using FastAPI, you can follow these steps:</h2>\n<h3> 1. Install FastAPI and uvicorn using pip:</h3>\n<p>FastAPI is a Python web framework for building APIs, and uvicorn is an ASGI server for running Python web applications. The <code>pip</code> command is used to install these packages.</p>", "r": { "minutes": 2.87, "words": 860 }, "y": "a", "t": "Create A Simple Todo List API Using FastAPI" }, ["/posts/how-to-create-a-simple-todolist-with-fastapi", "/posts/how-to-create-a-simple-todolist-with-fastapi.md"]],
  ["v-1c936a17", "/posts/moving-a-git-branch-to-a-new-base.html", { "a": "MinhTD", "d": 16820352e5, "l": "April 21, 2023", "c": ["Guide"], "g": ["Git"], "e": "<h1> Moving A Git Branch To A New Base</h1>\n<p>Suppose you have some work on a git branch that you started from one branch, and you want to move that work to be based on a different branch, as if you had started from there originally. The git rebase command gives you the tools to do it, but it’s complicated, and I can never remember the details, so I finally figured it out and made an alias to do it.</p>", "r": { "minutes": 2.1, "words": 629 }, "y": "a", "t": "Moving A Git Branch To A New Base" }, ["/posts/moving-a-git-branch-to-a-new-base", "/posts/moving-a-git-branch-to-a-new-base.md"]],
  ["v-0e271f74", "/posts/python-custom-formatting.html", { "a": "MinhTD", "d": 16820352e5, "l": "April 21, 2023", "c": ["Guide"], "g": ["Python"], "e": `<h1> Python Custom Formatting</h1>
<p>Python f-strings use a formatting mini-language, the same as the older .format() function. After the colon comes short specifications for how to format the value:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> word <span class="token operator">=</span> <span class="token string">"Hello"</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>word<span class="token punctuation">:</span><span class="token format-spec">/^20</span><span class="token punctuation">}</span></span><span class="token string">"</span></span>
<span class="token string">'///////Hello////////'</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> amt <span class="token operator">=</span> <span class="token number">12345678</span>
<span class="token operator">&gt;&gt;</span> <span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>amt<span class="token punctuation">:</span><span class="token format-spec">20,</span><span class="token punctuation">}</span></span><span class="token string">"</span></span>
<span class="token string">'          12,345,678'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 1.68, "words": 503 }, "y": "a", "t": "Python Custom Formatting" }, ["/posts/python-custom-formatting", "/posts/python-custom-formatting.md"]],
  ["v-44da3324", "/posts/python-developer-career-path.html", { "a": "MinhTD", "d": 16820352e5, "l": "April 21, 2023", "e": "<h1> How to Build a Successful Career in Python Development</h1>\n<p>Python is a popular programming language that is widely used in various fields such as web development, machine learning, data analysis, scientific computing, and automation. As a result, Python developers are in high demand, and there are many career opportunities available for those who have skills and experience in this language.</p>", "r": { "minutes": 1.95, "words": 584 }, "y": "a", "t": "How to Build a Successful Career in Python Development" }, ["/posts/python-developer-career-path", "/posts/python-developer-career-path.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, ["/404"]],
  ["v-e1e3da16", "/posts/", { "y": "p", "t": "Posts" }, ["/posts/index.html"]],
  ["v-5bc93818", "/category/", { "y": "p", "t": "Category", "I": 0 }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "y": "p", "t": "Tag", "I": 0 }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "y": "p", "t": "Articles", "I": 0 }, ["/article/index.html"]],
  ["v-154dc4c4", "/star/", { "y": "p", "t": "Star", "I": 0 }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "y": "p", "t": "Timeline", "I": 0 }, ["/timeline/index.html"]],
  ["v-ac0c2a6a", "/category/guide/", { "y": "p", "t": "Guide Category", "I": 0 }, ["/category/guide/index.html"]],
  ["v-b315dfc0", "/tag/aws/", { "y": "p", "t": "AWS Tag", "I": 0 }, ["/tag/aws/index.html"]],
  ["v-1b3ae9cf", "/tag/frontend/", { "y": "p", "t": "Frontend Tag", "I": 0 }, ["/tag/frontend/index.html"]],
  ["v-245f5676", "/tag/python/", { "y": "p", "t": "Python Tag", "I": 0 }, ["/tag/python/index.html"]],
  ["v-72723002", "/tag/fastapi/", { "y": "p", "t": "FastAPI Tag", "I": 0 }, ["/tag/fastapi/index.html"]],
  ["v-b310d42a", "/tag/git/", { "y": "p", "t": "Git Tag", "I": 0 }, ["/tag/git/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h$3(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$3(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$3(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp,
  f$4 as f,
  k$4 as k
};

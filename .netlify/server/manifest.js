var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["2020-icon.svg", "favicon.png", "fonts/alkes_bold-webfont.woff2", "fonts/alkes_bold_italic-webfont.woff2", "fonts/alkes_regular-webfont.woff2", "fonts/alkes_regular_italic-webfont.woff2", "fonts/avertastd-bold-webfont.woff2", "fonts/avertastd-regular-webfont.woff2", "fonts/monolisa-regular-webfont.woff2", "images/bio-photo.jpg", "images/post_images/01-Google-Pixel-4-Front-879x1024.jpg", "images/post_images/01-Google-Pixel-4-Front.jpg", "images/post_images/02-Google-Pixel-4-Front-1024x923.png", "images/post_images/02-Google-Pixel-4-Front.png", "images/post_images/100s.png", "images/post_images/20150401_142813-300x206.jpg", "images/post_images/20150401_142813.jpg", "images/post_images/2018-logo.jpg", "images/post_images/2020-logo-final.svg", "images/post_images/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png", "images/post_images/Alfred.png", "images/post_images/Chrome.png", "images/post_images/ClipMenu.png", "images/post_images/CodeKit.png", "images/post_images/ColorPost-1-1024x316.jpg", "images/post_images/ColorPost-1.jpg", "images/post_images/ColorPost-2-1024x579.jpg", "images/post_images/ColorPost-2.jpg", "images/post_images/ColorPost-3-1024x611.jpg", "images/post_images/ColorPost-3.jpg", "images/post_images/ColorPost-4.jpg", "images/post_images/Dark_Grey_Shortcode-icon.jpeg", "images/post_images/Dropbox.svg", "images/post_images/EQ0-F2nXUAEpgCx.jpeg", "images/post_images/File-Types-Prev.png", "images/post_images/File-Types.png", "images/post_images/FlyFest_site_Flywheel-1800x620.jpeg", "images/post_images/Flywheel-Logo.svg", "images/post_images/Full-Logo-2018.svg", "images/post_images/GenerateWP.png", "images/post_images/GenerateWP_Mark.png", "images/post_images/Image-2017-01-24-at-9.39.57-AM.png", "images/post_images/Image-2017-01-24-at-9.45.27-AM-1024x359.png", "images/post_images/Image-2017-01-24-at-9.45.27-AM-e1485272816136.png", "images/post_images/Image-2020-02-20-at-8.47.39-PM-1024x691.png", "images/post_images/Image-2020-02-20-at-8.47.39-PM.png", "images/post_images/Image-2020-02-20-at-9.10.43-PM-1024x699.png", "images/post_images/Image-2020-02-20-at-9.10.43-PM.png", "images/post_images/Image-2020-06-05-at-11.47.11-AM-1024x391.png", "images/post_images/Image-2020-06-05-at-11.47.11-AM.png", "images/post_images/Image-2020-06-13-at-9.57.00-PM-1024x976.png", "images/post_images/Image-2020-06-13-at-9.57.00-PM.png", "images/post_images/Jetpack_plugins.png", "images/post_images/LastPass-Logo-Color.svg", "images/post_images/Local-Logo.svg", "images/post_images/Negative-Space.png", "images/post_images/Screen-Recording-2020-02-20-at-09.55-PM-1.gif", "images/post_images/Screen-Recording-2020-02-20-at-09.55-PM.gif", "images/post_images/Screen-Shot-2015-04-01-at-11.57.35-AM.png", "images/post_images/Screen-Shot-2015-04-01-at-11.57.53-AM.png", "images/post_images/Screen-Shot-2015-04-01-at-11.59.07-AM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.00.41-PM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.00.57-PM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.01.50-PM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.02.15-PM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.02.28-PM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.02.37-PM.png", "images/post_images/Screen-Shot-2015-04-01-at-12.03.00-PM.png", "images/post_images/Screen-Shot-2015-09-03-at-9.07.07-AM.png", "images/post_images/Screen-Shot-2015-09-03-at-9.08.06-AM.png", "images/post_images/Screen-Shot-2015-09-03-at-9_14_54-AM.png", "images/post_images/Screenshot-2015-12-31-11.24.32.png", "images/post_images/Screenshot-2015-12-31-11.26.45.png", "images/post_images/Screenshot-2016-01-17-20.11.39.png", "images/post_images/Screenshot-2016-06-24-20_45_21.png", "images/post_images/Spectacle-Logo.jpg", "images/post_images/Sublime_Text_Logo.png", "images/post_images/Swatch-Panel.jpg", "images/post_images/Transmit.png", "images/post_images/Untitled-1.png", "images/post_images/Untitled-1024x928.png", "images/post_images/Untitled-2.png", "images/post_images/Untitled-21.png", "images/post_images/Untitled.png", "images/post_images/WP-plus-Jetpack.png", "images/post_images/Wunderlist_Logo.png", "images/post_images/acf-fields-1-1024x797.png", "images/post_images/acf-fields-1.png", "images/post_images/acf-fields.png", "images/post_images/acf-pro-dev-launch.png", "images/post_images/add-new-block-1024x687.png", "images/post_images/add-new-block.png", "images/post_images/affinity-photo-available-on-the-mac-app-store.png", "images/post_images/block-lab-banner.png", "images/post_images/block-selection.png", "images/post_images/build-better-css-forms-design-principles.png", "images/post_images/building-pwa-vue-js.webp", "images/post_images/caniuse-css-vars-1-1.png", "images/post_images/caniuse-css-vars-1.png", "images/post_images/changing-css-var-color.gif", "images/post_images/codekit-magic.gif", "images/post_images/codekit-preview-window.png", "images/post_images/codekit-public-folder.png", "images/post_images/codekit-window.png", "images/post_images/codepen.svg", "images/post_images/converting-to-sveltekit.png", "images/post_images/create-new-block.png", "images/post_images/css-variables-1.png", "images/post_images/css-variables-media-queries-1.gif", "images/post_images/css-variables-media-queries-2.gif", "images/post_images/css-variables-media-queries-3.gif", "images/post_images/css-variables-media-queries.gif", "images/post_images/elegant-themes-logo.svg", "images/post_images/fullwidth-achieved.png", "images/post_images/fullwidth-left.png", "images/post_images/fullwidth-overflow-1024x600.png", "images/post_images/fullwidth-overflow.png", "images/post_images/fullwidth-widewidth.png", "images/post_images/github_desktop.png", "images/post_images/gridsome-to-sveltekit.png", "images/post_images/gtmetrix-1024x330.png", "images/post_images/gtmetrix.png", "images/post_images/gutenberg-image-toolbar-with-wide.png", "images/post_images/gutenberg-wide-illustration.png", "images/post_images/gw.png", "images/post_images/hello-world-button.gif", "images/post_images/icon.png", "images/post_images/image-1-1024x155.png", "images/post_images/image-1.png", "images/post_images/image-1024x124.png", "images/post_images/image-1024x557.png", "images/post_images/image-2-1024x865.png", "images/post_images/image-2.png", "images/post_images/image-3-1024x449.png", "images/post_images/image-3.png", "images/post_images/image.png", "images/post_images/instagram-over-1.png", "images/post_images/instagram-over.png", "images/post_images/introducing_svelte.png", "images/post_images/inverted-sliders.gif", "images/post_images/local-new-site-setup.png", "images/post_images/money.png", "images/post_images/next-step-1024x381.png", "images/post_images/next-step.png", "images/post_images/npm.webp", "images/post_images/port-conflict.png", "images/post_images/quina-post-hero.jpg", "images/post_images/sass-grid.png", "images/post_images/sass-variables.png", "images/post_images/seesaw.png", "images/post_images/side-note-block-backend-1024x405.png", "images/post_images/side-note-block-backend.png", "images/post_images/side-note-options-1024x694.png", "images/post_images/side-note-options.png", "images/post_images/social-share-image.png", "images/post_images/svelte-react-vue.png", "images/post_images/sveltekit-about-page-created.png", "images/post_images/sveltekit-css.png", "images/post_images/sveltekit-dummy-json.png", "images/post_images/sveltekit-header-component.png", "images/post_images/sveltekit-init.png", "images/post_images/sveltekit-installation-confirmation.png", "images/post_images/sveltekit-layout-shown.png", "images/post_images/sveltekit-learn.png", "images/post_images/sveltekit-min-blog-post-render.png", "images/post_images/sveltekit-posts-json.png", "images/post_images/sveltekit-posts-list.png", "images/post_images/sveltekit-rehype-css.png", "images/post_images/sveltekit-rehype.png", "images/post_images/sveltekit-rendered-md-post-with-meta.png", "images/post_images/sveltekit-scoped.png", "images/post_images/sveltekit-uses-rendered.png", "images/post_images/toa-heftiba-195458-1-1.jpg", "images/post_images/tutorial-1-1024x576.png", "images/post_images/tutorial-1.png", "images/post_images/tutorial-3-1024x576.png", "images/post_images/tutorial-3.png", "images/post_images/tutorial-4-1024x576.png", "images/post_images/tutorial-4.png", "images/post_images/ultimate-guide-SVGs-vue-js.webp", "images/post_images/utterances.png", "images/post_images/welcome-to-sveltekit.png", "images/post_images/what-i-wish.png", "images/post_images/wide-width-only-1024x713.png", "images/post_images/wide-width-only.png", "images/post_images/wordpress-bg-medblue.png", "images/post_images/wordpress.jpg", "images/post_images/wp-plus-gridsome.png", "images/quina-clues.png", "images/quina-mockup1.png", "images/site-image.png"]),
  mimeTypes: { ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp" },
  _: {
    entry: { "file": "start-e2f36534.js", "js": ["start-e2f36534.js", "chunks/vendor-b62d7b9b.js", "chunks/preload-helper-e4860ae8.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/16.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/17.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/18.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/19.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/20.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/21.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/22.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "writing-and-speaking",
        pattern: /^\/writing-and-speaking\/?$/,
        names: [],
        types: [],
        path: "/writing-and-speaking",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "endpoint",
        id: "berita.json",
        pattern: /^\/berita\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/berita.json.js")))
      },
      {
        type: "page",
        id: "products",
        pattern: /^\/products\/?$/,
        names: [],
        types: [],
        path: "/products",
        shadow: null,
        a: [0, 4, 5],
        b: [1]
      },
      {
        type: "page",
        id: "products/[slug]",
        pattern: /^\/products\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 4, 6],
        b: [1]
      },
      {
        type: "page",
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        path: "/projects",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "berita",
        pattern: /^\/berita\/?$/,
        names: [],
        types: [],
        path: "/berita",
        shadow: null,
        a: [0, 9, 10],
        b: [1]
      },
      {
        type: "page",
        id: "berita/[slug]",
        pattern: /^\/berita\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 9, 11],
        b: [1]
      },
      {
        type: "page",
        id: "resume",
        pattern: /^\/resume\/?$/,
        names: [],
        types: [],
        path: "/resume",
        shadow: null,
        a: [0, 12],
        b: [1]
      },
      {
        type: "page",
        id: "blog",
        pattern: /^\/blog\/?$/,
        names: [],
        types: [],
        path: "/blog",
        shadow: null,
        a: [0, 13, 14],
        b: [1]
      },
      {
        type: "page",
        id: "blog/category",
        pattern: /^\/blog\/category\/?$/,
        names: [],
        types: [],
        path: "/blog/category",
        shadow: null,
        a: [0, 13, 15],
        b: [1]
      },
      {
        type: "page",
        id: "blog/category/[category]",
        pattern: /^\/blog\/category\/([^/]+?)\/?$/,
        names: ["category"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 13, 16],
        b: [1]
      },
      {
        type: "page",
        id: "blog/preview/[slug]",
        pattern: /^\/blog\/preview\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 13, 17],
        b: [1]
      },
      {
        type: "page",
        id: "blog/page/[page]",
        pattern: /^\/blog\/page\/([^/]+?)\/?$/,
        names: ["page"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 13, 18],
        b: [1]
      },
      {
        type: "page",
        id: "blog/[post]",
        pattern: /^\/blog\/([^/]+?)\/?$/,
        names: ["post"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 13, 19],
        b: [1]
      },
      {
        type: "page",
        id: "uses",
        pattern: /^\/uses\/?$/,
        names: [],
        types: [],
        path: "/uses",
        shadow: null,
        a: [0, 20],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/products/products.json",
        pattern: /^\/api\/products\/products\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/products/products.json.js")))
      },
      {
        type: "endpoint",
        id: "api/products/[slug].json",
        pattern: /^\/api\/products\/([^/]+?)\.json$/,
        names: ["slug"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/products/_slug_.json.js")))
      },
      {
        type: "endpoint",
        id: "api/rss.xml",
        pattern: /^\/api\/rss\.xml$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/rss.xml.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/berita/berita.json",
        pattern: /^\/api\/berita\/berita\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/berita/berita.json.js")))
      },
      {
        type: "endpoint",
        id: "api/berita/[slug].json",
        pattern: /^\/api\/berita\/([^/]+?)\.json$/,
        names: ["slug"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/berita/_slug_.json.js")))
      },
      {
        type: "endpoint",
        id: "api/posts.json",
        pattern: /^\/api\/posts\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/posts/index.json.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/posts/count.json",
        pattern: /^\/api\/posts\/count\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/posts/count.json.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/ukm/ukm.json",
        pattern: /^\/api\/ukm\/ukm\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/ukm/ukm.json.js")))
      },
      {
        type: "endpoint",
        id: "api/ukm/[slug].json",
        pattern: /^\/api\/ukm\/([^/]+?)\.json$/,
        names: ["slug"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/ukm/_slug_.json.js")))
      },
      {
        type: "page",
        id: "ukm",
        pattern: /^\/ukm\/?$/,
        names: [],
        types: [],
        path: "/ukm",
        shadow: null,
        a: [0, 21],
        b: [1]
      },
      {
        type: "page",
        id: "ukm/[slug]",
        pattern: /^\/ukm\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 22],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

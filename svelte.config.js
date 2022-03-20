  import preprocess from 'svelte-preprocess'
  import autoprefixer from 'autoprefixer'
  import adapter from "@sveltejs/adapter-static"
  import { mdsvex } from 'mdsvex'
  import rehypeAutolinkHeadings from 'rehype-autolink-headings'
  import rehypeSlug from 'rehype-slug'
  const dev = "production" === "development";
  /** @type {import('@sveltejs/kit').Config} */
  const config = {
      // Consult https://github.com/sveltejs/svelte-preprocess
      // for more information about preprocessors
      extensions: ['.svelte', '.md'],
      preprocess: [
          preprocess({
              scss: {
                  prependData: `@use 'src/lib/assets/scss/vars';`
              },
              postcss: {
                  plugins: [autoprefixer]
              }
          }),
          mdsvex({
              extensions: ['.md'],
              highlight: {
                  alias: { vue: 'html' }
              },
              rehypePlugins: [
                  rehypeSlug,
                  rehypeAutolinkHeadings,
              ],
          }),
      ],

      kit: {
          // hydrate the <div id="svelte"> element in src/app.html
          // target: '#svelte',

          //Added for static adapter
          adapter: adapter({
              pages: "docs",
              assets: "docs"
          }),
          paths: {
              // change below to your repo name
              base: dev ? "" : "/rickyjanuari",
          },
      }
  }

  export default config;
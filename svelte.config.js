import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import mdPlugin from "vite-plugin-gray-matter";
import sw from "kit-sw-workbox"

import mdit from 'markdown-it'
const md = mdit('commonmark', { typographer:true })

const render = (markdown) => {
  return md.render(markdown)
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({})],

  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        sw({
          routes: [
            '/',
            '/about',
            '/contents',
            '/help',
          ]
        }),
        mdPlugin({
          excerpt:true,
          render
        })
      ],
      server: { fs: { allow: ['..']}}
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;

/** @type {import('@sveltejs/kit').Config} */

import vercel from "@sveltejs/adapter-vercel";
import markdown from "@jackfranklin/rollup-plugin-markdown";
import glob from "rollup-plugin-glob";


const config = {
  
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: vercel(),
    vite: () => ({
      plugins: [markdown(),glob()],
           }),
  },
};

export default config;


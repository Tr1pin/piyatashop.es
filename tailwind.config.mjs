/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'animate-slide-in-bottom-shirt',
    'animate-slide-in-bottom-bag',
    'animate-slide-in-bottom-mug',
    'animate-slide-in-bottom-ball',
    'animate-slide-in-bottom-ballBeige',
    'animate-slide-in-bottom-belt',
    'animate-slide-in-bottom-harness',
  ],
  content: [
    "./index.html",
    "./assets/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./config/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./styles/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

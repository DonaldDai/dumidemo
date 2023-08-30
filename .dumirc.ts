import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'tempdumi',
  },
  publicPath: process.env.NODE_ENV === 'production' ? 'https://donalddai.github.io/dist/' : '/',
});

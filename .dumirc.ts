import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    docDirs: ['docmd'],
  },
  outputPath: 'docs',
  themeConfig: {
    name: 'tempdumi',
  },
  publicPath: process.env.NODE_ENV === 'production' ? 'https://donalddai.github.io/dumidemo/' : '/',
});

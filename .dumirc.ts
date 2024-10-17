import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'luna-ui',
  },
  logo: false,
  base: '/luna-ui/', // GitHub Pages 路径前缀（仓库名）
  publicPath: '/luna-ui/', // 静态资源路径前缀
});

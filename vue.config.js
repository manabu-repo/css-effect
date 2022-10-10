const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    port: 9000,
  },

  transpileDependencies: true,

  pages: {
    index: {
      entry: 'src/views/index/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },

    star: {
      entry: 'src/views/star/main.ts',
      template: 'public/index.html',
      filename: 'star.html',
      title: 'star',
      chunks: ['chunk-vendors', 'chunk-common', 'star'],
    },
  },
});

// craco.config.js
const path = require('path');
const cracoSassResourcesLoader = require('sass-resources-loader');
module.exports = {
  plugins: [
    {
      plugin: cracoSassResourcesLoader,
      options: {
        resources: path.resolve(__dirname, 'src/styles/index.scss'),
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'), // 允许通过@符号来表示 src目录
      components: path.resolve('src/components'),
    },
  },
};

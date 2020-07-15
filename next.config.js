const withImages = require('next-images')
const withCSS = require('@zeit/next-css')


module.exports = withImages(withCSS({
  webpack(config, options) {
    return config
  },
  distDir: 'build',
  exportTrailingSlash: true,
  
  // assetPrefix: '/ulmaya-next.zikto.com',
}))

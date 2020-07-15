const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');


module.exports = withFonts(withImages(withCSS({
  webpack(config, options) {
    return config
  },
  enableSvg: true,
  distDir: 'build',
  exportTrailingSlash: true,

  // assetPrefix: '/ulmaya-next.zikto.com',
})))

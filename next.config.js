// next.config.js
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});

// module.exports = {
//     useFileSystemPublicRoutes: false
// }

module.exports = {
    distDir: 'build'
}

module.exports = {
    pageExtensions: ['jsx', 'js']
}


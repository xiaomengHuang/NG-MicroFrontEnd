const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require("webpack-merge");

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);
  const singleSpaConfig = {
    output: {
      library: 'app2',
      libraryTarget: 'umd',
      filename: '[name].js'
    },
    externals: {
      "rxjs": "rxjs",
      "@angular/core": "ng.core",
    }
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
}
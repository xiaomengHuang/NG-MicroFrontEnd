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
      // "@angular/common": "ng.common",
      // "@angular/common/http": "ng.common.http",
      // "@angular/platform-browser": "ng.platformBrowser",
      // "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
      // "@angular/compiler": "ng.compiler",
      // '@angular/common': 'commonjs @angular/common',
      // '@angular/compiler': 'commonjs @angular/compiler',
      // '@angular/platform-browser': 'commonjs @angular/platform-browser',
      // '@angular/platform-browser-dynamic': 'commonjs @angular/platform-browser-dynamic',
      // '@angular/http': 'commonjs @angular/http',
      // '@angular/router': 'commonjs @angular/router',
      // '@angular/forms': 'commonjs @angular/forms'
    },
    // externals: [
    // '@angular/core': '@angular/core',
    // '@angular/common': 'angular/common/bundles/common.umd.js',
    // '@angular/compiler': 'angular/compiler/bundles/compiler.umd.js',
    // '@angular/platform-browser': 'angular/platform-browser/bundles/platform-browser.umd.js',
    // '@angular/platform-browser-dynamic': 'angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    // '@angular/http': 'angular/http/bundles/http.umd.js',
    // '@angular/router': 'angular/router/bundles/router.umd.js',
    // '@angular/forms': 'angular/forms/bundles/forms.umd.js',
    // ],
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
}
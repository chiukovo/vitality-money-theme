require('dotenv').config()
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'spa',
  head: {
    title: process.env.NUXT_ENV_WEB_TITLE || '',
    meta: [
      { charset: 'utf-8' }
    ],
    script: [
      { src: '/tt2/js/jquery.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    ['nuxt-vuex-localstorage', {
      sessionStorage: ['sessionStorage'],
      localStorage: ['localStorage'],
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
  },
  proxy: {
  },
  router: {
  },
  chainWebpack: config => {
    //close eslint
    config.module.rules.delete("eslint");
  }
}

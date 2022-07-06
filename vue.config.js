module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    externals: ["vue", "vue-router", "mfe-share-lib"],
    output: {
      libraryTarget: "system",
    },
  },
  filenameHashing: false,
  // chainWebpack: (config) => {
  //   if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) {
  //     config.plugins.delete("SystemJSPublicPathWebpackPlugin")
  //   }
  //   config.externals({ jquery: "jQuery", bootstrap: "bootstrap" })
  //   config.merge({ devtool: "source-map" })
  // },
}
// const { defineConfig } = require("@vue/cli-service")
// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//     output: {
//       libraryTarget: "system",
//       filename: "js/app.js",
//     },
//   },
// })

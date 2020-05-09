// 作为配置文件，直接导出配置对象即可
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("html")
      .test(/\.html$/)
      .use("html-loader")
      .loader("html-loader");
  }
};

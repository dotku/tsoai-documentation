module.exports = function myAnalyticsPlugin() {
  return {
    name: "my-analytics-plugin",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              defer: true,
              "data-domain": "operatornext.cn",
              src: "https://plausible.io/js/script.js",
            },
          },
        ],
      };
    },
  };
};

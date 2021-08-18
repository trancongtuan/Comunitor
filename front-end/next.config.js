module.exports = {
  reactStrictMode: true,
};
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  async redirects() {
    return [
      {
        source: "/old-blog/:slug",
        destination: "/news/:slug", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack5: false,
  webpack(config, options) {
    if (!options.isServer) {
      config.node = {
        fs: "empty",
      };
    }
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    SECRET_TOKEN_KEY: "token",
  },
  // esModule: true,
  i18n,
});

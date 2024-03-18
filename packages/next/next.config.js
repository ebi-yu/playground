const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@next"] = path.join(__dirname, "src");
    return config;
  },
  experimental: {
    appDir: true,
  },
  output: "export",
};

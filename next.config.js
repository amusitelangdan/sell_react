const withPlugins = require("next-compose-plugins")
const reactSvg = require("next-react-svg")
const path = require("path")

// next.js configuration
const nextConfig = {
  images: {
    domains: ["45.63.15.204"],
    // loader: "imgix", // Uncomment this line for STATIC EXPORT
    // path: "", // Uncomment this line for STATIC EXPORT
  },
  env: {
    production_type: "server", // Change variable to "static" for STATIC EXPORT
  },
  distDir: "build",
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  // trailingSlash: true // Uncomment this line for STATIC EXPORT
}

module.exports = withPlugins(
  [
    [
      reactSvg,
      {
        include: path.resolve(__dirname, "src/assets/svg"),
      },
    ],
  ],
  nextConfig
)

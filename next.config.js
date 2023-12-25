var WebpackObfuscator = require("webpack-obfuscator");
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
  // webpack: (config, { dev }) => {
  //   if (!dev) {
  //     config.plugins.push(new WebpackObfuscator({ rotateStringArray: true }));
  //   }
  //   return config;
  // },
  // experimental: {
  //   webpackBuildWorker: true,
  // },
};

module.exports = nextConfig;

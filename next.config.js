/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  withImages({
    // Image configuration options go here, if needed
  }),
], {
  /* Other Next.js configurations go here */
  // For example, you can configure your assetPrefix, basePath, or other options
});

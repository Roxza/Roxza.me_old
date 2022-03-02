module.exports = {
  images: {
    domains: ["cdn.discordapp.com", "roxza.me", "i.ibb.co"],
  },
  reactStrictMode: true,
  outputFileTracing: false,
  mode: 'production',
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
        }).apply(compiler);
      },
    ],
  }
};

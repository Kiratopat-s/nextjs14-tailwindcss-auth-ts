module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // We're in the browser build, replace 'crypto' module with 'crypto-browserify'
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve("crypto-browserify"),
      };
    }

    return config;
  },
};

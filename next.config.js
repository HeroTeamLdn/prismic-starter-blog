module.exports = (phase, { defaultConfig }) => ({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      oneOf: [
        {
          resourceQuery: /global/,
          use: [
            defaultLoaders.babel,
            {
              loader: require("styled-jsx/webpack").loader,
              options: {
                type: "global"
              }
            }
          ]
        },
        {
          use: [
            defaultLoaders.babel,
            {
              loader: require("styled-jsx/webpack").loader,
              options: {
                type: "scoped"
              }
            }
          ]
        }
      ]
    });
    return config;
  }
});

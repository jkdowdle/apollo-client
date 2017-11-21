// config-overrides.js 
// module.exports = function override(config, env) {

// }

function clientGraphql(config) {
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf instanceof Array) {
      return {
        ...rule,
        // create-react-app let every file which doesn't match to any 
        // filename test falls back to file-loader,
        // so we need to add purs-loader before that fallback.
        // see: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js#L220-L236
        oneOf: [
          {
            test: /\.(graphql|gql)$/,
            loader: 'graphql-tag/loader',
            exclude: /node_modules/
          },
          ...rule.oneOf
        ]
      }
    }

    return rule
  })

  return config
}

module.exports = function override(config, env) {
  clientGraphql(config)
  return config
}
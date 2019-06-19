module.exports = {
  presets: [
    "@babel/react",
    ["@babel/env", { targets: { chrome: "57" } }],
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
  ],
  env: {
    prod: {
      plugins: ["babel-plugin-transform-react-remove-prop-types"]
    },
    dev: {
      plugins: ["react-hot-loader/babel"]
    },
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    },
    e2e: {
      plugins: [
        [
          "istanbul",
          {
            exclude: ["**/node_modules/**", "**/js/glue/**", "**/jest/**"]
          }
        ]
      ]
    }
  }
};

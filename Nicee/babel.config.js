// Docs: https://babeljs.io/docs/en/configuration

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        /* Options */
        "targets": {
          "node": "18"
        }
      },
    ],
    '@babel/preset-react',
    // Add more presets if needed
  ],
  // Add plugins or other configurations if needed
};

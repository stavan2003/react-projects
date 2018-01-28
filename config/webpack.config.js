var webpack = require('webpack');
var path = require('path');

module.exports = {
    // Which files make up our projects and libraries
    // and where are they located in project
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        // How to process project files with loaders
        // Its an array and can pass through multiple loaders
        rules: [
          {
            // Process any .jsx file with Babel-loader.
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
    // What is the entry point for the project
    entry: 'index.jsx',
    // Where to output the final bundles code
	output: {
        filename: 'app.js',
        path: require('path').resolve("dist"),
	}
};
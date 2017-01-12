var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = [
  {
    name: "node",
    context: __dirname,
    entry:{
      "server": __dirname + "/src/server.js"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js"
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    target: "node",
    module: {
     loaders: [
       {
         test: /\.js$/,
         exclude: [/node_modules/, /dist/],
         loader: 'babel',
         query: {
           presets: ['es2015']
         }
       },
       {
         test: /\.json$/,
         loader: 'json'
       }
     ]
    },
    externals: nodeModules
  }
  //  {
  //    name: "client",
  //    context: __dirname,
  //    entry: {
  //      "main": __dirname + "/modules/client/main/main.js",
  //      "portal_main": __dirname + "/modules/portal-client/main/main.js"
  //    },
  //    onParse: /node_modules\/quill\/dist/,
  //    output: {
  //      path: __dirname + "/dist",
  //      filename: "public/js/[name].js"
  //    },
  //    module: {
  //     loaders: [
  //       {
  //         test: /\.js$/,
  //         exclude: [/node_modules/, /dist/],
  //         loader: 'babel',
  //         query: {
  //           presets: ['es2015', 'react']
  //         }
  //       },
  //       {
  //         test: /\.styl$/,
  //         loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
  //       },
  //       {
  //         test: /\.json$/,
  //         loader: 'json'
  //       }
  //     ]
  //    },
  //    stylus: {
  //      use: [require('nib')()],
  //      import: ['~nib/lib/nib/index.styl']
  //    },
  //    plugins: [
  //      new ExtractTextPlugin("public/stylesheet/[name].css")
  //    ]
  //  }
]

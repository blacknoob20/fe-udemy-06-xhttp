const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    contentBase: './dist',
    compress: true,
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /style.css$/, //Este es para copiar el archivo a la capeta dist con el plugin mini-css-extract-plugin
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpack(),//[new HtmlWebpack({template:'../scr/index.html', filename:''})]
    new MiniCssExtract(),//new MiniCssExtract({filename: 'nuevo-estilo.css', ignoreOrder: false})
  ],
};

module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/"
        }
      }]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"]
    },
  ]
}
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  module:{
    rules:[
        {
            test: /\.(scss)$/,
            use: [
                {
                    loader: 'style-loader'
                }, 
                {
                    loader: 'css-loader'
                }, 
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, 
                {
                    loader: 'sass-loader'
                }
            ]
        }  
    ]
  }
};
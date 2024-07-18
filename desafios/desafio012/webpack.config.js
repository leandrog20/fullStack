const { watch } = require("fs")
const path = require("path")

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

   


    // devServer: {
    //     contentBase: path.join(__dirname, "src"),
    //     watchContentBase: true,
    //     liveReload: true
    // },

    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },

        
        compress: true,
        port: 9000,
      }

}
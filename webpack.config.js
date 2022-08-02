//引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
// webpack中所有的配置信息都应该写在module.exports
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: "bundle.js",
        // 告诉webpack不使用箭头立即执行函数包裹打包后的js代码
        environment:{
            arrowFunction:false
        }
    },
    // 指定webpack打包时要使用模块
    module: {
        // 指定加载的规则
        rules: [{
            // test指定的是规则生效的文件
            test: /\.ts$/,
            // 要使用的loader
            use: [
                // 配置babel
                {
                    loader: "babel-loader",
                    options: {
                        // 设置预定义的环境
                        presets: [
                            [
                                // 设置环境的插件
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    targets:{
                                        "chrome":"88"
                                    },
                                    // 指定corejs的版本,对js版本进行转换
                                    "corejs":"3",
                                    //使用corejs的版本方法 usage表示按需加载
                                    "useBuiltIns":"usage"
                                }
                            ]
                        ]
                    }
                },
                'ts-loader',
            ],
            // 要排除的文件
            exclude: /node-modules/,
        },
        // 设置less文件的处理
        {
            test:/\.less$/,
            use:[
                "style-loader",
                "css-loader",
                // 引入postcss
                {
                    loader:'postcss-loader',
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 2 versions'
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }
    ]
    },
    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:"这是自定义title"
            template: './src/index.html'
        })
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: "production"
}
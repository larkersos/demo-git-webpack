/**
 * Created by larker on 2018/11/14.
 */
const path = require("path");
module.exports = {
    entry: {
        index: "./src/app/main.js" //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name].bundle.js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, "dist")//输出文件路径
    },
    module: { // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]//处理css
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        outputPath:'images/',//输出到images文件夹
                        limit:500  //是把小于500B的文件打成Base64的格式，写入JS
                    }
                }]
            }
        ]
    },
    //plugins: [// 对应的插件
    //    new HtmlWebpackPlugin({ //配置
    //        filename: 'index.html',//输出文件名
    //        template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
    //    }),
    //    new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    //]

}
### 前提准备

> `mkdir webpack-demo`
>
> `cd webpack-demo`
>
> `npm init -yes`
>
> `npm install webpack --save-dev`
>
> 



### webpack.config.js配置文件

```javascript
// node.js中的核心模块，用于操作文件路径
const path = require('path'); 

// 该插件会自动生成一个html文件，并自动插入bundle出来的文件（bundle出来的.js文件）
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');	//清除文件

const config = {
	entry : {							// 输入
		app : './src/index.js',
		print : './src/print.js'
	},
	output : {							// 输出
		path : path.resolve(__dirname, 'dist'),
		filename : '[name].bundle.js'
	},
  	devtool : 'inline-source-map',		// 带包后的文件中如果出错，可以找到出错的原文件
  	devServer: {						// 告诉服务器在哪里找实时更新的文件
  		contentBase: './dist'，
        
	},
	module : {							// 开发环境下用于处理文件的
		rules : [
			{	// 处理css
				test : /\.css$/,
				use : [
					'style-loader',
					'css-loader'
				]
            },{	// 处理图片
              	test: /\.(png|svg|jpg|gif)$/,
         		use: [
           			'file-loader'
         		]
            },{	// 处理字体
  				test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader'
                ]
            },{ // .js
                test : /\.js?$/,
                exclude: /(node_modules)/, // 忽略node_modules下的.js文件
                loader: "babel-loader" // 使用babel-loader出来.js文件
            }
		]
	},
	plugins : [
      	new CleanWebpackPlugin(['dist']),	//在每次构建前清理 /dist 文件夹
		new HtmlWebpackPlugin({
			title : "使用了html-webpack-plugin生成index文件"
		})
	],
    resolve: {//一般情况下webpack只能识别.js文件，通过
        extensions: ['.ts', '.tsx']  // 拓展后缀名为.ts的文件，即typescript语法的文件
    }
}

module.exports = config;
```



### 加载css文件

> 在项目中安装`style-loader` 和 `css-loader`
>
> 在终端运行`npm install --save-dev style-loader css-loader` 命令
>
> style-loader的作用：将css文件插入到html文件的style标签中
>
> css-loader的作用：遍历并加载所有的css文件



```javascript
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
```





###  加载图片

> 在终端运行`npm install --save-dev file-loader`

```javascript
 	module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
```



###  加载字体

> file-loader 和 url-loader 可以接收并加载任何文件，包括字体

```javascript
// 使用file-loader来加载字体，添加如下代码用于识别字体文件
+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }
```



### 多入口(entry)，多输出(output)

项目结构

```
webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
  	|- index.html
  |- /src
    |- index.js
    |- print.js
  |- /node_modules
```

代码

```javascript
entry : {
  	app : './src/index.js',
    print : './src/print.js'
},
output : {
    path : path.resolve(__dirname, 'dist'),
    filename : '[name].bundle.js'	//生成的文件为app.bundle.js  和  print.bundle
},
```



### html-webpack-plugin的使用

生成一个新的index.html文件，并可以将自动构建的文件添加到index.html文件中。

如在有两个入口的js文件中，自动构建时会生成两个bundle文件，如果没有使用插件的话就需要手动的引入bundle后的文件，而引入插件后一切都自动的完成引用。

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>使用了html-webpack-plugin生成indexz文件</title>
  </head>
  <body>
   <!-- 自动引用app.bundle.js和print.bundle.js --> 
  <script type="text/javascript" src="app.bundle.js"></script>
  <script type="text/javascript" src="print.bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
// 1.引用包
+   const HtmlWebpackPlugin = require('html-webpack-plugin');

// 2.在配置对象中添加如下代码
+	plugins : [
+		new HtmlWebpackPlugin({
+			title : "使用了html-webpack-plugin生成index文件"
+		})
+	]


```



### 报错工具devtool

多个文件打包成一个文件时，代码如果出错可以找到原文件的位置

需要安装npm包`npm isntall --save-dev inline-source-map`  并在webpack.config.js配置文件中引用

```javascript
devtool : 'inline-source-map'	// 查看webpack.config.js
```



### 自动编译代码

编写的代码一但被保存就编译，可以使用`webpage`自身的功能实现，在`package.json`文件的`script`中添加一段代码即可，在终端中执行`npm run watch`

```javascript
 "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "watch": "webpack --watch",	//	监听保存
      "build": "webpack"			//  不监听保存
 },
```



### 热更新

可以使用`webpack-dev-server`来实现浏览器的自动刷新

安装npm包`npm install --save-dev webpack-dev-server`并在webpack.config.js配置文件中设置如下代码

```javascript
devServer: {		// 告诉服务器在哪里找实时更新的文件
  	contentBase: './dist'
}
// 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
```



### 常用npm包及作用

- `npm install --save-dev html-webpack-plugin` 的作用是生成index.html文件，将自动构建的bundle文件自动添加到index.html文件上来，而不再需要我们手动添加自动构建的文件
- `npm install --save-dev html-webpack-template` 
- `npm install --save-dev clean-webpack-plugin` 的作用是管理生成在dist目录下的文件,会将旧文件删除
- `npm isntall --save-dev inline-source-map`  找出代码中的错误
- `npm install --save-dev webpack-dev-server` 提供了一个简单的 web 服务器，并且能够实时重新加载
- `` 
- ​`babel-core` 
- `babel-loader` 
- `babel-polyfill` 
- `babel-preset-es2015` 
- `babel-preset-latest` 
- `typescript` 和 `ts-loader` 可以处理typescript语法
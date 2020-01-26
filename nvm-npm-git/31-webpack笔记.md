## 一、什么是webpage

- 可以将webpack理解为模块打包工具，即将项目中的不同类型或不同模块的文件(sass,less,typescript)打包成浏览器可以识别的文件。


- 官网地址：https://webpack.js.org





## 二、为什么要使用webpage

- 代码分割
- 模块热更新
- 打包成浏览器可以识别的文件，如js、css、png
- 适合大型项目




## 三、怎样使用webpage

- 首先要安装webpack ,通过命令全局安装`npm install -g webpack`
  - 安装用于在本地使用webpack的服务器`npm install webpack-dev-server`
- 在终端命令行输入`webpack --help` 可以查看webpack的命令选项
- 在终端命令行输入打包命令`webpack`即可打包 **或** 在package.js文件的scripts脚本中设置打包脚本，使用`npm run webpack`命令打包







## 四、webpage注意事项

- webpack
- grunt
- gulp





## 五、使用webpack命令打包案例

1. 新建一个空的文件夹，文件夹不能有大写字母，我建的文件夹为demo，以下以demo为例

2. 打开你安装nodejs的目录，查看node_modules下都安装了些什么工具包

   ```
   如：
   cnpm	//如果安装了该工具包，就可以使用cnpm代替npm，建议安装
   vue-cli	//管理vue项目的管理工具包，目录结构/单元测试/热加载/本地测试/代码部署，建议安装
   webpack	//模块打包工具，建议安装
   ```

3. 如果webpack没有安装，就使用npm install -g webpack（全局安装），如果已经安装就忽略这步

4. 使用cnpm install --save-dev webpack命令将项目安装到你的空文件夹demo下

   - 之所以使用cnpm是因为速度快，不用翻墙，并且会自动创建package.json文件
   - 此时空文件夹demo下就会多出两个文件
   - 一个是node_modules
   - 一个是package.json

5. 使用cnpm init初始化package.json文件。会生成该项目的名称、描述、依赖等信息......

6. 创建模块并使用模块

   - 在demo中创建一个public文件夹,在里面创建index.html文件

   ```html
   <!-- index.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>webpack demo</title>
   </head>
   <body>
   <div id="box"></div>
     <!--  bundle.js文件是使用webpack工具打包后生成的文件  -->
   <script src="bundle.js"></script>
   </body>
   </html>
   ```

   - 在demo中创建一个app文件夹，里面有Greeter.js文件和main.js文件

     ```javascript
     /* Greeter.js 里面的代码 */
     module.exprots = function () {
     	var greet = document.createElement("div");
     	greet.textContent = "Hello World!";
     	return greet;
     }

     /* main.js 里面的代码 */
     var greeter = require("./Greeter.js");	//引入一个模块
     //将模块返回的节点插入页面中id为"box"的元素中
     document.getElementById("box").appendChild(greeter());
     ```

7. 在根目录下配置webpack.config.js文件，指定文件的输入和输出路径

   ```javascript
   /* webpack.config.js文件 */
   module.exports = {
     entry : __dirname + "/app/main.js",	//唯一入口文件
     output : {
       path : __dirname + "/public",	//打包后的文件存放的地方
       filename : "bundle.js"			//打包后输出文件的文件名
     }
   }
   ```


- [x] 之所以要在根目录下配置webpack.config.js文件是为了可以直接在命令行中少输入一些要打包的文件名，直接通过在命令行中输入webpack就可以了，不再需要输入要打包的文件名和生成的文件名，所有的配置都在webpack.config.js文件中指定就可以了。
- [x] 如果在根目录下配置的文件名不是webpack.config.js，即需要借助--config来打包生成文件


- [x] 如：webpack --config webpack.dev.config.js(假如webpack.dev.config.js这个文件就是在根目录下的配置文件) ，使用该命令打包出来的代码是压缩后的代码，开发者无法看懂的代码，也可以说是生产代码。

- [x] 使用`webpack --config webpack.dev.config.js --mode development` 命令打包出来的代码是开发者模式下的代码，即开发者可用看得懂得代码

  

  8.在终端切换到demo文件夹下使用`webpack`命令打包，此时会在public文件夹下生成bundle.js文件			如出现下图证明打包成功了

 ![webpack命令](images\webpack命令.png)

9. 手动打开index.html文件即可以看到效果

10. 项目在github上，仓库名：webpackdemo





## 六、常用命令

- 通过命令行的方式为webpack绑定处理某种文件时所需要的模块，如下

  当在`.js`文件中引入`.css`文件时，就需要在引入`.css`文件时就指定用于处理`.css`文件的模块

  ```javascript
  // style-loader 模块的作用是在html文件中将处理好的样式插入到head的style标签中
  // css-loader 模块的作用是使得在.js文件中引入的.css文件可以被处理
  // 处理style.css文件的过程是先使用css-loader后使用style-loader,要注意顺序

  // 方式1(在.js文件中引入.css文件的处理方式)
  requier("style-loader!css-loader!./style.css");		

  // 方式2(通过命令行的方式使得webpack可以处理.css文件)
  // 在命令行中使用该命令 ： webpack hello.js hello.bundle.js --module-bind 'style-loader!css-loader'
  // 说明：hello.js为原文件，生成hello.bundle.js文件（这两文件都是可以随便命名）
  ```

- 修改文件后热更新

  `webpack hello.js hello.bundle.js --module-bind 'style-loader!css-loader' --watch` 

- 打包时可以看到打包的进度条

  `webpack hello.js hello.bundle.js --module-bind 'style-loader!css-loader' --progress`

- 引用的所有模块都列出来

  `webpack hello.js hello.bundle.js --module-bind 'style-loader!css-loader' --progress --display-modules`






## 七、在package.json文件中设置webpack配置

在终端命令行中直接使用`npm run webpack`命令即可打包

```javascript
"scripts" : {
    "webpack" : "webpack --config webpack.config.js --progress --display-modules --colors --display-reasons"
}
```

`--progress`:	打包进度

`--display-modules`:  打包的模块

`--display-reasons`: 打包的原因

`--colors`: 字体为彩色







## 八、综合案例

项目结构。项目文件夹名为webpack

```
webpack
	--dist			//打包后生成的静态文件都放在该文件夹
	--mode_modules	//项目要依赖的模块
	--src			//代码源文件
		--script	//js文件
		--style		//css,sass,less文件
	--index.html		// 所有打包后的文件都将插入到该文件中
	--package.json		//可定制脚本文件，依赖等
	--webpack.config.js	//webpack配置文件，即webpack入口文件及输出文件
```



> 需要应用引用的内容时可以使用双尖括号,如：<%= htmlWebpackPlugin.options.title  %>



## 九、错误汇总

1.打包时出现如下错误，说`./dist/js`路径不是一个绝对路径

```
Invalid configuration object. Webpack has been initialised using a configuration
 object that does not match the API schema.
 - configuration.output.path: The provided value "./dist/js" is not an absolute
path!
```

原因是webpack的版本问题，有两种办法解决。第一种是安装对应的版本，第二种办法是在webpack.config.js文件中设置path的路径为绝对路径。

第二种方法如下：

```javascript
module.exports = {
    entry : __dirname + "/src/script/main.js",
    output : {
        path : __dirname + "/dist/js",
        filename : "bundle.js"
    }
}
```



2.打包时出现如下英文，即为入口文件没有找到，或入口的英文写错了。

```
Configuration file found but no entry configured.
Use --help to display the CLI options.
```



3. 打包时出现如下错误：ERROR in Entry module not found: Error: Can't resolve 'E:\WEB\react_project./src
   /js/index.js' in 'E:\WEB\react_project'

```
错误的原因：
ERROR in Entry module not found: Error: Can't resolve 'E:\WEB\react_project./src
/js/index.js' in 'E:\WEB\react_project'
```



4. 打包时提示如下错误

   ```javascript
   Errors:
     8  http://eslint.org/docs/rules/indent
     1  http://eslint.org/docs/rules/space-before-function-paren

   You may use special comments to disable some warnings.
   Use // eslint-disable-next-line to ignore the next line.
   Use /* eslint-disable */ to ignore all warnings in a file.

    // 解决办法
   ```




## 十、entry、output

单独入口模式（即一个入口文件）

```javascript
module.exports = {

    entry : "./src/main.js",
  	output : {
      	// path : path.resolve(__dirname,"dist/js")
      	path : __dirname + "/dist/js",
        filename : "bundle.js"
    }
}
```

多个块文件（chunk）

```javascript
module.exports = {
  	// 当entry的值是一个对象时，大多数应用到多页面应用程序中
    entry : {
        page1 : "./src/page1.js",
      	page2 : ["./src/entry1.js","./src/entry2.js"]
    },
  	output : {
      	path : __dirname + "./dist/js",
      	filename : "[name].bundle.js",
      	chuncFilename : "[id].bundle.js"
    }
}
```





##  十一、使用的插件

- `npm install html-webpack-plugin --save-dev`
- `npm install webpack --save-dev `      先在全局安装再在项目中安装
- `npm install webpack-dev-server --save-dev`
- `npm install --save-dev style-loader css-loader`   用于管理资源，即在.js文件中引入.css
  - style-loader会将css文件插入到html文件的style标签中
  - css-loader会遍历并加载所有的css文件
- ​


   ```

   ```
# 编译环境搭建



## 1.安装babel

- **babel**是一个广泛使用的转码器，可以将ES6转换为ES5代码，从而在现有的环境上执行，这意味着可以ES6语法去编写程序而不需考虑环境是否支持
- **安装及配置：**使用npm install --save-dev babel-cli 或 cnpm install --save-dev babel-cli  安装到本地文件夹node_modules下
- **不建议安装到全局**，安装到本地后会在package.json文件中保存开发依赖的版本号，这样更方便其他人知道该项目的开发依赖都需要下载些什么包



## 2.设定转码规则

- 在设置转码规则时需要安装规则集

>ES2015转码规则
>
>npm install --save-dev babel-preset-es2015



> react转码规则
>
> npm install --save-dev babel-preset-react



> ES7转码规则,不同阶段的转码提案不同，选装一个
>
> npm install --save-dev babel-preset-stage-0
>
> npm install --save-dev babel-preset-stage-1
>
> npm install --save-dev babel-preset-stage-2
>
> npm install --save-dev babel-preset-stage-3



- 在项目的根目录下有一个`.babelrc`的配置文件，该文件用来配置预设的转码规则和插件的

```javascript
{
  	"presets" : [],		// 设置转码规则
    "plugins" : []		// 设置babel插件
}
```



## 3.案例

1. 创建一个项目文件夹babel-demo

2. 在终端进入babel-demo文件夹

3. 使用 `npm install --save-dev babel-cli` 安装babel环境，该文件会被安装到babel-demo下的node-modules中

4. 使用 `npm install --save-dev babel-preset-es2015 `安装转码规则

5. 在根目录下创建 `.babelrc`  文件，并设置规则

   ```javascript
   {
     	"presets" : [ "es2015"],		// 设置转码规则
       "plugins" : []					// 设置babel插件
   }
   ```

6. 创建 `demo.js` 文件，在里面编写es6格式的代码

   ```javascript
   let a = 10;
   const pi = 3.1415;
   var arr = [1,2,3];
   arr.map(item => item + 1);
   ```

   ​

7. 在package.json文件中定义运行快捷方式脚本，在终端中运行 `npm run build` 查看结果

   ```json
   {
     "devDependencies": {
       "babel-cli": "^6.24.1",
       "babel-preset-es2015": "^6.24.1"
     },
     "scripts" : {
       "build" : "babel demo.js"		//使用 npm run build 命令会执行demo.js文件
     }
   }
   ```

   ​

8. 如果想将解码后的代码输出，可以在package.json文件的scripts中定义输出到指定的文件中

   ```json
   "scripts" : {
       "build" : "babel demo.js --out-file customOutFile.js"		//输出解码后的代码到customOutFile.js文件中
   }
   ```

   ​

9. 指定输出的文件customOutFile.js后，再次在终端使用 `npm run build`  查看结果

   ```javascript
   // 系统会自动创建customOutFile.js文件

   "use strict";

   var a = 10;
   var pi = 3.1415;
   var arr = [1, 2, 3];
   arr.map(function (item) {
     return item + 1;
   });

   ```


































































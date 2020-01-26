#### Node.js概述

1. 什么是node.js
   node.js不是一种编程语言，是一个可以让js语言运行在服务器端的开发平台。(由Chrome浏览器的V8引擎作为基础开发的。)

2. node.js有什么特性

   单线程：只有一条线程用来执行所有的任务

   事件驱动：通过“事件环”的机制来执行事件回调函数

   非阻塞I/O:  当有i/o操作时，会将i/o操作添加到事件队列中，执行下一个事件的计算，当i/o操作完成时，通过事件驱动再回到原任务上来，从而实现非阻塞。 

3. Node.js自身哲学，是花最少的硬件成本，追求最大的并发，更高的处理性能。
   没有语法：node.js不是一种独立的语言，它是使用js进行编程的。

4.  通过`node helloWorld.js` 命令即可运行该js代码




#### V8引擎介绍

1. v8引擎是谷歌公司开发的用于Chrome浏览器解析js代码使用的js引擎。
2. v8引擎是使用C++语言开发出来的并且是开源的。




#### 模块分类

> 1. 核心模块，`nodejs` 自身拥有的功能模块(如：http、fs、path、util...)
> 2. 文件模块(自己定义的文件，如xxx.js)
> 3. 第三方模块(使用npm下载的第三方模块)

```javascript
// 1.核心模块的引入
var http = require('http');
var fs = require('fs');
var path = require('path');
var util = require('util');

// 2.文件模块的引入
var util = require("./xxx.js"); // .js可以省略

// 3.第三方模块的引入
var express = require("express");
```





#### node全局对象/变量

> 1. 在浏览器`JavaScript` 中，通常`window `是全局对象， 而`Node.js `中的全局对象是` global`，所有全局变量（除了 global 本身以外）都是` global `对象的属性。
> 2. process 是一个全局变量，即 global 对象的属性。通常在你写本地命令行程序的时候使用。
> 3. console 是一个全局变量，即 global 对象的属性。
> 4. ​



#### http模块

通过node.js中自带的http模块启动一个服务。

找到httpDemo.js文件所在的文件夹，按shift键进入控制台，输入node httpDemo.js即可运行该服务

```javascript
// 文件名httpDemo.js
var http = require('http');

http.createServer(function (req,res) {
    res.statusCode = 200;
    res.setHeader("Content-type","text/plain; charset=utf-8")
    res.end('Hello httpServer');
}).listen(3000,'127.0.0.1',function () {
    console.log('服务器已运行，请在浏览器打开127.0.0.1:3000/查看结果');
});
```



#### url模块

```javascript
// 1. url模块
var url = require('url');			// 引入模块

url.parse(request.url);  			// 将url字符串转换为一个对象

url.parse(request.url, true).query；// 将query属性对应的对象返回

url.format(obj);					// 将对象转换为url字符串

url.href; 		// 指整个路径  如URL 'https://example.org/abc/xyz?123'
url.protocol; 	// 指协议
url.host; 		// 指主机名，包含端口
url.hostname; 	// 指主机名，不包含端口  如URL 'https://example.org:8888' 的 example.org
url.port; 		// 指端口  如URL 'https://example.org:8888' 的 8888
url.pathname; 	// 指路径名  如URL 'https://example.org/abc/xyz?123' 的 /abc/xyz
url.search; 	// 指问号后面的 如URL 'https://example.org/abc/xyz?123' 的 123
url.hash; 		// 指#号后面的内容  如URL 'https://example.org/foo#bar'的 bar
url.parse(req.url).pathname;  		// 输入的路径名

```

使用 `url.parse()` 方法可以返回在浏览器中输入的url地址的对象，该对象包含http请求所有的数据，如下案例。

```javascript
// 将一个url字符串转换为Url对象。Url对象里面包含url的所有信息
var object = url.parse("https://www.imooc.com/course/list");

object = {
 protocol: 'https:',
 slashes: true,
 auth: null,
 host: 'www.imooc.com',
 port: null,
 hostname: 'www.imooc.com',
 hash: null,
 search: null,
 query: null,
 pathname: '/course/list',
 path: '/course/list',
 href: 'https://www.imooc.com/course/list' }
```



#### util模块

```javascript
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req,res) {
    res.statusCode = 200;
    res.setHeader("Content-type","text/plain; charset=utf-8")

    // util一般在测试的时候将url对象[Object]展开
    res.end(util.inspect(url.parse(req.url)));
}).listen(3000,'127.0.0.1',function () {
    console.log('服务器已运行，请在浏览器打开127.0.0.1:3000/查看结果');
});
```

通过 `util.inspect()` 方法可以将包含url中所有信息的对象展开，如下图所示

![urlObject](.\images\urlObject.png)



#### fs模块

> fs.readFile  // 读取文件
>
> fs.readdir   // 读取目录下的所有文件，包括目录
>
> stat.isDirectory  // 判断是不是目录
>
> fs.mkdir("./album/ccc");  // 创建一个目录

```javascript

```





### node.js中自带的包

- http

```javascript
// 引包
var http = require("http");			
// 创建一个服务
var server = http.createServer(function(req,res){
  	// 
  	if(request.url == "/fang"){
        fs.readFile('./test/fang.html', function(err,data){
            response.writeHead(200, {"Content-type" : "text/html;charset=utf-8"});
            response.end(data);
    	});
    }
  	// 设置响应头内容类型
	res.writeHead(200,{"Content-type":"text:html;charset=utf-8"});
  	// 浏览器解析结束，没有菊花了
	res.end("Hello Wordl!!");
});
// 监听
server.listen(3000,"127.0.0.1");	
```



- url



- querystring

> 序列化为字符串(`querystring.stringify`)，反序列化为对象(`querystring.parse`)
>
> 转义为看不懂的编码(`querystring.escape`)，反转义为看得懂得文字(`querystring.unescape`)
>
> 1.常使用`querystring` 的`parse` 方法将`字符串` 反序列化为一个键值对的集合(对象)。
>
> 2.常使用`querystring` 的`stringify` 方法将`url` 中携带的参数序列化为字符串。

```javascript
	if (request.url == "/post" && request.method.toLowerCase() == "post"){
        //  获取数据的方式都是这个步骤
        // 创建一个字符串用于存放chunk
        var allData = "";
      
        // 对请求进行监听,每次接受一小段数据，分出能力去做别的事情，避免阻塞整个进程
        request.addListener("data", function (chunk) {
            allData += chunk;
        });
      
        // 接收数据结束
        request.addListener("end", function () {
            //console.log(allData.toString()); //allData本来就是加密后的字符串，toString方法没有用
            var obj = querystring.parse(allData);	// ********obj不继承自Object，只是一个集合
            console.log(obj);
            console.log(obj.name);
            console.log(obj.age);
            console.log(obj.sex);
            console.log(querystring.stringify(obj)); //*************
            response.end('success');
        });

    }
```



- path

```javascript
// 路径的扩展名
var extendName = path.extname(pathname);  // 输入的pathname点后面的扩展名
```



- fs

```javascript
fs.stat("./album/ccc", function (err, stats) {
	// 检查path是不是一个目录
	console.log(stats.isDirectory());
});
```



### node.js中的回调函数

> node中的函数大多都是通过回调调用函数的，所以在使用时要注意先确定数据拿到后再调用回到函数。要注意node非阻塞的特性。



### node.js中的输出与使用

```javascript
// 1.输出
// 在文件a.js中定义好方法,如果想外面的模块可以使用该方法，就需要将该方法暴露出去。
exports.methodName = function(){
  
}

// 2.引用
// 外面的模块想使用a.js文件中的函数，就要引用a.js文件
var a = require('./a.js');	// 引入。相对自身找到其他的文件
a.methodName();				// 使用方法


// 3.输出的第二种方法
// 直接将对象输出
module.exports = {
  	"key1": "value1",
  	"key2": "value2",
  	"key3": "value3",
  	"key4": "value4"
}
```



### cookie

什么是cookie?

> cookie是发送请求时一起和请求报文发送到服务器的字符串

cookie的作用？

> 可以根据cookie记录用户的喜好和登陆状态等



### 结束小菊花

- express中使用`res.send("提示");`
- 原生node.js使用`res.end("提示");`




### 作用域注意事项：

> 1. 在浏览器中，顶层作用域就是全局作用域。这意味着在浏览器中，`var something` 会定义一个新的全局变量。在` Node.js ` 中则不同，顶层作用域不是全局作用域，`var something` 的作用域只在模块内。





### npm 包（常用-------------------

#### formidable

- 上传文件时使用的包





#### ejs与jade

- 使用模板引擎时引入的包





#### body-parser

- 发送get请求时不需要该包


- 发送post请求时需要用该包获取response.body对象





#### express

- express相当于JavaScript与jquery的关系中的jquery





#### underscore

- 可以使用template功能填充模板数据

  ```javascript
  // 使用步骤
  // 1.下载underscore.js文件
  // 2.引入underscore.js文件
  // 3.设置模块
  // 4.从服务中获取json数据，将数据填充到模板中
  ```





#### mongooses

- 数据库的建模工具模块，可以建立存在数据库里面的模板样式

  ```javascript

  ```



#### moment

- ​



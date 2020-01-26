#### 为什么使用RequireJS

```javascript
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
```

上述多个js文件加载的时候，浏览器会停止网页渲染(**JS阻塞浏览器渲染**)，加载文件越多，网页失去响应的时间就会越长；另外各文件的依赖关系很难管理。



#### RequireJS的作用

> requireJS主要有如下三个特点：
>
> 1. 异步加载js文件，防止js阻塞页面的解析
> 2. 有效的控制全局变量污染
> 3. 有效的管理模块间的依赖关系，便于代码的编写和维护。

RequireJS就是实现了AMD规范的，为前端异步加载模块创造条件。

AMD（异步模块定义）是为浏览器环境设计的，因为 CommonJS 模块系统是**同步加载**的，当前浏览器环境还没有准备好同步加载模块的条件。所有需要使用requireJS来实现异步加载模块的能力。

AMD就只有一个接口：define(id?,dependencies?,factory); 问号代表是可选的，不写该参数也没有问题。



#### RequireJS的加载

**1.从官网下载最新版本的require，放在js目录下，使用script引入页面：**

`<script src="js/require.js"></script>`

为了不阻塞页面渲染，可以把它放在HTML的最底部或改为如下方式：

`<script src="js/require.js" defer async="true" ></script>`

async属性表明该文件需异步加载（defer属性兼容IE）。



**2.加载页面逻辑代码：**

假定代码文件是main.js，也放在js目录下，则用如下几种方式引入：

**方式1：**

`<script  data-main="js/main" src="js/require.js"></script>`

data-main属性指定网页程序的主入口，这个文件会第一个被requirejs加载。requirejs默认所依赖的资源都是js，所以可以把main.js简写成main。

**方式2：**

在加载require.js后，通过requirejs加载config配置文件（如果有config文件），最后加载主模块：

```javascript
require(['configUrl'], function () { //config.js必须通过requirejs加载才能注册
     require([moduleAName],function(moduelA){
    	//逻辑代码
     });
});
```



#### 项目路径

如下案例可以参考该图片的目录路径

![requirejs](E:\08_web\web_note\09-个人总结\规范-组件化-模块化\images\requirejs.png)



#### 常用配置

1. baseUrl ： 配置需要加载的js文件的根路径

2. pahts : 指定我们需要引用的框架或一些库的路径

3. shim : 用来配置一些不支持amd的框架或库

4. map : 引入多版本框架

   ```javascript
   // 
   map : {
       'app/api1' : {
           'jquery': './lib/jquery-1.10'
       },
       'app/api2' : {
           'jquery': './lib/jquery-2.0.0'
       }
   }
   ```

5. urlArgs : 在下载文件时在url后面添加额外的query参数

   ```javascript
   urlArgs: "_=" + (new Date()).getTime()
   ```

   ​

6. ​



#### 配置模块路径baseUrl

通过baseUrl可以配置文件的根路径

require.config(obj)方法可以定义模块的路径，并以短模块名的形式进行依赖的定义。该方法**可以写在每个主模块（main.js或app.js，主模块只能有一个）的前面，配合主模块一起使用。**

参数是一个对象，这个对象的paths属性指定各个模块的加载路径。paths**可以配置多个路径**，如果远程cdn库没有加载成功，则加载本地的库。

如果不定义模块的配置，则在主模块中的依赖需要写完整路径。

```javascript
// 该文件是主模块app.js
// 在主模块的前面配置模块路径。 当然也可以使用单独的文件配置require.config
require.config({
    baseUrl: './js',	/*因为该文件是主模块，是在index.html中被使用的，所以是基于index.html同级*/
    paths: {
        'jquery': [	/* 可以一个值或两个，第一个找不到就找第二个 */
            '//cdn.bootcss.com/jquery/2.2.3/jquery.js',  /*如果在cdn中没有找到就使用下面lib下的*/
            './lib/jquery'
        ]
    }
});

require(['jquery', './api'],function ($, api) {
    $('#getUser').click(function () {
        // api.getUser返回一个deferred对象，当deferred对象的状态发送改变时就会执行then里面对应的方法
        // then(done, fail)方法是done()和fail()方法的简写方式
        api.getUser().then(function (user) {
            console.log(user);
        });
    });
});
```



#### 定义模块

> 1. 函数式定义模块
> 2. 简单对象模块

```javascript
// 1.通过函数式定义的方式创建模块
define('moduleName', ['jquery'], function($){
    return {
        trim: function (str){
            return $.trim(str);
        }
    }
});

/*
在开发中一般不写死moduleName,这个参数直接忽略不写，只使用两个参数即可。如
define(['jquery'], function($){})
会默认将baseUrl中定义的路径当作模块名
*/


// 2.通过简单对象的方式创建模块
define({
    userName: '李华炎',
    age: 26,
    gender: '男',
    phone: '13800138000',
    email: '452158232@qq.com',
    city: '广东省深圳市'
});
```

define方法用于定义模块，RequireJS要求每个模块放在一个单独的文件里。

按照是否依赖其他模块，可以分成两种情况讨论。

第一种情况是定义独立模块，即所定义的模块不依赖其他模块；

第二种情况是定义非独立模块，即所定义的模块依赖于其他模块。

```javascript
// 独立模块
// define定义的模块可以返回任何值，不限于对象。
define(function(){
    ……
    return {
        //返回接口
    }
})


// 非独立模块
// 非独立模块必须返回一个对象，供其他模块调用
define(['module1','module2'],function(m1,m2){
    ……
    return {
        //返回接口
    }
})
/*
要定义的模块依赖于module1和module2，那么第一个参数就是依赖的模块的数组。 
第二个参数是一个函数，仅当依赖的模块都加载成功后才会被调用。此函数的参数m1，m2与前面数组中的依赖模块一一对应。
*/
```



#### 使用模块

使用模块的时候通过`require()`函数将需要的模块引入，如需要使用api模块时。 

```javascript
// 如下代码是在app.js中提取出来做实例说明的
// 通过第一个参数中的数组，可以知道引入了jquery和 api模块
// 在第一个参数的依赖数组中，依赖的路径是基于baseUrl: './js' 中指定的基准路径
require(['jquery', './api'],function ($, api) {
    $('#getUser').click(function () {
        api.getUser().then(function (user) {
            console.log(user);
        });
    });
});
```



#### 加载css文件


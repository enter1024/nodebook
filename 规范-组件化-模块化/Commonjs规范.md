#### CommonJS规范

CommonJS是主要为了JS在后端的表现制定的规范。

CommonJS定义的模块分为如下3种。

1. 模块定义(exports)：exports对象用于导出当前模块的方法或变量，唯一的导出口
2. 模块引用(require)：require()用来引入外部模块
3. 模块标识(module)：module对象就代表当前模块本身

**定义模块的方式**

```javascript
// 定义add.js模块的第1种方式(当需要私有变量时可以使用该方式)
var privateVariable = 10;
var addPrivate = function (value) {
  	return value + privateVariable;
};
module.exports.addPrivate = addPrivate;
```

```javascript
// 定义add.js模块的第2种方式(推荐)
module.exports = {
    var privateVariable = 10;  // 也可以被访问
    var addPrivate = function (value) {
      	return value + privateVariable;
    };
}
```

**引用模块**

```javascript
var addModule = require('./add');	//	.js的后缀可以省略，默认就是加载.js文件
```







#### Requirejs规范

RequireJS就是实现了AMD规范的，为前端异步加载模块创造条件。

AMD（异步模块定义）是为浏览器环境设计的，因为 CommonJS 模块系统是**同步加载**的，当前浏览器环境还没有准备好同步加载模块的条件。所有需要使用requireJS来实现异步加载模块的能力。

AMD就只有一个接口：define(id?,dependencies?,factory);

**定义模块**

define方法用于定义模块，RequireJS要求每个模块放在一个单独的文件里。

按照是否依赖其他模块，可以分成两种情况讨论。第一种情况是定义独立模块，即所定义的模块不依赖其他模块；第二种情况是定义非独立模块，即所定义的模块依赖于其他模块。

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



> 参考博客：https://blog.csdn.net/crystal6918/article/details/74906757
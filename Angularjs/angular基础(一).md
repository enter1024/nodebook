### angular基础(一)

##### API地址：

> docs.angularjs.org



##### 1.应用angular框架

```html
<!-- index.html文件 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>angular</title>
    <link rel="stylesheet" href="lib/bootstrap.css">

</head>
<body ng-app="myApp"> <!-- 指定myApp模块的范围 -->
<input type="text" ng-model="name">	<!-- 只有表单元素才能使用ng-model命令 -->
<div>{{name}}</div>

<!-- 引用ng框架 -->
<script src="lib/angular.min.js"></script>	
<script src="js/main.js"></script>
</body>
</html>
```

```javascript
// main.js文件
angular.module("myApp", []);	// 创建一个模块
```



##### 2.双向数据绑定

> 要实现数据的双向绑定必须要在input标签中定义 `ng-model` 、`name ` 属性
>
> 双向数据绑定`ng-model="variableName"` ：当用户在input表单中输入4-10个字符的内容时，在内存中$scope对象也可以拿到ng-model中定义的变量名(variableName)的值。

```html
<!-- index.html文件 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>angular</title>
    <link rel="stylesheet" href="lib/bootstrap.css">
    <style>
        .wrapper {
            width: 30%;
            margin: 50px auto;
        }
        .error{
            border: 1px solid #a10;
        }
    </style>
</head>
<body ng-app="myApp" ng-controller="mainController">

<div class="wrapper">
    <form name="signUpForm" ng-submit="submitForm()">
        <input type="text"
               name="username"
               class="form-control"
               ng-model="username"
               ng-minlength="4"
               ng-maxlength="10"
               ng-class="{ 'error' : signUpForm.username.$invalid && signUpForm.username.$touched }"
               required
        >
    </form>
</div>

<!-- 应用ng框架 -->
<script src="lib/angular.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

```javascript
// main.js文件
var app = angular.module("myApp", []);
app.controller("mainController",["$scope", function ($scope) {
    $scope.username = "";   // 先给username一个空的值，当用户输入内容时实现双向数据绑定
    $scope.submitForm = function () {
        console.log("表单提交了");
        console.log($scope.username);
    }
}]);
```



##### 3.ng-class说明：

```html
<!-- 当注册表单的用户名输入不合法时，会给表单添加类名为error的样式   -->
<input type="text"
       name="username"
       class="form-control"
       ng-model="username"
       ng-minlength="4"
       ng-maxlength="10"
       ng-class="{ 'error' : signUpForm.username.$invalid && signUpForm.username.$touched }"		
       required	
       >
<!-- 
表单中一定要指定名字、双向数据绑定、条件、required这四个条件
name
ng-module
ng-minlength	
ng-maxlength
required
-->

```



##### 4.判断条件

>  判断条件的命令`ng-if`  ：当满足条件时(输入不合法并获取过焦点)显示div的内容

```html
<div ng-if="signUpForm.username.$invalid && signUpForm.username.$touched" class="error-color">请输入4-10个字符</div>
```



##### 5.禁用ng-disable

> 禁用的命令`ng-disabled` 两个表单中只要有其中一个合法，另一个就禁用

```html
<input type="text"
       name="username"
       class="form-control"
       ng-model="username"
       ng-minlength="4"
       ng-maxlength="10"
       ng-class="{ 'error' : signUpForm.username.$invalid && signUpForm.username.$touched }"
       ng-disabled="signUpForm.username2.$valid"
       required
       >
<input type="text"
       name="username2"
       class="form-control"
       ng-model="username2"
       ng-minlength="4"
       ng-maxlength="10"
       ng-class="{ 'error' : signUpForm.username.$invalid && signUpForm.username.$touched }"
       ng-disabled="signUpForm.username.$valid"
       required
       >
```

只要form表单中有一个不合法，都不能提交表单，常常应用在注册上

```html
<button ng-disabled="signUpForm.$invalid">提交</button>
```







##### 6.常用命令汇总

```javascript
ng-model		// 表单元素的双向数据绑定
ng-maxlength  	// 表单元素可输入的字符最大长度
ng-minlenght	// 表单元素可输入的字符最小长度
ng-submit		// 提交表单 要写在form的行内样式中
ng-class="{}"	// 动态添加类名，值是一个对象，键值对的形式
ng-if			// 判断满足条件后做某事
ng-disabled		// 禁用
ng-submit=""	// 只能在form表单中定义
ng-click		// 点击
```





##### 8.控制器的意义：

> 控制器是一个分发者，可以处理一些临时数据，以及对域($scope)的划分，在控制器范围内有效，其他控制器内无效
>
> 控制器的主要事项：
>
> 1.不要试图去复用Controller,一个控制器一般只负责一小块视图
>
> 2.不要在Controller中操作DOM，这不是控制器的职责
>
> 3.不要在Controller里面做数据格式化，ng有更好用的表单控件
>
> 4.不要在Controller里面做数据过滤操作，ng有$filter服务
>
> 5.一般来说，Controller是不会互相调用的，控制器之间的交互会通过事件进行

```javascript
// 模块
var app = angular.module('myModel', []);

// 控制器
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

// 为了防止代码被压缩后$scope注入发生改变，使用[]包裹函数function,数组的最后一个参数就是函数
// 改：
app.controller('myCtrl', ['$scope', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
}]);
```



##### 9.指令的意义：

> 指令可以被重复使用的，如果在页面中有多次重复出现的元素，并且这个元素背后有一定的功能，就可以使用指令来实现



##### 10.表单的意义：

> 表单的意义在于验证数据的 **真实性** 和 **可靠性**



##### 11.内置指令与自定义指令

> 1.ng-controller
>
> 内置指令 ng-controller 的作用，就是从父级作用域继承并创建一个新的子作用域。它会创
> 建一个新的从父作用域继承而来的子作用域  

> 2.ng-directive
>
> 




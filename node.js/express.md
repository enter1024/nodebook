### express概述

> 1. express是Node.js的框架
> 2. 可以快速构建网站



### express核心功能

> 1. 中间件
> 2. 路由
> 3. 静态文件
> 4. 上传文件
> 5. cookie管理
> 6. 请求和响应



### express的get/pos

get请求：当在浏览器中输入`localhost：3000/?name=lihuayan&age=18` url时，`req.query` 对象可以得到发送get请求时所携带的参数。 `query对象得到的数据{ name: 'lihuayan', age: '18' }`

```javascript
/**
* GET请求的参数在URL中，在原生Node中，需要使用url模块来识别参数字符串。
* 在Express中，不需要使用url模块了。可以直接使用req.query对象。
*/
var express = require('express');
var app = express();

app.get("/",function (req, res) {
    console.log(req.query);   // req.query对象可以获取发送get请求时所携带的参数
    res.send("success"); 
});

app.listen(3000);
```



post请求

```javascript
var express = require('express');
var bodyParser = require('body-parser');	//处理小的表单提交
var app = express();

app.set("view engine","ejs");  // 设置模板引擎

app.get("/",function (req, res) {   // 请求form.ejs文件，填好文件后通过post发送
    res.render("form.ejs");
});

// 中间件
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/",function (req, res) {
    console.log(req.body);
    res.send();
});

app.listen(3000);
```



### express提供的中间件

- express只提供了一个中间件，用户可以通过路径访问任何存在的静态文件

```javascript
app.use(express.static("./public"));	// 公共的静态文件
```



### express中的req

```javascript
// 在express中读取req中的url参数比原生node中要简单得多
// 在get请求中，通过req.query.xxx可以读取相关的参数
// 如读取get请求中page参数携带的值

app.get("/cha?page=3",function(req,res){
  	var pageValue = req.query.page;	// 3
});

// 同级目录中没有确定的形参(/movie/:id)放在确定的形参(/movie/list)后面,否则list页面不能显示
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;
    res.send('<h1>电影列表ID： '+id+'</h1>');
});
```



### express中的res

> 常用到的方法

```javascript
// 1.返回一个json格式的响应对象。参数是一个对象，可以将数组拼接成对象返回
res.json({});
```



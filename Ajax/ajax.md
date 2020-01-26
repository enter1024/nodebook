#### ajax简介

1. Ajax全称：Asynchronous Javascript and XML(异步的javascript和xml)

2. Ajax不是某种编程语言，而是一种无须重新加载整个页面的情况下更新某一部分数据的技术

3. 浏览器可以通过XMLHttpRequest对象和服务器进行数据交互，并且不会刷新整个页面（xhr作为代理）

4. `XMLHttpRequest` 不支持`IE5、IE6` ，如果需要支持`IE5、IE6` 就需要通过ActiveXObject对象发送异步请求

   ```javascript
   var xml = new ActiveXObject("Microsoft.XMLHTTP");
   ```




#### 异步通信的步骤

> 使用 `XMLHttpRequest` 对象实现异步通信的一般步骤需要如下几个步骤
>
> 1. 定义并创建 `XMLHttpRequest` 对象实例
> 2. 通过调用 `open()` 方法与服务器建立联系
> 3. 注册 `onreadystatechange`  事件处理函数，以便接收和处理服务器端响应的信息
> 4. 调用 `send()` 方法发送请求




#### XMLHttpRequest的生命周期

> 创建
>
> 初始化请求
>
> 发送请求
>
> 接收数据
>
> 解析数据
>
> 完成(数据就绪并可使用)



#### XMLHttpRequest对象的属性

```javascript
1.	onreadystatechange	// 指定当readyState属性改变时的事件处理函数
2.	readyState			// 返回当前请求的状态
3.	status 				// 返回当前请求的http状态码，如成功后的状态码200
4.	statusText 			// 返回当前请求的响应行状态
5.	responseBody		// 返回正文信息
6.	responseStream		// 以文本流的形式返回响应信息
7.	responseText 		// 以字符串的形式返回响应信息
8.	responseXML 		// 以XML的形式返回响应信息
```



#### XMLHttpRequest对象的方法

```javascript
1.	open()	// 创建一个新的http请求，并指定此请求的方法、url以及验证信息(用户名、密码)
2.	send()	// 发送http请求到服务器并接收响应
3.	getAllResponseHeaders() 	// 获取响应的所有http头信息
4.	getResponseHeader()	 		// 从响应信息中获取指定的http头信息
5.	getRequestHeader()			// 单独指定某个http请求的头信息
6.	abort()						// 取消当前请求
```



#### readyState状态的变化

> 0 : 请求未初始化，open()还没有调用
>
> 1 : 服务连接已建立，send()已经调用了
>
> 2 : 接收数据完成(即服务器端响应的原始数据已接收完成，但浏览器不识别)
>
> 3 : 响应数据解析中(此时浏览器已经拿到响应体了，正在解析为浏览器支持的格式)
>
> 4 : 请求已完成(数据已就绪，即响应数据已解析为浏览器支持的格式)



#### 原生ajax写法

在开发中很少会用到原生ajax发送请求，但是还是应该了解它们的步骤和原理。通过下面的例子可以知道ajax之所以可以局部刷新控件更新数据而不需要重新加载整个页面是因为XMLHttpRequest对象。它通过XMLHttpRequest对象作为代理帮它完成与服务器间的交互。

```javascript
function ajax(method, url, async, data){
  	var xml;
	if(window.XMLHttpRequest) {
      	xml = new XMLHttpRequest();
    }else {
  		xml = new ActiveXObjext("Microsoft.XMLHTTP");
	}
    
    xhr.open(method, url, async);	//true异步，false同步，默认是异步
  	
    if(method == "GET"){
      	xhr.send();
	}else {
  		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      	xhr.send(data);
	}
    
  	xhr.onreadystatechange = function (){
      	// 此回调函数会根据readyState的状态改变而执行
  		if(xhr.readyState == 4 && status == 200){
  			// 数据处理
		}
	}
}
```



#### jQuery实现Ajax

> jQuery.ajax([settings]);
>
> 1.type : 方法的类型，GET/POST，默认GET
>
> 2.url : 发送请求的地址
>
> 3.data : 对象，连同请求一同发送到服务器端的数据
>
> 4.dataType : 预期服务器返回的数据类型
>
> 5.success : 成功后的回调函数，参数是请求成功后返回的数据
>
> 6.error : 失败时的回调，参数是XMLHttpRequest对象

```javascript
$.ajax({
    type:"get",
    url:"http://v.juhe.cn/weather/index?format=1&cityname=%E5%8C%97%E4%BA%AC&key=e982f3629ae77eb7345b7e42f29b62ae&dtype=jsonp",
    dataType:"jsonp",
    // jsonp:"cb",     //将来会替换掉地址中的  callback
    // jsonpCallback:"handle",   //生成一个全局的方法  handle
    success: function (data) {
        // 这个data已经是js对象,不需要再使用JSON.parse()转换了
        alert(data.resultcode);
    },
    error: function () {
        alert("error");
    }
});
```



#### ajax存在的问题

- 使用ajax访问服务器时不会在History中留下历史记录
- 用户无法通过url分享页面给其他用户
- ajax对SEO(搜索引擎优化)不支持





#### 其他相关

百度静态资源库中的jQuery文件

```html
<script src="http://apps.bding.com/libs/jquery/1.11.1/jquery.js"></script>
```



服务器端常用的脚本语言及数据库

> 语言
>
> 1.PHP
>
> 2.Java
>
> 3.NET
>
> 
>
> 数据库
>
> 1.MySQL
>
> 2.Oracle
>
> 3.SQL Server


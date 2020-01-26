### html5文件

```html
<!-- html5模板 -->
<!doctype html>
<html lang='en'>
	<head>
        <meta charset='utf-8'>
        <title>我是标题</title>
    </head>
    
    <body>
       <p>我是一个p标签</p>
    </body>
</html>
```



### 页面的头部元素

> 头部常见的标签如：
>
> 1.  `<base>` 
> 2.  `<link>` 
> 3.  `<meta>` 
> 4.  `<script>` 
> 5.  `<style>` 
> 6.  `<title>` 

1.  `<base>`  设置所有连接的基准url，在一个页面中最多只能有一个`<base>`标签

   ```html
   <!doctype html>
   <html lang='en'>
   	<head>
           <base href='http://www.prejectstatic.com/source/' >
           <meta charset='utf-8'>
           <title>我是标题</title>
       </head>
       
       <body>
          <img src='pic.gif'>  <!-- 绝对地址http://www.prejectstatic.com/source/pic.gif -->
       </body>
   </html>
   ```

   ​

2. `<link>`  用于定义文档与外部资源间的关系的。

   ```html
   <!doctype html>
   <html lang='en'>
   	<head>
           <link rel='stylesheet' type='text/css' href='style.css'>
       </head>
       
       <body></body>
   </html>
   ```

   ​

3. `<meta>`  用来设置页面有关的元信息

   ```html
   <!doctype html>
   <html lang='en'>
   	<head>
           <meta charset='utf-8'>  <!--设置页面的字符集-->
           <meta name='keywords' content='html,css,xml' >  <!--设置与搜索引擎相关的关键字-->
           <meta name='description' content='欢迎学习web技术'>  <!--对页面的描述-->
           <meta name='revised' content='David,2012/12/8'>  <!--定义版本-->
           <meta http-equiv='refresh' content='5'>  <!--5秒刷新一次-->
       </head>
       
       <body></body>
   </html>
   ```

   ​

4. `<script>`  用于引入外部.js文件

   > 1. 可以为script标签设置 sync 属性，如果设置了该属性，解析dom的过程中遇到script标签会异步下载并执行文件
   > 2. 可以为script标签设置 refer 属性，如果 refer= 'refer'，当页面完成解析后执行脚本
   > 3. 如果以上两个属性都不设置，页面解析在遇到script标签时，会停止页面解析，读取js文件并执行，直到执行完脚本后再进行页面解析（会阻塞页面解析）。

   ​

5. `<style>` 

   ​

6. `<title>` 




### 常用页面结构标签

1.  `<nav>` 
2.  `<header>` 
3.  `<section>` 
4.  `<aside>` 
5.  `<article>` 
6.  `<fooder>` 




### 用于播放媒介的元素

1.  `<video>`
2.  `<audio>`  
3.  `<source>`   



### 存储相关元素

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储

```javascript
// 使用前应该检查浏览器是否支持Storage对象
if(typeof(Storage)!=="undefined") {
  // 是的! 支持 localStorage  sessionStorage 对象!
  // 一些代码.....
}else{
  // 抱歉! 不支持 web 存储。
}


// 常用api
// 保存数据：localStorage.setItem(key,value);
// 读取数据：localStorage.getItem(key);
// 删除单个数据：localStorage.removeItem(key);
// 删除所有数据：localStorage.clear();
// 得到某个索引的key：localStorage.key(index);
```




### 自动显示或隐藏页面中的文字


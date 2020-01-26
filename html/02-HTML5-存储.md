#### 客户端存储历程

- html5之前：cookies、userdata(只有ie支持)
- html5之后：localstorage、sessionstorage、application cache、indexedDB



#### HTML5存储具体介绍

- 使用规范
- 每种存储的特点以及解决的问题
- 在大型站点中的使用
- 具体业务适用的场景




#### HTML5存储(案例)

- 如何实现图片存储在客户端？
- 如何实现跨域共享客户端缓存？
- 如何做到真正的离线访问web应用？
- 如何实现一个客户端的数据库？




#### 关于存储的类型

服务器中存储数据的介质可以总结为如下4种：

1. cache: 缓存一般是通过DB、或者磁盘上读取到的数据，使用cache存储下来可以减少对磁盘io的次数，其实缓存也是放在内存上的
2. 磁盘： 存放资源文件的地方
3. 数据库：如：nodejs 配合 mongoDB
4. 内存：经常会访问的东西一般都放在内存上，不可能每次读取都要通过磁盘进行io，这样效率太低。放在内存中的存储是临时的，并且读取效率是最高效的





#### 为什么使用html5的存储方式

html5中的存储方式可以解决什么样cookies无法做到的问题？

1. 解决存储容量只有4K大小的问题
2. 解决请求头带有存储信息所带来的安全问题
3. 解决关系型存储的的问题（可以想关系型数据库一样快速查找数据）
4. 解决跨浏览器访问





#### HTML5中的几种存储形式

1. 本地存储：

   - localstorage：永久存储，永不过期，除非手动删除

   - sessionstorage：页面关闭就消失(或重新打开页面)

   - 以上两个存储形式都是: (key ： value) 

   - 存储大小5M

2. 离线缓存：

   - application cache

3. 处理关系型数据：

   - indexedDB  （客户端表类型的数据存储）
   - Web SQL



#### 使用本地存储所带来的一些体验优化

> 本地存储和网络拉取耗时对比

1. 在访问一个网站时，如果该网站设置了本地存储网站的一些脚本或其他资源，在第二次访问该网站时可以减少拉取该网站资源的时间，尤其是在弱网络环境下有比较大的优势。
2. ​



#### cocalStorage可以存些什么类型数据

> 只要将其他类型的数据转换为json字符串类型就可以存储
>
> 1. 数组
> 2. 图片
> 3. json数据
> 4. 脚本
> 5. 样式文件



#### H5本地存储使用注意事项

1. 使用前要判断浏览器是否支持
2. 写入数据时要做异常捕获，这样在超出存储空间时可以捕获到
3. 避免把敏感信息存储在本地
4. 要保证key的唯一性




#### H5本地存储使用限制：

1. 存储更新策略，过期控制
2. 子域名之间不能共享存储数据
3. 超出存储大小之后如何存储(LRU, FIFO)
4. server端如何获取到



#### localStorage优缺点







#### localStorageAPI

```javascript
// 1.getItem 
localStorage.getItem('keyName');

// 2.setItem
localStorage.setItem('name','lihuayan');

// 3.removeItem
localStorage.removeItem('keyName');

// 4.key
localStorage.key(0); // 返回key对应的值
localStorage.key(1);

// 5.clear  
localStorage.clear()； // 清空所有本地存储
```



#### cookies的特点

1. 在每一次http请求中都会在请求头中携带到cookies
2. cookies存放的数据只能小于4K
3. 存在安全性问题
4. cookies一般会被应用到购物车中，或用户的登陆验证中 




#### 案例

- 判断存储数据是否超时

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>timeout</title>
  	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  	<meta name="MobileOptimized" content="320">
  </head>
  <body>

  	<ul>
  		<li>第1步</li>
  		<li>set('tto','lihuayan');</li>
  		<li>第2步</li>
  		<li>get('tto',1000);</li>
  		<li>本地存储数据超时...</li>
  		<li>第3步</li>
  		<li>get('tto',5*60*1000);</li>
  		<li>lihuayan</li>
  	</ul>
  	
  	<script>
  		/**
  		 * 实现目的：检测本地存储localStorage失效时间
  		 *
  		 */
  		function set(key,value){
  			var currentTime = new Date().getTime();	// 得到当前的毫秒值
  			// 设置localStorage时要先判断支不支持localStorage
  			localStorage.setItem(key,JSON.stringify({value:value,time:currentTime}));
  		}
  		
  		function get(key, timeLimit) {
  		    var newTime = new Date().getTime();
  			var data = localStorage.getItem(key);
  			var dataObj = JSON.parse(data);
  			if ((newTime - dataObj.time) > timeLimit){
  			    console.log('本地存储数据超时...');
  			}else {
                  console.log(dataObj.value);
              }
          }
  	</script>
  </body>
  </html>
  ```

  ​

- ​
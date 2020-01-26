#### jQuery的特点

> 轻量
>
> 封装
>
> 兼容
>
> `http://jquery.cuishifeng.cn/`  或  `http://www.jquery123.com/`



#### 全局变量

> jquery占用了两个全局变量，可以通过`$.noConflict();`方法来释放$符号
>
> 1.$
>
> 2.jQuery



#### jQuery入口函数

```javascript
// 方式1
$(document).ready(function(){
  
});

// 方式2
$(function(){
  
});
```



#### 入口函数的区别(js与jQuery)

> 1. js中的入口函数window.onload = function(){};事件需要页面加载完毕并且所有的外部引用资源都加载完毕以后才执行函数里面的代码 
>
>
> 2. $(function(){});入口函数当页面的html元素解析完成后就会调用该函数，并不需要外部引用资源都加载完成后才执行
>
>
> 3. js文件在运行时会分两个过程(预解析、执行)



#### 事件包含的三部分

> 1. 事件源
> 2. 事件
> 3. 事件处理函数

1.事件源

```javascript
// Js方式：
document.getElementById("#id");

// jQuery方式:
$("#id");
```

2.事件

```javascript
// Js方式 :
document.getElementById("id").onclick = function(){
  //事件处理程序
}

// jQuery方式: 
$("#id").click(function(){
  //事件处理程序
});
```

3.事件处理程序：function中js代码逻辑



#### 命名规则

> 1. js中的命名规则：$、下滑线、字母、数字（不能以数字开头）
> 2. jquery变量尽量使用$开头，用于区分dom对象和jquery对象 ( 这个规定不是强制性的 )



#### 选择器

##### 1.基础选择器

```javascript
$("#id");		// 1.id选择器
$(".class");	// 2.类选择器
$("element");	// 3.元素选择器
$("*");			// 4.通配符选择器
$("#id,.class,element");	// 5.找到匹配的多个元素的集合
```



##### 2.属性选择器

```javascript
1.	$("element[attribute|=value]")	|=指前缀	以 value- 为前缀的元素
2.	$("element[attribute*=value]")	*=指包含	包含 value 的元素
3.	$("element[attribute^=value]") 	^=指以...开始
4.	$("element[attribute$=value]") 	$=指以...结束
5.	$("element[attribute=value]") 	=指属性的值等于value
6.	$("element[attribute~=value]") 	~=指value的前面有空格隔开的值
7.	$("element[attribute!=value]")	!=指值不等于value的所有元素
8.	$("element[attribute]")			指找到包含某个属性的所有元素
9.	$("element[attribut][attribut=value]")	要有某个属性，并且另一个属性的值要是value.需要同时满足两个条件
```

- 1、`$("element[attribute|=name]");` 选择指定属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个连字符“-” ）的元素。

  匹配以`value-`开始的所有属性

```html
<!DOCTYPE html>
<html>
<head>
  <style>
a { display: inline-block; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <a href="example.html" hreflang="en">Some text</a> 
  <a href="example.html" hreflang="en-UK">Some other text</a>
  <a href="example.html" hreflang="english">will not be outlined</a>
<script>
$('a[hreflang|="en"]').css('border','3px dotted green');
</script>
 
</body>
</html>
```



- 2、`$("element[attribute*=name]");`	*指包含

```javascript
// 选择指定属性具有包含一个给定的子字符串的元素。（只要包含给定的字符串就可以选择得到）
$('input[name*="man"]').val('has man in it!');
```



- 3、`$("element[attribute^=name]");`^指以...开始

```javascript
$('input[name^="icon-"]').val('has man in it!');
```



- 4、`$("element[attribute$=name]");`	$指以...结束

```javascript
// 选择指定属性是以给定值结尾的元素。这个比较是区分大小写的
$('input[name$="n"]').val('has man in it!');	//所有属性值中以n结尾的都被选择
```



- 5、`$("element[attribute=value]")` 属性值等于指定字符串

```html
<!DOCTYPE html>
<html>
<head>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <div>
    <label>
      <input type="radio" name="newsletter" value="Hot" />
      <span>name?</span>
    </label>
  </div>
  <script>$('input[value="Hot"]').next().text(" Hot Fuzz");</script>
</body>
</html>
```



- 6、`$("element[attribute~=value]")`   使用空格分隔指定的值

```html
<!-- 属性用空格分隔的值中，包含一个给定值的元素 -->
<!DOCTYPE html>
<html>
<head>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <input name="man-news" />
  <input name="milk man" />		<!-- 选中属性name="milk man"的input元素 -->
  <input name="letterman2" />
  <input name="newmilk" />
  <script>$('input[name~="man"]').val('mr. man is in it!');</script>
</body>
</html>
```



- 7、`$("element[attribute!=value]")`   指定的属性值不等于给定值的元素

```html
<!-- 属性用空格分隔的值中，包含一个给定值的元素 -->
<!DOCTYPE html>
<html>
<head>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <input name="man-news" />
  <input name="milk man" />		
  <input name="letterman2" />
  <input name="newmilk" />
  <script>$('input[name!="milk man"]').val('mr. man is in it!');</script>
</body>
</html>
```



- 8、`$("element[attribute]")` 找到包含某个属性的元素

```javascript
$('div[id]'); //找到所有包含id属性的元素
```



- 9、`$("element[attribut][attribut=value]")` 含有某个属性，并且还有其他属性的值等于给定的字符串

```html
<!-- 查找那些有 id 属性，并且 name 属性以 man 结尾的输入框，并将它们的值设为 'only this one' -->
<!DOCTYPE html>
<html>
<head>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <input id="man-news" name="man-news" />
 
<input name="milkman" />
<input id="letterman" name="new-letterman" />
<input name="newmilk" />
 
<script>$('input[id][name$="man"]').val('only this one');</script>
 
</body>
</html>
```



##### 3.基础过滤器

```javascript
1.	:eq(0)		返回一个jquery元素
2.	:even()		匹配所有索引值为偶数的元素，从 0 开始计数
3.	:odd()		匹配所有索引值为奇数的元素，从 0 开始计数
4.	:first
5.	:last
6.	:gt(index)
7.	:lt(index)
8.	
```

- :eq(index);

```javascript
// :eq(index);在匹配的集合中选择索引值为index的元素,index以0开始,只会选择一个元素。负数表示从后面开始，-1代表从后面数起的第一个
$("td:eq(-1)").css("backgroundColor","orange");
```

- :even


```javascript
// 选择索引为偶数的元素,索引从0开始，即第一行为偶数
$("li:even").css("background-color", "pink");	
```

- :odd

```javascript
// 选择索引为奇数的元素,索引从0开始，即第二行为基数
$("li:odd").css("background-color", "pink");	
```

- :first

```javascript
// 选择第一个匹配的元素
$("li:first").css("background-color", "red");	
```

- :last

```javascript
//  选择最后一个元素
$("li:last").css("background-color", "purple");	
```

- :gt(index)

```javascript
//  选择匹配集合中所有大于给定index（索引值）的元素。
$("li:gt(2)").css("background-color", "purple");	//不包含2
```

- :lt(index)

```javascript
//  选择匹配集合中所有索引值小于给定index参数的元素。
$("li:gt(2)").css("background-color", "purple");	//不包含2
```



##### 4.子元素过滤器

1. `:first-child`  选择所有父级元素下的第一个子元素

   ```javascript

   ```

   ​

2. `:last-child`
   ​

   ​

3. `:first-of-type`   选择所有相同的元素名称的第一个兄弟元素

4. ``




##### 5.层级选择器

```javascript
1.	$('form ~ input') 	// 匹配 form 元素之后的所有 input 元素
2.	$('form input') 	// 匹配 form 里面的所有后代 input 元素
3.	$("label + input")	// 匹配所有跟在 label 后面的 input 元素
4.	$("form > input")	// 匹配表单中所有的子级input元素
```



##### 6.通过方法过滤

```javascript
$("p").eq(0)       //当前操作中第N个jQuery对象,类似索引
$('li').first()    //第一个元素
$('li').last()     //最后一个元素
$(this).hasClass("test")    //元素是否含有某个特定的类,返回布尔值
$('li').has('ul')  //包含特定后代的元素
```




#### 对象转换

```javascript
// 实现jquery对象和dom对象的转换
// 1.转为Dom对象
var dom = $("#id")[0];
// 或
var dom = $("#id").get(0);

// 2.转为jquery对象
var dom = document.getElementById("id");
var $obj = $(dom);
```



#### each方法的区别

```javascript
// 1.直接使用$调用，可用于例遍对象或数组
// 回调函数有两个参数
$.each(object, function(key,value){
  	// key是对象的成员 或 数组的下标
  	// value是对象成员对应的值 或 数组index对应的value
});

// 遍历数组
$.each(["li","hua","yan"],function (key, value) {
    console.log("key="+key,"value="+value);
    // key=0 value=li
    // key=1 value=hua
    // key=2 value=yan
});

//遍历对象
$.each({"name":"lihuayan","language":"jquery"},function (key, value) {
    console.log("key="+key,"value="+value);
    // key=name value=lihuayan
    // key=language value=jquery
});


// 2.使用jquery数组调用each方法，回调函数只有一个参数，该参数是数组元素的index
// 用于遍历数组
$("数组").each(function(i, domEle){
   
});
```





#### 鼠标事件

##### mouseover/mouseout

>  事件：鼠标**每一次**经过子元素时都会触发该事件，在父元素范围内会触发多次，所以该方法不建议使用

##### mouseenter/mouseleave

> 事件：鼠标进入子元素/离开子元素时执行该函数，并且在父元素的范围内只会执行一次

```html
<!-- 案例 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #ul1 {
            background-color: purple;
        }

        #ul2 {
            background-color: purple;
        }

        li {
            background-color: pink;
            margin: 5px;
        }
    </style>
    <script src="demo/jquery-1.11.1.js"></script>
</head>
<body>
<ul id="ul1">
    <li>mouseover/mouseout事件：在ul范围内来回移到到子元素的身上时，多次触发绑定到ul身上的事件</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<ul id="ul2">
    <li>mouseenter/mouseleave事件：在ul范围内来回移到到子元素的身上时，只执行一次ul身上的事件</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

</body>
</html>
<script>
    $(function () {
        $("#ul1").on("mouseover", function (e) {
            console.log("mouseover");
        });
        $("#ul1").on("mouseout", function (e) {
            console.log("mouseout");
        });


        $("#ul2").on("mouseenter", function (e) {
            console.log("mouseenter");
        });
        $("#ul2").on("mouseleave", function (e) {
            console.log("mouseleave");
        });
    });
</script>
```



##### hover( [handlerIn, ]handlerOut )

> hover(handlerIn, handlerOut); 鼠标进入和离开元素时触发的事件
>
> hover(handlerOut); 鼠标离开元素时触发的事件  

```javascript
$(domEle).hover(function(){
    // 鼠标悬浮在元素上时触发
},function(){
    // 鼠标离开元素时触发
});
```





### =====================

#### 遍历

##### **祖先元素（向上遍历DOM树）**

1. **parent() **
   - 只找到单一上级直接父元素（一个）
   - $("span").parent(); 找到span的直接父级元素
2. **parents() / parents(filter)** 
   - 找到多个祖先元素，直接到html根元素（多个）
   - $("span").parents(); 
   - ​


   - 找到指定类型的祖先元素，即指定过滤条件
   - $("span").parents("ul");   // 找到所有标签为ul的祖先元素
4. **parentsUntil()**
   - 该方法返回介于两个给定元素之间的所有祖先元素
   - $('span').parentsUntil('div');






##### 后代元素（向下遍历DOM树）**

1. **find(filter)**
   - 一路向下直到最后一个后代
   - $(selector).find(filter) 
   - $("div").find("span");  // 返回div所有的后代元素span
2. **children() / children(filter)**
   - 遍历被选中元素的所有直接子代元素
   - $("div").children("p");  // 返回所有直接子元素p
   - 根据过滤条件遍历被选中元素的直接子代元素
   - $("div").children("p.test"); // 返回所有类名为test的直接子元素p




##### **兄弟元素**

1. **siblings()  /  siblings(filter)** 

   - 查找所有同胞元素()
   - $("li.test").siblings().css('border', '1px solid green');  // 不包含自己
   - $("li").siblings().css('border', '1px solid green');  // 包含自己
   - $("li").siblings('.test').css('border', '1px solid green');  // 给类名为test的li元素设置边框

2. #### next() 

   - 该方法返回被选元素的下一个兄弟元素，只返回一个元素。
   - $(".text").next().css("border","1px solid red");

3. #### **nextAll()**

   - 返回被选中元素后面的所有兄弟元素
   - $("li.test").nextAll().css('border', '1px solid green'); 被选中元素后面的所有兄弟元素

4. **nextUnitl()**

   - 返回介于两个元素之间的兄弟元素
   - $("h2").nextUntil("h6").css({"color":"red","border":"2px solid red"}); 

5. **prev()**

   - 返回被选中元素前面的一个兄弟元素
   - $(".test").prev().css({"color":"red","border":"2px solid red"}); 

6. **prevAll()**

7. **prevUnitl()**



##### 过滤

1. **first()** 在一个集合中找到第一个元素
2. **last()** 在一个集合中找到最后一个元素
3. **eq(index)** 在一个集合中找到指定角标的元素，index从0开始
4. **filter(匹配条件)** 返回符合匹配条件的元素集合
5. **not(匹配条件)** 返回不符合匹配条件的元素集合







#### 效果

##### **显示与隐藏**

1. $(selector).hide(speed, callback);
2. $(selector).show(speed, callback);



##### **淡入淡出**

1. $(*selector*).fadeIn(*speed,callback*);
2. $(*selector*).fadeOut(*speed,callback*);
3. $(*selector*).fadeToggle(*speed,callback*);
4. $(*selector*).fadeTo(*speed,opacity,callback*);



##### **滑入滑出**

1. $(*selector*).slideDown(*speed,callback*);
2. $(*selector*).slideUp(*speed,callback*);
3. $(*selector*).slideToggle(*speed,callback*);




#### 动画**

```javascript
// animat不能设置与颜色相关的属性，如：background-color
$(selector).animate({params},speed,callback);   

$(selector).stop(stopAll,goToEnd);  // 停止动画
```



### HTML===================

#### 获取

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标签）
- val() - 设置或返回表单字段的值
- attr() - 设置或获取属性的值，可设置多个属性attr({key1:value1, key2: value2})


#### 添加

- [append()](https://www.w3cschool.cn/jquery/html-append.html) - 在被选元素内部的结尾插入指定内容
- [prepend()](https://www.w3cschool.cn/jquery/html-prepend.html) - 在被选元素内部的开头插入指定内容
- [after()](https://www.w3cschool.cn/jquery/html-after.html) - 在被选元素之后插入内容
- [before()](https://www.w3cschool.cn/jquery/html-before.html) - 在被选元素之前插入内容



#### 重点方法

```javascript
1.	$.getJSON(url, callback) // 该方法使用 AJAX 的 HTTP GET 请求获取 JSON 数据
2.	
```


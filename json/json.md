#### 什么是JSON
-   JSON 指的是 JavaScript 对象表示法（**J**ava**S**cript **O**bject **N**otation）(notation标记)
-   JSON 是轻量级的文本数据交换格式
-   JSON 独立于语言
-   JSON 具有自我描述性，更易理解




#### JSON的特点

- 轻量
- 跨平台
- 容易读写
- 无需解析器，能够使用内建的 JavaScript eval() 方法进行解析




#### JSON的作用

> json的主要作用是对对象的序列化与反序列化，还有一个作用就是实现对象的深拷贝

```javascript
// 1.为什么可以实现对象的深拷贝？
// 2.如何实现对象的深拷贝？
var obj1 = {a:{c:5}, b:2}
var obj2 = JSON.parse(JSON.stringify(obj1)); // 深拷贝对象
obj2.a.c++;
console.log(obj1);
console.log(obj2);
```




#### json数组和对象

```json
// 1.数组
[
  {
    "name": "zhangsan",
    "age": 18,
    "class": "1班"
  },
  {
    "name": "lisi",
    "age": 15,
    "class": "2班"
  },
  {
    "name": "wangwu",
    "age": 12,
    "class": "3班"
  }
]

// json对象中的数组employees
{
"employees": [{ "firstName":"John" , "lastName":"Doe" },
	{ "firstName":"Anna" , "lastName":"Smith" },
	{ "firstName":"Peter" , "lastName":"Jones" }]
}


// 2.对象
{ "firstName":"John" , "lastName":"Doe" } 
```



#### JSON的值可以是

- 数字（整数或浮点数）
- 字符串（在双引号中）
- 逻辑值（true 或 false）
- 数组（在方括号中）
- 对象（在花括号中）
- null



#### JSON的文件

- JSON 文件的文件类型是 ".json"
- JSON 文本的 MIME 类型是 "application/json"




#### JSON字符串转换为js对象

> 使用js语言提供的eval()方法可以将json字符串转换为js对象
>
> eval() 函数可编译并执行任何 JavaScript 代码。这隐藏了一个潜在的安全问题。使用 JSON 解析器`JSON.parse(jsonString)` 将 JSON 转换为 JavaScript 对象是更安全的做法。

```javascript
var txt = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//必须把文本包围在括号中，这样才能避免语法错误
var obj = eval ("(" + txt + ")"); 
```



#### for in

> `for in`可以遍历一个数组也可以遍历一个对象

```javascript
var data = { "name":"runoob", "alexa":10000, "site":null }
for(var x in data){
   console.log(data[x]);	//data[x]可以拿到对象的属性对应的值
}
```

有两种方法可以拿到一个对象的属性的值：
-   1.点语法，但是必须要知道属性的名称，如：data.name

-   2.关联数组法，如 data['name']  

    ​


####  JSON.stringify(obj)
1. 可以使用JSON.stringify()将javascript对象转换为字符串
2. 可以使用JSON.stringify()将javascript对象转换为字符串时，会删除对象中的函数
  如果对象中有函数，可以将函数先转换为字符串obj.fun.toString()    【解析函数】
3. 可以使用JSON.stringify()将javascript数组转换为字符串
4. JSON 不能存储 Date 对象，会将Date对象转换为字符串         【解析数据】


```javascript

```




#### JSON.parse(string);

1.  JSON.parse(text[, reviver]) 方法可以将一个 JSON 字符串转换为javascript对象
2.  **参数说明：**
   - **text:**必需， 一个有效的 JSON 字符串。
   - **reviver:** 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
3.  这是一个json字符串`'{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}'`

```javascript
var jsonStr = '{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}';
var obj = JSON.parse(jsonStr);
console.log(obj);
```


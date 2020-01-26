#### String 对象属性

> 1.prototype : 允许向对象添加属性和方法
>
> 2.length : 字符串的长度，从1开始
>
> 3.constructor: 返回创建String实例属性的构造函数



#### String 对象方法

##### 1.string.charAt(index);			

> **返回值：** 角标对应的字符(不改变原字符串)
>
> **提示：** index必须的

```javascript
// 案例1：获取最后一个字符
var str = "HELLO WORLD";
var n = str.charAt(str.length-1);	// D

// 案例2：获取第一个字符
var str = "HELLO WORLD";
var n = str.charAt(0);		// H
```



##### 2.string.charCodeAt(index);		

> **返回值：** 角标对应的字符在Unicode 编码表上的位置(不改变原字符串)
>
> **提示：** index必须的

```javascript
//  案例1：A-Z的unicode编码	[65, 90]
//	a-z[97-122]
//	0-9[48-57]
var str = "A-Z";
console.log(str.charCodeAt(0));				// 65
console.log(str.charCodeAt(str.length-1));	// 90
```



##### 3.String.fromCharCode(*n1*, *n2*, ..., *nX*);

> **返回值：** 将 Unicode 编码转为字符
>
> **提示：** 是一个静态方法



##### 4.*string*.concat(*string1*, *string2*, ..., *stringX*)		

> **返回值：** 一个连接后的新的字符串(不改变原字符串)
>
> **提示：** 

```javascript
var str1="Hello ";
var str2="world!";
var str3=" Have a nice day!";
var n = str1.concat(str2,str3);		//Hello world! Have a nice day!
```



##### 5.*string*.indexOf(*searchvalue*,*start*);

> **返回值：**  返回查找的字符串第一次被找到的角标,找不到就返回-1(不改变原字符串)
>
> **提示：** 返回值类型是数字，没有查找到searchvalue值时，返回-1

```javascript
// 案例1：不指定start时，从0开始查找
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");
console.log(n);	//13

// 案例2：在字符串第五个位置开始查找字符 "e" 第一次出现的位置:
var str="Hello world, welcome to the universe.";
var n=str.indexOf("e",5);		//14
```



##### 6.*string*.lastIndexOf(*searchvalue*,*start*);

> **返回值：**  返回查找的字符串最后一次被找到的角标,找不到就返回-1(不改变原字符串)
>
> **提示：** 返回值类型是数字，从后面开始查找，找最后一次被找到的索引

```javascript
// 案例1：不指定start时，从末尾开始向前查找(如果指定start,就从start开始向前查找)
var str="Hello planet earth, you are a great planet.";
var n=str.lastIndexOf("planet");
console.log(n);	//36
```



##### 7.*string*.match(*regexp*)	//匹配

> **返回值：**  在字符串中查找与正则表达式相匹配的值，找到匹配的就返回存放值的一个数组，找不到匹配的就返回null(不改变原字符串)
>
> **提示：** 返回值类型是一个数组

```javascript
// 案例1：全局查找
var str = "HELLO WORLD! javascript is good script language";
var x = str.match(/script/g);
console.log(x);	// ["script", "script"]

// 案例2：全局查找字符串 "ain"，且不区分大小写:
var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/gi);
console.log(n);		// ["ain", "AIN", "ain", "ain"]
```



##### 8.*string*.replace(*searchvalue,newvalue*);	//替换

> **返回值：**一个新的字符串(不改变原字符串)
>
> **提示：**当找到第一个searchvalue时就不会再找第二个，但可以使用正则查找全局(即:/searchvalue/g)

```javascript
// 案例1：只找到第一个
var strM = "javascript is a good script language"; 
console.log(strM.replace("a","A")); 	//jAvascript is a good script language

// 案例2：使用正则找到第一个
var strM = "javascript is a good script language"; 
console.log(strM.replace(/a/,"A")); 	//jAvascript is a good script language

// 案例3：使用正则找到所有的a,并替换为A
var strM = "javascript is a good script language"; 
console.log(strM.replace(/a/g,"A")); 	//jAvAscript is A good script lAnguAge

// 案例3：忽略大小写
var strM = "J2r5rR"; 
console.log(strM.replace(/r/gi,"A")); 	//J1A5AA
```



##### 9.*string*.search(*searchvalue*);	// 查找匹配的值

> **返回值：**一个数字类型
>
> **提示：**searchvalue是需要查找的字符串或者正则表达式，如果存在，就返回值所在的角标，不存在就返回-1

```javascript
// 案例1：对大小写敏感
var str="Mr. Blue has a blue house";
console.log(str.search("blue"));	//15

// 案例2：忽略大小写
var str="Mr. Blue has a blue house";
console.log(str.search(/blue/i));	//4
```



##### 10.string.slice(start, end);		//截取

> **返回值**：新的字符串(不改变原字符串)
>
> **提示：** 如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。

```javascript
/*
*	语法：string.slice(start, end);
*	start:必须的，要抽取的片断的起始下标。第一个字符位置为 0
*	end:可选的，不填就截取到字符串的最后
*/

// 案例1：从0开始截取到最后
var str="Hello world!";
var n=str.slice(0);			// Hello world!

// 案例2：从指定位置开始截取到最后一个
var str="Hello world!";
var n=str.slice(3);			// lo world!

// 案例3：从指定位置开始截取到指定下标（闭区间）
var str="Hello world!";
var n=str.slice(3, 8);		// lo wo

// 案例4：截取第一个字符
var str="Hello world!";
var n=str.slice(0, 1);		// H
console.log(n);

// 案例5：截取最后一个字符
var str="Hello world!";
var n=str.slice(-1);		// !

// 案例6：从-str.length开始
var str="Hello world!";
var n=str.slice(-str.length);	// Hello world!（相当于从0到结尾）
```



##### 11.*string*.split(*separator*,*limit*)		//分割

> **返回值**：返回一个数组(不改变原字符串)
>
> **提示：** separator分离器，limit返回的数组的长度。如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割(案例2)

```javascript
// 案例1：什么都不写的时候会将字符串按照一个元素添加到数组里
var str="How are you doing today?";
var n=str.split();
console.log(n);		// ["How are you doing today?"]

// 案例2：参数是空格时
var str="How are?";
var n=str.split('');
console.log(n);		// ["H", "o", "w", " ", "a", "r", "e", "?"]

// 案例3：指定返回数组的长度
var str="How are you doing today?";
var n=str.split(" ",3);
console.log(n);		// ["How", "are", "you"]

//  案例4：使用其他字符做分离器
var str="How are you doing today?";
var n=str.split("o");
console.log(n);		// ["H", "w are y", "u d", "ing t", "day?"]
```



##### 12.*string*.substr(*start*,*length*)		//提取

> **返回值**：返回一个字符串(不改变原字符串)
>
> **提示：** 常常使用substr()来代替 substring() 和 slice()

```javascript
// 从第二个角标开始提取到最后
var str="Hello world!";
var n=str.substr(2);
console.log(n);			// llo world!
```



##### 13.*string*.substring(*start*,end)		//提取

> **返回值**：返回一个字符串(不改变原字符串)
>
> **提示：**  左闭右开区间,参数是非负数

```javascript
// 从第二个角标开始提取到最后
var str="Hello world!";
var n=str.substring(2,7);
console.log(n);			// llo w
```



##### 14.string.toLowerCast();	//小写

> **返回值**：返回一个字符串(不改变原字符串)
>
> **提示：**  

```javascript
var str="Hello world!";
var n=str.toLowerCase();
console.log(n);		//hello world!
console.log(str);	//Hello world!
```



##### 15.string.toUpperCast();	//大写

> **返回值**：返回一个字符串(不改变原字符串)
>
> **提示：**  

```javascript
var str="Hello world!";
var n=str.toUpperCase();
console.log(n);		//HELLO WORLD!
console.log(str);	//Hello world!
```



##### 16.string.trim();	

> **返回值**：返回一个字符串(不改变原字符串)
>
> **提示：** 

```javascript
var str=" Hello world! ";
var n=str.trim();
console.log(n);		//"Hello world!"
console.log(str);	//" Hello world! "
```



##### 17.string.valueOf();	//字符串原始值

> **返回值**：返回字符串对象的原始值
>
> **提示：** 返回值自己本身

```javascript
var str="Hello world!";
var n=str.valueOf();
console.log(n);		//Hello world!
```



### String的包装类方法

> 在字符串中包装了html标签来达到某种效果

```javascript
var txt = "Hello World!";
document.write("<p>字体变大: " + txt.big() + "</p>");
document.write("<p>字体缩小: " + txt.small() + "</p>");
document.write("<p>字体加粗: " + txt.bold() + "</p>");
document.write("<p>斜体: " + txt.italics() + "</p>");
document.write("<p>固定定位: " + txt.fixed() + "</p>");
document.write("<p>加删除线: " + txt.strike() + "</p>");
document.write("<p>字体颜色: " + txt.fontcolor("green") + "</p>");
document.write("<p>字体大小: " + txt.fontsize(6) + "</p>");
document.write("<p>下标: " + txt.sub() + "</p>");
document.write("<p>上标: " + txt.sup() + "</p>");
document.write("<p>链接: " + txt.link("http://www.w3cschool.cc") + "</p>");
document.write("<p>闪动文本: " + txt.blink() + " (不能用于IE,Chrome,或者Safari)</p>");
```

![包装类](E:\08_web\web_note\09-个人总结\Js\String\包装类.png)


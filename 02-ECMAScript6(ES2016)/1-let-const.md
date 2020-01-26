## js中的变量修饰符

1. var	-->函数作用域
2. let -->块作用域
3. const -->常量不可改，对象不可改，对象内部属性可改





## 作用域

- js中只有函数作用域

```javascript
function test () {
  //函数内部都属于函数作用域
  var a = 10;
}
console.log(a);		//外面不可访问  会报错
```



- js中没有块作用域

```javascript
{
  //花括号内的范围都属于块作用域,但js中不存在块作用域，所以外面可以访问花括号里面的内容
  var a = 10;
}
console.log(a);		//可以访问a  10
```



- 闭包的原理

```javascript
//在一个函数中定义的变量，当这个函数调用完后，变量就会被销毁；如果有
//外部变量指向函数内部的引用，导致函数里面定义的变量无法释放,就实现了闭包
function test () {
  var a = 20;
  var closure = function () {
  	console.log(a);
  }
  return closure;
}
var closure = test();
closure();	//20
```



## var/let/const的区别

- var


```javascript
// 1.定义一个常量，使用大写的方式去定义，这个只是人为的约定，值可以被修改
var PI = 3.1415;	
PI = 5;
console.log(PI);	//值已经改变

// 2.被const修饰的变量不能被修改
const pi = 3.1415;
pi = 5;				//不能被修改
console.log(pi);	//报错

// 3.var声明的变量在块外可以被调用，即没有块作用域
function test () {
  for(var i = 0; i < 10; i++){
    // 块作用域内部
  }
  constlo.log(i);	//i在for循环块作用域外可以被使用
}
```



- let



```javascript
// 1.javascript中没有块{}作用域
var a = [];
for (var i = 0; i < 10; i++) {  
  //因为js中没有块作用域，i是全局变量，每次遍历i的值都会被改变，最后i的值是10
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
a[8](); // 10
console.log(i);	//可访问i

// 2.使用一对花括号{}代表代码块，被let修饰的变量在块内有效，块外无效
var a = [];
for (let i = 0; i < 10; i++) {	//for循环内部就是i的作用域
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
a[8](); // 8
console.log(i);	//不可访问i
```

 

- const 

```javascript
// 1.被const修饰的变量不能被修改
const pi = 3.1415;
pi = 5;				//不能被修改
console.log(pi);	//报错


// 2.被const修饰的对象是不可更改的，但是对象内部的属性是可以被更改的
const obj = {
  name : "zhangsan",
  age : 18
}
obj.age = 19;
console.log(obj.age);	//19
obj = {}; 				//报错
```

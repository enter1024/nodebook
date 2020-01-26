# call()与apply()

> **call() 和 apply()**都是为了改变被调用的函数内部的上下文**（context）**而存在的，即改变被调用的函数内部的this指向;
>
> **call() 和 apply()**二者的作用完全一样，只是接受参数的方式不太一样;



## 一、call()

- **语法：**function.call(thisArg, arg1, arg2, arg...);
- **语法参数说明：**call()方法调用一个函数function, 其具有一个指定的**this**值和**分别**提供的参数
- **作用：**可以让call()中的对象调用当前对象所拥有的函数
  - call()中的对象指的是：thisArg,即传递到call()方法中的this
  - 当前对象指的是：function对象
- **区别：**和apply()的区别在于传递的参数不同，apply传递的参数是一个数组或伪数组
- **非严格模式中：** this为`null`和`undefined`时会自动指向全局对象(window对象)

```javascript
// 1.案例：使用Food构造函数创建的对象实例拥有在Product构造函数中添加的name属性和price属性,但category属性是在Food的构造函数中定义的。
// 使用call()实现继承父构造函数中的成员
function Product (name, price) {
  this.name = name;
  this.price = price;
  this.show = function () {
    console.log("今天" + this.name + "的价格：￥" + this.price + "元");
  }
  if (price < 0) {
    throw RangeError(this.name + "的价格不能为负数");	//抛出错误
  }
}

function Food (name, price) {
  Product.call(this,name,price);	//使用call()方法调用父构造函数可以实现继承
  this.category = "food";
}

// 等同于
function Food (name, price) {
  this.name = name;
  this.price = price;
  this.show = function () {
    console.log("今天" + this.name + "的价格：￥" + this.price + "元");
  }
  if (price < 0) {
    throw RangeError(this.name + "的价格不能为负数");
  }

  this.category = "food";
}

var objFood = new Food("大米", "2.50");
console.log(objFood);
objFood.show();
```



```javascript
// 2.实现继承
function Animal(name){   
  this.name = name;   
  this.showName = function(){   
    console.log(this.name);   
  }   
}   
 
function Cat(name){  
  Animal.call(this, name);  
}   
 
var cat = new Cat("Black Cat");   
cat.showName(); //Black Cat
```



```javascript
// 3.使用call()调用匿名函数
/*
在下例中的for循环体内，我们创建了一个匿名函数，然后通过调用该函数的call方法，将每个数组元素作为指定的this值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个print方法，这个print方法可以打印出各元素在数组中的正确索引号。当然，这里不是必须得让数组元素作为this值传入那个匿名函数（普通参数就可以），目的是为了演示call的用法。
*/
var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
  (function (i) { 
    this.print = function () { 
      console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
    } 
    this.print();		//#0 Lion: King		//#1 Whale: Fail
  }).call(animals[i], i);
}
```





## 二、apply

- **语法：**function.apply(thisArg, [argsArray]);
- **语法参数说明：**apply()方法调用一个函数function, 其具有一个指定的**this**值和数组或伪数组
- **作用：**可以让apply()中的对象调用当前对象所拥有的函数
  - apply()中的对象指的是：thisArg,即传递到apply()方法中的this
  - 当前对象指的是：function对象
- **区别：**和call()的区别在于传递的参数不同，call()传递的参数是一个个的参数
- **非严格模式中：** this为`null`和`undefined`时会自动指向全局对象(window对象)
- Chrome 14 以及 Internet Explorer 9 仍然不接受伪数组对象。如果传入伪数组对象，它们会抛出异常

> `Function.apply(obj,args)`方法能接收两个参数：
>
> **obj：**这个对象将代替Function类里this对象
>
> **args：**这个是数组或类数组，apply方法把这个集合中的元素作为参数传递给被调用的函数。

```javascript
// 3. 案例：apply()与call()参数对比
// 参数是数据列表
(function (){
  	Array.prototype.push.call(arguments,6,7);
  	console.log(arguments);		//[1, 2, 3, 6, 7]
})(1,2,3);

// 参数是数组
var arr1 = [1,2,3];
var arr2 = [4,5,6];
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);//[1, 2, 3, 4, 5, 6]
console.log(arr2);//[4, 5, 6]
```



```javascript
// 使用别人的方法，此时foo中的logName方法将被bar引用 ，this指向了bar
var foo = {
  name:"明明",
  logName:function(){
    console.log(this.name);
  }
}
var bar={
  name:"白白"
};
foo.logName.apply(bar);//白白
```



## 三、判断数据类型

```javascript
console.log(Object.prototype.toString.call(123)) ;			//[object Number]
console.log(Object.prototype.toString.call('123')); 		//[object String]
console.log(Object.prototype.toString.call(undefined)); 	//[object Undefined]
console.log(Object.prototype.toString.call(true)); 			//[object Boolean]
console.log(Object.prototype.toString.call({})); 			//[object Object]
console.log(Object.prototype.toString.call([])); 			//[object Array]
console.log(Object.prototype.toString.call(function(){})); 	//[object Function]
```





## 四、严格模式与非严格模式的this指向

- 在非严格模式下当我们第一个参数传递为null或undefined时，函数体内的this会指向默认的宿主对象，在浏览器中则是window

```javascript
function test() {
  console.log(this === window);	
}
test.call(null);		// true
test.apply(undefined);	// true
```



- 在**ECMAScript 5**的**strict**模式下，这种情况下的this已经被规定为不会指向全局对象**window**，而是**undefined**

```javascript
function test() {
  "use strict";
  console.log(this);	
}
test();	// undefined
```





## 五、缓存this对象在开发中也很常见

```javascript
// 1.没有缓存this时,this指向window
window.id="window";
document.querySelector('#test').onclick = function(){
  console.log(this.id);//test
  var fun = function(){
    console.log(this.id);
  }
  fun();//window
}
```



```javascript
// 2.缓存this
window.id="window";
document.querySelector('#test').onclick = function(){
  var that = this;
  var fun = function(){
    console.log(that.id);
  }
  fun();//test
}
```

```javascript
// 3.推荐使用call()或apply()
window.id="window";
document.querySelector('#test').onclick = function(){
  var fun = function(){
    console.log(this.id);
  }
  fun.call(this);  //test
}
```
### 函数的Arguments对象

- arguments是一个伪数组，并没有真正数组的方法，只有length方法
- arguments可以获取传递到函数里面的所有参数，参数依次存进arguments对象中
- arguments[0]，可以获取到arguments对象中的角标为0的参数

```javascript
function printArgs() {
  	console.log(arguments);			// ["A", "a", 0, Object]
  	console.log(arguments[1]);		// a
  	console.log(arguments.length);	// 4
}
// 函数被调用时，系统会将函数的实参依次存到该函数的arguments对象中
printArgs("A", "a", 0, { first: "Hello, arguments" });
```



### 函数调用时的参数传递问题

- 函数定义时没有指定型参的数据类型
- 函数定义时没有型参的时候，调用函数时，传不传实参都不会报错
- 函数定义时有型参的时候，调用函数时，传不传实参都不会报错
- 函数对隐藏参数（arguments）没有进行检测
- 函数对隐藏参数（arguments）的个数没有进行检测
- 如果函数在调用时缺少参数，参数会默认设置为undefined（最好为形参设置默认值，避免不必要的错误）

```javascript
// 为形参设置默认值
function test(x, y) {
    if (x === undefined) {
        x = 0;
    }
  	if (y === undefined) {
        y = 0;
    }
  	return x + y;
} 
console.log(test(5));	// 5
console.log(test());	// 0

// 或者
function test(x, y) {
  	x = x || 0;
    y = y || 0;
  	return x + y;
} 
```



### 将伪数组转换为数组

> ```
> Array.prototype.slice.call(arguments);	
> ```

或

> ```
> [].slice.call(arguments);
> ```





### 使用arguments对象求最值

```javascript
// 使用arguments对象求最大值
function maxNumber (){
  	var maxValue = arguments[0];
  	for(var i = 1; i < arguments.length; i++){
      	maxValue = maxValue > arguments[i] ? maxValue : arguments[i];
	}
  	return maxValue;
}
var maxValue = maxNumber(12, 5, 100, 102, 85, 7, 45);
console.log(maxValue);
```



```javascript
// 使用arguments对象去除重复的实参
function removeRepetition () {
  	console.log(arguments);
  	var arr = [];
  	for (var i = 0; i < arguments.length; i++) {
    	if (arr.indexOf(arguments[i]) == -1) {
      		arr.push(arguments[i]);
    	}
  	}
  	return arr;
}
var arr = removeRepetition(5,2,2,1,5);
console.log(arr);
```



### 被弃用的

```javascript
2.arguments.callee	 返回的是正在执行的函数(已被弃用)

// 递归方式
function factorial(num){    
   if (num <=1) {         
		return 1;     
   } else {         
		return num * factorial(num-1)     
   } 
} 
factorial(5);	// 120 

// 也可以改为
function factorial(num){    
   if (num <=1) {         
		return 1;     
   } else {         
		return num * arguments.callee(num-1);
   } 
}  
```


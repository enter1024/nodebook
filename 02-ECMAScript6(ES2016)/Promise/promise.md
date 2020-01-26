#### ES6中的Promise

1. 什么是promise

   promise是异步编程的一种解决方案（比回调函数和事件侦听更强大）

2. promise有什么作用

   通过promise可以实现异步编程，让程序按照预设的顺序执行（按队列执行）

3. 如何使用promise

   ```javascript
   let promise =  new Promise(function(resolve, reject){
    	// 一些耗时操作代码，例如向后台获取数据
     	...
       ...
     	if(true){ // 成功
     		resolve("成功后需要传递出去的数据");
   	}else{ // 失败
     		reject("失败后需要传递出去的数据");
   	}
   })；

   promise.then().then()... // 可以链式调用多个then()方法
   ```




#### Promise的三个状态

promise的状态一旦发生改变就不会再改变[resolve凝固]

```
1.Pending [待定]初始化
2.Fulfilled [实现]操作成功
3.Rejected [被否决]操作失败

状态的变化只有两种情况
Pending -> Fulfilled [成功]
Pending -> Rejected [失败]
```



#### Promise的then(fulfilled,rejected)函数

- .then()函数接受两个函数作为参数，分别代表`fulfilled`和`rejected`



- .then()函数返回一个新的 Promise实例，所以它可以链式调用

- 当前面的Promise 状态改变时， .then()会根据最终的状态选择特定的`状态响应函数`去执行

- 状态响应函数可以返回新的Promise，或其他值

- 如果返回新的Promise, 那么下一级.then()会在新 Promise状态改变之后执行

- 如果返回的是其他任何值，则会立即执行下一级 .then()


```javascript
// then函数的两个参数
.then(fulfilled => {
	// 成功
}, rejected => {
	// 失败
})
```



#### Promise在当前脚本的执行顺序

首先会执行完当前脚本的同步代码，再执行队列中的异步代码(then()函数)

```javascript
console.log(1);

var promise = new Promise((resolve, reject) => {
	console.log(2);
	resolve(3); // 执行到这异步时，会将任务放到队列中等待执行，此时promise对象还是处于pending状态，直到当前脚步的同步代码执行完毕后，再执行队列中的代码（栈模式）
	
}).then(value => {
	console.log(value);
}, err => {
	console.log(err);
})

console.log(4);
 
// 输出的结果是： 1 2 4 3
```



#### Promise异常处理

处理promise错误有两种方式，第一种是将错误交给rejected响应函数，第二种是使用catch()捕获错误并处理。

promise会自动捕获内部异常，并交给rejected响应函数处理，但有多个then()函数时需要在每个then()中都定义rejected处理函数，这样会比较麻烦。建议使用第二种方法(可以一次性处理多个then()的异常错误)

```javascript
// 使用第二种方法处理异常错误
console.log('go');

new Promise((resolve, reject) => {
	console.log('侦听器函数内部代码被执行！');
	
	// 两秒之后抛出一个错误
	setTimeout(() => {
		resolve('成功返回数据');
	}, 2000);
	
}).then(value => {
	console.log('第一个then：', value);
	
	return new Promise((resolve, reject) =>{
		throw new Error('第一个then抛出一个错误');
	})
}).then(value => {
  	// 上一个then抛出错误后，不会执行这里的代码
	console.log('第二个then：', value);

}).catch(error => {
	// catch可以捕获到任何一个then()抛出的错误
	console.log('错误信息：', error);
})
```
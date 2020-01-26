### array.forEach(fn)

forEach是ECMA5中Array新方法中最基本的一个，就是遍历，循环。

```javascript
// 语法：
[].forEach(function(value, index, array) {
    // 使用该方法最好是指定value, 不要使用this代替value
    // 第1个是遍历的数组内容
    // 第2个是对应的数组索引
    // 第3个是数组本身
});


// 案例
var arr = [1,3,5,10];
arr.forEach(function (value, index, arrayObj) {
    if (value % 2 == 0){
        console.log(value,index);		// 10 3
        console.log(arrayObj[index]);  	// 10
    }
})
```



### array.map(fn)

ECMA5中的方法，map方法的作用不难理解，“映射”嘛，也就是原数组被“映射”成对应的新数组

```javascript
// 语法：
// array.map(callback,[thisObject]);
array.map(function(value,index,array){
    
});

// 案例 : 求平方
var arr = [1,3,4];
var result = arr.map(function(val, index, arr){
    console.log(arr[index] == val);  // ==> true
    return val*val           
});
console.log(result);        // ==> [1, 9, 16]
```





### $.each(array, fn)

**通用方法**，该方法可以遍历对象或数组，fn的第1个和第2个参数正好和js原生的遍历方法是相反的，大家要注意了，不要记错了。

```javascript
// 语法：
$.each([], function(index, value) {
    // this指向数组中的每个元素
    // 注意fn的参数位置和js原生的遍历有所不同
});


// 案例
// 1.遍历数组
var arr = [1,3,5,10];
$.each(arr, function (index, value) {
    console.log(value,index);
});
//    1 0
//    3 1
//    5 2
//    10 3


// 2.变量对象
var obj = {a:1,b:2,c:['name','li']}
$.each(obj, function (key, value) {
    console.log(key,value);
});
//    a 1
//    b 2
//    c ["name", "li"]
```



### $(selector).each(fn)

该方法只可以遍历组数或伪数组

```javascript
// 语法
$(selector).each(function(index, domEle){
    // domEle : 元素对象
});

// 案例：遍历集合中的所有dom元素
$('.box p').each(function (index, domEle) {
    console.log(index);
    $(domEle).css("backgroundColor", "blue");
})
```


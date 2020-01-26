#### 数组对象的方法

#### 1-concat()

- 语法：array1.concat(array2,array3,...,arrayX)

- 返回值：返回一个新的数组，不会改变原数组

- 支持：所有浏览器都支持

  ```javascript
  var a = [1,2,3];
  var b = a.concat();
  console.log(b);			// [1, 2, 3]	拷贝了一份，地址不同
  console.log(b != a);	// true
  ```

  ​

#### 2-every()

- 语法：array.every(function(currentValue,index,arr), thisValue)

- 返回值：布尔值。如果所有元素都通过检测返回 true，否则返回 false。

- 支持：ie9+ 和其他主流浏览器都支持

- every() 不会对空数组进行检测。

- every()不会改变原数组

  ```javascript
  //检测数组 ages 的所有元素是否都大于 18 :
  var ages = [32, 33, 16, 40];
  //ages中的每一个元素都会调用一个checkAdult方法
  function checkAdult(age) {
      return age >= 18;
  }

  function myFunction() {
      document.getElementById("demo").innerHTML = ages.every(checkAdult);
  }
  //结果是：false
  ```

​

#### 3-filter()

- 语法：array.filter(function(currentValue,index,arr), thisValue)
- 返回值：返回数组，包含了符合条件的所有元素。如果没有符合条件的元素则返回空数组
- 支持：ie9+ 和其他主流浏览器都支持
- filter() 不会对空数组进行检测
- filter()不会改变原数组

```javascript
//返回数组 ages 中所有元素都大于 18 的元素:
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

//结果32,33,40
```

​

#### 4-indexOf()

- 语法：array.indexOf(str, startindex)或array.indexOf(str)
- 返回值：子字符串首次出现的位置，如果没有找到返回-1
- 支持：所有浏览器都支持，ie8及之前的版本不支持
- 方法可返回某个指定的字符串值在字符串中首次出现的位置
- 不会改变原数组

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");	//2

var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
var a = fruits.indexOf("Apple",4);	//6

```

​

#### 5-join()

- 语法：array.join(separator)	separator分隔符
- 返回值：字符串
- 支持：所有浏览器都支持

```javascript
//将数组中的所有元素输出为字符串，join()等同于join(',')，默认就是用逗号分隔
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();				//Banana,Orange,Apple,Mango

//指定分隔符
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(""));   // BananaOrangeAppleMango
var energy = fruits.join("-");		//Banana-Orange-Apple-Mango
var energy = fruits.join(" and ");  //Banana and Orange and Apple and Mango
```

​

#### 6-lastIndexOf()

- 语法：array.lastIndexOf(str, startindex)或array.lastIndexOf(str)
- 返回值：子字符串最后一次出现的位置，如果没有找到返回-1
- 支持：所有浏览器都支持，ie8及之前的版本不支持

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");		//2

var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
var a = fruits.lastIndexOf("Apple");		//6
```

​

#### 7-map()

- 语法：array.map(function(currentValue,index,arr), thisValue)
- 返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
- 支持：所有浏览器都支持，ie8及之前的版本不支持
- map() 方法按照原始数组元素顺序依次处理元素。
- map() 不会对空数组进行检测。
- map() 不会改变原始数组。

```javascript
var numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt)); // 2,3,4,5
```



#### 8-pop();

- 语法：*array*.pop();
- 返回值：删除数组的最后一个元素并返回删除的元素
- 支持：所有主要浏览器都支持

​



#### 9-push();

- 语法：*array*.push(*item1*, *item2*, ..., *itemX*)

- 返回值：向数组的末尾添加一个或更多元素，并返回新的长度

- 支持：所有主要浏览器都支持

- 此方法改变数组的长度

  ​

  ​

  ​


#### 10-reverse()

- 语法：*array*.reverse()

- 返回值：反转数组的元素顺序,并把该数组返回，

- 支持：所有浏览器都支持

- 改变原数组，将改变的原数组返回

  ​

#### 11-shift()

- 语法：*array*.shift()

- 返回值：删除并返回数组的第一个元素的值

- 支持：所有浏览器都支持

- 该方法会改变原数组

  ​

#### 12-slice()

- 语法：*array*.slice(*start*, *end*)

- 返回值：选取数组的的一部分，并返回一个新数组。不指定start和和end时，会从0开始到最后

- 支持：所有浏览器都支持

- slice() 方法不会改变原始数组

  ​

#### 13-some()

- 语法：array.some(function(currentValue,index,arr),thisValue)	

- 返回值：boolean,检测数组元素中是否有元素符合指定条件, 一个符合条件即可true

- 支持：ie9+

- some() 不会对空数组进行检测

- some() 不会改变原始数组

  ​

#### 14-sort()

- 语法：*array*.sort(*sortfunction*)

- 返回值：原数组的引用，数组在原数组上进行排序，不生成副本

- 支持：所有浏览器都支持

- 默认排序顺序为按字母升序

- 如果需要对数字排序，需要传入函数

- 方法会改变原始数组

  ```javascript
  // 1.升序
  var points = [40,100,1,5,25,10];
  points.sort(function(a,b){return a-b});

  // 2.降序
  var points = [40,100,1,5,25,10];
  points.sort(function(a,b){return b-a});

  // 3.字母降序
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  fruits.reverse();
  ```



#### 15-splice()

- 语法：*array*.splice(*index*,*howmany*,*item1*,.....,*itemX*)

- 返回值：返回的是含有被删除的元素的数组，没有删除就返回空数组

- 支持：全部都支持

- 方法会改变原始数组

- 如果第二个参数是0代表不删除，如果不写第二个参数代表删除全部

  ​

#### 16-toString()

- 语法：*array*.toString()
- 返回值：数组的所有值用逗号隔开的一个字符串
- 支持：全部浏览器都支持
- 方法不会改变原始数组



#### 17-unshift()

- 语法：*array*.unshift(*item1*,*item2*, ..., *itemX*)
- 返回值：向数组的开头添加一个或更多元素，并返回新的长度
- 支持：全部浏览器都支持
- 改变原始数组



#### 18-valueOf()

- 语法：*array*.valueOf()
- 返回值：返回数组的原始值，一把在代码中很少直接调用，都是内部调用
- 支持：全部浏览器都支持
- 方法不会改变原始数组



#### 面试题

```javascript
// 1.在不改变原数组a = [1,2,3]的情况下，拷贝出数组b,并且数组a != b，请选择( BD )。
let b=a;				//A
let b = a.slice();		//B
let b = a.splice(0,0);	//C
let b = a.concat();		//D
```

```javascript
// 2.将数组var a = [1,2,3]  变成数组 [4,3,2,1]下面方式正确的是？	( AC )
a.reverse().unshift(4);
a.push(4).reverse();
a.push(4);a.reverse();
a.splice(3,1,4).reverse();
```




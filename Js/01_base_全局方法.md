#### 常用全局方法

> isNaN( value );  判断 value 是否是 NaN，返回一个布尔值
>
> parseInt( string );  返回由字符串 string 转换而来的整数
>
> parseFloat( string );  返回由字符串 string 转换而来的浮点数

```javascript
var a = NaN;
var b = "123";
var c = 123;
var d = '1.23';

console.log(isNaN(a));		// true
console.log(isNaN(b));		// false
console.log(isNaN(c));		// false
console.log(isNaN(d));		// false

console.log(parseInt(b));	// 123
console.log(parseFloat(d));	// 1.23
```


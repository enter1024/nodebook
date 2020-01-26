## 标识符

- 标识符就是一个名字，js中用来对变量或函数进行命名的
- 标识符可以使用字母、数字、$和_进行命名(不能以数字开头)



## 保留字

- 保留字也叫关键字，即在代码中不能使用关键字作为标识符

```javascript
break		delete			function		return			typeof	
case		do				if				switch			var
catch		else			instanceof		throw			while
continue	false			in				this			void
debugger	finally			new				true			with
default		for				null			try				
```

- ECMAScript 5 也保留了如下关键字

```javascript
class		const		enum	export		extends 	import		super
```

- 严格模式下的保留字

```javascript
"user strict"
implements
let
private
public
yield
interface
package
protected
static
```


## 全局对象

- 全局属性：比如undefined、Infinity、NaN
- 全局函数：比如isNaN()、parseInt()、eval()
- 构造函数：比如Date()、RegExp()、String()、Object()、Array()
- 全局对象：比如Math、JSON
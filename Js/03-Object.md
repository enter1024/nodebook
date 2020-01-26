### Object.defindeProperty()

> 该方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
>
> 语法： Object.defineProperty(obj, prop, descriptor)；
>
> ​	obj : 要在其上定义属性的对象。
>
> ​	prop : 要定义或修改的属性的名称
>
> ​	descripotor : 对将被定义或修改的属性的描述符
>
> 返回值：被传递给函数的对象

```javascript

```





### Object.keys(obj)

使用`Object.keys()` 方法可以返回一个（被传递到函数里面的对象）可被枚举的属性的集合

```javascript
var o = {};
Object.defineProperty(o, "a", { value : 1, enumerable:true });
Object.defineProperty(o, "b", { value : 2, enumerable:false });
Object.defineProperty(o, "c", { value : 3 }); // enumerable defaults to false
o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true

for (var i in o) {    
  console.log(i);  // 打印 'a' 和 'd'
}

Object.keys(o); // ["a", "d"]

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
```


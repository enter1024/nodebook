# class类

- JavaScript中创建对象的方式是使用构造函数**Function**

```javascript
function Person (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.showName = function () {
    console.log("我的名字是：" + this.name);
  }
}
var obj = new Person("张三", 18, "男");
obj.showName();
```



- es6中创建对象使用类**class**




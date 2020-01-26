#### Deferred对象

> 1. 什么是Deferred对象？
> 2. Deferred对象是从jQuery 1.5.0版本开始引入的一个新功能，只要为了解决某些JavaScript代码需要耗时很长的问题而开发的对象。简单来说Deferred对象是为了解决jquery回调函数的问题。
> 3. Deferred对象的含义就是"延迟"到未来某个点再执行。



#### Deferred对象的状态

> deferred对象有三种状态
>
> 1. 未完成，会调用progress()方法，该方法需要在1.7.0以上才会有
> 2. 已完成，会调用done()方法
> 3. 已失败，会调用fail()方法



#### Deferred对象功能

> 1. 实现链式调用
> 2. 为同一操作绑定多个回调函数
> 3. 为多个操作指定同一回调函数
> 4. 为普通操作提供回调函数接口

###### 1. $.ajax(obj)的链式写法

在`jquery1.5.0` 以前，调用 `$.ajax()` 方法返回的是 `XMLHttpRequest` 对象，这就无法进行链式操作。

如果在 `jquery1.5.0` 以后，调用 `$.ajax()` 方法返回的是 `deferred` 对象，这就可以进行链式操作了。

```javascript
// jquery1.5.0 及以前
var xhr = $.ajax({
    url: "test.html",
    success: function(){
        alert("哈哈，成功了！");
    },
    error:function(){
        alert("出错啦！");
    }
});

// jquery1.5.0之后
$.ajax("/echo/html/")
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出错啦！"); });
```



###### 2. 指定同一操作的多个回调函数

deferred对象的一大好处，就是它允许你自由添加多个回调函数，直接把它加在后面就行了。

```javascript
$.ajax("/echo/html/")
    .done(function(){ alert("哈哈，成功了！");} )
    .fail(function(){ alert("出错啦！"); } )
    .done(function(){ alert("第二个回调函数！");} );

// 弹出 哈哈，成功了！
// 弹出 第二个回调函数！
```



###### 3. 为多个操作指定同一回调函数

下面代码的意思是，先执行两个操作 `$.ajax("test1.html")` 和 `$.ajax("test2.html")` ，如果都成功了，就运行done()指定的回调函数；如果有一个失败或都失败了，就执行fail()指定的回调函数。

```javascript
$.when($.ajax("test1.html"), $.ajax("test2.html"))
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出错啦！"); });
```



###### 4. 为普通操作提供回调函数接口

```javascript
var wait = function(){
    var tasks = function(){
        alert("执行完毕！");
    };
    setTimeout(tasks,5000);
};

$.when(wait())
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出错啦！"); });

// 因为有耗时操作，tasks函数还没有执行完成，done里面的函数就已经执行了，出现的结果就是
// 哈哈，成功了！
// 执行完毕！
// 这样就违背了回调函数的本意
// 起不到回调函数的作用的原因在于$.when()的参数只能是deferred对象，所以我们需要提供一个deferred对象作为参数

// 改进
var dtd = $.Deferred(); // 新建一个deferred对象
var wait = function(dtd){
    var tasks = function(){
        alert("执行完毕！");
        dtd.resolve(); // 将dtd对象的执行状态从"未完成"改为"已完成"，从而触发done()方法
    };
    setTimeout(tasks,5000);
    return dtd;
};

$.when(wait(dtd))	// 现在，wait(dtd)函数返回的是deferred对象了
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出错啦！"); });
```



#### Deferred对象的方法

1. `$.Deferred()` 生成一个deferred对象

2. `deferred.done()` 指定操作成功时的回调函数

3. `deferred.fail()` 指定操作失败时的回调函数

4. `deferred.promise()` 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口

5. `deferred.resolve(arg)` 手动改变deferred对象的运行状态为"已完成"，从而立即触发done()方法

6. `deferred.reject(arg)` 这个方法与deferred.resolve()正好相反，调用后将deferred对象的运行状态变为"已失败"，从而立即触发fail()方法

7. `$.when()` 为多个操作指定回调函数

8. `deferred.then()` 有时为了省事，可以把done()和fail()合在一起写，这就是then()方法，如下代码

   ```javascript
   $.when($.ajax('/data.php')).then(succeedFunc, failedFunc);

   /* 注意：如果then()有两个参数，那么第一个参数是done()方法的回调函数，第二个参数是fail()方法的回调方法。如果then()只有一个参数，那么等同于done()  */
   ```

9. `deferred.always()` 这个方法也是用来指定回调函数的，它的作用是，不管调用的是deferred.resolve()还是deferred.reject()，最后总是执行

   ```javascript
   $.ajax().always(function exec () {
       console.log('exec函数无论如何都会被执行')；
   });
   ```
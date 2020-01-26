## jquery mobile



## 页面跳转过渡动画

页面跳转的过渡效果使用`data-transition="slide"`,过渡效果可以应用于任意链接

* slide: 默认值，从右到左滑动的动画效果
* slideup: 向上滑动的动画效果
* slidedown: 向下滑动的动画效果
* pop: 以弹出的效果打开页面
* fade: 淡入淡出的动画效果
* flip: 旧业飞出，新页飞入的动画效果
* none: 没有动画效果

```html
<p><a href="#index" data-transition="slide">second page</a></p>
```



## jqm页面事件

页面创建事件(只在第一次创建或切换时才会执行该事件，第二次及以后的页面切换都不会再触发该事件)

* pagebeforecreate : 页面创建之前(即将初始化之前)
* pagecreate : 页面创建时(dom还没有开始解析或即将开始解析时)
* pageinit : 页面初始化之后( 已经完成dom的加载)

```javascript
// 页面创建会触发的事件
$(document).on("pagebeforecreate", function () {
  	alert("pagebeforecreate");
});
$(document).on("pagecreate", function () {
  	alert("pagecreate");
});
$(document).on("pageinit", function () {
  	alert("pageinit");
});
```

外部页面加载和卸载事件

* pagebeforeload : 页面加载之前，即还没有插入到dom
* pageload : 页面已经插入到dom



页面过渡前后会触发的事件

* pagebeforeshow : 在页面切换之前触发该事件，定义在页面2
* pageshow : 在页面切换完全显示后触发该事件，定义在页面2
* pagebeforehide : 在页面切换到隐藏状态之前触发，定义在页面1
* pagehide : 在页面切换到隐藏状态后触发，定义在页面1



##### pageshow与pageinit的区别在于：

> pageshow每次页面显示时都会触发
>
> pageinit只会初始化一次





## 按钮

可以为一些标签设置样式，如a标签，input标签等

使用class属性为标签设置样式

* ui-corner-all : 圆角
* ui-shadow : 阴影
* ui-btn-inline : 并排显示，即一行显示
* ui-btn-a : 不同的样式
* ui-btn-b : 不同的样式





## 入口函数对比

```javascript
// 1.在jquery中的入口函数如下
$(document).ready(function(){
  	// 一些代码
});

// 2.在jqm中建议使用如下入口函数
$().on("pageinit", "#page", function(){
  	// 在页面已经初始化并完善样式设置后触发
  	// 一些代码
});
```


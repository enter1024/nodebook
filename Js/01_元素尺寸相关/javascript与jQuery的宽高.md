###  javascript与jQuery的宽高

#### 思考问题：

1. window和document的区别是什么？

   window对象代表浏览器中打开的窗口，在代码中window对象是可以省略不写的，如`window.alert()` 可以写成 `alert()`。

   document对象是window对象的一部分（浏览器的html文档成为document对象）。

   ​

2. window.location 和 document.location一样吗？

   ```javascript
   window.location === document.location  // true
   ```



#### 浏览器窗口尺寸

有三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

- window.innerHeight - 浏览器窗口的内部高度
- window.innerWidth - 浏览器窗口的内部宽度

对于 Internet Explorer 8、7、6、5：

- document.documentElement.clientHeight
- document.documentElement.clientWidth

或者

- document.body.clientHeight
- document.body.clientWidth

兼容写法

```javascript
var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
```



#### 屏幕尺寸

```javascript
window.screen.height; //屏幕高度
window.screen.width; // 屏幕宽度
window.screen.availHeight; // 可利用的高度
window.screen.availWidth; // 可利用的宽度
window.screen.screenTop // 浏览器距离屏幕顶部的距离
window.screen.screenLeft; // 浏览器距离屏幕左边的距离
```

![001](E:\08_web\web_note\09-个人总结\Js\01_元素尺寸相关\images\001.png)



![002](E:\08_web\web_note\09-个人总结\Js\01_元素尺寸相关\images\002.png)



![003](E:\08_web\web_note\09-个人总结\Js\01_元素尺寸相关\images\003.png)



![004](E:\08_web\web_note\09-个人总结\Js\01_元素尺寸相关\images\004.png)
### scrollLeft/scrollTop(JS)

> scrollLeft / scrollTop 方法存在兼容性问题

```javascript
// 滚动鼠标滚轮时，顶部滚出去的那一部分
var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
// 左边滚出去的那一部分
var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
```



### jQuery中的方法

- 宽度
  - $(selector).width() - 设置或返回元素的宽度
  - $(selector).innerWidth() - 返回元素的宽度（包含 padding）
  - $(selector).outerWidth() - 返回元素的宽度（包含 padding 和 border）


- 
  高度
  - $(selector).height() - 设置或返回元素的高度
  - $(selector).innerHeight() - 返回元素的高度（包含 padding）
  - $(selector).outerHeight() - 返回元素的高度（包含 padding 和 border）






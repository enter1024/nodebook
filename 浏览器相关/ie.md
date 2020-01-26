## 使用某个版本渲染页面

```html
<!-- 在ie中使用最新的渲染引擎渲染页面 -->
<meta http-equiv="x-ua-compatible" content="ie=edge">

<!-- 或指定以某一个版本的引擎渲染页面 -->
<meta http-equiv="x-ua-compatible" content="ie=IE8">
```



## 为指定浏览器版本添加内容

```html
<!-- 
gt 代表大于		>
lt 代表小于		<
gte 代表大于等于	>=
lte 代表小于等于	<=
-->

<!--[if gt IE 8]>
<p>当使用大于ie8的浏览器时会在页面中显示p标签</p>
<![endif]-->
```
























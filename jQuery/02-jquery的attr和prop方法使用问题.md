#### 什么是attribute、property

> https://segmentfault.com/a/1190000004560744

如果想明白attr()、prop()方法的使用，那么就要先明白什么是attribute和property。

当编写 HTML 源码时，你能在 HTML 元素里定义 attributes。然后，一旦浏览器解析你的代码，该 HTML 元素相应的 DOM 节点就会被创建。该节点是一个对象，因此它就拥有 properties。

所以，我们知道：attributes 是 HTML 元素（标签）的属性，而 properties 是 DOM 对象的属性。

例如，下面这个 HTML 元素：

```html
<!--  标签中定义的所有属性就是attributes  -->
<input id="test" type="text" value="AAA">
```

一但经过浏览器解析后，会创建为对应的dom对象，这个dom对象就拥有属性propertys，它就包含 id 和 type及 value

如果想访问input标签的value值，可以有很多种方法：

```javascript
var elem = document.getElementById("test");
elem.getAttribute("value");		// 返回AAA  这种方法只能获取到在写 HTML 源码时所定义value时对应的值
elem.defaultValue;		// 返回AAA   写 HTML 源码时所定义value时对应的值
elem.value;				// 如果value的值有改变，就获取最新对应的值
$(elem).attr('value');	// 返回AAA   写 HTML 源码时所定义value时对应的值
$(elem).prop('value');	// 如果value的值有改变，就获取最新对应的值
```





#### attr()与prop()方法的区别

attr(): 一般用于取默认值(初始值)或自定义的属性值 , 如 id

prop() : 用来取在dom树中实时变化的属性值，如 checked、disabled、selected等...



#### attr()与prop()方法对比

| 读取属性                              | 返回值             | 描述                                                         |
| ------------------------------------- | ------------------ | ------------------------------------------------------------ |
| elem.checked                          | true (Boolean)     | 会随着 checkbox 状态作出相应改变                             |
| $(elem).prop("checked")               | true (Boolean)     | 会随着 checkbox 状态作出相应改变                             |
| elem.getAttribute("checked")          | "checked" (String) | checkbox 的初始状态；并且不会随着 checkbox 的状态而改变。    |
| $(elem).attr("checked") (1.6)         | "checked" (String) | checkbox 的初始状态；并且不会随着 checkbox 的状态而改变。    |
| $(elem).attr("checked") (1.6.1+)      | "checked" (String) | ~~会随着 checkbox 状态而作出相应改变~~（与jQuery文档描述不一样，我用jQuery 1.12.1 测试，都是返回 “checked”，并不会随着checkbox的改变而改变）。 |
| $(elem).attr("checked") (1.6之前版本) | true (Boolean)     | true (Boolean) 会随着 checkbox 状态作出相应改变。            |




#### 案例

在如下的案例中使用了attr()方法操作checked属性，当checked的勾选状态发生改变时，页面没有做出相应的勾选，只有在第一次点击时有反应，以后的每一次都没有反应，这种情况就是attr()方法只获取html定义时的初始值，并没有对实时改变的checked属性进行映射的原因。

案例1：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>attr-prop</title>
</head>
<body>
<input id="test" type="checkbox" checked="checked">

<script src="../jquery-1.11.1.js"></script>
<script>
    $(function () {
        $('#test').on('click', function (event) {
            console.log('attr',$(this).attr('checked'));
            console.log('prop',$(this).prop('checked'));
        })
    })
</script>
</body>
</html>
```

![attr-prop](.\images\attr-prop.png)



案例2：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>选择内容</title>
    <style>
        #controller {
            padding-bottom: 50px;
        }
    </style>

</head>
<body>
    <div id="controller">
        <input type="button" value="全选">
        <input type="button" value="反选">
        <input type="button" value="取消">
    </div>
    <div id="content">
        <input type="checkbox">
        <input type="checkbox">
        <input type="checkbox">
        <input type="checkbox">
        <input type="checkbox">
        <input type="checkbox">
    </div>

    <script src="../jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $('#controller').get(0).addEventListener('click',function (event) {
                event = event || window.event;
                switch (event.target.value) {
                    case '全选':
                        $('#content').children('input').prop('checked','true');
                        break;
                    case '反选':
                        $('#content input').each(function (i, ele) {
                            var attrValue = $(ele).prop('checked')? false :true;
                            $(ele).prop('checked',attrValue);
                        });
                        break;
                    case '取消':
                        $('#content').children('input').prop('checked',false);
                        break;
                }
            });
        });
    </script>
</body>
</html>
```


#### form表单对象

`document`对象的`forms`属性返回一个数组，数组中的每个元素都是`form`对象。`form`对象又称为表单对象。

```html
<!-- 可以通过name属性找到对应的元素，并为其设置值 -->
<form action="#" name="form1">
	<input type="text" name="text1" placeholder="请输入..." onkeyup="message()"/>
</form>
		
<form action="" method="post" name="form2">
	<input type="text" name="text2"/>
</form>
```

```javascript
// 获取form1中input的值
var val = form1.text1.value;

// 设置form1中input的值
form1.text1.value = '123';
```



#### 输入类型标签有

与form表单结合使用的输入类型标签有

> 文本域 <input type="text"> 
>
> 单选按钮 <input type="radio">
>
> 复选框 <input type="checkbox">
>
> 下拉列表 <select><option>
>
> 密码域 <input type="password">
>
> 提交按钮 <input type="submit">
>
> 可单击按钮 <input type="button">
>
> 图像按钮 <input type="image">
>
> 隐藏域 <input type="hidden">
>
> 重置按钮 <input type="reset">
>
> 文件域 <input type="file">
>
> 文本框<textarea rows="10" cols="30"></textarea>



#### form表单不受同源策略限制

> 提交表单不受同源政策的限制。

随着互联网的发展，“同源政策”越来越严格。目前，如果非同源，共有三种行为受到限制。

> （1） Cookie、LocalStorage 和 IndexedDB 无法读取。
>
> （2） DOM 无法获得。
>
> （3） AJAX 请求不能发送。



#### 注意事项：

- 任何的表单标签都必须要有`name`属性，在提交后可以通过`name`属性取到对应的值
- 使用Ajax提交表单可以避免浏览器刷新
- 在Node.js中使用formidable框架可以取到提交的数据和上传的文件
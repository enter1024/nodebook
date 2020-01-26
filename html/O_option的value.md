#### option标签的value属性

value 属性规定，在表单被提交时，将value的值发送到服务器。

开始标签 <option> 与结束标签 </option> 之间的内容是浏览器显示在下拉列表中的内容，
而 value 属性中的值是表单提交时被发送到服务器的值。

```HTML
<form action="demo-form.php">
	<select name="cars">
	<option value="volvo">Volvo XC90</option>
	<option value="saab">Saab 95</option>
	<option value="mercedes">Mercedes SLK</option>
	<option value="audi">Audi TT</option>
	</select>
	<input type="submit" value="提交">
</form>
```

注意：如果<option>标签没有规定 value 属性，选项的值将设置为 <option> 标签中的内容。



#### 创建option标签的方式

```javascript
var op = new Option("文本","值");	// 文本是在浏览器中显示的内容，值是要发送到服务器中的内容

// 如下案例
// 读取china.json文件中的城市数据
$.getJSON("./dist/data/china.json",function (data) {
    // 读取china.json文件,完成后执行该回调函数
    // console.log(data);
    $.each(data,function (index) {
        // new Option("文本","值")
        $province.append(new Option(this.name,this.name));
        area.push(this);
        console.log(this);
    });

});

// 后面的代码会
```


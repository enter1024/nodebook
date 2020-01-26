### dom对象

Document Object Model 简称 dom (文档对象模型)

一个html文档由多种不同的节点构成，大致可分为`document`节点、 `element`节点 、 `text`节点等。



### dom节点分类

> Node对象是节点对象父类，即Document、Element、Text都是Node对象的子类。

1. document节点，是根节点，代表整个文档
2. element节点，元素节点
3. text节点，文本节点
4. comment节点，注释节点(很少操作)
5. 属性节点(元素可以有属性。属性属于属性节点)




### 节点属性

> Document对象、它的Element对象和文档中表示文本的Text对象都是Node对象。Node定义了如下属性：

1. parentNode ：父节点
2. childNodes ： 子节点的类数组对象NodeList
3. firstChild ： 第一个子节点
4. lastChild ： 最后一个子节点
5. previousSibling ：上一个节点
6. nextSibling ： 下一个节点
7. nodeType ： 节点的类型(1代表元素)
8. nodeValue ： 节点的值(一般文本节点才会用到，代表text节点的内容)
9. nodeName ： 节点的名称(元素的标签名，大写)




### 节点操作

> 需要掌握增、删、改、查中常用的方法



### 获取元素

```javascript
document.getElementById('id');			// 返回一个元素
document.getElementsByName(name);		// 返回带有指定name属性值的对象的集合
document.getElementsByTagName('li');		// 返回带有指定标签名的对象的集合
document.getElementsByClassName(classname);	// 返回指定类名的元素集合,ie5678不能用
```



### 增

```javascript
document.createElement(elementName);		// 创建元素节点
document.createTextNode(text);				// 创建文本节点
document.createAttribute(attributename);	// 创建属性节点
element.innerHTML = stringValue;	// 为元素添加内容
element.innerText	// 包含标签都可以显示出来
element.cloneNode(boolean);			// 克隆;返回当前对象的一个副本，true为深拷贝，默认只复制当前对象
父元素.insertBefore(newEle, oldEle);		// 将新元素插入到旧元素的前面

node.appendChild(node);		// 在节点的最后添加子节点
element.setAttribute(attributeName, attrValue);
```



### 删

```javascript
element.removeChild(子节点);				// 删除子节点，空格和换行也是节点
element.removeAttribute(attributeName);		// 删除属性
element.removeAttributeNode(nodeObj);		// var nodeObj = element.getAttribute(attrName);
```



### 改

```javascript
document.write('一些内容');	// 绝对不要在文档加载完成之后使用 document.write()。这会覆盖该文档。
document.getElementById("id").innerHTML = '一些内容';
element.setAttribute(attributeName, value);		// 添加或修改属性
element.className = 'class';	// 改变类名
element.removeAttribute(attributename);		//从元素中删除指定的属性
element.removeAttributeNode(attributenode);	//删除指定属性节点并返回移除后的节点。
element.removeChild(子节点);				// 删除子节点，空格和换行也是节点
```



### 查

```javascript
node.attributes;		// 返回元素的属性数组
node.childNodes;		// 返回一个节点的子节点数组
node.firstChild;		// 返回元素的第一个子节点


// 返回一个 DOMTokenList, 包含元素的类名列表，既然返回的是对象，该对象就有方法
element.classList;		// 可配add()方法，remove()方法来移除及切换CSS类
element.classList.add('detail');	// 添加一个或多个类名
element.classList.remove('detail');	// 移除一个或多个类名

element.className;	// 设置或返回元素的 class 属性
element.className = 'detail';	// 设置类名

element.getAttribute(attributename);	// 返回给定的属性的值(String)
element.getAttributeNode(attributename);	// 返回指定的属性的属性节点(Attr object)对象就有方法
element.getAttributeNode(attributename).value;
```



### 焦点

```javascript
// 1.获得焦点（focus是一个方法）
element.focus();

// 2.当前获得焦点的元素(activeElement是一个属性)
document.activeElement;	// 返回当前获得焦点的元素

// 3. 查看当前文档中有没有获得焦点的元素(hasFocus是一个属性)
document.hasFocus;		//布尔值
```



### 元素监听

```javascript
// 1.为元素添加监听
element.addEventListener(event, function, useCapture);

// 2.移除由addEventListener添加的监听
element.removeEventListener(event, function, useCapture);
```



### 改变 HTML 内容

```javascript
// document.getElementById(id).innerHTML=new HTML
document.getElementById("p1").innerHTML="New text!";
```



### 改变HTML属性

```javascript
// document.getElementById(id).attribute=new value
document.getElementById("image").src="landscape.jpg"; // 改变img元素的src属性
```



### 改变 HTML 样式

```javascript
// 如需改变 HTML 元素的样式，请使用这个语法： 
// document.getElementById(id).style.property=new style 
document.getElementById("p2").style.color="blue"; 
document.getElementById("p2").style.backgroundColor="red"; 
```



### Dom事件

```javascript
1.	onclick
2.	onload		// 在用户进入页面时触发
3.	onunload	// 离开页面时被触发
4.	onchange		// 输入框发生改变时(离开输入框后才会触发)
5.	onmouseover		// 鼠标移入元素时触发(冒泡)
6.	onmouseout		// 鼠标移出元素时触发(冒泡)
7.	onmouseenter	// 鼠标移入元素时触发
8.	onmouseleave	// 鼠标移出元素时触发
9.	onmousedown		// 按下
10.	onmouseup		// 松开
11.	onmousemove		// 移动
12.	onfocus			// 获得焦点
13.	onblus			// 失去焦点
14.	onscroll		// 滚动页面
15.	onresize		// 窗口大小改变
```



### 改变 HTML 样式

```javascript

```



### 改变 HTML 样式

```javascript

```


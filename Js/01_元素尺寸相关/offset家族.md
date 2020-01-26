### offset家族方法
- offsetWidth();		

  - //获取元素自身宽度		构成 ：width  + padding  +  border 



- offsetHeight();		

  - 获取元素自身高度			构成 ：height + padding  +  border 

- offsetLeft();

  - 获取元素距离左边带有定位的父级元素的距离（最近的带有定位的父级元素的距离）

- offsetTop();

  - 获取元素距离顶部带有定位的父级元素的距离（该元素的边框外到定位的父级元素的边框外）

- offsetParent();

  - 获取距离子盒子最近的带有定位的父盒子的对象，如果所有的父盒子都没有定位，得到的是body对象


- offsetParent()和parentNode()方法的区别

  - alert(son.offsetParent().tagName());
  - offsetParent()找到的父盒子必须是最近的定位的元素
  - parentNode() 找到的必须是子盒子的亲生父亲,不管父盒子是否有定位。




- 事件对象（event是onclick事件的对象）

```javascript
btn.onclick = function (event) {
	var event = event || window.event; /*兼容写法*/
}

//event事件中的一些常用的方法
//screenX   	screenY   	以电脑屏幕为基准点测量 
//pageX  		pageY  		以文档为基准点对齐      ie678 不认识   需要兼容（如上）
//clientX   	clientY		以 可视区域（即浏览器客户端） 为基准点   类似于    固定定位  
```





### 移动盒子时出现位置差距的原因：
```css
.box{
  width: 450px;
  height: 300px;
  border: 5px solid #ddd;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -230px;		/*margin不算定位的left的一部分，所有真实的位置需要减去margin的值	box.offsetWidth/2 */
  margin-top: -155px;			/*box.offsetHeight/2 */
}
```
```javascript
// 记录当前盒子的x 位置
var leftValue = event.clientX - box.offsetLeft - box.offsetWidth/2;		

// 记录当前盒子的y 位置
var topValue = event.clientY - box.offsetTop - box.offsetHeight/2;		
```
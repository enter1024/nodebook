### 一、什么是canvas

- html5中新增加的标签，标签只是图形的容器，需要使用脚本语言来绘制图形
- 可以将canvas理解为一张白纸
- canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成
- canvas绘制图案必须要获取2d上下文 `getContext("2d")` ，通过上下文对象来绘制内容( 上下文对象可以理解为笔)
- 不要通过<style></style>标签来设置canvas的宽高，请使用行内式或js代码来设置宽高

>  **<canvas id="canvas" width="200" height="200"></canvas>**



### 二、canvas的效率

- 绘制图片的效率比较高

  ```javascript
  // 绘制图片api
  context.drawImage(img,x,y);//在画布上定位图像
  context.drawImage(img,x,y,width,height);//在画布上定位图像，并规定图像的宽度和高度
  context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);//剪切图像，并在画布上定位被剪切的部分
  ```

  ​

- 绘制图形的效率比较低，因为js要去计算，比较耗时





### 三、注意问题

- 浏览器的兼容问题：如果浏览器不支持canvas标签，提示用户升级浏览器
- 要画图必须要调用 **`ctx.stroke()`** 方法
- 注意要重新开始绘制的状态 `beginPath()` 
- `fill()` 方法有自动闭合路径的功能





### 四、常用方法

```javascript
var canvas = document.getElementById("canvas");
var ctx = getContext("2d");

// 1.绘制
ctx.stroke();      // stroke [strəʊk] 划

// 2.线宽s
ctx.lineWidth = 2;

// 3.直线
ctx.moveTo(100,100);	// 移动到点
ctx.lineTo(200,100);

// 4.矩形
ctx.rect(150,150,100,100);	//ctx.rect(x, y, w, h);
ctx.stroke();	//必须要调用该方法才能画图

ctx.strokeRect(150,150,50,50); // 直接画矩形

ctx.fillRect(150,150,50,50);

// 5.填充
ctx.rect(150,150,50,50);
ctx.fill();		//黑色矩形

ctx.fillRect(150,150,50,50);	// 填充的矩形，默认黑色

ctx.rect(150,150,50,50);
ctx.fillStyle = "purple";
ctx.fill();		//紫色

ctx.font = "30px Microsoft YaHei";  //设置font-size 和 font-family
ctx.fillText("我是文字",150,150,100);

// 6.弧度
ctx.arc(x, y, r, startAngle, endAngle,);

```





### 高级使用技巧



### canvas访问图片

>  canvas不能跨域访问图片，这样会报安全隐患



### canvasAPI

```javascript
// 矩形
rect( x, y, width, height )   绘制矩形
fillRect( x, y, width, height )  绘制被填充的矩形
strokeRect( x, y, width, height )  绘制矩形（无填充）
clearRect( x, y, width, height ) 清除指定的矩形内的像素

// 路径
fill()  填充当前绘图（路径）
stroke() 绘制已定义的路径
beginPath()  起始（重置）当前路径
moveTo( x, y )  将笔触移动到指定的坐标(x,y)
lineTo( x, y )  绘制一条从当前位置到指定的坐标(x,y)的直线


clip()  从原始画布剪切任意形状和尺寸的区域
quadraticCurveTo()  创建二次贝塞尔曲线
bezierCurveTo()   创建三次贝塞尔曲线
arc( x, y, radius, startAngle, endAngle, anticlockwise)  绘制圆或圆弧
arcTo( x1, y1, x2, y2, radius)  根据给定点画圆弧，再以直线连接两个点
isPointInPath( x, y )  检测指定的点是否在当前路径中，在则返回true。


fillStyle  设置或返回用于填充绘画的颜色、渐变或模式

strokeStyle  设置或返回用于笔触的颜色、渐变或模式

shadowColor  设置或返回用于阴影的颜色

shadowBlur   设置或返回用于阴影的模糊级别

shadowOffsetX  设置或返回阴影与形状的水平距离

shadowOffsetY  设置或返回阴影与形状的垂直距离


lineCap  设置或返回线条的结束点样式（butt、round、square）

lineJoin  设置或返回当两条线交汇时，边角的类型（bevel、round、miter）

lineWidth  设置或返回当前的线条宽度

miterLimit  设置或返回最大斜接长度


createLinearGradient( x0, y0, x1, y1 )  创建线性渐变

createPattern( image/canvas/video, repeat )  在指定的方向内重复绘制指定的元素

createRadialGradient( x0, y0, r0, x1, y1, r1 ) 创建径向渐变

addColorStop( stop, color )  规定渐变对象中的颜色和停止位置


font  设置或返回文本内容的当前字体属性（和css的font一样）

textAlign  设置或返回文本内容的当前对齐方式

textBaseline  设置或返回在绘制文本时使用的当前文本基线

fillText( text, x, y )  在画布上绘制“被填充”的文本

strokeText( text, x, y )  在画布上绘制文本（无填充）

measureText( text )  返回包含指定文本宽度的对象（属性width获取宽度）


drawImage( image/canvas, x, y )、drawImage( image/canvas, x, y, width, height )、drawImage( image/canvas, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )  在画布上绘制图像、画布或视频


createImageData( width, height )、createImageData(imageData)  绘制ImageData对象

getImageData( x, y, width, height )  返回ImageData对象，该对象为画布上指定的矩形复制像素数据。

putImageData( ImageData, x, y )、putImageData( imageData, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )  把图像数据放回画布上。

width  返回ImageData对象的宽度

height  返回ImageData对象的高度

data  返回一个对象，包含指定的ImageData对象的图像数据


globalAlpha  设置或返回绘图的当前alpha或透明度

globalCompositeOperation  设置或返回新图像如何绘制到已有的图像上。


scale( x, y )  缩放当前绘图

translate( x, y )  重新设置画布上的(0,0)位置

rotate( angle )  选择当前绘图，单位为“弧度”，角度转弧度公式（ degrees*Math.PI/180）

transform( m11, m12, m21, m22, dx, dy )  替换绘图的当前转换矩阵

setTransform()  将当前转换重置为单元矩阵，然后运行transform()


save()  保存当前环境的状态

restore()  恢复之前保存过的路径状态和属性


getContext('2d')  获取2d对象

toDataURL()  将canvas转换成图片，返回地址
```


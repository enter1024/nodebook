## 1.A

```css
/*a标签的优先级比较高，无法继承父级的字体样式和大小，需要在a标签的
	css样式中单独指定*/
a{
    text-decoration: none;
    color: red;     /* 点击时的颜色 */
    font-size: 16px;
}

a:link{
    
}
a:hover{
    
}
a:active{
    
}
a:visited{
    
}
```






## 2.B

```css
button{
	cursor: pointer;		//小手
	outline-style: none;	//去除外面蓝边框
	border: 0;				//去除边框
}

/*
	背景缩写顺序(官方没有规定必须要这样)：
	background-color; 
	background-image; 
	background-repeat; 
	background-position;
	background-size;
*/
.background{
    /*background:#ff0000 url('smiley.gif');*/
  	background:#ff0000 url(./images/01.jpg) no-repeat left top;
  	background-size: cover;
}

/*
线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
径向渐变（Radial Gradients）- 由它们的中心定义
*/
.rad{
    /*background: linear-gradient(direction, color-stop1, color-stop2, ...);*/
    background: linear-gradient(left, red, green, blue);
    background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); /* 带透明度 */ 
    
    /*background: radial-gradient(center, shape size, start-color, ..., last-color);    */
    background: radial-gradient(red, green, blue); /* 均匀，标准的语法 */ 
    background: radial-gradient(red 5%, green 15%, blue 60%); /* 不均匀，标准的语法（必须放在最后） */
    
    /*
    size的取值范围有4个
    closest-side
    farthest-side
    closest-corner
    farthest-corner
    */
    background: radial-gradient(60% 55%, closest-side,blue,green,yellow,black); 
    background: radial-gradient(60% 55%, farthest-side,blue,green,yellow,black); 
}
```





## 3.C

```css
/* 
清除浮动。之所以在元素的前面(before)也插入内容是为了避免上一个元素有设置margin-bottom属性而清除浮动的元素有设置margin-top属性时发生叠加的效果 */
.clearfix:before,
.clearfix:after {
    content: "";
    display: block;
}

.clearfix:after{
    clear: both;
}


/* content */
/* 在css文件中添加空格不能使用&nbsp,但可以使用\00a0 */
/* 在a标签的前面添加文字 */
.notice a:first-child:before {
  	content:"最新公告：\00a0\00a0";
  	color: #aaa;
}
```



## 4.D

## 5.E

## 6.F

```css
.font{
    font-style: italic ;   /*(斜体italic，正常normal)*/
	font-weight: bold;  /*(单词或数字取值，bold==700)*/
	font-size: 30px;
	font-family: '宋体';
    
    /*字体简写必须要有size和family，style,weight可以调换位置，size,family不能调换位置*/
    font: 400 15px/15px '宋体'     15px/15px (字号/行高)
    /*
	font: style weight size family;
	font: weight size family;  
	font: size family;
    */
}
```



## 7.G

## 8.H

```css
/* 浏览器默认的font-size : 16px;  62.5% = 10px ,设置为一个整数好调节其他元素的大小*/
html{
  	font-size: 62.5%;
  	color: #222;
}
```




9.I
--------------------------------------------------------------

```css
/*去除默认样式*/
input{
	border: 0 none;				//去除边框
	outline-style: none;		//去除蓝色外边框
}

/* 为彩色图片设置为灰色 */
img{
    filter: grayscale(100%);
    -webkit-filter:grayscale(100%);	/* 谷歌需要加前缀 */
}
```

```javascript
// 方法：
input.select();			//选择表单里面的全部内容
input.focus();			//打开网页光标自动获取焦点(可马上输入内容，不用客户重新获取焦点)

input.oninput = function(){
	//当用户开始输入时
}

input.onfocus = function(){
	//当鼠标获取焦点时触发(即鼠标点击输入框输入内容时)
}

input.onblur = function(){
	//失去焦点事件(即鼠标点击输入框以外的地方时)
}
```





## 10.J

## 11.K


12.L
--------------------------------------------------------------

```css
/*
<label for="txt">用户名：</label>
for指向input的id名称,当鼠标点击的是label的内容时，光标定位到input上
*/
label{
    font-size: 14px;
    color: #cccccc;
    position: relative;
    top: 0;
    left: -175px;
    cursor: text;	//改变光标放到标签上的样式
}
```





## 13.M

## 14.N

## 15.O

```css
/*全屏显示时如果需要将滚动条隐藏，可以添加如下代码，这时就不能通过滚动来查看后面的内容了*/
html{
    overflow: hidden;
}

/*滚动条的位置一直存在，当内容过多时显示滚动条*/
html{
    /*解决因页面内容过多，出现滚动条颤抖的问题*/
    overflow-y: scroll;
}
```



## 16.P

```css
.position{
  	position : absolute;
  	top : 0;
  	left : 0;
    /*
    static;默认值，代表文档以标准流排列
    relative;元素将会以自身为原始点定位 占位置
    absolue;绝对定位，元素将会参照父元素中最近的那个除static定位的元素定位，不占位置
    fixed;固定定位，相对于浏览器窗口进行定位。
    inherit;规定应该从父元素继承 position 属性的值。
    */
}
```



## 17.Q

## 18.R

## 19.S

```css
/* 替换浏览器默认的选中文字时的背景颜色 */
::selection{
  	background-color: #b3d4fc;
  	text-shadow : none;
}
```



## 20.T

```css
/* 处理溢出文字 */
p {
  text-overflow: ellipsis;	/*文字溢出时出现省略号*/
  overflow: hidden;			/*溢出隐藏*/
  white-space: nowrap;		/*文字不换行*/
}

.text{
	color: red;  /*字体颜色*/
	line-height: 行高;
	text-shadow: 文字阴影;
	text-decoration: underline; /*文本装饰属性: underline,line-through,overline,none*/
	text-align: right;	/*文本对齐属性	*/	
	text-indent: 2em    /*文本缩进属性	*/
}
```



## 21.U

## 22.V

## 23.W

## 24.X

## 25.Y

## 26.Z







### 1.文字不换行，溢出时显示为省略号

```css
.ellipsis{
   word-break: keep-all;	/*只能在半角空格或连字符处换行*/
   white-space:nowrap;      /* 不换行 */
   overflow:hidden;         /* 内容超出宽度时隐藏超出部分的内容 */
   text-overflow:ellipsis;  /*溢出显示省略号*/ /* overflow:hidden;一起使用。*/
}
```





### 3.弹性布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>111</title>
    <style>
        html,body{
            height: 100%;
        }
        .wrapper{
            width: 100%;
            height: 100%;
            display: flex;  /*css3中的弹性盒子或弹性布局*/
        }
        .left{
            width: 200px;
            height: 100%;
            background-color: pink;
        }
        .center{
            width: 100%;
            height: 100%;
            background-color: purple;
        }
        .right{
            width: 200px;
            height: 100%;
            background-color: red;
        }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
</body>
</html>
```



### 4.hover时以进度条的形式改变字体颜色

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            font-size: 15px;
            font-family: "microsoft yahei";
        }

        .box {
            height: 60px;
            background-color: #333;
        }

        ul {
            list-style: none;
        }

        .box ul li {
            float: left;
            margin: 0 20px;
            padding: 20px 0;
        }

        .box ul li a {
            text-decoration: none;
            text-shadow: none;
            color: #fff;
            font-family: "microsoft yahei";
            font-size: 1em;
            position: relative;
            padding: 20px 0;
            word-break: keep-all;   /* 保持完整的词汇，只能在空格或连字符处换行 */
        }

        .box ul li a::after {
            position: absolute;
            top: 0;
            left: 0;
            padding: 20px 0 10px 0;
            max-width: 0;
            color: #00a78e;
            overflow: hidden;
            content: attr(data-hove);
            border-bottom: 3px solid #00a78e;
            text-transform:uppercase;
            transition: max-width 0.5s;
        }

        .box ul li a:hover::after {
            max-width: 100%;
        }

        .clearfix::after {
            content: "";
            display: block;
            clear: both;
        }
    </style>
</head>
<body>
<div class="box">
    <ul class="clearfix">
        <li><a href="#" data-hove="HOME">HOME</a></li>
        <li><a href="#" data-hove="DIRECTIVE">DIRECTIVE</a></li>
        <li><a href="#" data-hove="INTERFACE">INTERFACE</a></li>
        <li><a href="#" data-hove="深圳日报">深圳日报</a></li>
    </ul>
</div>
</body>
</html>
```



### 5.使背景图始终位于屏幕的中心

```css
.section{
    background: #000000 no-repeat 50% 50%;
    background-size: cover;
    color: #ffffff;
    text-align: center;
}
```



### 6.全屏样式规则

> 如果需要某个元素全屏显示，就必须要满足两个条件：
>
> 1. html 、body 元素的高度要设置为 `height: 100%`
> 2. 目标元素及父元素的高度要设置为 `height: 100%`



### 7.居中

```css
/* 1. 居中显示未知宽高的子盒子(子盒子是行内块元素) */
.parentBox {
    width: 600px;
    height: 300px;
    border: 1px solid red;
    
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.childBox {
    display: inline-block;
    background-color: gray;
}


/* 2. 居中显示未知宽高的子盒子(子盒子是块元素) */
.parentBox {
    width: 600px;
    height: 300px;
    border: 1px solid red;
    margin: 20px auto;

    position: relative;
}
.childBox {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: gray;
}

/* 3.居中显示文字 */
.parent{
	vertical-align: middle;
	text-align: center;
}

.son{
    /*自身内容居中*/
	line-height: 100%;
	text-align: center;
}
```



### 8.图片阴影

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>背部影影</title>
	<style>
		.box{
			margin-top: 30px;
			margin-left: 30px;
			width: 600px;
			height: 400px;
			padding: 15px;
			box-shadow: 1px 2px 4px rgba( 0, 0, 0, .5);
			position: relative;
			background-color: white;
		}

		.box img{
			width: 100%;
			border: 1px solid #8a4419;
			border-style: inset;
		}

		.box::after{
			content: '';
			z-index: -1;
			box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
			position: absolute;
			left: 15%;
			bottom: 0;
			width: 70%;
			height: 100px;
		}
	</style>
</head>
<body>
    
	<div class="box">
		<img src="rock600x400.jpg" alt="岩石">
	</div>
	
</body>
</html>
```

### 9.滚动条

```html
<!-- 如果需要实现盒子里面的内容超出盒子的高度时出现滚动条就必须要满足两个条件
	1.盒子需要指定高度
	2.overflow-y: auto; 出现滚动条的方向自己指定
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .test {
            height: 100px;
            overflow: auto;
            border: 1px solid #afafaf;
        }
    </style>
</head>
<body>
    <div class="test">
        <ul>
            <li>11111</li>
            <li>22222</li>
            <li>33333</li>
            <li>44444</li>
            <li>55555</li>
            <li>11111</li>
            <li>22222</li>
            <li>33333</li>
            <li>44444</li>
            <li>55555</li>
        </ul>
    </div>
</body>
</html>
```



javascript第一天
==============================

1.alert("这是一个警告框");

	<script type="text/javascript">
		alert("这是一个警告框");
	</script>


2.console.log("所有的内容都将输入到控制台");
	console.warn("所有的内容都将输入到控制台");控制台警告，文字的前面有个！号
	console.error("所有的内容都将输入到控制台");控制台错误，文字红色

	<script type="text/javascript">
		console.log("今天是一个好天气！");
	</script>


3.prompt("一个提示用户输入内容的提示框。用户输入的内容将赋值给指定的变量");
	 *该方法必须要用一个变量来接收用户输入的值
	 *用户输入的数据类型都是字符串类型

	<script type="text/javascript">
		var content = prompt("请输入需要查询的内容！");
		console.log(content);
	</script>


4.乘方Math.pow();

	<script type="text/javascript">
		var result = Math.pow(2,4);
		console.log(result);
	</script>


5.开根号Math.sqrt();	或Math.sqrt(5,Math.aqrt(3,2));

	<script type="text/javascript">
		var result = Math.sqrt(81);
		console.log(result);
	</script>


6.判断变量的类型 typeof 变量名称

	<script type="text/javascript">
		var type = "这是一个什么类型的变量？？";
		console.log(typeof type);
	</script>


7.解析数据类型parseInt()、parseFloat()、...
	parseInt()		将字符串转为整数
	parseFloat()	将字符串转为浮点数（小数）

	<script type="text/javascript">
		var c = parseFloat(prompt("请输入摄氏温度啊"));
		console.log(typeof type);
	</script>
	
8.document.write();			
掌握三种类型的转换
====================================
1.	转换成字符串类型String
	转换为字符串有三种办法：
	toString()
	String()
	""
	1.几乎每一个值都有toString()方法
		var age = 18;
		var ageString = age.toString();
		console.log(ageString);  // 结果 "18"
		var result = true;
		var resultString = result.toString();
		console.log(resultString);// 结果 "true"

	2.数值类型的toString()，可以携带一个参数(参数就是进制数)，输出对应进制的值
		var num = 10;
		console.log(num.toString());  //"10" 默认是10进制
		console.log(num.toString(10));//"10"
		console.log(num.toString(8)); //"12"
		console.log(num.toString(16));//"a"
		console.log(num.toString(2)); //"1010"



2.	转换成数值类型Number

3.	转换成布尔类型Boolean



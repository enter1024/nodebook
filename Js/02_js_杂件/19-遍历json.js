/*	遍历json
======================================================*/

var json = {width: 300, height: 600, opacity: 0.4, left: 5}
for (var k in json){
	console.log(k);			//得到的是属性
	console.log(json[k]);	//得到的是属性的值
}


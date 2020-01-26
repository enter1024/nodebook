### 构造时间对象

> 构造时间对象的方式大概有4种

```javascript
new Date() // 当前日期和时间
new Date(milliseconds) //返回从 1970 年 1 月 1 日至今的毫秒数
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

var today = new Date();								//2017-12-26T14:22:17.165Z
var d1 = new Date("October 13, 1975 11:13:00");		//1975-10-13T03:13:00.000Z
var d2 = new Date(79,5,24);							//1979-06-23T16:00:00.000Z
var d3 = new Date(79,5,24,11,33,0);					//1979-06-24T03:33:00.000Z
```



```
var date = new Date()
//=======================
//year[jɪə]						年
//month[mʌnθ]					月 
//day [deɪ]						日
//hour['aʊə]						时
//minute['mɪnɪt]				分 
//second ['sek(ə)nd]		秒 
//January['dʒænjʊ(ə)rɪ]			一月
//February['febrʊərɪ]			二月
//March
//April['eɪprəl]				四月
```

### 常用方法

```javascript
var date = new Date();				//得到本地设备的最新时间
date.getTime();						//获取1970-1-1到现在的毫秒数
date.valueOf();						//获取1970-1-1到现在的毫秒数
Date.now();							//这种方式更快，优先考虑

//例如：	2017-04-09 四月 星期日 11:51:16
//Sun Apr 09 2017 11:51:16 GMT+0800 (中国标准时间)
date.getFullYear();				//年						2017
date.getMonth();				//月		0-11		3
date.getDate();					//日		1-31		9
date.getHours();				//时		0-23		11
date.getMinutes();				//分		0-59		51
date.getSeconds();				//秒		0-59		16
date.getMilliseconds();			//毫秒	0-999		808
date.getDay();					//星期	0-6			0		即星期日
date.getTime();					//毫秒  1491709876808   即1970-1-1号到现在的毫秒数

date.toLocaleDateString()	// 将本地日期转换为字符串   如： 2018/3/15
date.toLocaleTimeString()	// 将本地时间转换为字符串   如： 下午7:15:22
date.toLocaleString()		// 将本地date对象转换为字符串   如：2018/3/15 下午7:17:02

//获取当前月的第一天
new Date(year, month-1, 1)
//获取当前月的最后一天
new Date(year, month, 0); //日期越界时会自动进位（或退位）
```



### 案例：

``` javascript
// 案例1
document.getElementById("btn").onclick = function () {
    var date = DateDemo();
    alert(date);
}

function DateDemo(){
    var d, s = "今天的日期是: ";                  // 声明变量。
    d = new Date();                             // 创建 Date 对象。
    s += d.getFullYear() + "/";                 // 获取年份。
    s += (d.getMonth() + 1) + "/";              // 获取月份。
    s += d.getDate();                           // 获取日。
    return(s);                                  // 返回日期。
}


// 案例2
var timeDom = document.querySelector('.time');
setInterval(function () {
    var date = new Date();
    timeDom.innerHTML = '现在的时间为：'+date.toLocaleTimeString();
},1000);
```




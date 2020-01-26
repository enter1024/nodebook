## WebSocket的作用

- websocket是在html5中引入的，可以和服务器建立持久链接的通信协议


- 允许客户端代码在客户端和支持websocket协议的服务器端建立双向套接字形式的链接

- 客户端和服务器端的通信是通过TCP套接字长链接实现的

- （1）建立在 TCP 协议之上，服务器端的实现比较容易。

  （2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

  （3）数据格式比较轻量，性能开销小，通信高效。

  （4）可以发送文本，也可以发送二进制数据。

  （5）没有同源限制，客户端可以与任意服务器通信，完全可以取代 Ajax。

  （6）协议标识符是`ws`（如果加密，则为`wss`，对应 HTTPS 协议），服务器网址就是 URL。



## WebSocket的本质

> WebSocket 协议本质上是一个基于 TCP 的协议。
>
> 为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。



## 如何学习websocket 

- 熟悉HTML5中的websocket API
- 熟悉第三方websocket库 `nodejs-websocket` 是如何创建websocket server的
- 熟悉 `socket.io` 框架对websocket功能的封装(可以直接通过对象发送数据)





## 使用node.js提供的nodejs-websocket库实现服务器功能

> 1. 进入项目根目录，运行cmd安装服务模块： `npm install nodejs-websocket`  
> 2. 在项目代码完成后启动ws协议的服务端口查看结果： `node xxx.js` xxx.js为自己创建的js文件，里面引入了`nodejs-websocket`模块



## 使用WebSocket创建连接的步骤

```javascript
// 1.创建套接字，协议是ws://
var socket = new WebSocket("ws://localhost:8001/");
// 2.建立监听,包含4个方面的监听
socket.onopen = function(e){
  	/*套接字已经连接，可以在该监听中向服务器发送消息*/
  	socket.send("Hello server!");
}
socket.onclose = function(e){
  	/*套接字已经关闭*/
}
socket.onerror = function(e){
  	/*出现错误*/
}
socket.onmessage = function(e){
  	var message = e.data; 	//接收到服务器发来的一条消息
  	// socket.close();		//关闭该套接字，可以不关
}
```



## WebSocket 属性

> 1.socket.readyState
>
> - CONNECTING：值为0，表示正在连接,还没有连接成功。
> - OPEN：值为1，表示连接成功，可以通信了。
> - CLOSING：值为2，表示连接正在关闭。
> - CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

```javascript
switch (socket.readyState) {
  case WebSocket.CONNECTING:
    // do something
    break;
  case WebSocket.OPEN:
    // do something
    break;
  case WebSocket.CLOSING:
    // do something
    break;
  case WebSocket.CLOSED:
    // do something
    break;
  default:
    // this never happens
    break;
}
```

> 2.socket.bufferedAmount
>
> 只读属性 **bufferedAmount** 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数
>



## Demo1,使用存在的服务器(非本地)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>websocket</title>
</head>
<body>
<input id="text" type="text">
<button id="send">send</button>
<div id="result"></div>
<script>
    var websocket = new WebSocket("ws://echo.websocket.org/");
  
    websocket.onopen = function () {
        console.log("websocket open");
        document.getElementById("result").innerHTML = "Connection server success";
      	// 对发送按钮进行监听
      	document.getElementById("send").onclick = function () {
            var text = document.getElementById("text").value;
            // 发送内容到服务器
            websocket.send(text);
    	}
    }
    
    websocket.onclose = function () {
        console.log("websocket close");
    }
    
    websocket.onmessage = function (e) {
        console.log(e.data);
        document.getElementById("result").innerHTML = e.data;
    }
</script>
</body>
</html>
```


## Dmeo2，构建本地服务器

> 需要使用`nodejs-websocket` 包构建本地服务器

1.index.html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>demo1</title>
</head>
<body>
<h3>webSocket connection demo</h3>
<input id="text" type="text">
<button id="send">send</button>
<script>
    // 创建套接字
    var ws = new WebSocket("ws://localhost:8001/");
  
    // 与服务器端连接成功后的回调函数
    ws.onopen = function () {
        document.getElementById("send").onclick = function () {
            var input = document.querySelector("#text");
            ws.send(input.value);
            input.value = "";
        }
    }

    // 连接关闭后的回调函数
    ws.onclose = function () {
        console.log("websocket closed");
    }

    // 收到服务器数据后的回调函数
    ws.onmessage = function (e) {
        addMessage(e.data);
    }

    /**
     * 在页面中显示消息
     * @param str
     */
    function addMessage(str){
        var div = document.createElement("div");
        div.innerHTML = str;
        document.body.appendChild(div);
    }

</script>
</body>
</html>
```

2.服务器文件server.js

```javascript
// 引入服务模块
var ws = require("nodejs-websocket")

// 定义一个变量来记录连接的数量
var clientCount = 0;

var server = ws.createServer(function (conn) {
    // 每次有新的连接进入服务端时clientCount都加1
    clientCount++;
    // 通知所有人，有人进来了
    sendMessageToClient("user" + clientCount+" come in!");
    console.log("New connection")

    conn.on("text", function (str) {
        console.log("Received "+str)
        // 给每个连接都发送信息
        sendMessageToClient(str);
    })
    conn.on("error", function (err) {
        console.log("Error "+err)
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001)

/**
 * 给所有连接到服务器上的客户端都发送消息
 * @param str
 */
function sendMessageToClient(str){
    server.connections.forEach(function (connection) {
        connection.sendText(str);
    })
}

console.log("websocket server connection on port 8001")
```



## 详细教程

<https://www.w3cschool.cn/javascript_guide/javascript_guide-4u6q26aj.html#toc0>

## WebSocket的使用

websocket是在html5中引入的



## 安装ws模块

全局安装ws模块： `npm install -g ws` 

启动ws协议的服务端口： `node wsServer.js`





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
        document.getElementById("result").innerHTML = "Connection";
    }
    websocket.onclose = function () {
        console.log("websocket close");
        document.getElementById("result").innerHTML = "Close";
    }
    websocket.onmessage = function (e) {
        console.log(e.data);
        document.getElementById("result").innerHTML = e.data;
    }

    document.getElementById("send").onclick = function () {
        var text = document.getElementById("text").value;
        websocket.send(text);
    }

</script>
</body>
</html>
```
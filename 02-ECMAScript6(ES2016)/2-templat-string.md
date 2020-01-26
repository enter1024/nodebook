# 模板字符串templat-string



## 一、常用模板工具库

- mustache[mə'stɑːʃ]  胡子
- 淘宝模板工具库



## 二、模板字符串的写法

- 传统方式使用+号拼接字符串

  ```javascript
   // 传统字符串拼接
  var name = "mars";
  console.log("我的名字叫:" + name);
  ```

  ​


- es6中拼接字符串使用反引号``，将需要拼接的内容写在反引号里面；如果需要使用变量，即${变量名}

  ```javascript
  // es6中引用变量${variableName}
  var age = 18;
  console.log(`我今年${age}岁了`);
  ```



## 三、案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<label for="text1">用户名：</label><input type="text" id="text1">
<label for="text2">评论内容：</label><input type="text" id="text2">
<input type="button" value="提交评论" id="btn">
<ul id="content-box"></ul>
</body>
</html>
<script>
    var text1 = document.querySelector("#text1");
    var text2 = document.querySelector("#text2");
    var btn = document.querySelector("#btn");
    var contentBox = document.querySelector("#content-box");
    btn.onclick = function () {
        var liobj = document.createElement("li");
        /*
        // 传统字符串拼接很容易出错，且不易维护
        liobj.innerHTML = '<a href="javascript:">'+text1.value+'</a>' +
               '<p>'+text2.value+'</p>';
        */
        liobj.innerHTML = `
            <a href="javascript:">${text1.value}</a>
            <p>${text2.value}</p>
        `;
        contentBox.appendChild(liobj);
    }
</script>

```
清除选中的内容
==========================================


说明：在拖拽进度条时，鼠标左键松开时，移动鼠标还出现进度条在动的情况，添加如下代码即可：
1.window.getSelection()	//被选中时
2.window.getSelection().removeAllRanges()	//移除全部范围		ranges[reindʒ]范围
3.document.selection.empty() //文档选中的内容为空，支持ie678


window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();





案例：
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>进度条</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        #progressBar{
            width: 600px;
            height: 10px;
            margin: 100px auto;
            background-color: #ddd;
            position: relative;
        }
        #bar{
            width: 10px;
            height: 30px;
            position: absolute;
            top: -10px;
            left: 0;
            background-color: #369;
            cursor: pointer;
        }
        #replace_color{
            width: 0;
            height: 100%;
            background-color: #369;
        }
    </style>
    <script>
        window.onload = function () {
            var progressBar = document.getElementById("progressBar");
            var bar = document.getElementById("bar");
            var replace_color = document.getElementById("replace_color");
            var xMin = 0;
            var xMax = progressBar.offsetWidth;

            bar.onmousedown = function (event) {
                var flag = true;
                var event = event || window.event;
                var startleft = event.clientX - this.offsetLeft;

                document.onmousemove = function (event) {
                    if (flag) {
                        var event = event || window.event;
                        var x = event.clientX - startleft;
                        if(x>xMax){
                            x = xMax;
                        }
                        if(x<xMin){
                            x = xMin;
                        }
                        bar.style.left = x + "px";
                        replace_color.style.width = x + "px";
						//添加如下代码清除选中的内容，如果删除将出现bug
                        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
                    }
                }

                document.onmouseup = function () {
                    flag = false;
                }
            }

        }
    </script>
</head>
<body>
    <div id="progressBar">
        <div id="bar"></div>
        <div id="replace_color"></div>
    </div>
</body>
</html>






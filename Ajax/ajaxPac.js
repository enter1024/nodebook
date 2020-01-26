function ajaxPac(url, fnSucceed, fnFail) {
    //  1.初始化对象
    var xhr = null;
    if (window.XMLHttpRequest) {    //XMLHttpRequest对象存在
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");   // ie5、ie6
    }

    //  2.链接服务器
    xhr.open("GET", url, true);

    //  3.发送请求
    xhr.send();

    //  4.获取响应数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {  //完成
            if (xhr.status == 200) {    //成功
                fnSucceed(xhr.responseText);
            }else {
                if (fnFail){
                    fnFail(xhr.status);
                }
            }
        }
    }

}
/**
 * 使用jsonp跨域发送http请求的组件
 * Created by li on 2017/6/26.
 *
 * 实现思路：
 * 1.将回调函数挂载到全局
 * 2.将data对象转换为url所需的请求字符串
 * 3.处理请求字符串
 * 4.创建script对象，并设置src
 * 5.将script对象添加到html文档中
 */

(function (window, document, undefined) {
    var jsonp = function (url, data, callback) {
        var funName = 'func_' + Math.random().toString().replace('.', '');
        window[funName] = callback;
        var requestStr = url.indexOf('?') == -1 ? '?' : '';
        for (var key in data) {
            requestStr += key + '=' + data[key] + '&';
        }
        requestStr += 'callback' + '=' + funName;
        var scriptElement = document.createElement('script');
        scriptElement.src = url + requestStr;
        document.body.appendChild(scriptElement);
    }
    window.$jsonp = jsonp;  //全局可调用
})(window, document, undefined);
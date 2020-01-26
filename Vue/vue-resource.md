#### vue-resource

> vue-resource是一个通过XMLHttpRequest对象或jsonp技术获取服务器端数据的vue插件



#### 安装vue-resource

```javascript
// 方式1
<script src='https://cdn.jsdelivr.net/vue.resource/1.3.1/vue-resource.min.js'></script>

// 方式2
npm install vue-resource --save  // --save代表生产也需要这个依赖
```



#### 使用vue-resource插件

> 当`vue-resource` 插件被引入后，自动会挂载在 `vue` 的实例对象中，在实例对象中直接使用 `this.$http`就代表`vue-resource` 插件



#### 全局调用



#### vue实例调用



#### 简单方式调用

> 方法参数说明：
>
> url（字符串），请求地址。可被options对象中url属性覆盖。
>
> body（可选，字符串或对象），要发送的数据，可被options对象中的body属性覆盖。
>
> options 一个键值对对象

- `get(url, [options]);`
- `head(url, [options]);`
- `delete(url, [options]);`
- `jsonp(url, [options]);`
- `post(url, [body], [options]);`
- `put(url, [body], [options]);`
- `patch(url, [body], [options]);`





#### 全局拦截器

>  interceptors  [ɪntə'septəs] 拦截器
>
>  应用方式：假如在一个页面中有多个请求，为每一个请求都设置loading的效果，就可以使用拦截器

```javascript
Vue.http.interceptors.push((request, next) => {
    // 请求发送前的逻辑代码
    // next方法是流向下一步
    next((response) => {
        // 请求发送后的逻辑代码
        // ...
        // 根据请求的状态，response参数会返回给successCallback 或 errorCallback
        return response;
    });
});




new Vue({
    // mounted是vue初始化时生命周期里面的一个函数
    mounted: function(){
        
    }
})
```


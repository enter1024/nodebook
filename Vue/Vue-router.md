#### 什么是前端路由？

> 路由是根据不同的url地址展示不同的内容或页面
>
> 前端路由大致可分为4类
>
> 1. 动态路由匹配
> 2. 嵌套路由
> 3. 编程式路由
> 4. 命名路由和命名视图

1. 动态路由匹配

   如： `/goods/:goodsId`   动态路由，必须要输入goods开始，后面加一个动态的数字或字符串

   ```javascript
   // router/index.js文件
   export default new Router({
     mode: 'history', /* 指定路由模式， history模式在url中是没有#号的，只有hash模式才有 */
     routes: [
       {
         path: '/goods/:goodsId',   /* 动态路由模式 */
         name: 'Goods',
         component: Goods
       }
     ]
   })

   // 访问时可以输入  localhost:8080/goods/156
   ```

   ```vue
   <!-- GoodsList.vue文件 -->
   <template>
     <div>
       <p>{{ lists }}</p>
       <p>{{ lists }}</p>
       <p>{{ lists }}</p>
       <p>id = {{ $route.params.goodsId }}</p>  <!--可以拿到动态的id-->
     </div>
   </template>
   <script>
   export default {
     data () {
       return {
         lists: '我是商品列表'
       }
     }
   }
   </script>
   <style></style>
   ```

   ​

2. 嵌套路由

   > 嵌套路由就是在一个页面中有多个路由链接，可以切换到不同的页面或内容而无需刷新(路由嵌路由).
   >
   > 下面的案例中在商品列表中嵌套了两个子路由
   >
   > 1. 通过 `http://localhost:8080/goods/image`访问图片
   > 2. 通过 `http://localhost:8080/goods/title`访问标题

   ```vue
   <!-- GoodsList.vue -->
   <template>
     <div>
       <p>{{ lists }}</p>
       <!-- to到达的地址一定要写绝对地址,包括上一级goods地址 -->
       <router-link to="/goods/image">图片</router-link>
       <router-link to="/goods/title">标题</router-link>
       <div>
         <router-view></router-view>
       </div>
     </div>
   </template>
   <script>
   export default {
     data () {
       return {
         lists: '商品列表'
       }
     }
   }
   </script>
   <style></style>
   ```
   ```vue
   <!-- Image.vue -->
   <template>
     <div>
       <p>{{ img }}</p>
     </div>
   </template>
   <script>
   export default {
     data () {
       return {
         img: '我是商品图片'
       }
     }
   }
   </script>
   <style></style>
   ```
   ```vue
   <!-- Title.vue -->
   <template>
     <div>
       <p>{{ title }}</p>
     </div>
   </template>
   <script>
   export default {
     data () {
       return {
         title: '我是标题标题'
       }
     }
   }
   </script>
   <style></style>
   ```
   ```javascript
   <!-- /router/index.js文件 -->
   import Vue from 'vue'
   import Router from 'vue-router'
   import Goods from '@/views/GoodsList'
   import Img from '@/views/Image'
   import Tit from '@/views/Title'

   // 如果在一个模块化工程中使用vue-router，必须要通过 Vue.use() 明确地安装路由功能
   Vue.use(Router)

   export default new Router({
     mode: 'hash',  /*有#号， 默认就是这种方式*/
     routes: [
       {
         path: '/goods',
         name: 'Goods',
         component: Goods,
         
         /**
         *  1.使用children属性指定子路由
         *  2.在children里面的path中不能出现绝对路径符合/
         *  3.{ path: '/title', component: Tit }中 path 的值多了斜杠，是错误的写法
         */
         children: [
           { path: 'image', name: Img, component: Img },
           { path: 'title', component: Tit }
         ]
       }
     ]
   })
   ```

   ​

3. 编程式路由

   > 通过js来实现页面的跳转，目前有3种方法可以实现跳转

   ```
   $router.push.('name');
   $router.push.({path:'name'});
   $router.push.({path:'name?id=123'})或$router.push.({path:'name', query:{a:123}});
   ```

   ​

4. 命名路由和命名视图

   > 给路由定义不同的名字，根据名字进行匹配
   >
   > 给不同的router-view定义名字，通过名字进行对应组件的渲染

   ```vue
    <!-- App.vue -->
   <template>
     <div id="app">
       <img src="./assets/logo.png">
       <!-- 这个 router-view 是装载一级路由的 -->
       <!-- 该方式很少使用，相当于将该组件划分为三部分，其实可以在GoodsList中通过样式划分区域 -->
       <router-view></router-view>
       <router-view name="tit"></router-view>
       <router-view name="img"></router-view>
     </div>
   </template>

   <script>
   export default {
     name: 'App'
   }
   </script>

   <style>
   #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
   </style>
   ```

   ```javascript
   <!-- /router/index.js文件 -->
   import Vue from 'vue'
   import Router from 'vue-router'
   import Goods from '@/views/GoodsList'
   import Img from '@/views/Image'
   import Tit from '@/views/Title'

   // 如果在一个模块化工程中使用vue-router，必须要通过 Vue.use() 明确地安装路由功能
   Vue.use(Router)

   export default new Router({
     mode: 'hash',  /*有#号， 默认就是这种方式*/
     routes: [
       {
         path: '/',
         name: 'GoodsList',
         components: {
           default: GoodsList,
           tit: Tit,
           img: Img
         }
       }
     ]
   })
   ```




#### 什么是后台路由？

浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面,意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。



#### 路由的模式

> 路由的模式有两种
>
> - mode: 'history'     
> - mode: 'hash'      会有一个#号出现在url中

```javascript
// router/index.js文件中指定路由模式

import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'     /*@指的是src根目录*/

// 如果在一个模块化工程中使用vue-router，必须要通过 Vue.use() 明确地安装路由功能
Vue.use(Router)

export default new Router({
  mode: 'hash',    /* 指定路由模式 */
  routes: [
    {
      path: '/',
      name: 'lists',
      component: List
    }
  ]
})
```



#### history

> js中有一个全局的对象`history` 记录着用户的操作历史，`history.length` 记录着已经操作了多少步
>
> 其实`vue-router`就是对history的一个封装

1. 当前页面刷新 `history.go(0)`
2. 前进一页 `history.go(1)` 
3. 后退一页 `history.go(-1)`
4. 当前页面刷新 `history.back(0)`
5. 后台一页 `history.back(1)`
6. 改变页面 `history.pushState(描述，标题，地址)`




#### 注意点1：在template中的错误

> 在任何的 `.vue` 文件，template模板中只能有一个根元素，如果出现两个或两个以上的根元素都会出现语法错误

- 错误的写法

  ```vue
  <template>
    <!-- 出现两个根元素会有语法错误 -->
    <p>使用双大括号渲染内容：{{message}} </p>
    <p>使用v-html指令渲染内容：<span v-html="message"></span></p>
  </template>
  <script>
    export default {
      data () {
        return {
          message: '<span style="color: green">我是span里面的内容</span>'
        }
      }
    }
  </script>
  <style>
  </style>
  ```

  ​

- 正确的写法

  ```vue
  <template>
    <div id='test'>
      <p>使用双大括号渲染内容：{{message}} </p>
      <p>使用v-html指令渲染内容：<span v-html="message"></span></p>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          message: '<span style="color: green">我是span里面的内容</span>'
        }
      }
    }
  </script>
  <style>
  </style>
  ```

  ​


#### 注意点2：引入组件/注册组件/使用组件

```vue
<!-- App.vue是应用程序页面入口 -->
<template>
  <div id="app">
    <router-view/>
    <!-- 3.使用组件 --> 
    <Counter></Counter>
  </div>
</template>

<script>
// 1.引入Counter.vue组件
import Counter from './components/Counter.vue';
export default {
  name: 'App',
  components: {
	  // 2.注册组件
      Counter
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
```



#### 注意点3：路由中的传参区别

> 要注意一个问题。router跟route有所不同。router是路由对象，所有在js中使用的路由对象
>
> route是单个路由对象。

1. 动态路由的传参：通过 `$route.params.goodrId` 属性拿到值

   ```javascript
   routes: [
       {
         path: '/goods/:goodsId',	/*动态路由可以通过$route.params.goodrId拿到goodsId的值*/
         name: 'Goods',
         component: Goods
       }
    ]
   ```

   ​

2. 通过问号传参:

   ```javascript
   // 在methods里面调用某个方法，方法里面调用页面跳转
   this.$router.push({path:'/car?goodrId=123'});

   // 使用 $route.query.goodsId可以拿到goodsId的值
   ```

   ​

#### vue注意事项

1. Vue **不支持** IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器
2. 在引入vue时必须要在head标签里面引入，不能在body标签结束前引入，这样可以避免出现抖屏的现象。
3. 使用 `npm run build` 命令可以生成成产环境的代码，即浏览器支持的代码，会在根目录中生成一个`dist` 文件夹，里面就是生成环境所使用的代码。




#### vue-router注意事项

在浏览器的地址栏中可以看到url有#号是怎么回事？

原因是在路由设置时有两种表示方式：第一种是history，第二种是hash。如果是使用hash表示法就会在url中显示#号。
<!-- 应用程序页面入口 -->
<template>
  <div id="app">
    <router-view/>
    <!--从父组件App传递变量num的值到子组件Counter-->
    <Counter v-bind:numb="numb" v-on:incre="increment" v-on:decre="decrement"></Counter>
    <p>parentValue:{{ numb }}</p>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  name: 'App',
  data () {
    return {
      numb: 20
    }
  },
  methods: {
    increment () {
      this.numb++
    },
    decrement () {
      this.numb--
    }
  },
  components: {
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

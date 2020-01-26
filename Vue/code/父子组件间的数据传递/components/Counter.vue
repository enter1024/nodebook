<template>
  <div id="counter">
    <button @click="increment">+</button>
    <span>{{ numb }}</span>
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
export default {
  props: ['numb'],		/* 从父组件中传递过来的数据 */
  data () {
    return {
      info: '这是一个test组件'
    }
  },
  methods: {
    increment () {
      this.$emit('incre')  /*子组件调用父组件的incre事件*/
    },
    decrement () {
      this.$emit('decre')
    }
  }
}

</script>

<style>
  #counter button {
    width: 40px;
  }
  #counter span {
    display: inline-block;
    width: 50px;
  }
</style>

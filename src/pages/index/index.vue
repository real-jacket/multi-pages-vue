<template>
  <div id="app">
    <div id="nav">
      <a @click="goFn('')">
        Index
      </a>
      <a @click="goFn('page1')">
        Page1
      </a>
      <a @click="goFn('page2')">
        Page2
      </a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods:{
    goFn(name){
      this.$openRouter({
        name:name, // 跳转地址
        query:{
          text:'hello' // 可以进行参数传递
        }
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
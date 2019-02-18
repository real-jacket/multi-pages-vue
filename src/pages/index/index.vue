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


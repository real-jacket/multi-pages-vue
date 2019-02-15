<template>
  <div id="app">
    <div id="nav">
      <a @click="goFn('')">Index</a>
      <a @click="goFn('page1')">Page1</a>
      <a @click="goFn('page2')">Page2</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods:{
    goFn(name){
      location.href = `${process.env.BASE_URL}` + name
    }
  }
}
</script>

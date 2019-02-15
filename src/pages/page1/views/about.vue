<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
  			http数据：{{dataStatus}}
  			<button type="button" @click="getHttpData">获取github数据</button>
  		</div>
  </div>
</template>
<script>
import {getTestData} from '../services/moduleA'

export default {
  name: 'about',
  data(){
    return {
      dataStatus: '未获取'
    }
  },
  methods:{
    // 获取 github 数据
  		getHttpData() {
  			getTestData()
  			.then(response => {
  				console.log(response)

  				this.dataStatus = '获取成功'
  			})
  		}
  }
}
</script>

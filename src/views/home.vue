<template>
  <div class="container">
    <h1>home</h1>
    <SvgIcon name="anq" class="svg-icon"></SvgIcon>
    <SvgIcon name="alipay"></SvgIcon>
    <SvgIcon name="app"></SvgIcon>
    <SvgIcon name="banner"></SvgIcon>
    <router-link :to="{path:'/details'}">go to details</router-link>
  </div>
</template>

<script> 
import SvgIcon from '../components/SvgIcon.vue';
import { getHomeData } from '../api/home'
export default {
  components: { SvgIcon },
  setup() {
    getHomeData({}).then((res) => {
      console.log(res)

      
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: $orange;
  h1 {
    font-size: 12px;
    margin-top: 50px;
  }
  .svg-icon {
    font-size: 36px;
  }
}
</style>
<template>
  <div class="details-container">

      <img src="../assets/images/6d5caccegy1gyddbfsb91j210w1t84ah.jpg" alt="">

    <SvgIcon name="app"></SvgIcon>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
import { getHomeData2 } from '../api/home'
export default {
  components: { SvgIcon },
  setup() {
    getHomeData2({}).then((res) => {
      console.log(res)
      console.log(res)
      console.log(res)
    })
  }
}
</script>

<style>

</style>
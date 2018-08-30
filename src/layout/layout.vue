<template>
  <div class="main-layout">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  components: { Header, Footer }
}
</script>

<style lang='less' scoped>
  .main-layout{
    position: relative;
  }
</style>

<template>
  <div :class="searchBar ? (awake ?'header-content isFixed awake':'header-content isFixed') : 'header-content'" :id="sleep ? 'sleep':''">
    <div class='header'>
      <router-link to="/home" class='design'>X-Man</router-link>
      <div class='navbar'>
        <ul class='nav-list'>
          <li><router-link to="/home" tag='li' class='nav-link'>首页</router-link></li>
          <li><router-link to="/life" class='nav-link'>随记</router-link></li>
          <li><router-link to="/block" class='nav-link'>博客</router-link></li>
          <li><router-link to="/about" class='nav-link'>关于</router-link></li>
          <li><router-link to="/contact" class='nav-link'>联系方式</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {searchBar: false, sleep: false, awake: false}
  },
  // 监听滚动事件
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    let eleHeight = document.querySelector('.header-content')
    if (scrollTop > eleHeight.offsetHeight) {
      this.searchBar = true
    }
    if (scrollTop > 300) {
      this.awake = true
    }
  },
  // 销毁滚动事件
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let eleHeight = document.querySelector('.header-content')
      if (scrollTop > eleHeight.offsetHeight) {
        this.searchBar = true
      } else {
        this.searchBar = false
      }
      if (scrollTop < 300 && scrollTop > eleHeight.offsetHeight + 20) {
        this.sleep = true
      } else {
        this.sleep = false
      }
      if (scrollTop > 300) {
        this.awake = true
      } else {
        this.awake = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .header-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    box-sizing: border-box;
    padding: 16px;
    .header {
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-box-pack: justify;
      align-items: center;
      margin: 0 auto;
      padding-right: 15px;
      padding-left: 15px;
      width: 100%;
      @media screen {
        @media ( min-width: 576px ) {
          width:540px;
        }
        @media (min-width: 768px) {
          width:720px;
        }
        @media (min-width: 992px) {
          width:960px;
        }
        @media (min-width: 1400px) {
          width:1140px;
        }
      }
      .design {
        display: inline-block;
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap;
        color: dimgrey;
        font-family: "Montserrat", Arial, sans-serif;
      }
      .navbar{
        @media screen and (min-width: 992px) {
          display: flex;
        }
        flex-basis: 100%;
        -moz-box-align: center;
        align-items: center;
        .nav-list{
          display: flex;
          flex-direction: row;
          margin-left: auto;
          .nav-link{
            display: block;
            padding: 2rem 1rem;
            font-size: 15px;
            line-height: 1.8;
            color: #fff;
            font-family: "Montserrat", Arial, sans-serif;
            // font-weight: 600;
          }
          .router-link-active{
            color: #89d9d0;
          }
        }
      }
    }
  }
  .isFixed{
    position: fixed;
    margin-top: -130px;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .awake{
    margin-top: 0px;
    background-color: #fff;
    box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);
    padding: 0;
    opacity: 1;
    -webkit-transition: .3s all ease-out;
    -o-transition: .3s all ease-out;
    transition: .3s all ease-out;
    .nav-link{
      color: #212529 !important;
    }
    .router-link-active{
      color: #89d9d0!important;
    }
  }
  #sleep{
    -webkit-transition: .3s all ease-out;
    -o-transition: .3s all ease-out;
    transition: .3s all ease-out;
  }
</style>

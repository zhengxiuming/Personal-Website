<template>
  <div>
    <section class='section-home'>
      <div class='container'>
        <div class='section-home-text'>
          <div class='section-home-text-content'>
            <p class="title">One Page & Multi page Template</p>
            <p class="description">Another free template by uicookies.com Under License CC 3.0</p>
            <p class="btn-content">
              <a class='btn btn-home' href="">See OnePage Verion</a>
            </p>
          </div>
        </div>
      </div>
      <div class='section-home-arrow'>
        <a class='section-home-arrow-tween' href="">
          <i class='section-home-arrow-icon iconfont icon-xiala'></i>
        </a>
      </div>
    </section>
    <left-component />
    <right-component />
  </div>
</template>

<script>
import LeftComponent from '@/components/Home/leftFadeIn'
import RightComponent from '@/components/Home/rightFadeIn'
export default {
  name: 'Home',
  components: {LeftComponent, RightComponent},
  data () {
    return {list: [1, 2]}
  }
}
</script>

<style lang="less" scoped>
  .section-home{
    background:url('../assets/bg.jpg') no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    .container{
      position:relative;
      .section-home-text{
        height: 95vh;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        .section-home-text-content{
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
          @media screen and (min-width: 768) {
            flex-grow: 1;
            max-width: 100%;
            flex-basis: 0;
          }
          .title{
            font-size: 62px;
            color: #fff;
            margin-top: 20px;
            margin-bottom: 0.5rem;
            line-height: 1.1;
          }
          .description{
            color: #fff;
            font-size: 1.25rem;
            font-weight: 500;
            margin-bottom: 3.5rem;
            margin-top: 1rem;
          }
          .btn-content{
            text-align: center;
            .btn-home{
              padding: 12px 30px;
            }
          }
        }
      }
    }
    .section-home-arrow{
      -webkit-transition: .3s all ease-out;
      -o-transition: .3s all ease-out;
      transition: .3s all ease-out;
      bottom: 40px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .section-home-arrow-tween {
        animation: arrow-repeat 2.5s linear infinite;
        display: inline-block;
        font-size: 44px !important;
        .section-home-arrow-icon{
          font-size: 44px !important;
          display: inline-block;
          color: #fff;
        }
      }
    }
  }

</style>

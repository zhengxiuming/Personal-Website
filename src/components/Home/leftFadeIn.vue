<template>
  <div class="section-content section-left">
    <div :class="animate?'section-img animate':'section-img'"></div>
    <div class='section-text'>
      <h2>About Us</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      <p>
        <router-link to='' class='btn readMore'>Read More</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {animate: false}
  },
  methods: {
    handleScroll () {
      let content = document.querySelector('.section-left')
      let top = content.getBoundingClientRect().top
      let height = window.innerHeight
      if (height - top >= 50) {
        this.animate = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    let content = document.querySelector('.section-left')
    let top = content.getBoundingClientRect().top
    let height = window.innerHeight
    if (height - top >= 50) {
      this.animate = true
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
  .section-content{
    width: 100%;
    @media screen and (min-width: 768px) {
      display: flex!important;
    }
    .section-img{
      background: url('../../assets/heye.jpg') no-repeat;
      background-size: cover;
      background-position: center center;
      width: 50%;
      opacity: 0.5;
      visibility: visible;
      transform: scale(0.8);
      transition: .6s all ease-out;
    }
    .animate{
      opacity: 1;
      transform: scale(1)
    }
    .section-text{
      width: 50%;
      background-color: #ececec;
      padding: 7em;
      text-align: left;
      box-sizing: border-box;
      h2{
        margin-bottom: 1.5rem;
        font-weight: 300!important;
        font-size: 2rem;
        color: #212529;
      }
      p{
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 300;
        color: #868e96;
        line-height: 1.8;
        .readMore{
          box-sizing: border-box;
          padding: 10px 25px;
          background-color: #89d9d0;
          border-color: #89d9d0;
          color: #fff;
        }
      }
    }
  }
</style>

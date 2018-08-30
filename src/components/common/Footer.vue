<template>
  <footer class='footer'>
    <div class='container'>
      <div class='footer-text'>
        Copyright © 2018.X-Man All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang='less' scoped>
  .footer{
    border-top: 1px solid #ececec;
    padding: 1em 0;
    width: 100%;
    display: block;
    .container{
      margin: 0 auto;
      padding: 0 15px;
      width: 100%;
      @media screen {
        @media (min-width:576px) {
          max-width: 540px;
        }
        @media (min-width:768px) {
          max-width: 720px;
        }
        @media (min-width:992px) {
          max-width: 960px;
        }
        @media (min-width:1200px) {
          max-width: 1140px;
        }
      }
      .footer-text{
        font-size: 14px;
        color: #868e96;
        font-weight: 300;
        text-align: center;
      }
    }
  }
</style>

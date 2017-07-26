<template>
  <div class="hamabanner">
    <img class="banner-left  animated zoomIn" src="./images/banner-left.png" alt="">
    <div class="banner-right  animated bounceInRight">
      <div class="text-left">
        <span class="banner-right-text text-title">无极蛤蟆线</span>
        <span class="banner-right-text text-font-2">炒金 <img class="font-2" src="./images/font-2.png" alt="">钱</span>
      </div>
      <div class="text-right">
        <img src="./images/font-1.png" alt="">
        <span class="banner-right-text text-font-3">门槛</span>
      </div>
      <div class="text-small">
        <span class="text-small-s1">准司机 : 炒金/汇赚钱0门槛 ! 炒金/汇问题1站式解决 !</span><br/>
        <span class="text-small-s2">新司机 : 2秒辨涨跌 ! 3秒找点位 ! 4步成赢家 !</span><br/>
        <span class="text-small-s3">老司机 : 精准抄底 ! 波段操作 !</span><br/>
      </div>

      <div class="banner-btn">
        <a class="banner-btn-01" href="#">免费试用</a>
        <a class="banner-btn-02" href="#">使用说明</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @mixin vertical-middle { //垂直居中
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate3d(-50%,-50%,0);
  }
  @mixin font { font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; }
  .banner {
    margin-top: 37px;
  }
  .hamabanner {
    background: url("./images/bg.png") no-repeat;
    height: 580px;
  }
  //banner图左边图片样式
  .banner-left {
    position: absolute;
    top: 100px;
    left: 250px;
    animation-duration: 3s
  }
  //banner图右边的文字样式
  .banner-right {
    position: absolute;
    right: 25%;
    top: 135px;
    width: 500px;
    .banner-right-text {
      @include font;
      font-size: 65px;
      font-weight: bold;
      color: #fff;
      .font-2 {
        position: relative;
        top: 15px;
      }
    }
    .text-left {
      border-right: 3px solid #fff;
      width: 325px;
      height: 155px;
      .text-font-2 {
        position: relative;
        top: 50px;
      }
    }
    .text-right {
      position: absolute;
      top: 0;
      right: -100px;
      .text-font-3 {
        position: relative;
        bottom: 20px;
      }
    }
    .text-title {
      font-family: "Microsoft YaHei UI Light",Arial,sans-serif;
      position: absolute;
      top: 0;
      right: 45%;
      font-size: 45px;
      font-weight: normal;
      margin: 10px 0;
    }
    .text-small {
      font-family: "Microsoft YaHei UI Light",Arial,sans-serif;
      display: inline-block;
      color: #fff;
      font-size: 15px;
      margin-left: 120px;
      padding: 55px 0;
      .text-small-s1 {
        display: inline-block;
        padding: 5px;
        border-top: 1px solid rgb(122,122,122);
        border-bottom: 1px solid rgb(122,122,122);
      }
      .text-small-s2 {
        @extend .text-small-s1;
        margin-top: 10px;
        margin-left: 30px;
      }
      .text-small-s3 {
        @extend .text-small-s1;
        @extend .text-small-s2;
        margin-left: 65px;
      }
    }
    .banner-btn {
      position: relative;
      top: 10px;
      left: 170px;
      .banner-btn-01 {
        width: 130px;
        height: 40px;
        display: inline-block;
        border: 2px solid;
        color: #fff;
        border-radius: 20px;
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        font-family: "Microsoft YaHei",Arial,sans-serif;
      }
      .banner-btn-02 {
        @extend .banner-btn-01;
        margin-left: 40px;
      }
    }
  }


</style>

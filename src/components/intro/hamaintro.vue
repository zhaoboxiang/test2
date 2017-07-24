<template>
  <div class="hamaintro">
    <el-row :gutter="24">
      <el-col :span="8" :offset="9"><span class="intro-title" >无极蛤蟆线特点</span></el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6" class="test3">
        <img src="./images/pic3-h.png" alt="" class="icon icon-back">
        <img src="./images/pic3.png" alt="" class="icon icon-front">
      </el-col>
    </el-row>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../common/common";
  .intro-title {
    @include title-text;
    &::after {
      @include title-bottom;
    }
  }


  .icon {
    position: absolute;
  }
  .icon-front {
    z-index: 5;
    backface-visibility: hidden;
    opacity: 1;
    transition: opacity .5s ease;
    animation-fill-mode: both;
  }
  .icon-back {
    opacity: 0;
    transition: opacity 1s ease;
    animation: test1 1s 1;

    /*transform: rotateY(180deg);*/

  }
  .icon:hover {
    animation: test .5s 1;
    @keyframes test {
      to {
        transform: rotateY(360deg);
        opacity: 0;
      }
    }
    @keyframes test1 {
      to {
        /*transform: rotateY(360deg);*/
        opacity: 1;
      }
    }
  }

</style>

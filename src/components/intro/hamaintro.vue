<template>
  <div class="hamaintro">
    <el-row :gutter="24" class="title-margin">
      <el-col :span="8" :offset="10"><span class="intro-title" >无极蛤蟆线特点</span></el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6" :offset="4" class="icons-1">
        <span>一眼看涨跌</span>
      </el-col>
      <el-col :span="6" :offset="2" class="icons-2">
        <span>精准提示做多/空信号</span>
      </el-col>
      <el-col :span="6" :offset="2" class="icons-3">
        <span>准确率高达86.5%</span>
      </el-col>
      <el-col :span="6" :push="2" class="icons-4">
        <span>提前预知下一个交易日买卖点位</span>
      </el-col>

    </el-row>
    <el-row :gutter="24" class="hamaline-detail">
      <el-col :span="6" :offset="6" class="hamaline-gif">
        <img src="./images/hamapic.gif" alt="">
        <button class="free-btn-2">免费试用</button>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24" class="hamaline-report">
        <img src="./images/corner.png" alt="" class="corner">
        <img src="./images/dotted-line.png" alt="">
        <img src="./images/fadein-left.png" alt="">
        <img src="./images/fadein-right.png" alt="">
      </el-col>
    </el-row>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../common/common";
  .title-margin {
    margin: 100px 0;
    //标题
    .intro-title {
      @include title-text;
      &::after {
        @include title-bottom;
      }
    }
  }
  //图标
  .icons-1 {
    @include icons;
    &::before {
      background: url("./images/pic1-h.png");
    }
    &::after {
      background: url("./images/pic1.png");
    }
  }
  .icons-2 {
    @include icons;
    &::before {
      background: url("./images/pic2-h.png");
    }
    &::after {
      background: url("./images/pic2.png");
    }
  }
  .icons-3 {
    @include icons;
    &::before {
      background: url("./images/pic3-h.png");
    }
    &::after {
      background: url("./images/pic3.png");
    }
  }
  .icons-4 {
    @include icons;
    span:nth-child(1) {
      display: inline-block;
      width: 350px;
      height: 0;
      text-align: left;
    }
    &::before {
      background: url("./images/pic4-h.png");
    }
    &::after {
      background: url("./images/pic4.png");
    }
  }

  //蛤蟆线演示
  .hamaline-detail {
    margin: 100px 0;
    .hamaline-gif {
      display: inline-block;
      content: "";
      width: 913px;
      height: 459px;
      background: url("./images/reat4.png") no-repeat;
      position: relative;
      img {
        @include vertical-middle;
      }
      .free-btn-2 {
        @include vertical-middle;
        @include font;
        top: 110%;
        display: inline-block;
        width: 150px;
        height: 40px;
        font-size: 15px;
        text-align: center;
        line-height: 35px;
        border: 2px solid #155EA1;
        color: #155EA1;
        background: #fff;
        border-radius: 20px;
        &:hover {
          background: #155EA1;
          color: #fff;
        }
        $color: #155EA1;
        &:active {
          background: rgba($color,.9);
        }
      }
    }
  }
  $color: #155EA1;
  .hamaline-report {
    background: url("./images/banner3.png") no-repeat;
    height: 700px;
  }

  .corner {
    filter: alpha(opacity=0)
  }
</style>

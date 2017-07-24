<template>
  <div class="hamaheader">
    <div class="login clearfix">
      <div class="login-left">
        <img src="./images/phone_icon.png" alt="">
        <span class="phone-number">400-900-8230</span>
        <img src="./images/wechat.png" alt="">
        <img src="./images/weibo.png" alt="">
      </div>
      <div class="login-right">
        <button class="sign-in">登陆</button>
        <button class="sign-up">注册</button>
      </div>
    </div>
    <el-row :gutter="24" class="main-nav">
      <el-col :span="5" :offset="3"><img class="logo" src="./images/logo.png" alt=""></el-col>
      <el-col :span="10" :push="10">
        <img class="fire" src="./images/fire_icon.png" alt="">
        <el-tabs @tab-click="handleClick">
          <el-tab-pane label="首页"></el-tab-pane>
          <el-tab-pane label="直播"></el-tab-pane>
          <el-tab-pane label="熙隆学院"></el-tab-pane>
          <el-tab-pane label="蛤蟆线"></el-tab-pane>
          <el-tab-pane label="商城"></el-tab-pane>
          <el-tab-pane label="汇市社区"></el-tab-pane>
          <el-tab-pane label="赚钱指南"></el-tab-pane>
          <el-tab-pane label="招商加盟"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style lang="scss">
  $blue-color: #1768B3;
  @import "../../common/common";
  .hamaheader {
    width: 100%;
    position: fixed;
    z-index: 3;
  }

  //登陆注册栏
  .login {
    position: relative;
    background: #ffffff;
    border-top: 2px solid $blue-color;
  }
  .login:after {
    @include clearfix;
  }
  .sign-in, .sign-up {
    height: 30px;
    width: 60px;
    outline: none;
    border: 1px solid $blue-color;
    cursor: pointer;
    /*background: blue;*/
  }
  .sign-in {
    position: absolute;
    border-radius: 15px;
    right: 48px;
    bottom: 0;
    z-index: 2;
    background: $blue-color;
    color: #fff;
  }
  .sign-up {
    position: absolute;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    right: 0;
    bottom: 0;
    background: #fff;
    color: $blue-color;
  }
  .login-left {
    float: left;
    margin-left: 12%;
    height: 30px;
    margin-top: 12px;
    cursor: pointer;
    .phone-number {
      position: relative;
      top: -8px;
      color: $blue-color;
      &:after {
        content: '';
        border-right: 1px solid;
        margin: 0 10px;
      }
    }
  }
  .login-right {
    float: right;
    top: 30px;
    margin-right: 19%;
    margin-top: 8px;
    position: relative;
  }

  //导航栏
  .main-nav {
    background: rgba(193,193,193,.9);
    height: 80px;
    position: relative;
  }
  .logo {
    @include vertical-middle;
    left: 20%;
  }
 .el-tabs__header {
   border: none;
   .el-tabs__nav-wrap {
     line-height: 7;
   }
 }
  .fire {
    position: absolute;
    top: 25px;
    left: 142px;
  }
  .el-tabs__item {
    @include font;
    color: #333;
    font-size: 20px;
  }
  .el-tabs__active-bar {
    bottom: 4px;
  }
</style>

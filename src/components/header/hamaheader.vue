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
        <el-tabs @tab-click="handleClick">
          <el-tab-pane label="首页"></el-tab-pane>
          <el-tab-pane label="直播" class="test"></el-tab-pane>
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

<style lang="scss" scoped>
  @import "../../common/header";
</style>
<style lang="scss">
  @import "../../common/header";
</style>

<template>
  <div class="hamafooter">
    <el-row :gutter="24" class="footer-main">
      <el-col :span="1" :push="11">
        <img src="./images/weixin.jpg" alt="" class="weixin-code">
      </el-col>
      <el-col :span="5" :offset="10" class="footer-icons">
        <img src="./images/weibo_icon.png" alt="">
        <img src="./images/weixin_icon.png" alt="">

        <img src="./images/qq_icon.png" alt="">
        <img src="./images/apple_icon.png" alt="">
      </el-col>
      <el-col :span="10" class="footer-info">
        <a href="javascript:;">关于熙隆</a>
        <a href="javascript:;">网站条款</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">联系我们</a>
        <a href="javascript:;">友情链接</a>
        <a href="javascript:;">金融机构</a>
        <a href="javascript:;">赞助商</a>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="official-icon">
      <el-col :span="10" :offset="5">
        <img src="./images/official-icon.png" alt="">
      </el-col>
    </el-row>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../common/footer";
</style>

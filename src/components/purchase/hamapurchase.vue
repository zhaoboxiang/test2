<template>
  <div class="purchase">
    <el-row :gutter="24">
      <el-col :span="8" :offset="10"><span class="purchase-title" >在线购买</span></el-col>
    </el-row>
    <el-row :gutter="24" class="tabs-card">
      <el-col :span="6" :offset="10">
        <el-tabs type="border-card">
          <el-tab-pane label="三个月">
            <span>价格：</span>
            <span>原价3888</span><br/>
              <button>立即购买</button>
            <div>
              <button>下载软件</button>
              <button>使用说明</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="六个月">
            <span>价格：</span>
            <span>原价3888</span><br/>
            <button>立即购买</button>
            <div>
              <button>下载软件</button>
              <button>使用说明</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="终身使用">
            <span>价格：</span>
            <span>原价3888</span><br/>
            <button>立即购买</button>
            <div>
              <button>下载软件</button>
              <button>使用说明</button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "../../common/common";
  .purchase {
    position: relative;
    margin-top: 100px;
    //标题
    .purchase-title {
      @include title-text;
      &::after {
        @include title-bottom;
      }
    }
  }

  .tabs-card {
    margin-top: 100px;
  }
</style>
<style lang="scss">
  @import "../../common/tabs-card";
</style>

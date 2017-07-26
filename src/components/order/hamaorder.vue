<template>
  <div class="hamaorder">
    <el-row :gutter="24">
      <el-col :span="6" :offset="3">
        <span class="order-title">确认订单</span>
        <span class="bread-text">首页 > 蛤蟆线 > 确认订单</span>
      </el-col>
      <el-col :span="6" :offset="6" class="order-step">
        <span class="order-step1">选择商品</span>
        <span class="order-step2">确认订单</span>
        <span class="order-step3">提交成功</span>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="17" :offset="3">
        <table class="gridtable">
          <tr>
            <th>产品名称</th><th>有效期</th><th>绑定MT4账号</th><th>价格(熙币)</th>
          </tr>
          <tr>
            <td class="product-info">
              <img src="./images/order-product.png" alt="">
              <span>《无极蛤蟆线》</span>
            </td>
            <td>
              <el-select value="" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
            <td>
              <span>445256</span>
              <a href="javascript:;" class="edit">修改</a>
            </td>
            <td>998.0</td>
          </tr>
        </table>
      </el-col>
      <el-col :span="6" :offset="16" class="decide">
        <div class="validate-text">熙币不足，还需 <span>998.0</span>个熙币，请充值！</div>
        <a href="#alert"><button class="order-btn">确认购买</button></a>
      </el-col>
    </el-row>
    <!--弹层-->
    <!--<section>-->
      <!--<a href="#alert" class="button">-->
        <!--<img src="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/doge_org.gif"  /></a>-->
    <!--</section>-->
    <div class="box-target" id="alert">
      <div class="notice">
        <span>恭喜你，购买成功！</span>
        <img src="./images/correct_icon.png" alt="">
        <button class="download">点击下载软件</button>
        <button class="contact">联系客服</button>
        <span>请联系客服获取软件序列号</span>
      </div>
      <a class="box-close" href="#"></a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '三个月'
        }, {
          value: '选项2',
          label: '六个月'
        }, {
          value: '选项3',
          label: '终身使用'
        }],
        value: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "../../common/common";
  .hamaorder {
    padding-top: 150px;
  }
  //右边面包屑导航样式
  .order-step span {
    @include font;
    display: inline-block;
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .order-step1 {
    background: url("./images/order-step1.png") no-repeat;
  }
  .order-step2 {
    background: url("./images/order-step2.png") no-repeat;
    margin-left: -12px;
    color: #fff;
  }
  .order-step3 {
    background: url("./images/order-step3.png") no-repeat;
    margin-left: -17px;
  }
//订单标题样式
  .order-title {
    @include font;
    font-size: 25px;
    font-weight: bold;
    color: #E54616;
    margin-right: 30px;
  }
  .bread-text {
    font-size: 15px;
    color: #A9A9A9;
  }
  .order-detail {
    border: 1px solid;
    height: 100px;
  }
  .detail-title  {
    background: #8391a5;
  }
//订单表格
  .gridtable {
    @include font;
    width: 100%;
    font-size:11px;
    color:#333333;
    border: 1px solid #C4C4C4;
    border-collapse: collapse;
    margin-top: 100px;
  }
  .gridtable th {
    width: 110px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    background-color: #F7F7F7;
  }
  .gridtable td {
    height: 100px;
    padding: 8px;
    text-align: center;
    font-size: 16px;
    .edit {
      color: #1768B3;
    }
  }
  .gridtable>tr {
    td:nth-child(4){
      color: #E54616;
    }
    th:nth-child(3)::after {
      content: '';
      background: url("./images/wenhao_icon.png") no-repeat right center;
      display: inline-block;
      width: 17px;
      height: 17px;
    }
  }
  //产品图片样式
  .product-info {
    img {
      @include vertical-middle;
      top: 55%;
      left: 17%;
    }
    span {
      @include vertical-middle;
      top: 55%;
      left: 22%;
    }
  }
  //确认购买 按钮
  .decide {
    margin-top: 20px;
    .validate-text {
      @include font;
      font-size: 17px;
      color: #BE2713;
    }
    .order-btn {
      @include font;
      width: 170px;
      height: 50px;
      border-radius: 3px;
      background: #E54616;
      color: #fff;
      outline: none;
      border: none;
      font-size: 20px;
      margin-left: 130px;
      margin-top: 10px;
      &:active {
        background: rgba(#E54616,.8);
        text-shadow:1px 1px 5px #000;
      }
    }
  }
  //弹层
  a {
    text-decoration: none;
    color: #313131;
    &:hover {
      color: #000;
    }
  }
  /*a.button {*/
    /*display: inline-block;*/
    /*background: #999;*/
    /*color: #f2f2f2;*/
    /*border-radius: 50%; !* 直接写啦,后面的也是 *!*/
    /*padding: 10px 1em;*/
    /*box-shadow: 0 3px 0 #777;*/
    /*font-size: 1.3em;*/
    /*text-decoration: none;*/
  /*}*/

  .box-target {
    position: fixed;
    top: -100%;
    width: 100%;
    background: rgba(0,0,0,.7);
    opacity: 0;
    transition: opacity .5s ease-in-out;
    overflow: hidden;
    z-index: 1989;
    img {
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-height: 0%;
      max-width: 0%;
      border: 3px solid #fff;
      box-shadow: 0 0 8px rgba(0,0,0,.3);
      box-sizing: border-box;
      transition: .5s ease-in-out;
    }
    &:target {
      opacity: 1;
      top: 0;
      bottom: 0;
      img {
        max-height: 100%;
        max-width: 100%;
      }
      .box-close {
        top: 5%;
      }
    }
  }

  .box-close {
    display: block;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    background: #139dd7;
    color: #fff;
    position: absolute;
    top: 10%;
    right: 5%;
    transition: .5s ease-in-out;
    &:before, &:after {
      content: " ";
      display: block;
      height: 30px;
      width: 1px;
      background: #fff;
      position: absolute;
      left: 26px;
      top: 10px;
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }

  .notice {
    @include vertical-middle;
    height: 300px;
    width: 400px;
    background: #fff;
    span:first-child {
      @include vertical-middle;
      @include font;
      font-size: 25px;
      font-weight: bold;
      top: 18%;
      left: 53%;
      width: 225px;
    }
    span:last-child {
      @include vertical-middle;
      @include font;
      top: 80%;
      left: 64%;
      color: #FF0000;
    }
  }
  .download, .contact {
    @include font;
    @include vertical-middle;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background: #1768B3;;
    color: #fff;
    line-height: 30px;
    &:active {
      background: rgba(#1768B3,.8);
    }
 }
  .contact {
    top: 70%;
    left: 70%;
  }
  .download {
    top: 70%;
    left: 30%;
  }
</style>

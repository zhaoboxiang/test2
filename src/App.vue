<template>
  <div id="app">
    <hamaheader></hamaheader>
    <!--<hamabanner></hamabanner>-->
    <!--<hamastep></hamastep>-->
    <!--<hamaintro></hamaintro>-->
    <!--<hamapurchase></hamapurchase>-->
    <hamaorder></hamaorder>
    <hamafooter></hamafooter>

    <router-view></router-view>
  </div>
</template>

<script>
  import hamaheader from './components/header/hamaheader'
  import hamabanner from './components/banner/hamabanner'
  import hamastep from './components/step/hamastep'
  import hamaintro from './components/intro/hamaintro'
  import hamapurchase from './components/purchase/hamapurchase'
  import hamaorder from './components/order/hamaorder'
  import hamafooter from './components/footer/hamafooter'
  export default {
    components: {
      hamaheader,
      hamabanner,
      hamastep,
      hamaintro,
      hamapurchase,
      hamaorder,
      hamafooter
    }
  }
</script>

<style>

</style>

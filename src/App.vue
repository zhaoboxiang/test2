<template>
  <div id="app">
    <hamaheader></hamaheader>
    <hamabanner></hamabanner>
    <hamastep></hamastep>
    <hamaintro></hamaintro>
  </div>
</template>

<script>
  import hamaheader from './components/header/hamaheader'
  import hamabanner from './components/banner/hamabanner'
  import hamastep from './components/step/hamastep'
  import hamaintro from './components/intro/hamaintro'
  export default {
    components: {
      hamaheader,
      hamabanner,
      hamastep,
      hamaintro
    }
  }
</script>

<style>

</style>

<template>
  <div id="app">
    <Panel/>
    <Info/>
  </div>
</template>

<script>
  import Panel from './components/Panel.vue'
  import Info from './components/Info.vue'

  export default {
    name: 'app',
    components: {
      Panel,
      Info
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  body {
    margin: 0;
    overflow: hidden;
  }
</style>

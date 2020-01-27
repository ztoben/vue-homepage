<template>
  <div id="app">
    <Panel/>
  </div>
</template>

<script>
  import Panel from './components/Panel.vue'

  export default {
    name: 'app',
    components: {
      Panel
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

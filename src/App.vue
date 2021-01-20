<template>
  <div id="app">
    <div class="mode-toggle" @click="modeToggle" :class="darkDark">
      <div class="toggle">
        <div id="dark-mode" type="checkbox"></div>
      </div>
    </div>
    <Panel/>
  </div>
</template>

<script>
  import Panel from './components/Panel.vue'

  export default {
    name: 'app',
    components: {
      Panel
    },

    data() {
      return {
        darkMode: false
      }
    },

    methods: {
      dark() {
        document.querySelector('body').classList.add('dark-mode')
        this.darkMode = true
        this.$emit('dark')
      },

      light() {
        document.querySelector('body').classList.remove('dark-mode')
        this.darkMode = false
        this.$emit('light')
      },

      modeToggle() {
        if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
          this.light()
        } else {
          this.dark()
        }
      },
    },
    
    computed: {
      darkDark() {
        return this.darkMode && 'darkmode-toggled'
      }
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

  // dark mode 
  $dark: #171717;
  $mode-toggle-bg: #262626;
  $original-background-color: #A2D7FF;

  body {
    margin: 0;
    overflow: hidden;
    background-color: $original-background-color;
    color: $dark;
    transition: background-color .2s ease, color .2s ease;
  }

  // _dark-mode.scss
  body {
      &.dark-mode {
          background-color: lighten($dark, 5%);
          color: #fff;
          
          .tag {
            color: #171717;
            background-color: $original-background-color !important;

            &:hover {
              background-color: lighten($original-background-color, 5%) !important;
            }
          }

          a {
            color: $original-background-color !important;
             
            &:hover {
              color: lighten($original-background-color, 10%) !important;
            }
          }
      }
  }


  // _mode-toggle.scss
  .mode-toggle {
      position: absolute;
      padding: 0;
      width: 44px;
      height: 24px;
      min-width: 36px;
      min-height: 20px;
      background-color: $mode-toggle-bg;
      border: 0;
      border-radius: 24px;
      outline: 0;
      overflow: hidden;
      cursor: pointer;
      z-index: 2;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-touch-callout: none;
      appearance: none;
      transition: background-color .5s ease;
      top: 10px;
      right: 10px;

      .toggle {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid transparent;
          box-shadow: inset 0 0 0 2px #a5abba;
          overflow: hidden;
          transition: transform .5s ease;

          #dark-mode {
              position: relative;
              width: 100%;
              height: 100%;
              overflow: hidden;
              border-radius: 50%;

              &:before {
                  content: '';
                  position: relative;
                  width: 100%;
                  height: 100%;
                  left: 50%;
                  float: left;
                  background-color: #a5abba;
                  transition: border-radius .5s ease, width .5s ease, height .5s ease, left .5s ease, transform .5s ease;
              }
          }
      }
  }

  body.dark-mode {
      .mode-toggle {
          background-color: lighten($mode-toggle-bg, 5%);

          .toggle {
              transform: translateX(19px);

              #dark-mode {
                  &:before {
                      border-radius: 50%;
                      width: 150%;
                      height: 85%;
                      left: 40%;
                      transform: translate(-10%, -40%), rotate(-35deg);
                  }
              }
          }
      }
  }
</style>

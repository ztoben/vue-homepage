<template>
  <div class="info">
    <div>
      <h1 class="header">Work Experience</h1>
      <div class="info-container">
        <div>
          <p><b>Software Engineer (April 2018 - Present)</b></p>
          <p>Gain Compliance, Des Moines, Iowa</p>

          <p><b>Contract Software Developer (July 2016 - Present)</b></p>
          <p>Heartland AEA, Johnston, Iowa</p>

          <p><b>Contract Software Developer (September 2017 - March 2018)</b></p>
          <p>Pioneer, Johnston, Iowa</p>

          <p><b>Product Engineer II (January 2017 - October 2017)</b></p>
          <p>John Deere ISG, Urbandale, Iowa</p>
        </div>
        <div>
          <p><b>IT Analyst III (November 2015 - December 2016)</b></p>
          <p>John Deere ISG, Urbandale, Iowa</p>

          <p><b>Computer Software Engineer (July 2014 - October 2015)</b></p>
          <p>Heartland AEA, Johnston, Iowa</p>

          <p><b>Part Time Student - Software Development (February 2012 - June 2014)</b></p>
          <p>John Deere PEC, Waterloo, Iowa</p>
        </div>
      </div>
      <h1 class="header">Education</h1>
      <p><b>University of Northern Iowa (2014)</b></p>
      <p>Bachelor of Arts (BA), Computer Science</p>

      <h1 class="header">Certifications</h1>
      <p><b>Certified Scrum Master</b></p>
      <p>Scrum Alliance (April 2017 - Present)</p>
    </div>
    <div class="projects">
      <h1 class="header">Projects</h1>
      <div class="projects-container">
        <div class="project" v-for="project in projects">
          <h2><a :href="project.link">{{project.name}}</a></h2>
          <span class="stars">
            <font-awesome-icon icon="star"/>
            {{project.stars}}
          </span>
          <i>{{project.description}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    data() {
      return {
        projects: [
          {
            name: 'assets-webpack-plugin',
            description: 'Webpack plugin that emits a json file with assets paths',
            link: 'https://github.com/ztoben/assets-webpack-plugin',
            stars: 870
          },
          {
            name: 'plex-viewer',
            description: 'Plex viewer with keyboard controls built with electron',
            link: 'https://github.com/ztoben/plex-viewer',
            stars: 9
          },
          {
            name: 'svelte-snake',
            description: 'A snake game made with Svelte',
            link: 'https://github.com/ztoben/svelte-snake',
            stars: 4
          },
          {
            name: 'base-64-extension',
            description: 'A web extension for base64 encoding and decoding',
            link: 'https://github.com/ztoben/base64extension',
            stars: 1
          },
          {
            name: 'crawl',
            description: 'A dungeon crawler written in React.js',
            link: 'https://github.com/ztoben/crawl',
            stars: 0
          },
          {
            name: 'neon-maze',
            description: 'Randomly generated mazes, rendered in Vue.js',
            link: 'https://github.com/ztoben/neon-maze',
            stars: 1
          },
          {
            name: 'drawing-board',
            description: 'An IOS/Android drawing app created with Expo',
            link: 'https://github.com/ztoben/drawing-board',
            stars: 1
          },

          {
            name: 'react-pomodoro',
            description: 'A pomodoro timer written in React.js',
            link: 'https://github.com/ztoben/react-pomodoro',
            stars: 0
          },
          {
            name: 'react-dex',
            description: 'A Pokédex written in React.js',
            link: 'https://github.com/ztoben/react-dex',
            stars: 1
          },
          {
            name: 'reddit-nfl-stats',
            description: 'Displays nfl subreddit stats',
            link: 'https://github.com/ztoben/reddit-nfl-stats',
            stars: 0
          }
        ]
      };
    },
  }
</script>

<style scoped lang="scss">
  .info {
    text-align: left;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    padding: 50px;
    position: relative;
    background: white linear-gradient(45deg,
      rgb(22, 244, 197) 0%,
      rgb(22, 244, 197) 12%,
      rgb(24, 219, 187) 12%,
      rgb(24, 219, 187) 51%,
      rgb(26, 193, 176) 51%,
      rgb(26, 193, 176) 52%,
      rgb(28, 168, 166) 52%,
      rgb(28, 168, 166) 66%,
      rgb(29, 143, 155) 66%,
      rgb(29, 143, 155) 73%,
      rgb(31, 117, 145) 73%,
      rgb(31, 117, 145) 80%,
      rgb(33, 92, 134) 80%,
      rgb(33, 92, 134) 100%);

    .header {
      border: 5px solid black;
      color: black;
      padding: 15px;
      text-align: center;
    }

    .info-container {
      display: flex;

      > div {
        flex: 1;
      }
    }

    .projects {
      .projects-container {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        .project {
          color: black;
          padding: 15px 25px;
          border-radius: 20px;
          margin: 5px;
          display: flex;
          flex: 1;
          flex-direction: column;
          min-width: 300px;
          position: relative;
          border: 5px solid black;

          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }

          .stars {
            position: absolute;
            right: 20px;
            top: 20px;
          }

          a {
            color: black;

            &:visited {
              color: black;
            }
          }
        }
      }
    }
  }
</style>

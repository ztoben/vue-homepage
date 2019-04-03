<template>
  <div class="info">
    <div>
      <h1 class="header">Resume</h1>
      <div class="resume">
        <div class="work-experience">
          <h2>Work Experience</h2>
          <p><b>Software Engineer (April 2018 - Present)</b></p>
          <p>Gain Complaince, Des Moines, Iowa</p>

          <p><b>Contract Software Developer (September 2017 - March 2018)</b></p>
          <p>Pioneer, Johnston, Iowa</p>

          <p><b>Product Engineer II (January 2017 - October 2017)</b></p>
          <p>John Deere ISG, Urbandale, Iowa</p>

          <p><b>Contract Software Developer (July 2016 - March 2017)</b></p>
          <p>Heartland AEA, Johnston, Iowa</p>

          <p><b>IT Analyst III (November 2015 - December 2016)</b></p>
          <p>John Deere ISG, Urbandale, Iowa</p>

          <p><b>Computer Software Engineer (July 2014 - October 2015)</b></p>
          <p>Heartland AEA, Johnston, Iowa</p>

          <p><b>Part Time Student - Software Development (February 2012 - June 2014)</b></p>
          <p>John Deere PEC, Waterloo, Iowa</p>
        </div>
        <div>
          <div class="education">
            <h2>Education</h2>
            <p><b>University of Northern Iowa (2014)</b></p>
            <p>Bachelor of Arts (BA), Computer Science</p>
          </div>
          <br/>
          <div class="certifications">
            <h2>Certifications</h2>
            <p><b>Certified Scrum Master</b></p>
            <p>Scrum Alliance (April 2017 - Present)</p>
          </div>
        </div>
      </div>
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
            stars: 847
          },
          {
            name: 'plex-viewer',
            description: 'Plex viewer with keyboard controls built with electron',
            link: 'https://github.com/ztoben/plex-viewer',
            stars: 6
          },
          {
            name: 'crawl',
            description: 'A dungeon crawler written in React.js',
            link: 'https://github.com/ztoben/crawl',
            stars: 0
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
            stars: 0
          },
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
    background-color: white;
    overflow: auto;
    padding: 50px;
    position: relative;

    .header {
      background-color: darkgray;
      color: black;
      padding: 15px;
      text-align: center;
    }

    .resume {
      display: flex;

      > div {
        flex: 1;
      }

      .certifications {
        p {
          margin-left: 15px;
        }
      }

      .education {
        p {
          margin-left: 15px;
        }
      }

      .work-experience {
        p:nth-child(odd) {
          padding: 0;
          margin-top: 0;
        }

        p:nth-child(even) {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        p {
          margin-left: 15px;
        }
      }


    }

    .projects {
      .projects-container {
        display: inline-flex;
        flex-wrap: wrap;

        .project {
          background-color: lightgray;
          color: black;
          padding: 15px 25px;
          border-radius: 20px;
          margin: 0 15px 15px 0;
          display: flex;
          flex: 1;
          flex-direction: column;
          min-width: 300px;
          position: relative;

          &:hover {
            background-color: darkgray;
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

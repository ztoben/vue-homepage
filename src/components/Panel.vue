<template>
  <div class="panel">
    <img
      src='../assets/about.jpg'
      alt='About'
    />
    <h1>Zach Toben</h1>
    <h3>Full Stack Developer</h3>
    <span class="contact">
      <a href="https://www.github.com/ztoben">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
      <a href="https://www.linkedin.com/in/zachary-toben-bbab4a84">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <a href="https://www.twitter.com/ztoben">
        <font-awesome-icon :icon="['fab', 'twitter']"/>
      </a>
      <a href="mailto:zach.toben@gmail.com?Subject=Hello!">
        <font-awesome-icon icon="envelope"/>
      </a>
    </span>
    <div class="about">
      <p>
        I currently live in the Des Moines area and work at the local start up
        <a href="https://gaincompliance.com/">Gain Compliance</a>. I've previously worked with Corteva
        and John Deere.
      </p>
      <br/>
      <p>
        I'm always looking for a challenge or something new.
        In my free time I enjoy spending time with my family, and working on open source projects.
      </p>
      <br/>
      <b>My current interests in software development are:</b>
      <div class="tag" v-for="tag in tags">{{ tag }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Panel',
    data() {
      return {
        tags: [
          'JavaScript',
          'React.js',
          'Vue.js',
          'Google Cloud',
          'AWS',
          'Node.js',
          'C#',
          '.Net',
          'Python'
        ]
      };
    }
  }
</script>

<style scoped lang="scss">
  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #A2D7FF;
    padding: 15px;
    width: 470px;
    height: 100vh;

    .contact {
      margin-top: 10px;

      > * {
        margin: 10px;
        color: black;

        &:visited {
          color: black;
        }

        &:hover {
          color: #575757;
        }
      }
    }

    img {
      border: 5px solid white;
      border-radius: 50%;
      margin: 0 auto 40px;
      width: 300px;
    }

    .about {
      text-align: left;
      display: inline-block;
      padding: 30px;

      .tag {
        display: inline-flex;
        background-color: #f5f5f5;
        border-radius: 2px;
        margin: 5px 5px 0 0;
        padding: 10px;

        &:hover {
          background-color: lightgray;
        }
      }

      a {
        color: black;

        &:visited {
          color: black;
        }

        &:hover {
          color: #575757;
        }
      }
    }

    h1, h3, p {
      margin: 0;
      padding: 0;
    }
  }
</style>

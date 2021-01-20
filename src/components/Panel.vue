<template>
  <div class="container">
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
        <br/>
        <div class="tag" v-for="tag in tags" v-bind:key="tag">{{ tag }}</div>
      </div>
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
          'Typescript',
          'Node.js',
          'React',
          'Vue',
          'Svelte',
          'AWS',
          'Google Cloud',
          'C#',
          '.Net Core',
          'Python'
        ]
      };
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px;
    max-width: 475px;


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
      margin: 40px auto;
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
        cursor: default;

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

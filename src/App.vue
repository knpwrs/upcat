<template>
  <v-app top-navbar>
    <header>
      <v-navbar>
        <v-navbar-logo>Vuetify</v-navbar-logo>
        <v-navbar-items>
          <v-navbar-item :item="item"></v-navbar-item>
        </v-navbar-items>
      </v-navbar>
    </header>
    <main>
      <v-content>
        <v-container fluid>
          <h1>Hello</h1>
          <p>Welcome to the Vuetify Webpack Template</p>
          <h2>Important Links</h2>
          <div class="intro">
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <a href="http://vuetifyjs.com" target="_blank">Vuetify Documentation</a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <a href="https://github.com/vuetifyjs/webpack-ssr" target="_blank">Vuetify SSR Webpack</a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <a href="https://github.com/vuetifyjs/webpack" target="_blank">Vuetify Webpack</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <a href="https://github.com/vuetifyjs/webpack-simple" target="_blank">Vuetify Webpack Simple</a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <a href="http://vuejs.org" target="_blank">Vue Documentation</a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <a href="https://github.com/vuejs/awesome-vue" target="_blank">Vue Awesome</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        item: {
          href: '#!',
          text: 'Get Started',
        },
      };
    },
    mounted() {
      this.$vuetify.init();
    },
  };
</script>

<style scoped>
  .intro {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
  }

  a {
    color: inherit;
  }

  .list {
    margin: 0 2rem;
  }

  main {
    text-align: center;
  }

  h1, h2 {
    text-align: center;
  }
</style>

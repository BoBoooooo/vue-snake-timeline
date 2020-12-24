<template>
  <div id="app">
    <VueSnakeTimeline @click="clickEvent" :items="items"> </VueSnakeTimeline>
  </div>
</template>

<script>
export default {
  name: "app",

  computed: {
    items() {
      return new Array(20).fill({
        top: "top",
        middle: "middle",
        bottom: "bottom",
      });
    },
  },
  methods: {
    clickEvent(event) {
      // eslint-disable-next-line no-console
      console.log(event);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

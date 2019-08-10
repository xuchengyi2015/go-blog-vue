<template>
  <div id="app">
    <vue-main />
  </div>
</template>

<script>
export default {
  name: "app",

  components: {
    "vue-main": () => import(`./views/main`)
  }
};
</script>

<style>
body {
  margin: 0px;
  background-color: #f9f9f5;
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  background-color: #3790cf;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0px;
  background-color: #f6f6f6;
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

<template>
  <div class="main">
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <div class="title">徐程意的博客</div>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="2">原创</el-menu-item>
        <el-menu-item index="3">精品转载</el-menu-item>
        <el-menu-item index="4">奇技淫巧</el-menu-item>
        <el-menu-item index="4">在线工具</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },

  methods: {
    // eslint-disable-next-line
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .menu {
    z-index: 1;
    position: fixed;
    width: 100%;
    .title {
      float: left;
      margin: 12px 20px 12px 30%;
      font-size: 25px;
    }
  }

  .content {
    padding-top: 70px;
  }
}
</style>


<template>
  <div class="main">
    <div class="menu">
      <el-row :gutter="10" style="background: white; border-bottom:1px solid #c1c0c0">
        <el-col :span="3" :offset="6">
          <div class="title">徐徐赵赵's</div>
        </el-col>
        <el-col :span="15">
          <template v-if="isPc">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              router
            >
              <el-menu-item index="/">博客首页</el-menu-item>
              <el-menu-item index="/aboutme">关于我</el-menu-item>
            </el-menu>
          </template>
          <template v-else>
            <el-button @click="drawer=true">=</el-button>
          </template>
        </el-col>
      </el-row>

      <el-drawer title="我是标题" :visible.sync="drawer">
        <span>我来啦!</span>
      </el-drawer>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
      drawer: false
    };
  },

  computed: {
    isPc() {
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array(
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      );
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
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
      margin-top: 13px;
      font-size: 25px;
    }
  }

  .content {
    padding-top: 70px;
    width: 99%;
  }
}
</style>


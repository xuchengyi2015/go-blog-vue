<template>
  <div class="about-me">
    <div class="title">Golang 杂耍学艺人</div>
    <div>
      <font-awesome-icon :icon="['fab', 'github']" />
      <a href="https://github.com/xuchengyi2015" target="blank">&nbsp;github.com/xuchengyi2015</a>
    </div>
    <div>
      <font-awesome-icon icon="blog" />
      <a href="https://goblog.xuxuzhaozhao.top" target="blank">&nbsp;goblog.xuxuzhaozhao.top</a>
    </div>
    <div>
      <font-awesome-icon icon="envelope" />&nbsp;xuchengyi2015@gmail.com
    </div>
    <div class="foot">在GitHub上本博客前后端已开源，还望各位大锅嘴下留情、温柔指导。</div>
  </div>
</template>

<style lang='scss' scoped>
.about-me {
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  a {
    text-decoration: none;
  }
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  .foot {
    margin-top: 10px;
    font-size: 10px;
  }
}
</style>
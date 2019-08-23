<template>
  <div>
    <el-card>
      <markdown-it-vue v-show="!showLoading" class="md-body" :content="content" />
      <vue-loading v-show="showLoading" type="barsCylon" color="#3790cf"></vue-loading>
    </el-card>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";

import { GetArticle } from "@/api/blog";
export default {
  components: {
    MarkdownItVue
  },

  data() {
    return {
      showLoading: true,
      content: ``,
      articleId: this.$route.params.id
    };
  },

  created() {
    this.getArticle();
  },

  methods: {
    getArticle() {
      GetArticle(this.articleId).then(res => {
        this.showLoading = false;
        this.content = res.data.content;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-loading {
  margin-top: 130px;
}
.el-card {
  width: 47%;
  margin: auto;
}
</style>
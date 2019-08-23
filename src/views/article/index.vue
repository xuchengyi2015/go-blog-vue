<template>
  <div class="real-article">
    <el-row :gutter="20">
      <el-col :offset="6" :span="9">
        <el-card>
          <markdown-it-vue
            ref="markdownTitle"
            v-show="!showLoading"
            class="md-body"
            :content="content"
          />
          <vue-loading v-show="showLoading" type="barsCylon" color="#3790cf"></vue-loading>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card class="title">
          <div style="margin-bottom:10px;font-weight:600;">{{title}}</div>
          <div id="title"></div>
        </el-card>
      </el-col>
    </el-row>
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
      articleId: this.$route.params.id,
      titles: [],
      title: ""
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
        this.title = res.data.title;

        setTimeout(() => {
          this.titles = this.$refs.markdownTitle.$el.childNodes;
          document.getElementById("title").append(this.titles[3]);
        }, 10);
      });
    }
  }
};
</script>

<style lang="scss">
.real-article {
  margin-top: 10px;
  margin-bottom: 10px;

  .title {
    position: fixed;
    left: 63%;
    top: 10px;
    a {
      text-decoration: none;
      color: #3790cf;
    }
    a:visited {
      color: #3790cf;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li {
      font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
      border-bottom: 1px solid #ccc;
    }

    li:last-child {
      border: none;
    }

    li:hover {
      cursor: pointer;
    }
  }
}
</style>
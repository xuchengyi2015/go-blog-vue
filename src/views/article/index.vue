<template>
  <div>
    <el-row :gutter="24">
      <el-col :offset="offset" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <markdown-it-vue class="md-body" :content="content" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";

export default {
  components: {
    MarkdownItVue
  },

  data() {
    return {
      content: ``,
      articleId: this.$route.params.id
    };
  },

  computed: {
    offset() {
      return this.IsPC() ? 6 : 0;
    }
  },

  created() {
    this.getArticle();
  },

  methods: {
    getArticle() {
      this.$http(`/api/v1/blog/${this.articleId}`).then(res => {
        if (res.data.status == 0) {
          this.content = res.data.data.content;
        } else {
          this.$message({
            type: "error",
            message: res.data.error
          });
        }
      });
    },

    IsPC() {
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
  }
};
</script>
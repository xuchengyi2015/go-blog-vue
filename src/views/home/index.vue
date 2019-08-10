<template>
  <div class="home">
    <el-row justify="center">
      <el-col :offset="6" :span="9">
        <div class="article-info" v-for="item in articles" :key="item.id">
          <el-card shadow="hover">
            <img src="https://s2.ax1x.com/2019/08/10/eLtzJs.md.jpg" />
            <div class="article-title">{{item.title}}</div>
            <div class="article-short">{{item.content}}</div>
            <div class="article-foot">
              {{item.created_at}}
              <el-button class="readAll" @click="readArticle(item.id)">阅读全文</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="4" style="position:fixed;right:20%">
        <div class="article-info" v-for="i in 2" :key="i">
          <el-card>
            <div>About me</div>
            <div>自诩为：Golang 杂耍大师</div>
            <div>下面是一些简介</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },

  created() {
    this.getArticles();
  },

  methods: {
    readArticle(id) {
      this.$router.push(`/article/${id}`);
    },

    getArticles() {
      const category = "all";
      this.$http(`/api/v1/blogs?category=${category}`).then(res => {
        this.articles = res.data.data;
        console.log(res.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .article-info {
    margin-bottom: 5px;
  }
  .article-title {
    font-size: 17px;
  }
  .article-short {
    margin-top: 5px;
    font-size: 15px;
    line-height: 20px;
    color: #969696;
  }
  .article-foot {
    line-height: 36px;
  }
  img {
    float: left;
    width: 140px;
    margin-right: 15px;
  }
  .readAll {
    padding: 10px;
    background: #3790cf;
    color: white;
    float: right;
  }
}
</style>


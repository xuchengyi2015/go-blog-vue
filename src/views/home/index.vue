<template>
  <div class="home">
    <el-row justify="center">
      <el-col :offset="6" :span="9">
        <div class="article-info card-left" v-for="item in articles" :key="item.id">
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
        <div class="article-info">
          <el-card>
            <div>About me</div>
            <div>Golang 杂耍大师</div>
            <div>github.com/xuchengyi2015</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
          </el-card>
        </div>

        <div class="article-info">
          <el-card>
            <div>分类 · 归档</div>
            <div>Golang (21)</div>
            <div>Vue (12)</div>
            <div>MariaDB (10)</div>
            <div>数据库 (25)</div>
            <div>杂谈 (5)</div>
          </el-card>
        </div>

        <div class="article-info">
          <el-card>
            <div>标签</div>
            <el-tag>ubuntu</el-tag>
            <el-tag type="success">redis</el-tag>
            <el-tag type="info">postgresql</el-tag>
            <el-tag type="warning">rabbitmq</el-tag>
            <el-tag type="danger">docker</el-tag>

            <el-tag type="success">sqlserver</el-tag>
            <el-tag type="info">c#</el-tag>
            <el-tag type="warning">topself</el-tag>

            <el-tag type="info">postgresql</el-tag>
            <el-tag type="warning">rabbitmq</el-tag>
            <el-tag type="danger">docker</el-tag>
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
      // this.$router.push();
      window.open(`/#/article/${id}`);
    },

    getArticles() {
      const category = "all";
      this.$http(`/api/v1/blogs?category=${category}`).then(res => {
        this.articles = res.data.data;
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
  .card-left {
    .el-card {
      height: 180px;
    }
  }
  .el-tag {
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>


<template>
  <div class="home">
    <el-row justify="center">
      <el-col :offset="6" :span="9">
        <div class="article-info" v-for="i in 20" :key="i">
          <el-card shadow="hover">
            <img
              src="https://laod.cn/wp-content/themes/begin/thumbnail.php?src=https://cdn.laod.wang/wp-content/uploads/2019/07/x01.jpg&w=280&h=210&a=&zc=1"
            />
            <div class="article-title">Golang之轻松化解defer的温柔陷阱</div>
            <div class="article-short">{{content}}</div>
            <div class="article-foot">
              2019-07-30
              <el-button class="readAll" @click="readArticle(i)">阅读全文</el-button>
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
      content:
        "相信大家经常会在豆瓣上查看某些电影、图书或者音乐的评论，以此来选择是否适合自己。而豆瓣几乎涵盖了所有资源信息，有大佬就在其上面整合了电影..."
    };
  },

  methods: {
    readArticle(id) {
      this.$router.push(`/article/${id}`);
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
    width: 160px;
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


<template>
  <div class="home">
    <el-row justify="center">
      <el-col :offset="6" :span="9">
        <div
          v-show="showArticle"
          class="article-info card-left"
          v-for="item in articles"
          :key="item.id"
        >
          <el-card shadow="always">
            <img :src="item.theme_image==''?defalutImage:item.theme_image" />
            <div class="article-title">{{item.title}}</div>
            <div class="article-short">{{item.brief}}</div>
            <div class="article-foot">
              {{item.created_at}}
              <el-button class="readAll" @click="readArticle(item.id)">阅读全文</el-button>
            </div>
          </el-card>
        </div>

        <vue-loading v-show="showLoading" type="barsCylon" color="#3790cf"></vue-loading>

        <div class="more">
          <el-button @click="loadMore">加载更多...</el-button>
        </div>
      </el-col>
      <el-col :span="4" style="position:fixed;right:20%">
        <div class="article-info right">
          <el-card>
            <div class="title">About me</div>
            <div>Golang 杂耍大师</div>
            <div>
              <i class="el-icon-home"></i>
              <a
                href="https://github.com/xuchengyi2015"
                target="blank"
              >https://github.com/xuchengyi2015</a>
            </div>
            <div>
              <i class="el-icon-home"></i>
              <a href="https://go.xuxuzhaozhao.top" target="blank">https://go.xuxuzhaozhao.top</a>
            </div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
            <div>全是废话废话废话废话废话</div>
          </el-card>
        </div>

        <div class="article-info right">
          <el-card>
            <div class="title">分类 · 归档</div>
            <ul>
              <li>Golang (21)</li>
              <li>Vue (21)</li>
              <li>MariaDB (21)</li>
              <li>数据库 (21)</li>
              <li>其他 (21)</li>
            </ul>
          </el-card>
        </div>

        <div class="article-info right">
          <el-card>
            <div class="title">标签</div>
            <tags @clickTag="getArticlesByTag" />
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tags from "./tags";
import { GetArticles } from "@/api/blog";
export default {
  components: {
    Tags
  },

  data() {
    return {
      defalutImage: "https://s2.ax1x.com/2019/08/13/mCmPAg.th.jpg",
      articles: [],
      currentOffset: 0,
      limit: 10,
      category: "all",
      currentTag: "",
      showLoading: true,
      showArticle: false
    };
  },

  created() {
    this.getArticles();
  },

  methods: {
    getArticles() {
      this.showLoading = true;
      this.showArticle = false;
      GetArticles({
        limit: this.limit,
        offset: this.currentOffset,
        category: this.category,
        currentTag: this.currentTag
      }).then(res => {
        this.showLoading = false;
        this.showArticle = true;
        this.articles = res.data;
      });
    },

    loadMore() {
      this.currentOffset += this.limit;
      this.showLoading = true;
      GetArticles({
        limit: this.limit,
        offset: this.currentOffset,
        category: this.category,
        currentTag: this.currentTag
      }).then(res => {
        this.showLoading = false;
        if (res.data == null || res.data.length == 0) {
          this.$message({ type: "warning", message: "没有更多的文章咯！" });
        } else {
          this.articles.push(...res.data);
        }
      });
    },

    getArticlesByTag(val) {
      this.currentTag = val;
      this.currentOffset = 0;
      this.getArticles();
    },

    readArticle(id) {
      window.open(`/#/article/${id}`);
    }
  }
};
</script>

<style lang="scss">
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
      position: relative;
      .article-foot {
        position: absolute;
        left: 175px;
        bottom: 16px;
        .el-button {
          margin-left: 280px;
        }
      }
    }
  }
  .more {
    margin-bottom: 30px;
    .el-button {
      width: 100%;
    }
  }
  .right {
    .title {
      margin-bottom: 10px;
    }
    .el-tag {
      cursor: pointer;
      margin: 0 10px 5px 0;
    }
    .el-tag:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
      transition: 0.3s ease;
    }
  }
  .readAll:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
    transition: 0.3s ease;
  }
}
</style>


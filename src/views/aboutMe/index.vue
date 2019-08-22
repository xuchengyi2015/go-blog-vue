<template>
  <div class="about-me">
    <el-card>
      <h1 style="margin-left:40%;">徐程意</h1>
      <img src="https://s2.ax1x.com/2019/08/20/mJ6G1P.jpg" />
      <div class="header">
        <div class="title">
          <h3>基本信息</h3>
        </div>
        <div class="description">
          <table>
            <tr>
              <td>电话</td>
              <td>18200394452</td>
            </tr>
            <tr>
              <td>出生年月</td>
              <td>1992-12</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>xuchengyi2015@mail.com</td>
            </tr>
            <tr>
              <td>毕业院校</td>
              <td>成都信息工程大学</td>
            </tr>
            <tr>
              <td>学历</td>
              <td>本科 2011-09~2015-07</td>
            </tr>
            <tr>
              <td>现居地</td>
              <td>成都高新西区</td>
            </tr>
          </table>
        </div>
        <div class="title">
          <h3>择业目标</h3>
        </div>Golang 服务端 开发工程师
      </div>
      <div class="main">
        <div class="professional">
          <div class="title">
            <h3>专业技能</h3>
          </div>
          <div class="content">
            <ul>
              <li>两年 golang 开发经验，了解gin与beego，主要使用gin/gorm开发后台（2017.06 ~ 至今）</li>
              <li>熟悉 golang 协程，并基于此开发了一个控制端的聊天室（https://github.com/xuchengyi2015/go-chatroom）</li>
              <li>三年 vue 开发经验，主要使用element/vue-material开发前端（2016.01 ~ 至今）</li>
              <li>五年 .net 后端开发经验（2014-3 ~ 至今）</li>
              <li>简单了解 java，用其做过自动生成gorm的model模型</li>
              <li>熟悉 sqlserver、mysql 与 redis、rabbitmq</li>
              <li>熟悉 linux 开发环境，两年vim编辑器使用经验，熟悉常用的vim命令</li>
            </ul>
          </div>
        </div>
        <div class="experience">
          <div class="title">
            <h3>工作经历</h3>
          </div>
          <div class="project">
            <div class="company">
              成都名门汇信息技术有限公司
              <span>2016-11~2019-08</span>
            </div>
            <div class="description">
              <div class="grey">主要产品：【木门工厂定制ERP】、【TopSolid3维软件扩展开发】、【柜大师定制软件】</div>
              <div class="grey">主要职责：【带领6人团队开发关键业务项目 / 负责新项目技术选型及优化重构现有项目】</div>
              <div class="grey">部分项目经验：</div>
              <div>
                <div>
                  <i class="el-icon-collection-tag"></i>梦天木门中间服务器(主要技术框架：golang + rabbitmq + cron)
                  <ul>
                    <li>在ERP中上传某类特殊文件（.top文件）时，自动处理上传文件服务器的负载均衡；</li>
                    <li>使用golang原生包【.net/http】创建分布式（1master 5slave）上传文件系统；</li>
                    <li>同时使用【rabbitmq】队列处理极耗时并且实时要求不高的业务需求；</li>
                    <li>并且能与多个接口调用者共享通信；</li>
                    <li>基于cron，使用【robfig/cron】开源包处理定时服务；</li>
                    <li>微服务 centos 7 的 docker 上部署；</li>
                  </ul>
                </div>
                <div>
                  <i class="el-icon-collection-tag"></i>江山欧派木门库存管理系统(主要技术框架：golang + mysql + redis + vue)
                  <ul>
                    <li>前期一人负责后端的架构设计与代码编写，采用golang作为后端语言</li>
                    <li>负责提供与第三方公司对接库存系统的api接口（基于RESTful）</li>
                    <li>整个项目基础数据全部使用redis作缓存处理;</li>
                    <li>编写自动生成工具，输入表名后自动生成模型文件与规范化的增删改查方法；</li>
                    <li>带领团队完成其他业务模块的创建与部署维护；</li>
                  </ul>
                </div>
                <div>
                  <i class="el-icon-collection-tag"></i>3D、冠牛、三峰等多家木门工厂定制ERP(主要技术框架：.net + sqlserver + redis + vue)
                  <ul>
                    <li>负责整个项目的基础架构，使用vue框架处理前端webapi处理后端;</li>
                    <li>搭建基础架构包括基于角色与具体用户的【url权限】，【菜单权限】，【字段权限】的权限管理;</li>
                    <li>采用apicontroller的筛选器处理异常,日志记录与分析;</li>
                    <li>优化整个项目非业务数据，基于redis的内存缓存，使项目部署后系统访问效率提升30%以上；</li>
                    <li>主要编写ERP的【权限管理】，【订单及生产管理】，【财务管理】，【库存与盘点管理】；</li>
                  </ul>
                </div>......
              </div>
            </div>
          </div>
          <div class="project">
            <div class="company">
              四川众付金服信息科技有限公司
              <span>2015-07~2016-11</span>
            </div>
            <div class="description">
              <div class="grey">主要产品：【众付金服APP】、【信用刷卡分润管理系统】，主要提供【信用卡套现】服务</div>
              <div class="grey">主要职责：【负责完成后端功能开发】</div>
              <div class="grey">部分项目经验：</div>
              <div>
                <div>
                  <i class="el-icon-collection-tag"></i>众付金服APP(主要技术框架：.net + sqlserver + 微信小程序、公众号)
                  <ul>
                    <li>编写接通市场上某几个知名的支付品牌的接口;</li>
                    <li>设计并创建MySql及SqlServer其中跟支付相关的数据表并部署到阿里金融云;</li>
                    <li>开发包括但不限于跟用户注册，用户支付，支行查询，余额查询，T0提现等20多个接口;</li>
                    <li>利用ASP.NET WebForm开发后台管理系统的权限管理及部门管理等功能；</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="opensource">
          <div class="title">
            <h3>开源项目及作品</h3>
          </div>

          <div class="project">
            <div class="company">go-blog 开源博客</div>
            <div class="grey">基本上就是后端（golang、mysql） + 前端（vue、nodejs）形成的一套可快速开发项目的框架了。</div>
            <div>
              <font-awesome-icon :icon="['fab', 'github']" />&nbsp;go-blog：
              <a
                href="https://github.com/xuchengyi2015/go-blog"
              >https://github.com/xuchengyi2015/go-blog</a>
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'github']" />&nbsp;go-blog-vue：
              <a
                href="https://github.com/xuchengyi2015/go-blog-vue"
              >https://github.com/xuchengyi2015/go-blog-vue</a>
            </div>
          </div>
          <div class="lastproject">
            <div class="company">一次挽救中了勒索病毒的服务器</div>
            <div class="grey">一次挽救中了勒索病毒的服务器，帮助公司挽回至少150万的损失。</div>
            <div>
              <font-awesome-icon icon="link" />&nbsp;
              <a
                href="https://goblog.xuxuzhaozhao.top/#/article/1"
              >https://goblog.xuxuzhaozhao.top/#/article/1</a>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang='scss' scoped>
.about-me {
  position: relative;
  img {
    position: absolute;
    top: 82px;
    right: 31%;
    border-radius: 50%;
    width: 120px;
  }
  h3 {
    margin: auto;
    border-left: 3px solid #3790cf;
    padding-left: 10px;
  }
  .el-card {
    margin: auto;
    width: 47%;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .grey {
    font-size: 14px;
    color: #7c8084;
    margin-left: 15px;
    margin-bottom: 5px;
  }
  .company {
    margin-bottom: 5px;
  }
  ul {
    margin-top: 5px;
  }
  table {
    width: 100%;
  }
  .company {
    font-weight: 600;
  }
  .lastproject {
    margin-top: 10px;
  }
}
</style>
---
title: 建站06-添加功能
subtitle: 
date: 2021-08-31 12:56:50
categories: 
tags: 
 - [hexo]
 - [butterfly]
keywords: 
description: 
cover: false
end: false
author: 惊蛰
authorl: 2952068332@qq.com
typeset: 惊蛰
editor: false
copy_info: false
toc_number: true
---

# 查漏补缺教程合集

## 样式美化

⭐来自主题原作者：[Butterfly 美化/優化/魔改 教程合集](https://butterfly.js.org/posts/7670b080/)
[小康博客-Hexo 安装并使用 Butterfly 主题](https://www.antmoe.com/posts/75a6347a/index.html)

## 环境配置、样式美化、功能增加、网站加速

[过客～励む-Hexo+github 搭建博客 (超级详细版，精细入微)](https://yafine-blog.cn/posts/4ab2.html)
[史上最全的Hexo博客搭建配置完全指南_云玩家-CSDN博客](https://blog.csdn.net/qq_42579187/article/details/104760516)

[Butterfly主题更新总结 | MuJin's Blog](https://xiabor.com/4215.html)
[next主题-数据统计、站内搜索、热门文章排行榜、豆瓣阅读 / 电影 / 游戏、在线聊天、行为监测与反馈、文章评分](http://yearito.cn/posts/hexo-advanced-settings.html)

# 一、引擎优化篇

## （一）访问加速

### CDN加速

作用
:   将网站图片、视频、字体等可能在网站仓库占用体积大的资源放入一个新的云仓库，如`GitHub Repo`，为部署网站减负。
:   加速访问`GitHub`、`npm`、`wordpress`的`js`插件或资源目录。

官网：https://www.jsdelivr.com/
使用教程：[好用的jsDelivr](https://www.cnblogs.com/murenziwei/p/12747311.html)；[如何使用jsDelivr+Github 实现免费CDN加速?](https://zhuanlan.zhihu.com/p/346643522)

### 跳过HEXO的渲染

[MuJin's Blog-Hexo大结局](https://xiabor.com/714f.html)

## （二）双线部署+自动部署教程

### 镜像备份

[Gitee导入Github仓库并同步更新_theONLY的博客-CSDN博客](https://blog.csdn.net/m0_46157986/article/details/109530672)

[仓库镜像管理 Gitee↔Github双向同步](https://gitee.com/help/articles/4336)

### Travis CI+语雀自动部署

{% tabs c,1 %}

<!-- tab 参考教程 -->
整体步骤移步

- 配置逻辑：[使用Travis CI自动部署Hexo博客 | IT范儿](http://www.itfanr.cc/2017/08/09/using-travis-ci-automatic-deploy-hexo-blogs/)另一地址：[使用Travis CI自动部署Hexo博客 - 酷小孩 - 博客园](https://www.cnblogs.com/babycool/p/7326722.html)
- 自定义commit内容：①时间[博客折腾记：使用 Travis CI 自动部署博客 | 算法花园](http://xiang578.com/post/use-travis-ci-to-auto-build-blog.html)②数字，邮件通知[构建指定仓库_使用Travis CI自动构建和部署你的GitBook](https://blog.csdn.net/weixin_42465158/article/details/112720613)
- 通配变量名：[使用TRAVIS-CI自动部署GITHUB上的项目 - 灰信网](https://www.freesion.com/article/80151075945/)；[利用Travis CI+GitHub实现持续集成和自动部署 - 知乎](https://zhuanlan.zhihu.com/p/85175312)
- 设置操作系统：[The Travis CI Blog: Windows is Available (Early Release)](https://blog.travis-ci.com/2018-10-11-windows-early-release)
- 设置语言版本：["nvs add stable" fails on Windows](https://github.com/jasongin/nvs/issues/122#issuecomment-455864030)

可以在[travis的项目页](https://app.travis-ci.com/)点击`Build History`-`Build job`查看执行记录，也可以通过设置邮件通知直达执行记录。
<!-- endtab -->

<!-- tab Travis CI配置文件 -->
在网站源码分支根目录下创建`.travis.yml`
```yml
language: node_js # 设置语言
node_js: node # 设置相应版本
os: windows # 操作系统
cache:
  apt: true
  directories:
    - node_modules # 缓存不经常更改的内容
# 邮件通知成功或是失败
notifications:
  email:
    recipients:
      - 2952068332@qq.com
      - 2498274282@qq.com
    on_success: always # 默认值 change
    on_failure: always # 默认值 always

before_install:
  - export TZ='Asia/Shanghai' # 更改时区
  - npm install hexo-cli -g # 安装依赖
install:
  - npm install # 安装hexo及插件
script:
  - hexo clean # 清除
  - hexo g # 生成
#前5句保护部署分支的.git文件夹，用于保留历史部署的commit日志，否则部署分支永远只有一条commit记录
#变量在Travis中配置Environment Variables
after_script:
  - git clone https://${GH_REF} .deploy_git
  - cd .deploy_git
  - git checkout master
  - cd ../
  - mv .deploy_git/.git/ ./public/
  - cd ./public
  - git config user.name "${U_NAME}"
  - git config user.email "${U_EMAIL}"
  - git add .
  - git commit -m "Travis CI AutoUpdate `date +"%Y-%m-%d %H:%M"`"
  - git push --force --quiet "https://${Travis_Token}@${GH_REF}" master:master #部署Github Pages

branches:
  only:
  - hexo # 只监测hexo分支
```
<!-- endtab -->
{% endtabs %}

## （三）css、js等源码优化

[CSS优化](https://blog.csdn.net/weixin_42441117/article/details/81060497)；[css优化，js优化以及web性能优化](https://blog.csdn.net/lululul123/article/details/76167861)；[CSS3性能优化](https://blog.csdn.net/qq_35401191/article/details/81639109)
[CSS整理与优化工具](http://www.mb5u.com/tool/cssjianfei/)

[js批量设置style属性_lean1252的专栏-CSDN博客](https://blog.csdn.net/lean1252/article/details/83874710)

## （四）SEO优化

[LaTeX - 从出门到掉坑](https://zhuanlan.zhihu.com/p/42278823)

# 二、细节功能篇

## 永久文章链接

方案1：_config.yml配置或Front-matter指定[永久链接（Permalinks）](https://hexo.io/zh-cn/docs/permalinks)
方案2：插件[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)实现[Hexo 生成永久文章链接](https://zhuanlan.zhihu.com/p/134492757)

## 不蒜子访问统计

Butterfly已集成不蒜子，可选侧边栏网站资讯、文章信息处阅读量。

可在任何想放置访问信息的地方（页脚或其他页面位置）加入代码,但要修改适配文件语法格式。
教程：[hexo添加live2d看板娘和不蒜子访问统计](https://blog.csdn.net/erhuobuer/article/details/95305495)

{% tabs b,-1 %}

<!-- tab swig代码参考 -->
参考[Hexo 页脚增加网站运行时间统计](https://blog.csdn.net/qq_39720594/article/details/105411030)
<!-- endtab -->

<!-- tab pug代码参考 -->
参考[impressionyang-为主题用pugjs编写的hexo博客添加网站运行时间](https://cloud.tencent.com/developer/article/1687643)来设置。

{% codeblock lang:pug %}
div
  span#timeDate 载入天数...
  span#times 载入时分秒...
  script.
    var now = new Date();
    function createtime() {
    var grt= new Date("08/13/2018 00:00:00");
    now.setTime(now.getTime()+250);
    days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
    document.getElementById("timeDate").innerHTML = "本站已安全运行 "+dnum+" 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    }
    setInterval("createtime()",250);
{% endcodeblock %}

修改`var grt= new Date("08/13/2018 00:00:00");`中的起始时间即可。
<!-- endtab -->

<!-- tab 网站运行天数代码 -->
参考[网站运行天数代码](https://www.cnblogs.com/shenjingwa/p/14465251.html)
<!-- endtab -->
{% endtabs %}

## 在线聊天

### Tidio

[Tido](https://www.tidio.com/)
[Tidio Live Chat 安装到Shopify店铺的步骤](https://www.cifnews.com/tag/tidiolivechat)

## 首页磁贴卡片

分类磁贴、GitHub提交日历、置顶文章轮播、双栏文章布局、那年今日磁贴、电子时钟磁贴等各类内容

- Akilar{% btn 'https://akilar.top/posts/a9131002/',基于Butterfly主题的分类磁贴 %}
- 小冰{% btn 'https://zfe.space/post/hexo-butterfly-orchid.html',小冰插件包 butterfly-orchid 1.0 %}

## 分页展示内容

- liyang[hexo博客添加一级分类相册功能](https://liyangzone.com/2019/07/22/hexo%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0%E4%B8%80%E7%BA%A7%E5%88%86%E7%B1%BB%E7%9B%B8%E5%86%8C/)

# 三、魔改源码篇

## 关于代码含义的教程

《一只看不懂函数名含义只会画瓢的小松鼠囤的干货》

JS/JQuery文件

- [你应该会喜欢的5个自定义 Hook-Segmentfault思否](https://segmentfault.com/a/1190000039182220)

- JQuery事件的含义：[JS里addEventListener和on的区别_打杂人-CSDN博客](https://blog.csdn.net/aerchi/article/details/80017942)

styl/Stylus文件

- [Stylus 教程 - 蝴蝶教程](https://www.jc2182.com/stylus/stylus-jiaocheng.html)

## 多设备显示适配

- [媒体查询，响应式布局设计_火兰的博客-CSDN博客](https://blog.csdn.net/qq_47443027/article/details/115415455)

- [JS 获取和监听屏幕方向变化（portrait / landscape）](https://www.bbsmax.com/A/A2dmxKAn5e/)

## 文章页sidebar侧边栏目录

`addListener`已弃用，参考[javascript - matchMedia().addListener marked as deprecated, addEventListener equivalent? - Stack Overflow](https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent)的回答修改。

# 可选插件

网站根目录下的`package.json`内的`dependencies`是所有`npm install * --save`（`*`通配插件名）以及手动写入的插件依赖。

- [GitHub - xbotao/hexo-admin-qiniu: 根据hexo-admin@2.2.0进行修改，添加粘贴图片上传至七牛](https://github.com/xbotao/hexo-admin-qiniu)

---
title: 建站07-butterfly主题样式魔改记录
subtitle: 
date: 2021-08-31 12:57:11
categories: 
tags:
 - [hexo]
 - [butterfly]
keywords: 
description: 
top_img: 
cover: false
end: false
author: 惊蛰
authorl: 2952068332@qq.com
typeset: 惊蛰
editor: false
copy_info: false
toc_number: true
---

# 零、优秀博客

字体排版

- 书籍：[Life | reuixiy (io-oi.me)](https://io-oi.me/life/)
- 英文： https://cupcake.nilssonlee.se/
  - 标题：[Bitter Regular](https://www.likefont.com/font/2570498/)
  - 正文：[Parastoo Regular](https://www.likefont.com/font/6207496/)[Merriweather Regular](https://www.likefont.com/font/2941964/) [Martel Regular](https://www.likefont.com/font/13830151/)

设计

[KENJI ENDO](https://link.zhihu.com/?target=http%3A//kenjiendo.com/)

[UP2017预热站](http://up.qq.com/act/a20170301pre/index.html)

[3D粒子效果在网页端实现分享](https://gameinstitute.qq.com/course/detail/10047)

[粒子流动特效](http://www.spielzeugz.de/html5/liquid-particles-3D/)

[液态星球](https://alteredqualia.com/xg/examples/nebula_artefact.html)

内容

[css_零一的博客-CSDN博客](https://blog.csdn.net/l_ppp/category_9968994.html)

# 一、修改方式

### A. 修改源码

参看官方文档。修改主题目录下的index.sty文件。

### B. 引入injectcsshead/jsbottom文件

优点：[保持源码，稳定性高，可以平滑升级](https://www.antmoe.com/posts/7198453/index.html)

注意：

1、代码缩进，每层级两空格。[yml/yaml在线校验](https://www.bejson.com/validators/yaml_editor/)

2、个人文件/图片放在根目录的/source/中，才不会被覆盖。图片：/source/images/

# 二、样式选择

## （零）主题选择

[Hexo-Next 主题博客个性化配置](https://blog.csdn.net/as480133937/article/details/100138838/)

♥ [个性化设置](https://zhuanlan.zhihu.com/p/129618255) [悟尘记-](https://www.lixl.cn/2019/092856736.html)[matery主题](https://www.lixl.cn/2019/092856736.html)[深度优化](https://www.lixl.cn/2019/092856736.html)

[Hexo Sakura](https://docs.hojun.cn/sakura/docs/#/) [Hexo Sakura主题美化 超详细](https://www.sakura521.cn/technology/sakurameihua.html)

> 好的也就是说利于seo的模板应该具备以下几种条件：
> 
> 1.模板的性能好，也就是说网站的速度快。
> 
> 2.同样模板的网站最好不要太多，因为模板也是影响网站原创度的一部分。如果太多人使用同样的模板，而你的网站内容又是一个原创度不高的网站，那么很有可能会影响你对搜索引擎的友好度。
> 
> 至于zblog和wordpress程序本身对seo的影响，其实并不能分出上下。
> 
> 当然，虽然模板主题对seo有影响，但影响其实并不大，可以说是非常的小。所以说，我们在运营网站的时候不能舍本逐末了，内容才是一个网站好坏的根源。搜索引擎的工作是把用户需要的内容展现给用户，我们要做的就是生产用户需要的内容，其他的的都是锦上添花。
> 
> <small>来源：[zblogphp好用吗？个人站长使用zblog和wordpress对比后我的选择-搜赚吧博客](https://www.souzhuanba.com/142.html)</small>

## （一）配色方案

[图片渐变](https://webgradients.com/)

[背景生成器](https://coolbackgrounds.io/)

[波形背景生成器](https://getwaves.io/)

[几何动态背景](http://matthew.wagerfield.com/flat-surface-shader/)

[对称的渐变线条](https://www.163.com/dy/article/GE9NBVFJ0525KO0P.html)

[故障特效生成器](https://www.163.com/dy/article/GE9NBVFJ0525KO0P.html)

[涂鸦GIF](https://flipanim.com/)

[动效英文生成器](https://spacetypegenerator.com/)

[阅读模式的颜色–文字和背景的配色](http://www.360doc.com/content/17/0926/15/26037923_690337877.shtml)

## （二）字体选择

[Hexo自定义字体（Matery主题与Butterfly主题）](https://blog.csdn.net/m0_46296826/article/details/115350456)

[国内web font](https://www.zhihu.com/question/48303638)

全局

[黑石博客-给博客优雅地加上谷歌思源宋体](https://www.heson10.com/posts/16283.html)：[添加Google fonts思源宋体](https://immmmm.com/noto-serif-sc-by-google-fonts/)，[google fonts思源宋体、思源黑体引用路径](https://cloud.tencent.com/developer/news/402607)，font-family[引用方法](https://m.veeqi.com/gl/7421.html)

[优点与缺陷：HarmonyOS Sans系统默认字体](https://www.bilibili.com/read/cv11653743/)

[古越轩粗明体](https://cdn.res.webfont.com/fonts/230.html)

[阿里巴巴普惠体在项目中的使用](https://juejin.cn/post/6844904110748090381)

[https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900|Noto+Serif+SC:200,300,400](https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900|Noto+Serif+SC:200,300,400)

标题

[李亲湖篆体](https://cdn.res.webfont.com/fonts/48429.html)

[汉仪铁山隶书简](https://cdn.res.webfont.com/fonts/47519.html)

## （三）光标选择

⭐[Bibata 鼠标指针套装](https://zhutix.com/ico/bibata-curspack/)蓝橙黑白绿粉红

[水滴灰蓝简约光标](https://zhutix.com/ico/launa-cu/)

[XP蓝橙双色简约大光标](https://zhutix.com/ico/implify-xp-windows-cursors/)

[渐变黑橙MMXX简洁光标](https://zhutix.com/ico/mmxx/)

[夏目友人帐猫咪老师鼠标指针](https://zhutix.com/ico/xm-mmls/)

[Rainbow Rain Cursor可爱多色云](https://zhutix.com/ico/rainbow-rain-cursor/)

# 三、修改方法

## （一）代码配置教程

- 官方：[butterfly主题配置2](https://butterfly.js.org/posts/ceeb73f/)-Waline；详细解说：[张小驰出没-Butterfly美化](https://blog.csdn.net/qq_43740362/article/details/113783074)

- [小康博客-优雅使用iconfont图标](https://www.antmoe.com/posts/80c43671/)；[优雅修改背景与透明度](https://www.antmoe.com/posts/7198453/index.html)；[小康优雅魔改系列](https://blog.csdn.net/u012208219/article/details/106883001/?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.control&amp;spm=1001.2101.3001.4242)

- [乐特-外部引用 JS、CSS 覆盖](https://butterfly.lete114.top/article/Butterfly-config.html)评论框样式优化、a 标签/首页标题/页脚自定义文本颜色、光标样式、滚动条、打字效果渐变、气泡

- ⭐[Akilar-Hexo 自定义样式魔改思路及示例](https://akilar.top/posts/ebf20e02/)字体样式、版块/元素显隐、元素透明度、侧栏按钮缩进、夜间/阅读模式、随机背景/Banner、光标样式、动态标签栏文字

- [修改card卡片颜色](https://blog.csdn.net/Aealen/article/details/105613567)

- ⭐[CSS3自定义滚动条样式 -webkit-scrollbar](https://www.xuanfengge.com/css3-webkit-scrollbar.html)

### 动效

- [CSS3的过渡效果，使用transition实现鼠标移入/移出效果](https://www.cnblogs.com/ypppt/p/13079626.html)
- ⭐[CSS3变形和动画：旋转、扭曲、缩放、位移、矩阵 、原点 transform-origin、过渡属性 transition-property、过渡所需时间 transition-duration、过渡函数 transition-timing-function、过渡延迟时间 transition-delay、Keyframes、调用动画、设置动画播放时间、设置动画播放方式、设置动画开始播放的时间、设置动画播放次数、设置动画播放方向、设置动画的播放状态、设置动画时间外属性](https://blog.csdn.net/xxssyyyyssxx/article/details/53127784)<small>文章还推荐了一个人工智能科普网站</small>
- [前端实现动画效果的几种方式](https://blog.csdn.net/weixin_44220680/article/details/101446841?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-10.control&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-10.control)
- [css3给背景图片加颜色遮罩](https://www.jb51.net/css/700508.html)
- [CSS文字镂空描边效果](https://blog.csdn.net/qq_16687863/article/details/103453293) [透明、模糊、镂空、渐变、图层](https://blog.csdn.net/qq_39327418/article/details/83039249?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-3.control&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-3.control) [CSS美化页面（字体样式、文本样式、文本阴影、超链接伪类、列表样式、网页背景、CSS3渐变）](https://blog.csdn.net/baolingye/article/details/92800916?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-10.control&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-10.control)

[CSS创建镂空边框设计](https://blog.csdn.net/cune1359/article/details/106847630/?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.control&amp;spm=1001.2101.3001.4242)

[Vue粒子特效（vue-particles插件）](https://www.jianshu.com/p/53199b842d25)

[漫天飞雪前端特效](http://www.lanpangzi.life/a/276.html)

[星空粒子特效particles.js](https://marcbruederlin.github.io/particles.js/) [使用及配置](https://www.cnblogs.com/wangyihong/p/8618305.html)

[AnimPen-css/canvas前端特效](https://zhuanlan.zhihu.com/p/373618057)

[基于Hexo的Butterfly下自定义指定首页文章卡片高度](https://blog.zhheo.com/p/77ebd8b5.html)

[卡通模型、不使用主题模板渲染的独立页面（相册、作品集）等美化特效的css/js代码](https://www.itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/)

[时间轴添加十二生肖图标](https://akilar.top/posts/22257072/)

[Butterfly 侧边栏引入一言、自定义页面](https://kangblogs.top/2020/08/06/Blog-13/)

9、[3D文字特效hover外翻](https://www.mekau.com/3957.html)

[CSS实现一个粒子动效的按钮](https://github.com/XboxYan/notes/issues/16)

[CSS文字下波浪线动画效果](https://blog.csdn.net/wewfdf/article/details/100081059?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-9.control&amp;spm=1001.2101.3001.4242)

[3D正方体演示旋转动画](https://www.html5tricks.com/html5-3d-cube-image.html)

[valine评论移植；关于页boyui对话框式简介](https://blog.csdn.net/cungudafa/article/details/105699384)

[Valine评论；在线聊天；分析统计；广告；网站验证；hexo-douban插件；Pjax](https://blog.csdn.net/qq_38157825/article/details/112783083)

## （二）魔改

Butterfly主题源码修改——主题文件夹下的文件。

在浏览器的网站页按<kbd>F12</kbd>调出调试模式，可直观找到所要更改元素的代码。

语法参考：

- pug(jade)和ejs格式：[nodeJS的主流模板----jade和ejs的使用](https://blog.csdn.net/zhanghuiqi205/article/details/78570946)
- 各种pug语法教程：[pug模板引擎(原jade)](https://www.cnblogs.com/xiaohuochai/p/7222227.html)；[Github-pugjs](https://github.com/pugjs/pug)；[HTML的模板引擎：pug模板语法](https://zhuanlan.zhihu.com/p/143240842)；[Jade/Pug学习（三）之语法规则下 - 坤嬷嬷 - 博客园](https://www.cnblogs.com/kunmomo/p/11252282.html)
- 设置文本样式：[Span 介绍及使用（二）](https://blog.csdn.net/litengit/article/details/50945357)；[使用Span实现各种酷炫效果](https://blog.csdn.net/jiashuai94/article/details/78742281)

### 混合布局：横排多栏+竖排内容

全局：（内容）`/layout/includes/layout.pug`（结构位置）`/source/css/_page/common.styl`

正文卡片：`/source/css/_layout/post.styl` 分页：`/layout/page.pug` 首页：`/layout/index.pug`

参考解释：

- [GitHub - xiaoxiaohappy/CSS-Layout: CSS布局 flex布局（骰子布局，含响应式设计的圣杯布局，网格布局），普通、混合布局](https://github.com/xiaoxiaohappy/css-layout)

- [详解 CSS 七种三栏布局技巧](https://zhuanlan.zhihu.com/p/25070186)

### 适配宽度max-width

`/source/css/_page/common.styl`，`/source/css/_layout/post.styl`

### 默认配色

整体：`/source/css/var.styl`，
功能组件：`/source/css/_global/index.styl`-滚动条`*::-webkit-scrollbar`，标题`h1`,`h2`,`h3`,`h4`,`h5`,`h6`，分割线`hr`，

夜间模式：`/source/css/_mode/darkmode.styl`

阅读模式：`/source/css/_mode/readmode.styl`

代码高亮：`/source/css/_highlight/theme.styl`

### 导航栏

内容信息：`/layout/includes/header/menu_item.pug`

布局样式：

移动端：`/layout/includes/sidebar.pug` 

### 页面banner顶部图top_img

`/layout/includes/header/index.pug`

### 首页文章卡片

`/source/css/_page/homepage.styl`修改卡片样式。

```styl
    & >.recent-post-info
      display: inline-block
      overflow: hidden
      padding: 0 40px
      width: 60%
```

`/layout/includes/mixins/post-ui.pug`修改展示文字 。

### 侧边栏仅保留某模块

去主题的`_config.yml`设置`hide`，再去`aside.styl`定位`hide`，将`.layout`改为`.page .layout`。

### 右下角按钮

`/layout/includes/rightside.pug`进行修改。 

### 页脚网站信息

对主题文件夹下的`/layout/includes/footer.pug`进行修改。

### 每页单独配置背景图

参考教程：[糖果屋微调合集 | Akilarの糖果屋](https://akilar.top/posts/23fdf850/)

### 文章相关信息

`/layout/includes/header/post-info.pug`修改信息。

### 字数统计和阅读时长

显示文字：[(swig格式)Hexo添加字数统计、阅读时长](https://www.jianshu.com/p/baea8c95e39b)
文章页侧边栏、首页文章列表标题上方：[(ejs格式)Hexo博客(18)添加字数和阅读时长统计](http://devgou.com/article/hexo-18-wordcount/)

### 版权声明

修改`/layout/includes/post/post-copyright.pug`和`/source/css/_layout/post.styl`。

代码解析：[Hexo建站 | 魔改01-增加一键复制markdown文章链接按钮 - 茶哩哩 - 博客园](https://www.cnblogs.com/martin-1/p/15008844.html)
参考教程：[butterfly版权美化教程 | 小N博客](https://www.nesxc.com/post/hexocc.html)

### 上一篇下一篇

`/layout/includes/pagination.pug`、`/layout/post.pug`和`/source/css/_page/pagination.styl`。

### 文章页标签

`/source/css/_layout/post.styl`-`.tag_share`

### 定制分享按钮

内容：[Share.js自述文件](https://codechina.csdn.net/mirrors/overtrue/share.js)

样式：`/source/css/_layout/post.styl`-`.post_share`

### 

# 四、移植主题

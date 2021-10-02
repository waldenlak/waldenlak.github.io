---
title: 建站04-hexo、butterfly文件夹结构
subtitle: 
date: 2021-08-31 12:52:42
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
toc_number: false
---

# 一、站点文件夹

## （一）文件夹结构

`.github`
`node_modules`：插件文件夹
`public`：要部署的文件（夹）
`scaffolds`：静态文件`Front-matter`模板。md文件最上方以`---`分隔的区域的配置。
:   `draft.md`：草稿配置
:   `page.md`：页面配置Page Front-matter
:   `post.md`：正文配置Post Front-matter

`source`
`themes`：主题文件夹
`_config.yml`：站点配置文件。修改后要执行`hexo clean`。
`.gitignore`：配置部署时忽略的文件（夹）
`package.json`：所用插件版本

## （二）站点配置

{% hideToggle 根目录下的_config.yml的代码 %}

自定义：

```yml
# Site 网站的个性化描述
title: 浮光河 # 网站标题
subtitle: '' # 网站副标题
description: 'Gardez-le chaud,continuez' # 网站描述
keywords: # 网站关键字
author: 惊蛰 # 网站作者
language: zh-CN # 网站使用的语言，默认 en
timezone: 'Asia/Shanghai' # 网站使用的时区，默认 计算机的预设置 ，可不填
```

改动少：

```yml
# URL 文章 URL的设置 Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: [https://waldenlak.github.io](https://waldenlak.github.io/) # 网站的网址
root: / # 网站的根目录/存放文章的目录
permalink: :year/:month/:day/:title/ # 文章的链接格式，默认 :year/:month/:day/:title/
permalink_defaults: # 永久链接中每个段的默认值
pretty_urls:
trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
trailing_html: true # Set to false to remove trailing '.html' from permalinks
# Directory 文件夹的设置
source_dir: source # 资源文件夹 ，存放用户的资源文件，默认 source
public_dir: public # 公用文件夹 ，存放生成的静态文件，默认 public
tag_dir: tags # 标签目录 ，默认 tags
archive_dir: archives # 档案目录 ，默认 archives
category_dir: categories # 分类目录 ，默认 categories
code_dir: downloads/code # 代码目录 ，默认 downloads/code
i18n_dir: :lang # i18n 目录 ，默认 lang
skip_render: # 储存站长验证文件，跳过指定文件的渲染
```

按需调整：

```yml
# Writing写作设置
new_post_name: :title.md # 文章的文件名格式 File name of new posts，默认 title.md
default_layout: post  # 预设的布局模板，默认 post   
titlecase: false # 标题是否使用首字母大写 Transform title into titlecase，默认 false
external_link: # 链接是否在新标签页中打开，默认 true    
    enable: true # 在新标签页打开外部链接 Open external links in new tab
    field: site # Apply to the whole site
    exclude: ''
filename_case: 0 # 将文件名转换为 1 小写 或 2 大写，默认 0
render_drafts: false # 是否显示渲染草稿，默认 false
post_asset_folder: false # 是否启用 Asset 文件夹，默认 false
relative_link: false # 是否建立相对于根文件夹的链接，默认 false
future: true # 是否显示未来文章，默认 true
highlight: # 代码块设置
    enable: true # 是否使用代码高亮 ，默认 true
    line_number: true # 是否显示行号 ，默认 true
    auto_detect: false # 是否自动检测语言 ，默认 false
    tab_replace: '' # tab 替代设置
    wrap: true
    hljs: false
prismjs:
    enable: false
    preprocess: true
    line_number: true
    tab_replace: ''

# Home page setting首页设置
#path: Root path for your blogs index page. (default = '')
#per_page: Posts displayed per page. (0 = disable pagination)
#order_by: Posts order. (Order by date descending by default)
index_generator:
path: '' # 首页的根目录路径（默认 ''）
per_page: 12# 每页显示文章的数量，默认 10（0=首页不分页）
order_by: -date# 显示文章的顺序，默认 -date（日期降序新到旧）

# Category & Tag分类和标签的配置
default_category: uncategorized # 预设分类，默认 uncategorized
category_map: # 分类别名
tag_map:   # 标签别名

#Metadata elements
## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
meta_generator: true

#Date / Time format时间和日期的显示格式
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD   # 日期格式，默认 YYYY-MM-DD
time_format: HH:mm:ss   # 时间格式，默认 HH:mm:ss
## updated_option supports 'mtime', 'date', 'empty'
updated_option: 'mtime'

#Pagination分页设置
## Set per_page to 0 to disable pagination
per_page: 12 # 单个页面上显示的文章数量，默认 10， 0 表示禁用分页
pagination_dir: page # 分页目录，默认 page

#Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

#Extensions主题类型和插件
theme: butterfly
# https://github.com/viko16/hexo-permalink-pinyin
permalink_pinyin:
enable: true
separator: '-' # default: '-'
exclude: /ignore_post/

#字数统计阅读时长插件https://github.com/willin/hexo-wordcount
wordCount:
enable: true 
postWordCount: true
min2read: true
totalCount: true

#Deployment网站部署配置
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
type: git # 部署类型
repository: git@github.com:waldenlak/waldenlak.github.io.git # 部署地址
branch: gh-pages # 存储分支
ignore_hidden: false
message: # 自定义提交消息，默认 Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}
```

{% endhideToggle %}

## （三）页面模板Front-matter配置

Front-matter可选参数：[Butterfly主题安装文档(一)之快速开始](https://blog.csdn.net/qq_38157825/article/details/112782828)

注意字符格式：变量名+英文冒号+**空格**+配置参数

---

# 二、主题文件夹

## 文件夹结构

_config.yml
:   主题配置文件修改时会自动更新，无需重启`hexo server`。

languages

layout
:   布局文件夹。用于存放主题的模板文件，决定了网站内容的呈现方式，Hexo 内建[Swig](https://github.com/node-swig/swig-templates) 模板引擎，可以另外安装插件来获得 [EJS](https://github.com/hexojs/hexo-renderer-ejs)、[Haml](https://github.com/hexojs/hexo-renderer-haml)、[Jade](https://github.com/hexojs/hexo-renderer-jade) 或 [Pug](https://github.com/maxknee/hexo-render-pug) 支持，Hexo 根据模板文件的扩展名来决定所使用的模板引擎。参考 [模板](https://hexo.io/zh-cn/docs/templates) 以获得更多信息。

scripts
:   脚本文件夹。在启动时，Hexo 会载入此文件夹内的 JavaScript 文件，请参见 [插件](https://hexo.io/zh-cn/docs/plugins) 以获得更多信息。

source
:   资源文件夹，除了模板以外的 Asset，例如 CSS、JavaScript 文件等，都应该放在这个文件夹中。文件或文件夹开头名称为 _（下划线线）或隐藏的文件会被忽略。

如果文件可以被渲染的话，会经过解析然后储存到 public 文件夹，否则会直接拷贝到 public 文件夹。

{% hideToggle 发布主题 %}
[发布主题](https://hexo.io/zh-cn/docs/themes)
进行[主题单元测试](https://github.com/hexojs/hexo-theme-unit-test)，确保每一项功能都能正常使用。
{% endhideToggle %}

# 主题配置-_config.butterfly.yml

## 参考教程

- [Butterfly安装文档(二) 主题页面](https://butterfly.js.org/posts/dc584b87/)
- [Butterfly主题安装文档(三)之主题配置2](https://blog.csdn.net/qq_38157825/article/details/112783083)分享、评论、在线聊天等样式效果预览
- [小康博客-Hexo安装并使用Butterfly主题](https://www.antmoe.com/posts/75a6347a/index.html)

## （一）网站功能

### 1、全局

- 导航菜单`menu`：版块名；导航图标；在移动端隐藏；
- 搜索系统`search`：`algolia_search`；本地搜索`local_search`；
- 复制`copy`

### 2、右下角按钮

- 距离底部`rightside-bottom`
- 更改字体大小`change_font_size`；简繁转换`translate`；阅读模式`readmode`；黑夜模式`darkmode`；
- 在线聊天`chat_btn`；

## （二）展示信息

### 1、logo&icon

- 网站图标`favicon`
- 头像`avatar`：`effect`头像转圈
- 社交图标`social`：内置支持font-awesome v4和[font-awesome v5](https://fontawesome.com/v5.15/icons)

### 2、动效

- 页面加载动画`enter_transitions`；
- 404；
- 自定义弹窗`snackbar`；
- 悬停链接预加载`instantpage`；
- 图片懶加载`lazyload`；

### 3、图文排版

- 首页副标题`subtitle`：打字效果`effect`；循环打字`loop`；调用源`source`；自定义内容`sub`；
- 主页文章封面`cover`；
- 替換失效图`error_img`；
- 网页字体`font`、`blog_title_font`

### 4、整体设计

- UI颜色`theme_color`；
- 页面顶部图`top_img`；标题距顶部高度`index_site_info_top`；顶部图高度`index_top_img_height`；
- 网站背景`background`；
- 页脚背景`footer_bg`；
- 网站默认显示模式`display_mode`
- 分类页UI`category_ui`；标签页UI：`tag_ui`；
- 特效：星空粒子`canvas_nest`/彩带；打字`activate_power_mode`-冒光`colorful`/抖动`shake`；鼠标点击-烟火`fireworks`/爱心`click_heart`/文字`ClickShowText`

### 4、内容设计

- 文章置顶；隐藏；
- 中英文之间加个空格`pangu`；

标题下方显示的文章相关信息`post_meta`

- 文章页：创建/更新日期`date_type` `date_format`；分类`categories`；字数统计`wordcount`；
- 主页：创建/更新日期`date_type` `date_format`；分类`categories`；

主页概要/文章节选`index_post_content`

侧边栏`aside`

- 文章页：目录`toc`；*相关文章`related_post`；
- 主页：作者栏`card_author`；公告栏`card_announcement`；最新文章`card_recent_post`；标签`card_tags`；分类`card_archives`；最新评论`newest_comments`；
- 自定义顺序、栏目内容；
- 网页资讯`card_webinfo`
- 卜算子统计`busuanzi`：访问人数；网页运行时间`runtimeshow`；
- 最新评论`newest_comments`；

页脚`footer`

- 版权`copyright`；备案ICP；页脚自定义文字`custom_text`
- *运行时间`runtimeshow`

## （三）正文卡片

### 1、顶部/前言/阅前须知

文章过期提醒`oticeOutdate`；

### 2、正文内容

排版样式

- 加图标美化`beautify`；
- 分割线图标`hr_icon`；
- 文章锚点`anchor`；
- 标签外挂：便利贴`Note`；<br>`Button`点击按钮；`tag-hide`方法123；`Tabs`置顶123；；`label`圆角高亮；

图片相关

- 图片大图查看模式`Lightbox`；
- 图片描述文字`photofigcaption`；
- 标签外挂：`mermaid`流程图、状态图、时序图、甘特图绘制；<br>`Gallery`相册；Gallery相册图库；

专业相关

- 代码框`highlight`；自定义代码配色；
- 数学公式：`mathjax`；`katex`；

文娱相关

- 音乐插件`hexo-tag-aplayer`；全局吸底音乐挂件`aplayerInject`；
- 电影插件`hexo-butterfly-douban`；

文末标注

- 文章版权`post_copyright`；作者；
- 打赏`reward`；
- 标签`tags`；分享`Share`；相关文章；前后篇`post_pagination`；

#### 4、文后

[评论](https://butterfly.js.org/posts/ceeb73f/)`comments`

[script标签中defer和async属性的区别 - gq_orange - 博客园](https://www.cnblogs.com/guorange/p/7440281.html)

## （四）技术优化

### 1、内站优化

- 引用`css`和`js`插件：`inject`；
- CDN加速；
- 在线浏览编辑博客源码`post_edit`；
- 分析统计`Analysis`；
- PWA 特性`pwa`；
- pjax
- 自动为CSS增加前缀`css_prefix`

### 2、对外推广

- 广告`google_adsense`
- SEO优化/网站验证`site_verification`
- 分享缩略图标题等信息`Open_Graph_meta`

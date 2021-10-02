---
title: 建站05-butterfly主题样式美化记录
subtitle: 
date: 2021-08-31 12:53:35
categories: 
tags: 
 - [hexo]
 - [butterfly]
keywords: 
description: 
top_img: 
cover: false
hide: true
end: false
author: 惊蛰
authorl: 2952068332@qq.com
typeset: 惊蛰
editor: false
copy_info: false
toc_number: true
---

# 一、css/js自制样式

在`theme/butterfly/config.yml`内的`inject`项插入`css`或`js`格式的DIY网站样式代码，便于快速升级主题。

- 引用`google font`云字体
  
  ```markdown
  
  ```

参考教程：[Custom Beautify | Akilarの糖果屋](https://akilar.top/posts/ebf20e02/)

- css修改元素样式
  
  - 删除卡片；
  - 修改卡片透明度、配色、圆角……等元素样式；
  - 日间模式、夜间模式、阅读模式的主题色与配色……等全局页面样式；
  - DIY鼠标指针样式；

- 自定义图标——css引入阿里iconfont图标

- js设置banner随机背景图

- js设置站点动态标题

- 自定义图标——引入阿里iconfont图标[Iconfont Inject | Akilarの糖果屋](https://akilar.top/posts/d2ebecef/)；

# 二、 pug/styl自制样式或安装插件

新建定制`pug`+`styl`文件后，在`theme/butterfly/config.yml`内增加对应配置，即可使用功能。

- 首页分类磁贴[Categories Magnet | Akilarの糖果屋](https://akilar.top/posts/a9131002/)

- js外挂标签`butterfly/scripts/tag`：[Tag Plugins Plus | Akilarの糖果屋](https://akilar.top/posts/615e2dec/)
  
  外挂标签语法
  
  - 链接卡片`link`
    
    ```markdown
    {% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, https://cdn.jsdelivr.net/gh/Akilarlxh/akilarlxh.github.io/img/siteicon/favicon.ico %}
    ```
  
  - 网站卡片`site`
    
    ```markdown
    {% sitegroup %}
    {% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
    {% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
    {% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
    {% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
    {% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
    {% endsitegroup %}
    ```
  
  - 分栏`tabs`
  
  - 折叠框`hideToggle`
  
  - 按钮`button`
  
  - 多图排版`gallery`
  
  - 相册图库`galleryGroup`

# 三、markdown语法与html标签

| 段落格式    | html写法            | 渲染效果          |
| :----------------: | --------------------------- | ---------------------- |
| 左对齐<br>居中<br>右对齐         | `<left>居左文本`<br>`<center>居中文本`<br>`<p align="right">居右文本</p>`     | <left>居左文本<br><center>居中文本<br><p align="right">居右文本</p>      |
| 段落缩进     | 书法笔<br>: 周氏岗山笔庄狼勾<br>: - [x] 汉笔坊兼毫手札二号<br>绘画笔<br>: - [] 大明笔庄古法纯狼<br>: 豹狼毫   |      |
| 脚注                                                                          | 道可道，非常道[^注]；<br>[^注]可以言说的道理，就不是永恒不变的道理。                                                                                                         |                                                                                                            |
| 引用（链接）                                                                    | {% blockquote [author[, source]] [link] [source\_link\_title] %}<br>content...<br>{% endblockquote %}                                       | {% blockquote 惊蛰 浮光河 [https://fgggh.cn](https://fgggh.cn/) %}<br>首页<br>{% endblockquote %}<br> |

3、

| 插入                                      | 实例                                                                                                                                                                                                                                                                                                                                                             | 效果                                                        |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 行内链接                                    | [浮光河]([https://fgggh.cn](https://fgggh.cn/))                                                                                                                                                                                                                                                                                                                   |                                                           |
| 注释链接                                    | [浮光河]([https://fgggh.cn](https://fgggh.cn/) "欢迎来浮光河看！")                                                                                                                                                                                                                                                                                                        | <br>                                                      |
| 自动链接                                    | <[https://fgggh.cn](https://fgggh.cn/)>                                                                                                                                                                                                                                                                                                                  |                                                           |
| 文章链接                                    | {% post_link hello-world %}                                                                                                                                                                                                                                                                                                                                    | <br>                                                      |
| 图片                                      | ![喵的图](path “喵”)                                                                                                                                                                                                                                                                                                                                               | md头部加 <meta name="referrer" content="no-referrer"/> |
| 图片链接                                    | [![玉兰花图片](/imgs/yl.jpg "玉兰")]([https://markdown.com.cn](https://markdown.com.cn/))                                                                                                                                                                                                                                                                             |                                                           |
| 标题链接                                    |                                                                                                                                                                                                                                                                                                                                                                |                                                           |
| 视频                                      | `<video width="480" height="320" controls><br><source src=video\_path><br></video>`                                                                                                                                                                                                                                                    |                                                           |
| 表格                                      |                                                                                                                                                                                                                                                                                                                                                                | Syntax                                                    |
| 数学公式<br>{前后$$}                      | $$<br>\mathbf{V}\_1 \times \mathbf{V}\_2 =  \begin{vmatrix}<br>\mathbf{i} & \mathbf{j} & \mathbf{k} \\<br>\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\<br>\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\<br>\end{vmatrix}<br>${$tep1}{\style{visibility:hidden}{(x+1)(x+1)}}<br>$$ |                                                           |
| 代码区块<br>{①缩进4空格或2Tab<br>②前后```} | ```<br>{<br>  "作者": "保罗·瓦雷里",<br>  "初版": 1920<br>}<br>```                                                                                                                                                                                                                                                                                  |                                                           |
| 流程图<br>时序图<br>甘特图               |                                                                                                                                                                                                                                                                                                                                                                |                                                           |

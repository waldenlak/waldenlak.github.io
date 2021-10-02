---
title: 建站03-执行代码-git\npm\hexo常用执行命令
subtitle: 
date: 2021-08-23 13:07:39
categories: 
tags: 
 - [前端]
 - [hexo]
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

# 一、Git（-GitHub）命令

本地：工作目录d:/STUDY/BLOG，持有实际文件； 暂存区Index，临时保存改动；本地仓库HEAD，指向最新提交的结果。

远端：默认分支default branch/主分支，master；




workflow工作流

进入d:/STUDY/BLOG目录下准备执行命令：

cd d:

cd STUDY

cd BLOG
克隆远端仓库：git clonegit@github.com:waldenlak/waldenlak.github.io.git

创建并切换至新分支：git checkout -b &lt;branch&gt;

切换另一分支：git checkout master

预览分支差异：git diff &lt;source\_branch&gt; &lt;target\_branch&gt;

其它分支合并至当前分支：git merge master （需要手动合并冲突conflicts再合并）

删除新建分支：git branch -d &lt;branch&gt;




替换本地改动：git checkout -- &lt;filename&gt; （ 使用 HEAD 中的最新内容替换掉工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。）




查看待传文件：git status

添加至暂存区：git add \* （ . 更新文件； &lt;filename&gt; 指定文件； -A 所有文件； ）

提交并备注：git commit -m '\*\*\*' （ "代码提交信息"）

推送至远端：git push origin &lt;branch&gt; （对应分支）




获取提交ID ：git log

创建关键标签：git tag （'v3.0'）




远端拉至本地：git pull （=git fetch && merge 获取 合并 远端改动）

获取最新版本：git fetch origin

#### 图形化客户端  [GitX (L) (OSX, 开源软件)](http://gitx.laullon.com/)[Tower (OSX)](http://www.git-tower.com/)[Source Tree (OSX, 免费)](http://www.sourcetreeapp.com/)[GitHub for Mac (OSX, 免费)](http://mac.github.com/)[GitBox (OSX, App Store)](https://itunes.apple.com/gb/app/gitbox/id403388357?mt=12)

#### 指南和手册  [Git Book](https://git-scm.com/book/zh/v2)[专业 Git](http://progit.org/book/)[像 git 那样思考](http://think-like-a-git.net/)[GitHub 帮助](http://help.github.com/)[图解 Git](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)

#### Github 简明指南：http://rogerdudler.github.io/git-guide/index.zh.html

#### 如何高效利用GitHub:http://www.yangzhiping.com/tech/github.html

* * *

# 二、npm命令

[npm使用过程中的一些错误解决办法及npm常用命令和技巧](https://www.cnblogs.com/kidsitcn/p/4557548.html)

[npm安装依赖包报ERR问题汇总及处理](https://blog.csdn.net/qappleh/article/details/97001965?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-9.control&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-9.control)

- 如果遇到一些莫名其妙的问题，你首先可以更新一下npm版本，删除npm的cache


npm install -g npm@latest或npm install npm -g

npm cache clear && rm -rf node\_modules && npm install





* * *

# 三、hexo命令

## （一）升级hexo

npm update hexo -g




## （二）新建博客项目

#### 1、初始化本地文件夹为博客根目录：

hexo init HEXO

（HEXO为自由命名的文件夹名称，指初始化目录的路径，若无指定则默认为当前目录）

（进入这个文件夹 cd HEXO）

#### 2、安装必备的组件：

npm install

#### 3、安装Hexo：

npm install -g hexo-cli　




## （三）hexo文件夹内容说明

\_config.yml 是配置文件，里面有很多可以配置的数据，这里暂时不多介绍，后面的文章里会进行详细说明。

package.json 是应用程序信息，通常不需要关心。

node\_modules 用来存放 node 相关的模块，通常不需要关心。

scaffolds 里面是模版文件，每次新建文章时都会根据模版文件来创建对应的 md 文件

source 是资源文件夹，用来存放用户资源的地方。除 \_posts 文件夹之外，开头命名为 \_ (下划线)的文件/文件夹和隐藏的文件将会被忽略。

theme 是主题文件夹





## （四）更新文章

#### 1、新建博客：hexo n "文章标题"（在source/\_posts生成同名的markdown文件）


hexo n draft 初稿（在source/\_drafts生成 初稿.md 文件）

（draft指定文章类型，若无则默认为default\_layout配置）

（文章标题必填，若含空格则用英文双引号包围）

查看已有草稿：

hexo --draft

编辑完草稿后把文章推送到\_posts目录下：

hexo publish 初稿.md




#### 2、清除缓存：hexo clean（网页显示异常时执行）

#### 3、生成静态文件：hexo g = hexo generate

#### 4、启动本地预览：hexo s = hexo server 

→ http://localhost:4000/（Hexo会监视文件变动并自动更新）

默认4000，换用其它端口：hexo s -p 8080

默认0.0.0.0，指定IP地址：hexo s -i 0.0.0.1

静态模式 ，仅预览 /public/ 的文件并禁用文件监视：hexo s -s

（Ctrl＋C关闭本地服务器）

调试模式，将消息详细记录到终端和 debug.log 文件：hexo --debug

安全模式，禁用加载插件和脚本：hexo --safe（安装新插件遇到问题时执行）

静默模式，静默输出到终端：hexo --silent

#### 5、部署到github：hexo d = hexo deploy（配置好\_config.yml 的 deploy 再部署）




生成静态文件后部署：hexo g -d = hexo d -g

部署：hexo clean && deploy


* * *

Usage: hexo &lt;command&gt;

Commands:

  init      Create a new Hexo folder.

  clean     Remove generated files and cache.

  config    Get or set configurations.

  generate  Generate static files.

  server    Start the server.

  deploy    Deploy your website.

  help      Get help on a command.

  list      List the information of the site

  migrate   Migrate your site from other system to Hexo.

  new       Create a new post.

  publish   Moves a draft post from \_drafts to \_posts folder.

  render    Render files with renderer plugins.

  version   Display version information.

Global Options:

  --config  Specify config file instead of using \_config.yml

  --cwd     Specify the CWD

  --debug   Display all verbose messages in the terminal

  --draft   Display draft posts

  --safe    Disable all plugins and scripts

  --silent  Hide output on console

For more help, you can use 'hexo help [command]' for the detailed information

or you can check the docs: http://hexo.io/docs/
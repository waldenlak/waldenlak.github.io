---
title: 建站02-详细搭建步骤与报错解决方案
subtitle: 
date: 2021-08-23 13:07:37
categories: 
tags:
 - [前端]
 - [hexo]
 - [git]
keywords: 
description: 
top_img: 
cover: false
end: false
author: 惊蛰
authorl: 2952068332@qq.com
typeset: false
editor: false
copy_info: false
toc_number: false
---

[vuepress博客搭建教程](https://lpyexplore.blog.csdn.net/article/details/116484667)
Hexo框架+GitHub国外托管+DNSPod解析+Gogs(国内加速)
步骤参考：[GitHub+Hexo 搭建个人网站详细教程](https://zhuanlan.zhihu.com/p/26625249)

其它搭建方法：

- [一键安装、部署hexo脚本](https://hexoscript.gitbook.io/hexo-script/v/1.3-1/shi-yong-bu-zhou/zhun-bei-gong-ju)

- [U盘便携式hexo 博客搭建 极速纯净低bug主题推荐 部署到coding SEO优化搜索](https://blog.csdn.net/weixin_30596735/article/details/101401039)

# 一、创建个人仓库

## （一）本地

新建文件夹D:\BLOG

## （二）浏览器GitHub Page

1、非QQ邮箱注册GitHub帐号

2、点击New repository创建新仓库

3、所填仓库名必须与账号名一致：username.github.io

4、勾选README

5、Set up in Desktop或打开GitHub Desktop（下载应用），Clone到本地，在D:\STUDY\BLOG下生成username.github.io文件夹。

- 访问慢：[github国内加速](https://mp.weixin.qq.com/s/ptFBjWXj88fsI3Oh6PghRA)

# 二、搭建Git，连接Github与本地

1、[Git安装过程详解](https://www.cnblogs.com/xueweisuoyong/p/11914045.html) [Windows系统](https://www.cnblogs.com/xueweisuoyong/p/11914045.html)

2、将Git与GitHub帐号绑定：[初始化/配置/修改user.name 和user.email   (Git Bash & Git cmd 的区别)](https://www.cnblogs.com/wangxiaoqun/p/12331079.html)

3、部署密钥：[Windows SSH密钥的创建与查看](https://blog.csdn.net/qq_41539778/article/details/109114980) & [使用SSH密钥连接GitHub](https://www.xuanfengge.com/using-ssh-key-link-github-photo-tour.html)

（无法用windows命令行打开ssh文件：[ssh](https://blog.csdn.net/fatfatmomo/article/details/80838177)[fatfatmomo:](https://blog.csdn.net/fatfatmomo/article/details/80838177)[安装OPENSSH功能](https://blog.csdn.net/fatfatmomo/article/details/80838177)）

[MAC GIT 本地创建SSH KEY并且测试是否远程连接GITHUB成功](https://www.freesion.com/article/1357471898/)

4、将本地仓库和远程仓库进行关联：git remote add origin [https://github.com/username/username.github.io.git](https://github.com/guyibang/TEST2.git)

# 三、安装Node.js、npm、cnpm、Hexo

（一）1、[nodejs下载安装](https://www.runoob.com/nodejs/nodejs-install-setup.html)，2、[配置环境](https://blog.csdn.net/zjh_746140129/article/details/80460965?utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control&amp;depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control)变量，[检测node.js的环境变量是否配置成功](https://hexoscript.gitbook.io/hexo-script/v/1.3-1/shi-yong-bu-zhou/testnode-de-shi-yong)，

（二）检测Git环境/查看Git当前版本号，[验证npm](https://www.cnblogs.com/luyuandatabase/p/12145707.html)，

（三）使用 npm 安装 Hexo（可选安装途径：1.[官方指南](https://hexo.io/zh-cn/docs/)   2.[hexo](https://hexoscript.gitbook.io/hexo-script/v/1.3-1/shi-yong-bu-zhou/yi-jian-an-zhuang-hexo-bo-ke)[script](https://hexoscript.gitbook.io/hexo-script/v/1.3-1/shi-yong-bu-zhou/yi-jian-an-zhuang-hexo-bo-ke)脚本  3.[使用淘宝镜像](https://blog.csdn.net/quuqu/article/details/64121812)）

## （四）可能出现的bug以及解决方案

### （1）[安装npm报错](https://www.cnblogs.com/puge-wh/p/14802529.html)

如果没有梯子，可以替换npm源为淘宝提供的npm镜像源以实现国内加速。 [使用Node.js（安装Hexo）时出现了 rollbackFailedOptional 的解决方法](https://www.cnblogs.com/ayx03/p/14237096.html)——RoyalRay:[修改网络代理](https://blog.csdn.net/qq_31945977/article/details/81537917)缓月:[npx hexo init blog](https://blog.csdn.net/qq_42893625/article/details/100852221)

一、在D:\BLOG\username.github.io打开Windows PowerShell命令行：

1. 重新配置npm代理与git代理：
    `npm config delete proxy`
    `npm config delete https-proxy`
    `git config --global --unset http.proxy`
    `git config --global --unset https.proxy`

2. 设置proxy、https-proxy为null：
    `npm config get proxy`
    `npm config get https-proxy`
   保证两个命令的返回值都为null，继续执行以下两个命令：
    `npm config set proxy null`
    `npm config set https-proxy null`

3. 设置nodejs文件夹里prefix、cache路径：
    `npm config set prefix "D:\Program Files\nodejs\node\_global"`
    `npm config set cache "D:\Program Files\nodejs\node\_cache"`

4. 检查npm的配置:
    `npm config ls`
   
   ```bash
   ; cli configs
   metrics-registry = "http://registry.cnpmjs.org/"
   scope = ""
   user-agent = "npm/6.14.11 node/v14.16.0 win32 x64"
   
   ; userconfig C:\Users\username\.npmrc
   cache = "D:\\Program Files\\nodejs\\node\_cache"
   disturl = "https://npm.taobao.org/dist"
   https-proxy = null
   prefix = "D:\\Program Files\\nodejs\\node\_global"
   proxy = null
   registry = "http://registry.cnpmjs.org/"
   ; builtin config undefined
   ; node bin location = D:\Program Files\nodejs\node.exe
   ; cwd = D:\BLOG\username.github.io
   ; HOME = C:\Users\username
   ; "npm config ls -l" to show all defaults.
   ```
   
    （缺少了镜像配置electron\_mirror = "https://npm.taobao.org/mirrors/electron/"）

二、以管理员身份启动cmd(管理员：Windows PowerShell ISE)

5. 再次安装cnpm淘宝镜像:
    `npm install -g cnpm --registry=https://registry.npm.taobao.org`
   
   ```bash
   npm : npm WARN deprecated request@2.88.2: request has been deprecated, see http
   s://github.com/request/request/issues/3142
   所??在??位?置? 行D:1 字??符??: 1
   + npm install -g cnpm --registry=https://registry.npm.taobao.org
   + ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       + CategoryInfo          : NotSpecified: (npm WARN deprec...est/issues/3142
     :String) [], RemoteException
       + FullyQualifiedErrorId : NativeCommandError
   npm WARN deprecated har-validator@5.1.5: this
   D:\Program Files\nodejs\node_global\cnpm -> D:\Program Files\nodejs\node_global\
   node_modules\cnpm\bin\cnpm
   + cnpm@7.0.0
   added 709 packages from 969 contributors in 23.465s
   ```

6. 检查 `D:\Program Files\nodejs\node\_global` 确实安装了cnpm

7. 检查淘宝镜像是否安装成功/检查cnpm版本号:
    `cnpm -v`
   
   ```bash
   cnpm@7.0.0 (D:\Program Files\nodejs\node\_global\node\_modules\cnpm\lib\parse\_argv.js)
   npm@6.14.14 (D:\Program Files\nodejs\node\_global\node\_modules\cnpm\node\_modules\
   npm\lib\npm.js)
   node@14.17.4 (D:\Program Files\nodejs\node.exe)
   npminstall@5.0.1 (D:\Program Files\nodejs\node\_global\node\_modules\cnpm\node\_mod
   ules\npminstall\lib\index.js)
   prefix=D:\Program Files\nodejs\node\_global
   win32 x64 10.0.19042
   registry=https://registry.nlark.com
   
   #出现版本号说明安装成功
   ```

8. 检查registry = https://registry.npm.taobao.org：
    `npm config get registry`
   
   ```bash
   http://registry.cnpmjs.org/
   ```

9. 修改npm的资源镜像链接为cnpm：
    `npm config set registry https://registry.npm.taobao.org`
    `npm config get registry`
   
   ```bash
   https://registry.npm.taobao.org/
   ```
   
    此后所有npm命令替换为cnpm即可。

三、cd进入网站文件夹根目录

10. 再次安装Hexo:
    `cd BLOG`
    `cnpm install -g hexo-cli`
    
    ```bash
    Downloading hexo-cli to D:\Program Files\nodejs\node\_global\node\_modules\hexo-cli\_tmp
    Copying D:\Program Files\nodejs\node\_global\node\_modules\hexo-cli\_tmp\\_hexo-cli@
    4.3.0@hexo-cli to D:\Program Files\nodejs\node\_global\node\_modules\hexo-cli
    Installing hexo-cli's dependencies to D:\Program Files\nodejs\node\_global\node\_m
    odules\hexo-cli/node\_modules
    [1/10] minimist@^1.2.5 installed at node\_modules\\_minimist@1.2.5@minimist
    [2/10] tildify@^2.0.0 installed at node\_modules\\_tildify@2.0.0@tildify
    [3/10] hexo-log@^2.0.0 installed at node\_modules\\_hexo-log@2.0.0@hexo-log
    [4/10] abbrev@^1.1.1 installed at node\_modules\\_abbrev@1.1.1@abbrev
    [5/10] command-exists@^1.2.8 installed at node\_modules\\_command-exists@1.2.9@com
    mand-exists
    [6/10] bluebird@^3.5.5 installed at node\_modules\\_bluebird@3.7.2@bluebird
    [7/10] resolve@^1.11.0 installed at node\_modules\\_resolve@1.20.0@resolve
    [8/10] chalk@^4.0.0 installed at node\_modules\\_chalk@4.1.2@chalk
    node.exe : platform unsupported hexo-fs@3.1.0 鈥??chokidar@3.5.2 鈥??fsevents@~2.3.
    2 Package require os(darwin) not compatible with your platform(win32)
    所??在??位?置? D:\Program Files\nodejs\node\_global\cnpm.ps1:15 字??符??: 3
    + & "node$exe"  "$basedir/node\_modules/cnpm/bin/cnpm" $args
    +   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        + CategoryInfo          : NotSpecified: (platform unsupp...platform(win32)
      :String) [], RemoteException
        + FullyQualifiedErrorId : NativeCommandError
    [fsevents@~2.3.2] optional install error: Package require os(darwin) not compat
    ible with your platform(win32)
    [9/10] hexo-util@^2.0.0 installed at node_modules\_hexo-util@2.5.0@hexo-util
    [10/10] hexo-fs@^3.0.1 installed at node_modules\_hexo-fs@3.1.0@hexo-fs
    Recently updated (since 2021-08-04): 1 packages (detail see file D:\Program File
    s\nodejs\node_global\node_modules\hexo-cli\node_modules\.recently_updates.txt)
      2021-08-06
        鈫??hexo-fs@3.1.0 鈥??graceful-fs@^4.1.11(4.2.8) (04:06:04)
    All packages installed (57 packages installed from npm registry, used 1s(network
    1s), speed 1.1MB/s, json 57(134.65KB), tarball 1.42MB)
    [hexo-cli@4.3.0] link D:\Program Files\nodejs\node_global\hexo@ -> D:\Program Fi
    les\nodejs\node_global\node_modules\hexo-cli\bin\hexo
    ```

11. 执行 Hexo的两种方式：
    （1）`npx hexo`
    （2）将 Hexo 所在的目录下的 node\_modules 添加到环境变量之中即可直接使用 hexo：
    `echo 'PATH="$PATH:./node\_modules/.bin"' &gt;&gt; ~/.profile`

12. 输入`hexo -v`验证是否安装成功。
    
    ```bash
    hexo-cli: 4.3.0
    os: win32 10.0.19042
    node: 14.17.4
    v8: 8.4.371.23-node.76
    uv: 1.41.0
    zlib: 1.2.11
    brotli: 1.0.9
    ares: 1.17.1
    modules: 83
    nghttp2: 1.42.0
    napi: 8
    llhttp: 2.1.3
    openssl: 1.1.1k
    cldr: 39.0
    icu: 69.1
    tz: 2021a
    unicode: 13.0
    ```

### （2）npm install报错

[无法加载文件 C:\Program Files\nodejs\node\_global\cnpm.ps1，因为在此系统上禁止运行脚本。](https://blog.csdn.net/weixin_43073383/article/details/103592451)

1、在终端执行：`get-ExecutionPolicy`，显示Restricted（表示状态是禁止的）
2、在终端执行：`set-ExecutionPolicy RemoteSigned`
3、在终端执行：`get-ExecutionPolicy`，显示RemoteSigned
4、检查npm配置（`.npmrc`配置文件：）
    ```txt
    C:\Users\Walden678&gt; .npmrc
    prefix=D:\Program Files\node\npm\_global
    cache=D:\Program Files\node\npm\_cache
    prefix=D:\Program Files\node\node\_global
    disturl=https://npm.taobao.org/dist
    proxy=null
    https-proxy=null
    registry=https://registry.npm.taobao.org/
    electron\_mirror=https://npm.taobao.org/mirrors/electron/
    ```

## （五）搭建HEXO框架

1、进入文件夹：`cd HEXO`
2、初始化文件夹：`hexo init HEXO`
3、安装必要依赖组件：`cnpm install`
4、本地预览是否搭建成功：`hexo s`

# 四、[将hexo部署到GitHub](https://sunhwee.com/posts/6e8839eb.html#toc-heading-12)

## ①GitHub仓库创建master和gh-pages两个分支

在GitHub仓库创建master和gh-pages两个分支(branch)，[gh-pages分支用来存放网站的原始文件(](https://www.zhihu.com/question/21193762/answer/79109280)[站点目录](https://www.zhihu.com/question/21193762/answer/79109280)[)，master分支用来存放生成的静态网页(写作分支)。](https://www.zhihu.com/question/21193762/answer/79109280)(以下Git Bash当前分支应为gh-pages)

## ②Git部署插件

在D:\BLOG\username.github.io和网站根目录下安装Git部署插件：`npm install hexo-deployer-git --save` 

## ③修改_config.yml配置

在网站根目录下的[\_config.yml](https://blog.csdn.net/zemprogram/article/details/104288872)修改[部署配置](https://hexo.io/zh-cn/docs/one-command-deployment)：

```yml
deploy:
type: git
repo: git@github.com:waldenlak/waldenlak.github.io.git (建议使用git开头的ssh地址)
branch: master
message: [message]
```

### 修改_config.yml可能的报错：can not read a block mapping entry; a multiline key may not be an imp licit key

详细参考：[配置_config.yml遇到的error](https://segmentfault.com/q/1010000000746806)

注意`yaml`语法格式，在每个冒号后面都要有个半角空格

## ④提交站点目录文件

在D:\BLOG\username.github.io(hexo)下提交站点目录文件：

### 1、方案选择

在`.gitignore`文件（告诉git忽略部署的文件）内增加忽略推送到远端的文件路径。

A、依次执行`git add .`（ 把项目添加到仓库）、`git commit -m "..."`（  "...“为注释内容。把项目提交到仓库）、`git push origin hexo`

B、执行脚本（commitscript）：`./c.sh`（[by](https://www.e-learn.cn/qa/q-542929.html)[孤街浪徒](https://www.e-learn.cn/qa/q-542929.html)[2020-12-25 11:23](https://www.e-learn.cn/qa/q-542929.html)）

### 2、报错：git push失败

#### ![rejected]

[远端库与本地库不一致，不允许直接推送分支更新的commit](https://blog.csdn.net/index20001/article/details/99764558)：
A、[强制push](https://cloud.tencent.com/developer/article/1098778)

B、删除本地文件夹，重新[git clone](https://blog.csdn.net/qq_42672770/article/details/81317778)

C、取远程origin仓库的master分支最新版本到origin/master分支上: `git fetch origin master`
比对本地master分支和origin/master分支的区别：`git log -p master..origin/master`
合并origin/master分支内容到本地master分支：`git merge origin/master`

#### unable to access

[设置ssl](https://blog.csdn.net/sinat_24899403/article/details/114967572)

#### SSL报错

```bash
Push failed unable to access ‘\*\*\*.git/‘:
OpenSSL SSL\_read: Connection was reset, errno 10054
schannel: failed to receive handshake, SSL/TLS connection failed
```

所取用解决办法：
管理员运行cmd解除ssl验证后，再次git push
`git config --global http.sslBackend "openssl"`
仍push失败：
fetch origin出错
`git config --global --unset http.sslBackend`
`git config --global http.sslCAInfo [path to .pem file]`

### git pull/fetch报错

[git pull/fetch 警告](https://blog.csdn.net/wq6ylg08/article/details/114106272)的[解决](https://www.it1352.com/2260650.html)

## （五）设置git管理文件夹

执行`git init`把网站根目录变成Git可管理的仓库（会增加一个隐藏文件夹.git，是Git用来跟踪和管理版本库的）

## （六）提交GitHub分支

[github上传文件夹_github提交分支操作完整流程解释](https://blog.csdn.net/weixin_39859061/article/details/110661986)
A、依次执行`hexo clean`、`hexo g`、`hexo d`

B、在master分支下生成网页文件并推送至远程库：执行`hexo clean && hexo deploy`

## （七）在线查看网站效果

访问http://username.github.io（自己的默认网站路径）查看效果。

### 无法访问http://*.github.io

被工信部墙。 

A、修改 hosts文件
B、[修改DNS服务器](https://blog.csdn.net/qq_44721831/article/details/110296343)
C、配置代理 [cdn加速](https://blog.csdn.net/u013698807/article/details/108069734)

### 404

①内容放错分支，github.io只能看到master分支的内容

②仓库名称不对，Repository的名字和username的名字保持一致：username.github.io

③[在根目录下创立docs/CNAME](https://blog.csdn.net/weixin_41147129/article/details/105015451)

④\_config.yml文件url、root、deploy配置错误

⑤公开仓库才有GitHub Pages功能

⑥[未绑定域名](https://zhuanlan.zhihu.com/p/64485447)

### 无主题样式

[更改HEXO下的theme、url、root配置](https://blog.csdn.net/qq_43641373/article/details/107982229)

### 仓库页security danger警告

security danger-[github：解决项目依赖的安全隐患](https://blog.csdn.net/baidu_41327283/article/details/106089262)

# 五、创建编辑文章

## 1、创建新文章

网站根目录下执行`hexo n "sitename"`

## 2、网站数据迁移

[json转md](https://blog.csdn.net/u013810234/article/details/113360229)

## 3、markdown编辑器

{% hideToggle HexoEditor %}
[HexoEditor](https://github.com/zhuzhuyule/HexoEditor)
3.1   [下载安装配置](https://wugenqiang.blog.csdn.net/article/details/88411361?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-8.pc_relevant_baidujshouduan&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-8.pc_relevant_baidujshouduan)

3.2   npm install报错：

(1)  `Install fail! Error: [js-sequence-diagrams@^1000000.0.6] Can't find package`
（原因：[js-sequence-diagrams@^1000000.0.6安装包已下架](https://github.com/hedgedoc/hedgedoc/issues/39)）
解决办法：[下载安装包](https://github.com/zhuzhuyule/HexoEditor/issues/77)

(2)   `npm install electron -g`
（原因：[找不到这个版本的electron](https://blog.csdn.net/qq_33876553/article/details/99869203)）
解决办法：[下载稳定版本](https://www.electronjs.org/releases/stable)cnpm install electron@13.1.8
{% endhideToggle %}

## 4、修改格式

---

## 5、使用图片（两种方案）

A.本地链接（占GitHub空间）：小图、重要图。

将图片放在跟博文文件一个目录下，在本地预览完成需要部署的时候，再将图片剪切到[HEXO/source/images/] 文件夹里，同时要修改博文中图片引用变成(/images/picture.png)因为编译后图片放在网站根目录的 images 中。

B.外部链接/图床（失效则不显示）：大图、次要图

在博文中直接使用直接路径调用图片，如类似这种链接[https://i.lo](https://i.loli.net/2018/01/25/5a69a60eeda77.gif)[li.net/2018/01/25/5a69a60eeda77.gif](https://i.loli.net/2018/01/25/5a69a60eeda77.gif)

# 六、定制样式

## 1、切换主题

### （1）操作步骤

①安装主题，配置样式。[安装butterfly主题](https://butterfly.js.org/posts/21cfbf15/)

②清除缓存，验证主题：
`hexo clean`
`hexo s --debug` 或者 `hexo g & hexo s`

⑤部署网站，同步仓库：`hexo g -d`

### （2）出错解决

#### Warning: Accessing non-existent property

警告缺少模块依赖：不影响网站运行，可忽略。

强迫症党请移步：[解决 Hexo 在使用 Node.js 14 时的 Accessing non-existent property &#39;xxx&#39; of module exports inside circular dependency 问题 - 好一则博](https://www.haoyizebo.com/posts/710984d0/)

```bash
(node:32520) Warning: Accessing non-existent property 'lineno' of module exports  inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:32520) Warning: Accessing non-existent property 'column' of module exports  inside circular dependency
(node:32520) Warning: Accessing non-existent property 'filename' of module exports  inside circular dependency
(node:32520) Warning: Accessing non-existent property 'lineno' of module exports  inside circular dependency
(node:32520) Warning: Accessing non-existent property 'column' of module exports  inside circular dependency
(node:32520) Warning: Accessing non-existent property 'filename' of module exports  inside circular dependency
```

#### 主页空白出现如下字符:

`extends includes/layout.pug block content include includes/recent-posts.pug include includes/partial`

查看 npm 安装各 hexo 插件的情况：（进入网站根目录，管理员执行）`npm ls --depth 0`

⚪出现missing说明缺少hexo所需的插件：

```bash
npm ERR! missing: hexo-deployer-git@2.1.0 required by hexo-site@0.0.0
npm ERR! missing: hexo-browsersync@^0.3.0 required by hexo-site@0.0.0
```

解决办法：重新单独安装缺少的插件即可
`npm i hexo-deployer-git --save`
`npm i hexo-browsersync --save`
安装后再次`npm ls --depth 0`检查是否安装完成
无问题后重新生成预览（`hexo s`）或部署（`hexo g`）

⚪node\_modules目录中已经安装了一个package，但是package.json中并没有对该package做依赖，那么这个package就应该被删除。这时如果执行npm ls命令则指示有一个`package not used`。
为了清理代码，需要执行`npm prune`

```bash
npm WARN package.json kidsit@1.0.0 No repository field.
npm WARN package.json kidsit@1.0.0 No README data
npm ERR! extraneous: destroy@1.0.4 D:\STUDY\BLOG\FGH\node\_modules\destroy
npm ERR! extraneous: wrappy@1.0.2 D:\STUDY\BLOG\FGH\node\_modules\wrappy
```

⚪需要安装 pug 以及 stylus 的渲染器
`npm install hexo-renderer-pug hexo-renderer-stylus --save`

#### 样式失效，hexo g报错：

```bash
err: OperationalError:  D:/BLOG/FGH/node_modules/_nib@1.1.2@nib/lib/nib/vendor.styl:275:23
     271|     if n == inherit or n == initial
     272|       -ms-filter: n args
     273|       filter: n args
     274|     else
     275|       val = round(n * 100)
  ------------------------------^
     276|       if val == 100
     277|         -ms-filter: none args
     278|         filter: none args
  cannot perform '' * 100
```

报错指出vendor相关问题。
解决方案：在主题配置文件找到vendor相关配置，设为false。
`css\_prefix: false`

#### can not read a block mapping entry; a multiline key may not be an imp licit key

#### npm无法卸载依赖

[npm无法卸载依赖](https://blog.csdn.net/zpfz756/article/details/103807022?utm_term=npmuninstall%E6%97%A0%E6%B3%95%E5%8D%B8%E8%BD%BD&amp;utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-0-103807022&amp;spm=3001.4430)

# 七、配置专属域名

## 注册/转入/续费/赎回域名？

交易平台/注册服务商：国内(实名认证，正规)阿里云/万网、腾讯云；国外dynadot(抢购老域名)、[godaddy.com](https://link.zhihu.com/?target=http%3A//godaddy.com/)、

[顶级域名种类](https://wanwang.aliyun.com/domain/tld?spm=5176.8048432.308878.39.1c0e2cf8UO68C2#.cn)

[万网顶级域名首年注册、续费、转入价格](https://wanwang.aliyun.com/domain/?spm=5176.8034973.5.97.17c2aa56fKzWHk)

[万网产品价格总览](https://wanwang.aliyun.com/help/price.html?spm=5176.20907348.J_3224652020.1.5b636c0dbtXkZS)

前缀二三级域名：简短好记([挖掘高质量域名](https://zhuanlan.zhihu.com/p/82716906) [SEO、IP查询](https://www.aizhan.com/))   后缀选择：.com .cn .net ([工信部认证可备案域名](http://xn--eqrt2g.xn--vuq861b/))

域名查询-加入购物车（-注册/登录账号）-立即结算-选定年限、信息模板（-创建个人/企业模板）、优惠、协议-立即支付(优惠券 新人特惠   续费优惠 )

⭐[阿里云域名控制台](https://dc.console.aliyun.com/next/index?spm=a2c1d.8251892.recommend.ddomain.64665b76zCtx69#/domain/list/all-domain)

## 实名认证

域名管理-未实名认证域名-

## 解析域名

添加两条记录，记录类型CNAME，主机记录分别是www和@，记录值是主机/平台提供的CNAME地址。

[阿里云域名解析设置](https://dns.console.aliyun.com/#/dns/domainList)

## DNS解析

DNSPod，[动态域名](https://blog.csdn.net/cuiyadll/article/details/84765413?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-6.control&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-6.control)[解析内网/外网/IPV6地址](https://blog.csdn.net/imkiimki/article/details/83794355)

## 是否要备案？

必须——长期持有；使用CDN、对象存储等国内云服务；接入大陆内地服务器

# 八、国内加速

[Github+Vercel](https://blog.csdn.net/qq_19363379/article/details/108119140?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_v2~rank_aggregation-8-108119140.pc_agg_rank_aggregation&amp;utm_term=%E4%BF%AE%E6%94%B9dns%E8%BF%9B%E5%85%A5github&amp;spm=1000.2123.3001.4430)

## 云服务器

[云服务器ECS](https://www.aliyun.com/product/ecs?userCode=hcf6ol03)

[阿里云最新活动-优惠活动聚集](https://www.aliyun.com/activity?userCode=gpha528v)  [阿里云·云小站-代金券&新老用户上云优惠](https://www.aliyun.com/minisite/goods?userCode=se6p9xeg)  [免费领取阿里云代金券](https://dashi.aliyun.com/site/yun/youhui)[新人特惠](https://www.aliyun.com/1111/new?userCode=wafrp05h)[年中钜惠新人专享](https://www.aliyun.com/activity/new?spm=5176.21103406.J_3012903320.4.11fe597cOTETGU)  [高校学生优惠-飞天加速计划](https://developer.aliyun.com/plan/student)[开发者成长计划](https://developer.aliyun.com/plan/grow-up)

[阿里云服务器有哪些操作系统？](https://developer.aliyun.com/article/766050?scm=20140722.184.2.173)

[阿里云服务器操作系统怎么选择(Window或Linux)？](https://blog.csdn.net/colorfulyan/article/details/108938631)

[资金管理-收支明细续费管理](https://usercenter2.aliyun.com/finance/fund-flow)

[阿里云服务器管理控制台](https://ecs.console.aliyun.com/?spm=a2c81.56c02d4.recommend.decs.af9c1127Nc8e1o#/home)

---

用Github Page快速创建[项目文档网站](https://zhuanlan.zhihu.com/p/323457078)

---

# 九、网站优化

## （一）SEO优化

1、[让Google搜索到网站](https://zhuanlan.zhihu.com/p/129022264)

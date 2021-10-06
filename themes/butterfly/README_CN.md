<div align="right">
  语言:
  中文
  <a title="English" href="/README.md">英文</a>
</div>

# hexo-theme-bud

本仓库主题是在[原butterfly主题](https://github.com/jerryc127/hexo-theme-butterfly)的基础上进行个性化修改的。感谢作者的开发♥

样式预览：[浮光河](www.fgggh.cn)

## 安装

```powershell
git clone -b master https://github.com/waldenlak/hexo-theme-bud themes/bud
```

## 使用

在hexo根目录下的`_config.yml`中修改主题为`bud`

```yml
theme: bud
```

- 如果没有`pug`以及`stylus`的渲染器，请安装： [hexo-renderer-pug](https://github.com/hexojs/hexo-renderer-pug)或者[hexo-render-pug](https://github.com/maxknee/hexo-render-pug)，以及[hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus)。
  
  ```powershell
  npm install hexo-renderer-pug hexo-renderer-stylus --save
  # or
  yarn add hexo-render-pug hexo-renderer-stylus
  ```

## 特色

- [x] 首页随机背景图片

- [x] 隐藏侧边栏

- [ ] 首页分类磁贴导航

- [x] 首页文章列表卡片自动调节高度

- [x] 悬停响应式卡片设计

- [x] 引用iconfont图标

- [x] front-matter自定义版权声明的作者、排版、审校者，以及原创或转载

- [x] 文章末美化分享按钮、标签按钮

- [x] 自定义光标、夜间模式、阅读模式的样式

# hexo-theme-butterfly

預覽: 👍 [Butterfly](https://butterfly.js.org/)  ||  🤞 [MYW](https://immyw.com/)

文檔: 📖 [Butterfly Docs](https://butterfly.js.org/posts/21cfbf15/)

一款基於[hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody)修改的主題

## 💻 安裝

### Git 安裝

> 本倉庫同時上傳到 [Gitee](https://gitee.com/iamjerryw/hexo-theme-butterfly)，如果你訪問 Github 緩慢，可從 Gitee 中下載。

在博客根目錄裡安裝穩定版【推薦】

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

如果想要安裝比較新的dev分支，可以

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

### npm 安裝

> 此方法只支持Hexo 5.0.0以上版本

在博客根目錄裡

```powershell
npm i hexo-theme-butterfly
```

## ⚙ 應用主題

修改hexo配置文件`_config.yml`，把主題改為`Butterfly`

```
theme: butterfly
```

> 如果你沒有pug以及stylus的渲染器，請下載安裝： `npm install hexo-renderer-pug` `hexo-renderer-stylus --save`

## 🎉 特色

- [x] 卡片化設計
- [x] 支持二級目錄
- [x] 雙欄設計
- [x] 響應式主題
- [x] 夜間模式
- [x] Pjax
- [x] 文章閲讀模式
- [x] 簡體和繁體轉換
- [x] 電腦和手機都可查看TOC目錄
- [x] 內置多種代碼配色（darker/pale night/light/ocean/mac/mac light），可自定義代碼配色
- [x] 代碼塊顯示代碼語言/關閉或展開代碼塊/代碼複製/代碼自動換行
- [x] 可關閉文字複製/可開啟內容複製增加版權信息）
- [x] 兩種搜索（Algolia搜索和本地搜索）
- [x] Mathjax 和 Katex
- [x] 內置404頁面
- [x] 顯示字數統計
- [x] 顯示相關文章
- [x] 過期文章提醒
- [x] 多種分享系統（AddThis/Sharejs/Addtoany）
- [x] 多種評論系統（Disqus/Disqusjs/Livere/Gitalk/Valine/Waline/Utterances/Facebook Comments/Twikoo）
- [x] 支持雙評論部署
- [x] 多種在線聊天（Chatra/Tidio/Daovoice/Gitter/Crisp）
- [x] 多種分析系統
- [x] 谷歌廣告/手動廣告位置
- [x] 各種站長驗證（Google/Bing/Baidu/360/Yandex）
- [x] 修改網站配色
- [x] 打字特效 activate_power_mode
- [x] 多種背景特效（靜止彩帶/動態彩帶/Canvas Nest）
- [x] 多種鼠標點擊特效（煙花/文字/愛心）
- [x] 內置一種 Preloader 加載動畫
- [x] 不蒜子訪問統計
- [x] 兩種大圖模式（Medium Zoom/Fancybox）
- [x] Mermaid 圖表顯示
- [x] 照片牆
- [x] 圖片懶加載
- [x] Instantpage/Pangu/Snackbar彈窗/PWA......

## ✨ 贡献者

<a href="https://github.com/jerryc127/hexo-theme-butterfly/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jerryc127/hexo-theme-butterfly" />
</a>

## 📷 截圖

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-1.jpg)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-2.jpg)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-3.jpg)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-4.jpg)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/theme-butterfly-readme-homepage-1.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/theme-butterfly-readme-homepage-2.png)

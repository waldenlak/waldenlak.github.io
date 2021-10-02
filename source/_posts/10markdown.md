---
title: markdown语法表，markdown渲染配置，markdown编辑器
subtitle: 
date: 2021-09-06 13:25:19
categories: 
tags:
 - [markdown]
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
toc_number: false
---

# 参考教程

> [Markdown 入门基础 | Markdown 语法教程](https://markdown.com.cn/intro.html)
> [Markdown Style test | Butterfly](https://butterfly.js.org/posts/89757140/)
> html在markdown编辑器里的支持性：[HTML Support in Typora](https://support.typora.io/HTML/)

---

# 一、markdown语法表

<details>
<summary>为什么要用markdown语法？</summary>

动态网站的发布文章的后台更符合惯用`word`文档者的写作习惯。而MarkDown语法是静态网站撰写文章的不二之选，只需要先写好`md`文件，部署后会转为`html`网页文件。

</details>

## （一）基本语法

| 字符格式 | markdown写法         | 渲染效果             |
|:----:| ------------------ | ---------------- |
| 粗体   | `**浮光河**流淌在心底。`    | **浮光河**流淌在心底。    |
| 斜体   | `*浮光河*流淌在心底。`      | *浮光河*流淌在心底。      |
| 粗斜体  | `***浮光河*** 流淌在心底。` | ***浮光河*** 流淌在心底。 |
| 删除线  | `~~天圆地方~~地球是⚪的。`   | ~~天圆地方~~地球是⚪的。   |
| 代码   | \`sumif\`函数    | `sumif` 函数      |

{% tabs d,1 %}
<!-- tab 段落格式markdown语法 -->
| 段落格式    | markdown写法            | 效果(表格里无法渲染段落)          |
| :----------------: | --------------------------- | ---------------------- |
| 标题   | `# 一级标题`<br>`## 二级标题`<br>`### 三级标题`<br>`#### 四级标题`<br>`##### 五级标题`<br>`###### 六级标题`   | (文中标题即渲染效果)    |
| 分割线<br>   | `---`(前后都要回车，即分割线前后留出1空行)     | (上面有一个分割线效果)   |
| 同段内换行    | (①3空格+回车；②使用`<br>`标签)<br>`Le vent se lève !… Il faut tenter de vivre !   `<br>`L’air immense ouvre et referme mon livre,<br>La vague en poudre ose jaillir des rocs !` |       |
| 分段    | (2回车，即前后段之间要有1空行)<br>`Le vent se lève, il faut tenter de vivre.`<br><br>`——Le cimetière marin`     |         |
| 引用<br>（文段）    | (`>`+<u>半角空格</u>)<br>(可嵌套引用块，引用块里要用一个引用符号的单独行来分段。)<br>`>> Le vent se lève, il faut tenter de vivre.`<br>`>`<br>`> - *Le cimetière marin*`    | (开头参考教程的文段即渲染效果)  |
| 有序列表     | (数字+英文句号+<u>半角空格</u>)<br>`1. 周氏岗山笔庄狼勾；`<br>`2. 大明笔庄古法纯狼；`    |         |
| 无序列表       | `- 周氏岗山笔庄狼勾；`<br>`- 大明笔庄古法纯狼；`        |        |
| 任务清单     | `- []未完成`<br>`- [x]已完成`     | (hexo似乎要安装插件才能渲染)     |
| 列表嵌套其他元素<br>         | (①缩进4空格；②按一个<kbd>Tab</kbd>)<br>`- 道可道，非常道；`<br>`    > 可以言说的道理，就不是永恒不变的道理。`<br>`- 名可名，非常名。`<br>`- 无，名天地之始；有，名万物之母。`       |     |
<!-- endtab -->

<!-- tab 段落渲染效果 -->
同段内换行:
Le vent se lève !… Il faut tenter de vivre !   
L’air immense ouvre et referme mon livre,<br>La vague en poudre ose jaillir des rocs !

---

分段:
Le vent se lève, il faut tenter de vivre.

——Le cimetière marin

---

引用（文段）:
>> Le vent se lève, il faut tenter de vivre.
> 
> --*Le cimetière marin*

---

有序列表:
1. 周氏岗山笔庄狼勾；
2. 大明笔庄古法纯狼；

---
无序列表:
- 周氏岗山笔庄狼勾；
- 大明笔庄古法纯狼；

---
任务清单(未支持):
- []未完成
- [x]已完成

---
列表嵌套其他元素:
- 道可道，非常道；
    > 可以言说的道理，就不是永恒不变的道理。
- 名可名，非常名。
- 无，名天地之始；有，名万物之母。
<!-- endtab -->
{% endtabs %}

---

## （二）高级语法-HTML标签

<details>
<summary>为什么要用HTML标签？</summary>

MarkDown基本语法方便但有不足：能满足基础写作格式，但无法使用折叠语法，无法配置颜色等更多拓展样式。md文件最终是要转成html文件（渲染）的，所以markdown语法就是应简化html标签、提高网页内容创作效率而生的。因此，使用Html语法就能实现更多情景下的创作。而且，html标签是通用格式，多数情况下都能正常渲染。

一句话：markdown写作支持嵌入html标签。

</details>

### 头部标签

参见：[HTML标签引入之头部标签](https://www.cnblogs.com/thillbilly/p/13235133.html)`head`

### 本文内容链接

URL里直接使用`#anchor`，并在 ==目标位置的文本之前== 加入`<a name="anchor"></a>`。^[参见[markdown 中如何插入一个指向本文其他部分的链接？](https://www.zhihu.com/question/36565391/answer/68195005)]

### 折叠语法

{% hideToggle 折叠语法details %}

{% tabs d,2 %}
<!-- tab 教程 -->
[【MarkDown】使用Html样式和折叠语法](https://www.cnblogs.com/buwuliao/p/9578918.html)
<!-- endtab -->

<!-- tab 撰写与效果 -->
```md
<details>
<summary>什么是浮光河？</summary>

　　在时空的长河中浮出光的碎片
</details>
```
<details>
<summary>什么是浮光河？</summary>

　　在时空的长河中浮出光的碎片
</details>

</details>
<!-- endtab -->
{% endtabs %}

{% endhideToggle %}

### 字体样式

{% hideToggle 字体样式标签span和font %}
字体样式标签：span style;font color,size,face,background

{% tabs t,1 %}
<!-- tab 撰写 -->
```markdown
<span style='color:red'>红色字</span> 

<font color="#d0dfe6">字体颜色</font>

<span style="font-size:2rem; background:yellow;">字体大小和荧光笔</span>

<font face="微软雅黑" color="blue" size="6">字体及字体颜色和大小</font>

```
<!-- endtab -->

<!-- tab 效果 -->
<span style='color:red'>红色字</span> 

<font color="#d0dfe6">字体颜色</font>

<span style="font-size:2rem; background:yellow;">字体大小和荧光笔</span>

<font face="微软雅黑" color="grey" size="6">字体及字体颜色和大小</font>
<!-- endtab -->
{% endtabs %}

{% endhideToggle %}

| 字符格式 | html写法         | 渲染效果             |
|:----:| ------------------ | ---------------- |
| 字体<br>颜色<br>大小 | `<font color=#d0dfe6 size=7>浮光河</font>`<br>`<font face="微软雅黑" color="blue" size="3">流淌在心底。</font>` | <font color=#d0dfe6 size=7>浮光河</font><br><font face="微软雅黑" color="blue" size="3">流淌在心底。</font> |
| 小字 | `<small>小型文本</small>`   | <small>小型文本</small>   |
| 特殊字 | `<ruby> 漢 <rt> ㄏㄢˋ </rt> </ruby>`   | <ruby> 漢 <rt> ㄏㄢˋ </rt> </ruby>   |
| 按键 | `<kbd>Ctrl</kbd>+<kbd>F9</kbd>`   | <kbd>Ctrl</kbd>+<kbd>F9</kbd>   |
| 同字体色下划线    | `<u>浮光河</u>`流淌在心底。   | <u>浮光河</u>流淌在心底。   |
| 荧光笔    | `<mark style="background-color: yellow">浮光河</mark>`流淌在心底。     | <mark style="background-color: yellow">浮光河</mark>流淌在心底。    |
| 上标下标   | `光<sup>『說文解字』</sup><sub>明也。从火在人上，光明意也。</sub>`   | 光<sup>『說文解字』</sup><sub>明也。从火在人上，光明意也。</sub>   |
| 不渲染markdown符号    | 在会转义的符号前加`\`：`\*\*正常显示星号\*\**\~撒花\~~`    | \*\*正常显示星号\*\**\~撒花\~~   |

| 段落格式    | html写法            | 渲染效果          |
| :----------------: | --------------------------- | ---------------------- |
| [首行缩进](https://www.jianshu.com/p/5827c325bc92)<br>  | (全角空格或`&emsp;`)<br>`&emsp;&emsp;现在我终于知道拉普达为什么会灭亡。<br>　　灭亡的原因就写在肯特亚山谷的歌词里：‘根要扎在土壤里，和风一起生存，和竹子一起过冬，和鸟儿一起歌颂春天。’不管你拥有多么惊人的武器，不管你操纵多少可怜的机器人，只要离开土地，就没有办法生存！`     | &emsp;&emsp;现在我终于知道拉普达为什么会灭亡。<br>　　灭亡的原因就写在肯特亚山谷的歌词里：‘根要扎在土壤里，和风一起生存，和竹子一起过冬，和鸟儿一起歌颂春天。’不管你拥有多么惊人的武器，不管你操纵多少可怜的机器人，只要离开土地，就没有办法生存！       |

### 表格列宽

{% hideToggle style自定义列宽 %}
教程：[Markdown 技巧：如何改变表格宽度（列宽）？](https://zhuanlan.zhihu.com/p/93239297)

撰写：在表格之前添加这个标签（会应用到本文内所有表格）。
`<style> table th:first-of-type { width: 18%; } </style>`

{% endhideToggle %}

## （三）高级语法-插件实现markdown语法

| 字符格式 | 通用html标签                                                                   | 插件markdown写法   | 渲染效果                |
|:----:| -------------------------------------------------------------------------- | -------------- | ------------------- |
| 下标   | [sub](https://www.npmjs.com/package/markdown-it-sub):`H<sub>2</sub>0`      | `H~2~0`        | H<sub>2</sub>0      |
| 上标   | [sup](https://www.npmjs.com/package/markdown-it-sup):`x<sup>2</sup>`       | `x^2^`         | x<sup>2</sup>       |
| 下划线  | [ins](https://www.npmjs.com/package/markdown-it-ins):`<ins>Inserted</ins>` | `++Inserted++` | <ins>Inserted</ins> |
| 删除线  | `<s>Del</s>`                                                               | `~~Del~~`      | <s>Del</s>          |
| 荧光笔  | [mark](https://www.npmjs.com/package/markdown-it-mark):`<mark style='background-color:rgba(255, 241, 187, .6)'>mark</mark>`       | `==mark==`     | ==mark==       |
| 圆角高亮(butterfly)        |       |       |
| 数学公式KateX | [Katex](https://www.npmjs.com/package/@neilsustc/markdown-it-katex),[referer](https://github.com/Khan/KaTeX)  |   
| emoji表情  | ~~[emoji](https://www.npmjs.com/package/markdown-it-emoji),[referer](https://www.webpagefx.com/tools/emoji-cheat-sheet/)~~:Butterfly主题已集成emoji支持   |       |       |
| 正文目录toc  | [toc&anchor](https://www.npmjs.com/package/markdown-it-toc-and-anchor):输入`@[toc]`生成标题目录。   |       |       |

### 段缩进deflist

[deflist](http://pandoc.org/MANUAL.html#definition-lists)

[abbr](https://www.npmjs.com/package/markdown-it-abbr)

### 脚注footnote

[footnote](https://www.npmjs.com/package/markdown-it-footnote)

```md
^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]
```

### 缩进

{% hideToggle 缩进语法-定义列表 %}
简单定义列表由单行术语后跟一个冒号和该术语的定义组成。作为定义标记的冒号（`:`）通常从左边开始，最多可以缩进三个空格。定义标记后必须跟一个或多个空格或制表符（`Tab`）。术语必须用空行与先前的定义分开。定义可以跨越多行，在这种情况下应该缩进；但是不必真的这样做，不缩进一个跨越多行的定义也可以渲染。
定义列表可以有多个与一个术语相关联的定义，可以包含多个段落，并包括其他块级元素，例如块引用、代码块、列表，甚至其他定义列表。还可以将多个术语与一个定义相关联：

撰写：

```md
Apple
:   Pomaceous fruit of plants of the genus Malus in 
the family Rosaceae.
:   An American computer company.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

Term 1

:   This is a definition with two paragraphs. Lorem ipsum 
    dolor sit amet, consectetuer adipiscing elit. Aliquam 
    hendrerit mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus.

:   Second definition for term 1, also wrapped in a paragraph
    because of the blank line preceding it.
            code block.

    > block quote
    > on two lines.
```

效果：

Apple
:   Pomaceous fruit of plants of the genus Malus in 
the family Rosaceae.
:   An American computer company.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

Term 1

:   This is a definition with two paragraphs. Lorem ipsum 
    dolor sit amet, consectetuer adipiscing elit. Aliquam 
    hendrerit mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus.

:   Second definition for term 1, also wrapped in a paragraph
    because of the blank line preceding it.
            code block.

    > block quote
    > on two lines.

{% endhideToggle %}

---

# 二、markdown渲染配置

当默认markdown渲染器效果不尽人意时，替代方案就出现了。

## （一）现用方案-markdown-it渲染器

{% btn 'https://github.com/upupming/hexo-renderer-markdown-it-plus#readme',@upupming/hexo-renderer-markdown-it-plus插件 %}
[配置教程](https://lolitasian.blog.csdn.net/article/details/105846999)

## （二）可选方案

{% tabs x,1 %}
<!-- tab 插件和渲染器的区别 -->
插件一般对单种功能或样式进行支持，渲染器是工作引擎。添加安装插件就是对默认markdown渲染器`hexo-renderer-marked`的锦上添花；选择其他markdown渲染器就要先卸载默认渲染器。
<!-- endtab -->

<!-- 拓展插件 -->
不同的markdown-it渲染器一般都支持自行安装其他`markdown-it`插件。
插件获取途径：
1. 到[npmjs官网](https://www.npmjs.com/)里搜索关键词`keywords:markdown-it-plugin`
  或直接点击链接 https://www.npmjs.com/search?q=keywords:markdown-it-plugin
2. 点击[markdown-it](https://www.npmjs.com/package/markdown-it)专页

[为Hexo博客添加脚注插件](https://zhanghuimeng.github.io/post/add-footnote-plugin-for-hexo-blog/#fn3)：{% btn 'https://github.com/markdown-it/markdown-it-footnote',markdown-it-footnote %}
<!-- endtab -->

<!-- tab 其他渲染器 -->
- {% btn 'https://markdown-it.docschina.org/',markdown-it %} 中文文档
- {% btn 'https://blog.csdn.net/my___dream/article/details/90343999',markdown-it-vue %} 一个 Markdown 的 Vue 组件库
[在vue中使页面支持markdown](https://blog.csdn.net/tao_meng_/article/details/113665504)
[读VuePress（三）使用markdown-it解析markdown代码
](https://www.jianshu.com/p/a95c04a68d14)
- 解决 {% btn 'https://blog.csdn.net/weixin_44441126/article/details/119745642',hexo-renderer-kramed %}渲染冲突的部分问题
- {% btn 'https://github.com/hexojs/hexo-renderer-markdown-it',hexo-renderer-markdown-it %}
渲染更快，功能更丰富：支持复杂的数学公式KateX（但要自行设置），支持插件扩展如emoji表情，等等。
因为支持脚注选择了它。因为渲染后目录链接要设置锚点才有点击跳转，又觉得正文标题渲染太累赘，加上不想鼓捣，遂弃用。
[教程：將Hexo的Markdown渲染引擎換成markdown-it](https://titangene.github.io/article/hexo-markdown-it.html)
⭐[Hexo 的 markdown-it 渲染引擎和其相关插件](http://baishusama.github.io/2016/12/24/hexo-render-markdown-it-and-its-plugins/)

{% hideToggle hexo-renderer-markdown-it插件配置源码 %}

```yml
# Markdown-it config https://github.com/celsomiranda/hexo-renderer-markdown-it/wiki
markdown: # 渲染设置
  render:
    html: true # true时不转义html内容，标签显示为html；false时html内容转义成普通字符串
    xhtmlOut: false # 是否生成与XHTML完全兼容的标签Parser will not produce XHTML compliant code
    breaks: true # true时每个换行符都被渲染成一个<br>（即Hexo的默认表现）；false时只有空行才会被渲染为<br>（GFM的默认表现）
    linkify: true # 是否自动识别链接并把它渲染成链接
    typographer: true # 是否自动识别印刷格式（意思是把(c)渲染为©这样的）
    quotes: '“”‘’' # 如果typographer被设置为true，则该选项用于设置将dumb quotes（""）自动替换为smart quotes
  plugins: # 设置所需插件
    - markdown-it-abbr
    - markdown-it-checkbox
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-sub
    - markdown-it-sup
  anchors: # 锚点设置
    level: 1 # 创建 ID 的最低级别（例如 h2 到 h6）
    collisionSuffix: 'v' #如果 ID 重复，则在给定数字前加上一个后缀
    permalink: true #true时在标题旁创建一个带有永久链接的锚标记
    permalinkClass: header-anchor #用于永久链接锚标记的类
    permalinkSymbol: '' #¶永久链接的符号
```
{% endhideToggle %}
<!-- endtab -->
{% endtabs %}

# 三、markdown编辑器

{% hideToggle 目前推荐的markdown编辑器 %}
按使用需求是否有功能支持来选择markdown编辑器。
参考测评：[下了31个markdown编辑器，我就不信选不出一个好用的](https://zhuanlan.zhihu.com/p/208791140)

- {% btn '',Visual Studio Code(VSC) %}
最适合于勘订代码和插入外挂标签，能满足常用需求。
全格式全需求支持，一个编辑器搞定代码和文章；支持双栏窗口同步预览，代码高亮、缩进准线、标题折叠等功能方便直观检查。
越用越习惯并且能发现其细节强大，目前主力使用。
- {% btn '',Typora %}
主流的美丽的markdown编辑器，最适合惯用`word`撰写方法的人。
最突出的功能是输入完一个`md`标签或`html`标签就能转为输出样式（代码立变富文本，即实时渲染功能）。
被上文测评劝退所以未使用过，网上有许多使用教程和视频可供参考。
- {% btn '',Mark Text %}
创作、配图、编辑样式、检查代码多模式一条龙的简洁美丽markdown编辑器。
    每种`md`标签都有快捷键；
    写作者模式（`Typewriter Mode`）能像Typora一样实时预览，
    光标所在段落左侧的小图标能便捷修改段落样式（即更改`md`标签），
    输入图片标签的开头会直接让你贴图片链接自动补全标签代码；
    专注模式（`Focus Mode`）除光标所在段落外的内容灰化，方便沉浸于当前输入文字；
    源码模式（`Source Code Mode`）能像VSC一样代码格式高亮。
目前用着最舒服且方便，但一打开就会改变Front-matter内容（以匹配默认的写作者模式的渲染显示）以及其他不支持渲染的标签，且打开程序要等5秒左右。
- {% btn 'https://github.com/Zettlr/Zettlr',Zettlr %}
顶栏有类似`word`一样的编辑文字格式的按钮，同样方便修改标签。
没有探索更多功能，因为在体验初期时就被主题颜色和字体丑到无法专注于内容，现弃用。
- {% btn 'https://www.cnblogs.com/youngwilliam/articles/youngwilliam.html',HexoEditor %}
让生成`hexo`新文章、同步图床和代码仓库等hexo命令一键执行的markdown编辑器。
窗口太小不适合长文编辑，现只用来创建新文章时偷个懒，不用复制Front-matter。
{% endhideToggle %}

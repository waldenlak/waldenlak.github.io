---
title: 报错合集
subtitle: 
date: 2021-09-06 22:19:17
categories: 
tags:
- [hexo]
- [前端]
keywords: 
description: 
cover: false
end: false
author: false
typeset: 惊蛰
editor: false
copy_url: false
toc_number: true
---
报错内容

```bash
$ hexo clean
FATAL SyntaxError: Unexpected token } in JSON at position 774
```

解决办法
1. [字符格式错误](https://www.jianshu.com/p/e7f25f1ce87e)

报错内容

```bash
$ hexo g
INFO  Validating config
INFO  Start processing
FATAL {
  err: Template render error: (unknown path)
    unexpected end of file
        at Object._prettifyError (D:\STUDY\FGH\node_modules\_nunjucks@3.2.3@nunjucks\src\lib.js:36:11)
  }
} Something's wrong. Maybe you can find the solution here: %s https://hexo.io/docs/troubleshooting.html
```

解决办法
1. `{%%}`或`{{}}`标签使用格式错误。回到`md`文件纠正标签格式。


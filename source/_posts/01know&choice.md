---
title: 建站01-基础理论理解与构建方式选择
subtitle: 
date: 2021-08-15 10:59:22
categories: 
tags:
 - [前端]
end: true
author: 惊蛰
authorl: 2952068332@qq.com
typeset: 惊蛰
editor: false
copy_info: false
large: true
description: 本文粗略整理了目前的几种建站方案以及网站搭建相关的概念，希望帮助小白在了解建站的基本情况后再选择是否建站，要采取哪种方式建站，从一开始就定好大框架。
cover: http://www.wikihow.com/images/8/8e/Design-a-Logo-Step-15Bullet2.jpg
toc_number: false
---
<meta name="referrer" content="no-referrer"/>

建站系列是一个建站路径的梳理整合。如有错误，欢迎指正。

---

网上常见的建站教程，要么是零碎的细节，要么是直接的步骤，没有基础知识背书的外行小白在遇到问题时总会要碰更多弯路。本文从小白视角出发，粗略整理了目前建站的几种方案以及网站搭建相关的理论概念，希望帮助小白在大致了解网站理论与建站情况后再选择是否建站，要采取哪种方式建站，从一开始就选定好大框架。以下是本文讨论的内容。

@[toc]

可以大致看到，建站主要涉及网站框架、网站域名、网站资源存储、网站资源管理编辑、网站内容编辑等方面的考量，每个环节对小白来说都可能有技术上的吃力，或认知上的模糊，对自己的需求和网站相关工具与技术的不明晰都会导致时间（不知道代码什么意思、怎么写、在哪里写、缩进和符号格式对不对）和金钱（不知道要不要买这个产品、什么时候买、买哪种配置、怎么买有性价比）等沉没成本。因此，（除了对于资金充裕的每年三位数起的速成建站玩家来说，）建站不是轻易能着手并坚持的。

---

# TODO

⬜ 图床、云服务器、虚拟主机空间

---

# A 话题前言

<details>
<summary>为什么要建网站？</summary>

1. 个人独立拥有的域名、品牌、作品集，个性与才能展示、创作作品输出的方式之一<br>A. 自有购建域名/服务器——定制性、品牌价值<br>B. 第三方平台供给三级域名和数据库——被动性、操作简单

2. 流量变现渠道之一<br>网站联盟-针对客户群体投放广告/商家找来合作广告

3. 学习网页设计相关技术

4. ？
   
   </details>

<details>
<summary>自媒体时代的个人站长如何生存？</summary>

<small>当下流量变现方式：</small>

1. **图文内容**  
2. 短 段子 视频

<small>配置策略：</small>
    多平台全渠道投放（主营渠道+引流渠道）

<small>限制因素：</small>

1. 政策管控（跟着规范走）；

2. 龙头马太效应（社交平台：两微一抖）；

3. 自媒体分流（博客社区：知乎豆瓣简书语雀CSDN…）
   
   </details>
   在一切起步之前，我们需要先对自己的出发动机和未来发展规划心中有数。搭建网站不难，在网上搜索教程就能选择一个跟着上手；甚至我们说做什么事情的起步都不难，难的是在这条路上一直走下去，能解决每一个bug、完善每一点细节，能坚持如一更新内容，能进步创新、做出名堂……对于网站以及任何形式的媒体来说，唯一的重点都是“内容”。好看的皮囊能吸引惊鸿一瞥，有趣的灵魂能聚汇长久的引力。

---

# B 名称概念与构建选择

下面会整理一些相关理论知识，是名词的定义理解，用语比较书面化，熟悉计算机理论和相关名词者可以跳过，想快速抓重点的直接忽略相关概念里标序号的内容。
在配置过程中遇到的不理解的具体名词可以自行搜索，再套入理论框架中进行宏观理解。

## 计算机网络相关概念

{% tabs 1, -1 %}
<!-- tab 0-参考资料 -->
搜索引擎是个帮助快速理解与解决问题的好工具；理论概念的参考资料选择出版物更严谨准确。

{% link 《计算机网络（第7版）》谢希仁, https://blog.csdn.net/jayjaydream/article/details/88610348, https://ebookg.com/storage/upload/files/000/25/78/45_cover_m.jpg %}

{% btn 'https://blog.csdn.net/yonghu14587007/article/details/105114445',重点整理 %}

{% link 《大学计算机信息技术》上海交通大学出版社2017年7月, https://www.icourse163.org/course/detail.htm?cid=1452527180, https://uimgproxy.suning.cn/uimg1/sop/commodity/gvzpZW6okqOqYl6wvQMBxg.png %}

⭐纯小白的基础课

{% link 大学计算机基础-国防科技大学, https://www.icourse163.org/course/NUDT-17003?from=searchPage, https://img2.doubanio.com/lpic/s28468893.jpg %}

{% link 大学计算机-北京理工大学, https://www.icourse163.org/course/BIT-47004?from=searchPage, https://img2.doubanio.com/lpic/s28468893.jpg %}
<!-- endtab -->

<!-- tab 1-计算机网络体系结构-->
所有在计算机上的联网操作都在这个宏观结构内。

{% btn 'https://blog.csdn.net/justloveyou_/article/details/69611328',计算机网络体系结构综述（上）-书呆子Rico %}

**计算机网络体系结构**：计算机网络各层<sub>（结构）</sub>及其协议<sub>（规则）</sub>的集合。<small><br>采用分层将一个复杂系统分解为若干子系统。</small>

  {% hideToggle OSI/RM体系与TCP/IP体系 %}
  **OSI/RM体系结构**：开放系统互连基本参考模型<sub>(理论国际标准)</sub>。<br><small>Open System Interconnection Reference Model</small><br>**⭐[TCP/IP体系](https://developer.51cto.com/art/201906/597961.htm)结构**：能够在多个不同网络间实现信息传输的协议簇<sub>(事实国际标准)</sub>。<br>垂直分层结构：物理层-数据链路层-网络层-传输层-应用层

  {% gallery %}

<img title="" src="https://images2015.cnblogs.com/blog/907596/201609/907596-20160926163530797-1486268033.png" width="70%" alt="各层功能、设备及协议">
  <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.zybuluo.com%2Fa5635268%2Fzs2w2kfgqoxnc6ki56dy30fb%2Fimage002.gif" alt="OSI/RM参考模型">
  <img src="https://img2018.cnblogs.com/blog/1458608/201809/1458608-20180924224248486-1340349434.png" width="70%" alt="TCP/IP协议栈">
  {% endgallery %}
  {% endhideToggle %}

- **点到点**：两主机之间的通信线路直连。<br>**端到端**：两主机之间的通信经其他站点。
- **实体**：任何可发送或接收信息的硬件或软件进程<br>**对等层**：两个不同系统的同一层次<br>**对等实体**：分别位于不同系统对等层的两个实体
- **协议(Protocol)**：控制对等实体之间的通信规则。本层协议要使用且只能看见下层服务。
- **服务**：在协议的控制下，下层向上层通过层间接口提供服务。
- **接口（服务访问点）**：同一系统相邻两层的协议进行交互的地方。
- **路径**：文档文件在主机中的位置。

{% hideToggle 通信协议（网络协议） %}
两个计算机系统之间数据交换<sub>网络实体间收送报文的格式、顺序</sub>（网络通信）的规则。<br>三要素：

- 语法(Syntax)<sub>(报文格式，数据与控制信息的结构或格式)</sub>
- 语义(Semantics)<sub>(控制信息、动作及响应的具体解释)</sub>
- 同步(Timing)<sub>(排序和速度匹配)</sub>
  {% endhideToggle %}

{% hideToggle 协议数据单元PDU %}
(Protocol Data Unit,PDU)对等层之间交换的信息报文。

- **包/数据包(Packet)**：网络层-分组交换的数据传送形式。

- **帧(Frame)**：数据链路层-传送数据的基本单元。

- 比特(Bit)：物理层

- 段(Segment)：传输层
  {% endhideToggle %}

- **[服务器/伺服器(server)](https://zh.wikipedia.org/zh-cn/%E6%9C%8D%E5%8A%A1%E5%99%A8)**：一种管理资源并为用户提供服务的高性能计算机，根据服务器提供的服务类型不同，分为文件服务器（能使用户在其它计算机存取文件），数据库服务器，应用程序服务器，Web服务器等。通过**网络**给客户端用户使用。

- **主机(host)**：在电脑网络领域中，服务器被称为主机（网络主机），其他接入的电脑为客户端。在电脑硬件领域中，机箱被称为主机(Mainframe)；电子游戏机中以读卡器、读碟机为主机，位于主机箱之外的通常称为外设（如显示器、键盘、鼠标、外接硬盘、外接光驱等）。

- Shell：命令解释程序，用户通过键盘输入指令，计算机接收到指令后，予以执行。如Linux下的`Bash`、`Zsh`，Windows下的`cmd`、`PowerShell`都是命令行终端工具。<small>参见[Windows 的 PowerShell 和 Linux 的 terminal 有啥区别？](https://www.zhihu.com/question/26860370)</small>

- **客户机/终端/终端设备(Terminal)**：人机交互设备（能输入输出指令的设备），如互联网终端设备、自助终端设备等；按所用操作系统，可分为Windows终端、Mac终端、Linux终端等。

- **终端用户/终端客户(end user)**：产品的最终/直接使用(体验)者。

- **客户端/用户端(Client)**：向服务端发送请求并获得相应服务的用户计算机。如网页浏览器(Browser)、移动客户端等。

- **服务端/伺服端/服务器端**：提供服务的计算机。

- **云/云端**：提供在线存取数据服务的程序，用户可在任一终端获得云服务。 如IaaS、PaaS、SaaS等。
  
  <img src="https://pica.zhimg.com/v2-b6ab2fda8b806bde6e280cda46dac6fd_r.jpg?source=1940ef5c" alt="云-管/边缘-端的示意图" width="70%">
  <!-- endtab -->

<!-- tab 2-计算机网络互联结构与IP -->
网络层一般靠中间站点转发数据分组来实现端到端通信。

计算机网络互联：由网络结点和通信链路组成的系统。
<img src="https://img2018.cnblogs.com/blog/1334023/201809/1334023-20180916095151068-1185030427.png" alt="网络连接结构" width="50%">
从逻辑上看，整个网络由资源子网和通信子网组成。

- **通信子网(网络层)**：由通信设备、通信线路等组成的独立的数据通信系统。<small>主要实现点对点通信</small><br>**网络通信设备**：网卡、网线、集线器(HUB)、交换机、路由器等网络交换、互连、传输设备。
- **资源子网**：各种网络资源<sub>(硬件、软件、数据信息)</sub>的集合。
  - **计算机系统/网络工作站(Workstation)**：连入网络的计算机，终端设备/客户端，有PC机、智能手机、平板电脑等。
  - 网络软件资源与数据资源<br>**网络操作系统**：Unix、Windows、Linux、NetWare等种类。
  - 通信子网接口设备
- **路由器(router)**： 网络层使用的中间设备。网络<sub>(局域网、广域网)</sub>互连；数据处理；网络管理等作用。<br>**网关设备(gateway)**：网络层以上使用的中间设备。较复杂，使用少。有时把路由器也称为网关。<br>**网桥**：数据链路层<br>**转发器**：物理层
- **IP协议**（网络通信协议<small>Internet Protocol</small>）：运行于网络层，计算机在因特网上互联的数据包协议。

{% hideToggle IP（IP地址） %}
  IP协议提供的统一地址格式，用来识别TCP/IP网络中互连的主机和路由器。 现今IP地址由于数量限制，会存在很多电脑设备共用一个IP地址的情况。<br>**组成：** 网络号+主机号。<br>**形式：** 数字 {% btn 'http://ip.chinaz.com/?C3VK=188241',IP地址查询 %}  <br>**作用：** 编码/门牌号（机器识别）
  - **IPv4**（IPv4地址）：一个32位二进制数点分4段后的十进制写法（a.b.c.d）。现阶段主要使用。
  - **IPv6**（IPv6地址）：长度为128b（IPv4地址长度的4倍），解决IPv4地址不够用的问题。

{% gallery %}
<img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ghn4ka3kt5j31ho0oswjo.jpg" alt="IP地址分类" width="70%">
<img title="" src="https://pic4.zhimg.com/v2-5fb3008febf75e96adc1e0d98e72cf23_r.jpg" alt="IP地址用途" width="70%">
{% endgallery %}

{% endhideToggle %}

关于分类寻址、子网寻址、子网掩码、广播地址见[IP地址的划分及其分类-「零一」](https://lpyexplore.blog.csdn.net/article/details/108935757)；<br>关于特殊IP地址、子网划分、超网划分见[IP地址分类以及网络地址的计算-浅浅](https://blog.csdn.net/weixin_43625577/article/details/84728675)。
<!-- endtab -->

<!-- tab 3-网络 -->
**[互联网(internet)](https://zh.wikipedia.org/zh-cn/%E4%BA%92%E8%81%94%E7%BD%91)**：通用名词，泛指能彼此通信的设备组成的网络。包括因特网、万维网、广域网、城域网、局域网、内部网等各种网络(computer network)。
{% btn 'https://wanweibaike.net/wiki-%E7%94%B5%E8%84%91%E7%BD%91%E7%BB%9C',计算机网络类型 %}
{% hideToggle 网络拓扑结构：设备互联的方式（物理层） %}
[种类](https://blog.csdn.net/starshinning975/article/details/53511343)：星形<sub>集中式/放射状</sub>；总线型<sub>百足虫</sub>；环形；树形；网状<sub>分布式</sub>；复合/混合/杂合型<br>局域网常用总线型、环型、星型或树型结构；广域网多采用分布式或树型结构。<br><img src="https://img.wendangwang.com/pic/f584420810d19a3721631775/6-810-jpg_6-1080-0-0-1080.jpg" width="70%" alt="复合拓扑结构">
{% endhideToggle %}

**因特网(Internet)**：专有名词，特指全球最大的互联网（采用TCP/IP协议族），因其应用广泛，也用“互联网”指“因特网”。线路、协议以及通过TCP/IP协议实现数据电子传输的硬件和软件的集合体。提供的主要服务有万维网(WWW)、文件传输(FTP)、电子邮件E-mail、远程登录(Telnet)等。使用操作系统和各种软件(APP)去使用网络上的各种服务和资源（应用层）

{% hideToggle WWW与HTTP %}

- 万维网Web(World Wide Web,WWW)：因特网中的web服务<sub>(万维网不等于互联网/因特网)</sub>。是一个由许多互相链接的超文本组成的系统，通过互联网访问。是一个分布式超媒体系统(超文本系统的扩充)。
  - **统一资源定位符URL(Uniform Resource Locator)**：万维网里的可访问对象(资源)的标识。是对因特网上的资源的位置和访问方法的一种简洁表示。<br>**格式：** <协议>://<主机><sub>(主机的域名)</sub>:<端口>/<路径>
  - 超文本：一个超文本由多个信息源链接组成。万维网的基础。<br>超链接：超文本内由一文件连接至另一文件的链接。<br>超媒体：包括图形、声音效果、电影、文本和超链接的一种非线性信息媒体。
  - **超文本传输协议/明文传输协议HTTP(Hypertext Transfer Protocol)**：万维网在服务器端和客户端<sub>运行在主机中的浏览器</sub>之间传输资源<sub>所有的www文件</sub>的协议。（应用层）<br>**文件传送协议FTP(File Transfer Protocol)**：用户可以使用FTP客户端通过FTP协议访问位于FTP服务器上的资源。FTP客户程序用来获取文件的传送服务。<br>**简单邮件传送协议SMTP**，邮件读取协议POP3和IMAP4<br>**远程终端协议Telnet**<br>**动态主机配置协议(DHCP)**<br>**简单网络管理协议(SNMP)**
  - **⭐超文本标记语言HTML(Hypertext Markup Language)**：万维网的核心语言，用来描述万维网文档（页面）。
  - 万维网的信息检索系统（搜索引擎）：万维网网页关键词索引数据库。
    {% endhideToggle %}

{% btn 'https://blog.51cto.com/dzlhre/1709982?xiangguantuijian&11',深入理解HTTP协议及原理分析 %}

<!-- endtab -->
{% endtabs %}

# 一、网站框架

## （一）网站相关概念

{% tabs 0,-1 %}

<!-- tab 4-静态与动态的概念 -->

html：结构标签。超文本标记语言HTML把各种标签嵌入到万维网页面中，构成HTML文档。浏览器按HTML文档中的标签以及显示器的尺寸和分辨率大小重新排版并显示出页面。
标签：形如`<p>` `</p>`，用于排版。

- 静态Web文档：文档创作完后存放在web服务器中，用户浏览时文档内容不会改变。服务器内容与终端用户接收到的版本是一样的，原始的源码文件已经提前编译好了，源码在每次请求后都不会变化。

- 动态Web文档：有浏览器的请求时，web服务器根据浏览器发来的数据临时动态创建HTML文档。与动态网站互动时，大量的内容会经常改变。与静态的区别主要在于文档内容的生成方式不同。

- 活动Web文档：web服务器返回一段程序副本在浏览器端运行。Java技术是活动文档技术的一部分。
  
  <!-- endtab -->

<!-- tab 前端与后端的概念 -->

**前台**：用户使用，**展示**页面信息。
**后台**：网站开发人员使用，（身份验证后）**管理**控制前台。

- **CMS**：动态网站的后台。内容的创作人员、编辑人员、发布人员使用内容管理系统(Content Management System)来提交、修改、审批、发布到网站上的内容。

**前端(Frontend)**：展现给用户浏览的网站前台部分（Web页面或APP界面的结构、外观和交互）的代码。<br>Web前端标记语言=`HTML`+`CSS`+`JavaScript`<sub>以及衍生出来的各种技术、框架、解决方案（如`HTML5`、`CSS3`）</sub>

- **UI**：用户界面(User Interface)美工，视觉优化。
- **运营**：内容的发布和引流推广。

**后端(Backend)**：用户不可见的网站逻辑部分，支撑前台内容实现和数据调用，进行服务器性能（访问稳定性、加载速度等）和数据库存取（评论系统、账户系统、推送系统等）的管理。<br>后端语言有`PHP`、`ASP`、`JSP`等。
开源：源码公开，相当于免费。

- **运维**：运行环境的维护。对网络、服务器、数据库、硬件配置的安全保障、运行维稳、故障修理、架构升级等
  
  <!-- endtab -->
  
  {% endtabs %}

## （二）网站框架的选择

### A 使用现成框架（最省心）

从数据处理方式分类，按操作难度排序，可分为动态网站和静态网站。

{% tabs a, -1 %}

<!-- tab 第三方平台(非独立) -->

在{% btn 'https://top.chinaz.com/hangye/index_zonghe_boke.html#obj_4',博客网站排名 %}里可以看见主流博客网站和社交网站。<br>在这些公共平台上只能发表平台支持的内容，网页样式和域名的定制性、独特性很差，还有登录限制等等，主权在平台方手里。

- 如果只是想有一个发布文章/图片/……的地方而对功能拓展等网页设计方面没有更高要求，或者更希望在读者用户流量聚集的地方运营发展，那么第三方平台会更适合。一般都会提供现成的写作工具和数据分析工具，并帮你做好SEO优化。

- 如果更想真正独立管理一个网站，或者目的是做作品集、做商业品牌，那么从长远发展和能力锻炼的角度看，更好的建议是不要选择第三方平台，而是自己搭建网站。
  
  <!-- endtab -->

<!-- tab 动态网站(花钱省心) -->

有前端后端，登录后台来管理，前台通过数据库来查询、调用、展示网站的叫“动态”。

- 缺点：配置用来安装后端服务和数据库的独立服务器（要买一个单独的云服务器），前端渲染内容的步骤更多（可能需要对访问加速进行配置），服务器要管理调优（负担后端维护成本）
- 优点：自定义功能插件丰富。要登录控制台编写文章，随写随发布，不需要it技术基础。

￥域名+￥服务器+设计搭建+部署服务器 = 一次搭建，终身享用，在线更新

{% hideToggle 动态框架平台 %}
主流 成熟 采用HTML编辑器：

- ⭐`WordPress`（博客程序）<br>{% btn 'https://wordpress.org/',WordPress %}免费开源的建站系统，除个性化博客外还可做企业站、门户站、商场、批发网站等，扩展性强。较臃肿，对主机配置有要求，要加速就要做优化设置。“42% of the web uses WordPress, from hobby blogs to the biggest news sites online.”
- `discuz`（论坛程序）<br>{% btn 'https://www.discuz.net/portal.php?mod=list&catid=8',DISCUZ!,outline %}腾讯旗下的一套通用的社区论坛软件系统。“一个以社区为基础的专业建站平台，让论坛（BBS）、社交网络（SNS）、门户（Portal）、群组（Group）、开放平台（Open Platform）应用充分融合于一体，几乎适用于所有需要互动和交流功能的网站，尤其是已经具备相当规模，且经常因为服务器资源耗尽、安全问题或其他原因而损失人气的中大型应用案例。”

国内 开源 采用MarkDown语法：

- `Typecho`（博客程序）{% btn 'http://typecho.org/',Typecho %} 微缩版/个性版WordPress。适合做简单记录的个人站点。
- `zblog`（博客程序）{% btn 'https://docs.zblogcn.com/php/#/',Z-BlogPHP,outline %} {% btn 'https://docs.zblogcn.com/asp/#/',Z-BlogASP,outline %}一些主题、插件付费。
- `Emlog`（博客程序）{% btn 'https://gitee.com/snowsun/emlog-docs',Emlog,outline %}
- `xiunobbs`（论坛程序）{% btn 'http://www.zssv.cn/forum-2.htm',Xiuno BBS轻论坛,outline %}

国外 开源：

- `Halo`（博客程序）{% btn 'https://docs.halo.run/zh/install/prepare',Halo,outline %}
  更多国外开源CMS建站系统请移步[Open Source CMS: 12 Great Website Creation Tools](https://itsfoss.com/open-source-cms/)选择。

其他建站需求的动态网站程序参见[做网站有那些网站程序？-寒龙亦](https://zhuanlan.zhihu.com/p/24101769)。
{% endhideToggle %}

<!-- endtab -->

<!-- tab 静态网站(经济独立) -->

纯前端，直接生成纯.html网页文件的叫“静态”。<br>没有独立服务器（不需要买云服务器），而是利用支持HTTP(S)协议的文件存储PaaS服务（如阿里云OSS）发布内容，所有内容是静态的。如果需要一些动态功能如“评论”，则必须借助第三方服务。
源代码（技术门槛）：对代码、Linux、JavaScript等网页相关技术有自我学习能力。<br>编译/渲染方式：手动执行命令将写好的文章转换成最终的网页文件。

- 缺点：功能受限。没有网站后台、没有文章编辑器，几乎都基于“代码”来设置和操作。
- 优点：对自食其力者来说性价比最高。适于技术宅、程序员、工程师群体。

￥域名+网页文件托管平台 = 代码搞定一切

{% hideToggle 静态博客框架 %}

- `NodeJS`+`Hexo`<br>{% btn 'https://hexo.io/zh-cn/docs/',Hexo %} 是基于Node.js的静态博客网站的框架，使用Markdown（或其他渲染引擎）解析文章，可便捷生成静态网页托管在GitHub上。相较于jekyll/octopress博客框架，Hexo的编译更快、部署更简单（因为jekyll基于Ruby语言，配置麻烦），中文支持更好（因为作者来自中国台湾）。<br>Node.js基于Chrome JavaScript运行在服务端。

- `Rudy`+`RudyGems`+`Linux/Unix/Mac OS X`+`NodeJS/其他JavaScript环境`+`Python`+`jekyll`<br>{% btn 'http://jekyllcn.com/docs/home/',jekyll %} 基于Ruby语言开发的Jekyll是很多技术人员的选择。

- `Hugo`<br>{% btn 'https://www.gohugo.org/doc/',Hugo %} 基于Go语言开发的Hugo
  {% endhideToggle %}
  
  <!-- endtab -->

<!-- tab 半动态的静态网站 -->

 （可动态更新，但依赖于后台构建系统）

{% link Growth：全栈增长工程师指南, https://www.bookstack.cn/read/growth-fullstack/3220, https://static.bookstack.cn/projects/growth-fullstack/marketing/growth-paper.jpeg %}

<!-- endtab -->

{% endtabs %}

<style> table th:first-of-type { width: 18%; } </style>

| <br> | 动态网站    | 静态网站 | 半动态的静态网站                 |
|:----:|:-------:|:----:|:------------------------:|
| 价格￥  | 几十~几百上千 | 几~上百 | 几~几十<sub>(依赖于更新频率)</sub> |
| 技术门槛 | ⭐       | ⭐⭐   | ⭐⭐⭐                      |
| 运维精力 | ⭐⭐⭐     | ⭐    | ⭐                        |
| 数据存储 | 数据库     | 无    | 基于git的数据库                |

关于选择动态还是静态，详细解说参见[个人博客如何选择Typecho和Hexo？-明月登楼](https://zhuanlan.zhihu.com/p/35764312)
{% note warning simples %}
决定安装某个框架之前要多搜索用户经验，了解它的搭建、运行与维护方式，评估这个框架和这个平台对于自己的需求和能力的合适程度，特别注意导入导出资源的功能是否有门槛，所用的前端语言是否在个人能力范围内、所需配置环境是否在硬件性能条件内。否则，一旦在搭建后期发现某个平台不符合自己的实际情况，就要转移数据库，而很多平台之间的导出导入都是有技术成本和时间成本的。<br>不过也不必犹豫不决，保险的做法是选择最多人在讨论的（不一定是最多人在用），方便交流并解决问题。
{% endnote %}

### B 自己开发框架（最自由）

利用自己熟悉的语言，自己开发前后端，再把项目部署到私人服务器上。
仅限有技术基础者选择。除非是想入行/是大师球，建议外行者不要走向开发者的漫漫头秃路。（所以在`clone`优秀开发者的项目时一定要点`star`⭐大力支持+感谢鸭！）

---

# 二、站点访问配置

访问 https://www.fgggh.cn 的过程：  
方式A.输入域名，传递给DNS(域名解析)服务器，解析成IP地址，再访问站点。
方式B.输入IP地址，访问网站。

## （一）域名服务相关概念

{% tabs 2, -1 %}

<!-- tab 一定要买域名吗？ -->

如果选择用Github Page、Gitee等能提供一个域名地址的平台来搭建，可以不买；
如果想要一个简洁易记、有标志性的域名地址就买；多数其他建站方案都要自己买域名。

<!-- endtab -->

<!-- tab 5-域名系统 -->

**域名系统(Domain Name System,DNS)**：为方便记忆网址产生的管理域名和IP地址之间的有效关系的系统（应用层）

{% hideToggle 域名 %}
(Domain Name,DN)
**作用：** 将一个IP地址关联到一组有意义的字符(URL)上。<br>**形式：** https://www.fgggh.cn/ 字符（人类惯用）
{% hideToggle 域名的树状层次等级结构 %}

- http：传输内容易被嗅探(保密性)、篡改、伪造(真实性)、中断，域名劫持和域名欺骗(完整性)，会被标为“不安全”。
- https：安全超文本传输协议(HTTP over SSL/TLS)。添加了一层SSL(Secure Sockets Layer，安全套接层)或TLS(Transport Layer Security,传输层安全协议)<br><small>（在阿里云等服务提供商购买一年的https服务约￥2000。借助Github Page的便利可以免费实现https级别的网站。）</small>
- **主机名(host)**：电脑端`www`,`bbs`移动端`m`,`wap`
- 前缀次级域名：（门面）网站的入口/第一印象/记忆名称。一般购买一个域名就是购买一个**二级域名(SLD)** 的管理权，即随意设置**三级域名**、**四级域名**……<br>域名中有几个`.` ，就称之为几级域名
- 后缀**顶级域名(Top-Level Domain,TLD)**：该域名所属服务器。<br>常见的 `.com` `.cn` `.net` `.org` `.gov` `.edu`<br>小众的 `.xyz` `.me` `.io`……
- **根域名**：所有域名尾部都有一样的根域名`.root`，平时是省略的
  {% endhideToggle %}
  {% endhideToggle %}

{% hideToggle 域名服务器/DNS服务器/域名解析服务器 %}
(Domain Name Sever,DNS)
**作用：** 让域名地址和IP地址对应。<br>**概念：** 将域名解析成IP地址以供网络层使用的服务由DNS服务器完成。<br>与域名的分级结构对应，DNS系统也是一个树状层级式结构，不同级别的域名由不同的域名服务器来解析。 

1. 根域名服务器，全世界IPv4根域名服务器只有13台（名字分别为A至M），1个为主根服务器在美国，其余12个均为辅根服务器。负责管理世界各国的域名信息。  

2. 顶级域名服务器/TLD域名服务器，即相关国家域名管理机构的数据库，如中国互联网络信息中心(CNNIC)。  

3. 权威域名服务器和ISP的缓存服务器。提供域名注册、单个域名的解析配置等服务，如万网、DNSpod等权威DNS托管商。

4. 本地域名服务器/递归DNS(Local DNS)。自己主机设置的DNS，默认是宽带运营商的配置。通过询问正确的权威DNS服务器来确定域名的IP地址，然后缓存该IP地址。
   **公共DNS**
   **概念：** 由大的厂商和机构提供的公开解析服务，可设为本地DNS。<br><small>如谷歌DNS`8.8.8.8`，国内114DNS的`114.114.114.114`，参见[公共DNS哪个好（速度快、稳定）？](https://www.zhihu.com/question/34826522)</small>
   **作用：** 提高网络冲浪体验。
   {% endhideToggle %}
   
   <!-- endtab -->

<!-- tab 5-域名解析与CANNME -->

域名解析<br>**概念：** 将域名指向具体的网站服务器。<br>**作用：** 让访客通过这个域名可以访问服务器上的网站，或达到访问加速。<br>**过程（递归）：** 手动把域名地址和IP地址的对应关系写到权威DNS服务器上。
主机通过域名请求某网页时，查找域名对应IP记录的步骤是主机缓存——本地hosts文件——本地DNS服务器的区域文件与缓存，若无则再从最近的根服务器查找到对应的顶级域名服务器、二级域名服务器……找到IP则将查询结果返回本地DNS服务器，本地DNS再将解析结果返回客户端。

[CANME](https://www.jianshu.com/p/65757b5c0762)（CANME地址）：主机/服务器/托管商提供的IP地址。<br>主机商提供的IP地址会因为网络攻击暂不可用，CNAME对应的IP地址可能会变。把域名解析到CNAME地址，IP地址变化时就不需要重新修改域名解析了。

<!-- endtab -->

<!-- tab 6-网络安全与加密 -->

DNS污染：嗅探网页信息/贴广告弹窗<br>DNS劫持：把网页指向另外的地址

对称密码体制(Symmetric-Key Encryption)：加密密钥与解密密钥相同。
公钥密码体制(Public-Key Encryption)：加密密钥与解密密钥不同。

- **SSH**：本地生成的一对秘钥，**私钥（~/.ssh/id\_rsa）** 和**公钥（~/.ssh/id\_rsa.pub）**。<br>GitHub要求每次推送代码都要输入账号密码验证推送用户是否是合法用户，为了省去每次输入密码的步骤，采用非对称加密的ssh公钥（GitHub上）与私钥（本地电脑）的配对来验证。
  
  <!-- endtab -->
  
  {% endtabs %}

## （二）域名解析过程

### 1. 域名解析服务器的选择

{% btn 'https://console.dnspod.cn/dns',DNSPod %}
{% btn 'https://www.aliyun.com/product/dns?source=5176.11533457&userCode=28kqeewo',阿里云DNS %}

### 2. 域名解析记录

{% tabs y,-1 %}

<!-- tab 记录类型 -->

| 记录类型  | 含义                                                                                                | 记录值填写                    |
|:-----:| ------------------------------------------------------------------------------------------------- | ------------------------ |
| A     | （地址记录/IP指向）将域名指向一个IP地址。                                                                           | 服务器 IP                   |
| CNAME | （别名指向）将一个域名指向另一个域名。                                                                               | 空间商提供的域名                 |
| AAAA  | 指定主机名/域名对应的IPv6地址记录。                                                                              | 解析到 IPv6 的地址             |
| NS    | （Name Server）向下授权 指定 **该域名的解析权** 。<br>购买域名后，NS处默认的NS记录指向 **域名提供商** 。<br>想换DNS服务商时，修改NS记录域名授权对象即可。 | DNS服务器                   |
| MX    | （邮件交换记录）要设置邮箱让邮箱能收到邮件时添加。                                                                         | 邮件服务器的IP地址<br>或企业邮局提供的域名 |
| TXT   | 大都用来做SPF记录<small>（Google、QQ等企业邮箱的反垃圾邮件设置）</small>                                                 | 255长度内的任何东西              |
| 显性URL | 从一个地址301重定向到另一个地址时添加。                                                                             | 要跳转到的网址                  |
| 隐性URL | 不会改变地址栏中的域名。                                                                                      | 要引用内容的网址                 |

<!-- endtab -->

<!-- tab 主机记录 -->

| 设置类型 | 含义                  |
|:----:| ------------------- |
| www  | 解析域名为`www.fgggh.cn` |
| @    | 直接解析主域名`fgggh.cn`   |
| *    | 泛域名解析，用于匹配其他所有域名    |

<!-- endtab -->

<!-- tab 线路 -->

| 线路名称 | 选择                                                             |
|:----:| -------------------------------------------------------------- |
| 默认   | 必须添加，否则只有单独指定的线路才能访问网站。如果双线解析，建议「默认」。若空间商只提供了一个IP地址或域名，选择「默认」。 |
| 联通   | 单独为「联通用户」指定服务器 IP，其他用户依然访问「默认」。                                |
| 搜索引擎 | 指定一个服务器IP让蜘蛛抓取。                                                |

<!-- endtab -->

<!-- tab TTL -->

（Time To Live）域名解析的生效时间。  
指地方dns缓存域名记录信息的时间，缓存失效后会再次到域名解析服务商获取记录值。  
数值越小，修改记录生效时间越快。添加新的解析记录，生效时间5分钟。修改已经添加的解析记录，生效时间1小时。修改为万网DNS服务器后首次进行域名解析，生效时间1小时。国内域名DNS修改，修改时间最长6小时。国际域名DNS修改，修改时间最长48小时。

| TTL变更时间   | 含义                                                    |
|:---------:| ----------------------------------------------------- |
| 600（10分钟） | 正常情况下使用。                                              |
| 60（1分钟）   | 若经常修改IP，修改记录一分钟即可生效。<br>长期使用，解析速度会略受影响。               |
| 3600（1小时） | IP极少变动（一年几次）的建议选择，解析速度快。<br>如果要修改IP，提前一天改为 60，即可快速生效。 |

<!-- endtab -->

{% endtabs %}
判断域名解析是否生效：<kbd>Win</kbd>+<kbd>R</kbd> → 输入`cmd` → 输入 `ping https://www.fgggh.cn` → 出现ip √

---

# 三、云存储配置

## （一）图床

将几十KB到几M的图片/文件存放到专用仓库里，再在网页中使用一行专门用于显示图片的代码，即可不占用网站仓库库存并快速显示图片。

{% btn '',七牛云 %}{% btn '',腾讯云 %}{% btn '',iPic %}{% btn '',picGo %}

## （二）云服务器 // 虚拟主机空间

---

# 四、环境搭建

## （一）服务器软件、版本控制系统（VCS）

{% tabs f,-1 %}

<!-- tab Git(Git Bash) -->

Git（+GitHub/[Gogs](https://gogs.io/)/Gitee(码云)/[Coding.net](https://coding.net/)，[Bitbucket](https://bitbucket.org/), [GitLab](https://gitlab.com/)，[Google Code](https://code.google.com/), [Springloops/Buddy](https://www.springloops.io/)）

**Git** 是Linux之父创造的分布式版本控制系统，一开始便用作Linux内核代码的管理。具有分布式/去中心化/跨平台的架构【本地仓库（`git init`）+服务器+远端下载（`git clone`）】、便捷高效的分支管理的优势。通俗来说，Git提供一个有时光轴功能的代码仓库（本地有版本库），可以在仓库的任意时间点创建分支（`git branch`）来开发不同功能，也可以在代码丢失、误操作时恢复到任一时间点（`git reset`）来拯救项目。
**Git Bash** 是git的命令行程序，可以作为`cmd`、`Windows PowerShell`的替代。脚本、命令的执行均在Git Bash上运行。

<!-- endtab -->

<!-- tab SVN -->

svn（+svnchina/Coding/Springloops/Google Code）

集中式代码版本管理方式，适用于企业管控保护性代码。联网工作（版本库在中央服务器）。

<!-- endtab -->

<!-- tab Mercurial -->

Mercurial（[hg](https://www.zhihu.com/question/20403480)） +BitBucket

轻量级分布式VCS。开发语言`C`/`C++` `Python`。

<!-- endtab -->

{% endtabs %}

## （二）前端语言

{% btn '',HTML %} + {% btn '',CSS %} + {% btn '',JavaScript %}

## （三）前端语言运行环境

Node   JavaScript

## （四）包管理工具

{% btn '',npm %} {% btn '',cnpm %} {% btn '',yarn %}

## （五）代码编辑器

{% btn '',VScode %} {% btn '',nopad++ %} {% btn '',Webstrom %} 
不推荐用记事本编辑代码，容易出现缩进错误。

## （六）代码托管平台

{% tabs d,-1 %}

<!-- tab 适合个人： -->

- **GitHub**：微软收购（美国立场） **[GitLab](https://about.gitlab.com/)**：从前有私库优势

GitHub全球最流行，主打 ==开源项目的推广分享==，适合想让更多人参与代码改进的项目（包括Linux、node.js、JQuery、nginx的开源项目），私有库同时协作工作者只能有三人。
Web端下载仓库（`git clone`）来研究学习，参与（`fork`）某个开源项目的改进并向仓库所有者申请合并（`pull request`），项目被`Star`可带来offer。
**[GitHub Page](https://link.zhihu.com/?target=https%3A//pages.github.com/)** 是由GitHub中的`Repository`（仓库/项目）直接创建的网页，用`Ruby on Rails`输出静态页面。在本地编辑`Repo`中的内容，上传部署到GitHub上，则GitHub Page也能够对应更新。

{% link Github官方指南, https://docs.github.com/cn/github, https://pngimg.com/uploads/github/github_PNG16.png %}

- **Gogs**：类Github的开源文件／代码管理系统

==易部署，占用小，启动快，免费==；托管/issue/wiki；相比gitlab无集成CI、数据备份和恢复、API、各种插件

- **Gitee[码云](https://link.zhihu.com/?target=https%3A//gitee.com/)**：开源中国旗下

工信部支持，本土受众语境。[备选同步托管](https://www.zhihu.com/question/384541326/answers/updated)，做==国内访问的镜像==。

<!-- endtab -->

<!-- tab 主打企业： -->

- **Coding**→[腾讯云开发者平台](https://dev.tencent.com/)

主打小团队/企业协作开发私有项目，主推Web IDE的开发模式，企业版通过与腾讯云的合作提供免费及时部署调试的环境，综合了项目、任务、成员、文件、讨论的管理，Wiki等功能。相比GitHub来说：- 国内访问友好。 可免费创建2个私有仓库。缺点：服务不稳定

- 用 **AngularJS** 编写，git/svn代码托管

- **[阿里云Code托管平台](https://code.aliyun.com/)**

- **[百度效率云](https://xiaolvyun.baidu.com/)**

- **[华为开源平台](https://code.opensource.huaweicloud.com/)**

- 面向AI研发的**阿吉特云Agit.ai**
  
  <!-- endtab -->
  
  {% endtabs %}

本地BLOG文件夹架构：`username.github.io`（网页文件，以Github平台为例，是部署到代码托管平台上的文件夹），`HEXO`（网页框架，以安装在本地的HEXO框架为例，内有网站主题等配置文件）

---

# 五、撰写发布文章

## （一）Markdown标签语法

静态网站必须要用`md`格式撰写文章，必须要有支持`md`格式的文本编辑器。markdown是可以用普通文本编辑器编写的一种文本格式标记语法，语法简洁，用易懂易记的标签同时解决输入内容+排版格式+适配网页样式（完全兼容html）的任务，让作者更专注于创作文字而更少分心于配置样式。

## （二）HTML标签语法

超文本标记语言（Hyper Text Markup Language），html文档中使用的语法，格式规整严谨且通用。我们使用HTML标签来标记文章文字在网页中的结构样式，或实现markdown语法不支持的拓展样式或功能。

## （三）撰写发布文章流程

本地文件夹选择对应文件→`markdown`撰写保存→`git`同步

# 六、我的方案

我自己更倾向于在已有框架上的自由定制，并且考虑到服务器成本，最终选择了Hexo框架+Butterfly主题+Github托管的方案，在后续文章中会记录搭建的足迹。

---
title: '如何从零开始搭建自己的个人网站（2）—— 前端'
date: 24-06-06
permalink: /posts/2024/06/how-to-build-your-own-personal-website-2-frontend/
tags:
  - 前端开发
  - 网站搭建
---

# 如何从零开始搭建自己的个人网站（2）—— 前端

## 简介

本文主要围绕网站开发的两个我认为比较难的点：React-Router路由和GitHub开源组件的使用进行分享。最后也会涉及到一些具体细节的实现方法，比如文本行数超出显示省略号，require动态导入图片。

## Step-3：使用GitHub开源项目辅助自己的网站

在实际的组件开发过程中，我们会发现有一些功能复杂的组件是我们目前无法自行编写的，比如创建博客必须的文本编辑器和上传图片或其他文件用的文件上传组件。好在GitHub上有很多技术大牛已经封装好了的成型组件供我们调用，在这里我推荐braft-editor文本编辑器和filePond文件上传组件。这两个都是高Star，实测效果比较好而且作者也一直在维护的开源项目。

需要注意的是，使用开源项目并不是调用一句 "npm install xxx" 就完事了，因为这些项目必须要和你的props输入以及后端（下篇文章会讲到）适配才算是真正融入到了你的项目当中。举个例子，使用文本编辑器需要自己考虑如何将里面的内容打包传给后端，以及如何在博客阅读界面很好的显示这些内容。这些都需要我们自行阅读作者提供的说明文档来寻找答案。

## Step-4：React-Router路由配置

像我们之前提到的，个人网站是一个多页面的项目，涉及到不同页面之间的跳转逻辑和URL定向，这一点和我之前主要开发过的单页应用是非常不一样的。最开始，我选择的解决办法是通过 npm run eject 配置 config 文件来实现React渲染多个html文件。下面这篇文章是我当时看过比较受用的：

[create-react-app脚手架配置多页面应用](https://blog.csdn.net/iwowen/article/details/103538942)

这种办法对于简单的URL定向是行得通的，但是缺点也比较明显：URL必须要有.html后缀，仅支持根目录下的文件定向。
后来我突然灵光一现：如果create-react-app不可能只支持单页面，官方一定出了路由库方便我们进行路由。果不其然，我找到了react-router这个库。这里强烈推荐大家阅读下面这篇文章，对如何将config和router文件分开有细致的说明，这种方法我个人认为非常好用。

[React 多个路由的配置](https://blog.csdn.net/weixin_46041654/article/details/109383804)

但是按照这个博客的代码运行的话应该页面加载会出问题（具体是什么问题我有点忘记了），因为这里用的是直接 () => import( url )。更好的办法是使用路由懒加载（参见下方文章链接），这样可以在加载页面的过程中显示loading page，避免页面加载时间过长导致长时间的白屏。

[React之路由的使用以及路由懒加载](https://blog.csdn.net/qq_42944436/article/details/105229267)

最后有几个小tips：
1. 两篇路由的文章中使用的HashRouter好像会引发一些问题，采用BrowserRouter比较好。
2. 如使用懒加载，请务必加上Suspense
3. Router只需要render一次

## 杂项

### 如何让文本超出一定行数时省略掉多余文字并在末尾显示省略号？

参考文章：[HTML文字过多，单行超出和多行超出显示省略号](https://blog.csdn.net/weixin_34160277/article/details/92034284?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=1328576.9599.16146502026879395&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

### 如何解决require动态加载图片不成功的问题？

解决方法：使用require(url).default
参考文章：[在react中使用require引入图片不生效](https://www.cnblogs.com/shellon/p/14240630.html)

## 结语

作为立志从事前端开发的学生来说（hhh，原来当时立志要做前端开发程序员吗？），前端的部分并不算很困难，个人网站真正的难点在于并不熟悉的后端的编写。主要分为接口api和数据库交互两方面，下篇文章我会详细讲讲这一部分。

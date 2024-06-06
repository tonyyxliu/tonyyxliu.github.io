---
title: 'How to Build Your Own Personal Website-1: Overview'
# title: '如何从零开始搭建自己的个人网站（1）——明确需求'
date: 2024-06-06
permalink: /posts/2024/06/how-to-build-your-own-personal-website-1-overview/
tags:
  - frontend
  - backend
  - database
  - website-deploy
---

## Locations of key files/directories

* Basic config options: _config.yml
* Top navigation bar config: _data/navigation.yml
* Single pages: _pages/
* Collections of pages are .md or .html files in:
  * _publications/
  * _portfolio/
  * _posts/
  * _teaching/
  * _talks/
* Footer: _includes/footer.html
* Static files (like PDFs): /files/
* Profile image (can set in _config.yml): images/profile.png

## Tips and hints

* Name a file ".md" to have it render in markdown, name it ".html" to render in HTML.
* Go to the [commit list](https://github.com/academicpages/academicpages.github.io/commits/master) (on your repo) to find the last version Github built with Jekyll. 
  * Green check: successful build
  * Orange circle: building
  * Red X: error
  * No icon: not built

## Resources
 * [Liquid syntax guide](https://shopify.github.io/liquid/tags/control-flow/)
 * [MathJax Documentation](https://docs.mathjax.org/en/latest/)

## MathJax 

Support for MathJax Version 3.0 is included in the template:

$$
\displaylines{
\nabla \cdot E= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot B=0 \\\
\nabla \times E= -\partial_tB \\\
\nabla \times B  = \mu_0 \left(J + \varepsilon_0 \partial_t E \right)
}
$$

The default delimiters of `$$...$$` and `\\[...\\]` are supported for displayed mathematics, while `\\(...\\)` should be used for in-line mathematics (ex., \\(a^2 + b^2 = c^2\\))

**Note** that since Academic Pages uses Markdown which cases some interference with MathJax and LaTeX for escaping characters and new lines, although [some workarounds exist](https://math.codidact.com/posts/278763/278772#answer-278772).

## Markdown guide

Academic Pages uses [kramdown](https://kramdown.gettalong.org/index.html) for Markdown rendering, which has some differences from other Markdown implementations such as GitHub's. In addition to this guide, please see the [kramdown Syntax page](https://kramdown.gettalong.org/syntax.html) for full documentation.  

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Quotes are cool.

## Tables

### Table 1

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

### Table 2

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | ce
ll5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Buttons

Make any link standout more when applying the `.btn` class.

## Notices

Basic notices or call-outs are supported using the following syntax:

```markdown
**Watch out!** You can also add notices by appending `{: .notice}` to the line following paragraph.
{: .notice}
```

which wil render as:

**Watch out!** You can also add notices by appending `{: .notice}` to the line following paragraph.
{: .notice}

### Footnotes

Footnotes can be useful for clarifying points in the text, or citing information.[^1] Markdown support numeric footnotes, as well as text as long as the values are unique.[^note]

```markdown
This is the regular text.[^1] This is more regular text.[^note]

[^1]: This is the footnote itself.
[^note]: This is another footnote.
```

[^1]: Such as this footnote.
[^note]: When using text for footnotes markers, no spaces are permitted in the name.

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](http://github.com "Github").

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

You can also write larger blocks of code with syntax highlighting supported for some languages, such as Python:

```python
print('Hello World!')
```

or R:

```R
print("Hello World!", quote = FALSE)
```

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>.

***
**Footnotes**

The footnotes in the page will be returned following this line, return to the section on <a href="#footnotes">Markdown Footnotes</a>.



<!-- # 如何从零开始搭建自己的个人网站（1）——明确需求

## 系列自序

这个系列文章是我当年大三学习和实践前端开发时写的，主要涉及我在自己完整地经历前端页面设计&开发，后端数据库处理和API编写，云服务器部署&搭建到最终网页上线的全过程中遇到的各种问题以及解决方案。当时觉得能搭建出一个属于自己的网站是一件非常难得的事（现在其实也这么觉得），但可惜的是当年的网站由于腾讯云服务器学生优惠到期已经停止运行很久了。现在重新将这部分捡起来，使用开源仓库部署出来，效率比之前快得多，但我还是有些怀念当时一门心思钻研前端开发的时光。现在慢慢地将之前的备份Word文档转为Markdown，也算是重走了一遍当时的路吧^v^。

## 前言

这是我自搭建好自己的个人网站之后写的第一条博客。作为一名才接触前端开发半年左右的大三CS学生，这一个月的开发中我遇到了不少技术难题，但所幸最终还是通过不停地查找资料，一路披荆斩棘，完成了个人网站第一版的上线部署。在此，我也想将我在开发过程中遇到的问题和相应解法，以及一些思考和感悟记录下来，希望能给和我一样想开发属于自己的网站但又不知从何入手的萌新们提供一些经验。整个流程比较繁琐，所以分享会做成一个系列，采取一篇文章重点讲一到两个Step的模式。这样既能避免文章太长让大家失去阅读兴趣，另一方面当然也可以为我刚起步的博客充充数了(^v^)。但由于能力有限，分享当中可能会有一些错误或不足，欢迎大家指正。

## Step-0: 前期准备

### 技术栈
- HTML/CSS：静态网页开发
- JavaScript：动态网页开发核心
- 任意一个前端框架(React, Vue, Angular...)，我用的是React。
- 任意一个UI库，我用的是Material-UI。
- 初步了解一门后端语言，我用的是Golang。
- 数据库：MYSQL就可以。

### 设备
- 一个云服务器（学生机挺便宜的）
- 一个已备案的域名

## Step-1: 规划网站样式和页面

在开始实际写代码之前，我们首先需要想好自己的网站应该长什么样子。可以先在网上找一些你觉得不错的博客样例，然后模仿它来开发。我当时是在 https://www.iwowen.cn/ 这里得到了启发，然后顺着找到了一个GitHub上的高Star博客主题Kratos，最后就照着样例图来一步一步实现。
当然了，也可以找工具直接自动生成一个博客模板，然后自定义一些具体样式和内容。我没有试过，不过肯定会省事很多，但我觉得这样就达不到学习的目的了，所以本文还是以自己动手写为前提。

在想好网站长什么样子之后，下一步就是设计自己的具体页面了。不同的需求会有很不一样的页面设计，但最低的配置是：一个主页面，一个显示博客内容的页面，一个管理员登陆界面，以及一个创建新博客的页面。我们先以这个最低的配置为目标，达到了之后自然就能具备开发更复杂的页面的能力来进一步完善我们的网站。

## Step-2：明确每一个页面的组件模块

不难发现，不同的页面之间有些内容几乎是一摸一样的。比如主页面和显示博客界面都需要有一个Header（标题，头图）和Footer（鸣谢和链接）。这就催生出了前端开发的一个至关重要的概念：组件化/模块化开发。它和OOP（面向对象编程）的思路很相像，都是先设计好每一个小的组件/模块，然后将它们组装成一个整体。这种设计思路大大降低了代码冗余，我们之后会深刻地体会到这一点。

对于我们来说，模块大致有：
- Header
- Footer
- 显示作者（你）信息的板块
- 博客分类板块
- 博客创建板块
- 登录板块
- ......

不要被这些东西吓到，其实每一项做起来都不是那么难。正所谓万事开头难，只要一开始有自信，坚持做下去，就会发现你的开发水平成指数级上升。下一篇文章我会谈一下如何使用React实际开发出这些组件。 -->

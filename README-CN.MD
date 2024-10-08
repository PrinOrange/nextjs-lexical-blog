<div align="center">
  <h2>NEXT.JS LEXICAL BLOG</h2>
</div>

<div align="center">
  <a href="./README.MD">English</a> |
  <a href="./README-CN.MD">简体中文</a>
</div>

---

[![GitHub Repo stars](https://img.shields.io/github/stars/PrinOrange/nextjs-lexical-blog?style=social)](https://github.com/PrinOrange/nextjs-lexical-blog)
[![GitHub forks](https://img.shields.io/github/forks/PrinOrange/nextjs-lexical-blog?style=social)](https://github.com/PrinOrange/nextjs-lexical-blog)
[![Follow My Twitter](https://img.shields.io/twitter/follow/codemetic)](https://twitter.com/intent/follow?screen_name=codemetic)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/PrinOrange/nextjs-lexical-blog)](https://blog.terminals.run/sponsor)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPrinOrange%2Fnextjs-lexical-blog&project-name=nextjs-lexical-blog-template&repository-name=nextjs-lexical-blog&demo-title=Lexical%20Blog%20Demo&demo-description=This%20is%20a%20sleek%20and%20efficient%20web%20blog%20project%2C%20built%20with%20Next.js%20%2B%20MDX%20%2B%20TailwindCSS.%20You%20can%20write%20your%20blog%20posts%20in%20Markdown%20and%20easily%20deploy%20them%20on%20Vercel.&demo-url=nextjs-lexical-blog-demo.vercel.app&demo-image=https%3A%2F%2Fnextjs-lexical-blog-demo.vercel.app%2Fimages%2Fpreview.png)

这是一个设计简洁、高效的网络博客项目。它以 Next.js + MDX + TailwindCSS 构建，你可以使用 Markdown 格式来编写博客文章，并且能很轻松地部署到 Vercel 上。

它具备了博客网站的一切基本功能：标签分类、编写、评论、标题列表等。

<!-- TOC -->

- [特性支持](#%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81)
- [案例展示](#%E6%A1%88%E4%BE%8B%E5%B1%95%E7%A4%BA)
- [快速上手](#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B)
  - [初始化项目](#%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE)
  - [创建博客](#%E5%88%9B%E5%BB%BA%E5%8D%9A%E5%AE%A2)
  - [开发](#%E5%BC%80%E5%8F%91)
  - [构建](#%E6%9E%84%E5%BB%BA)
- [数据与配置](#%E6%95%B0%E6%8D%AE%E4%B8%8E%E9%85%8D%E7%BD%AE)
- [打包、还原用户数据](#%E6%89%93%E5%8C%85%E8%BF%98%E5%8E%9F%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE)
- [一些问题](#%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98)
  - [RTL & LTR](#rtl--ltr)
  - [字体](#%E5%AD%97%E4%BD%93)
  - [MDX](#mdx)
  - [图床、外链图片](#%E5%9B%BE%E5%BA%8A%E5%A4%96%E9%93%BE%E5%9B%BE%E7%89%87)
  - [RSS Feed](#rss-feed)
  - [赞助渠道](#%E8%B5%9E%E5%8A%A9%E6%B8%A0%E9%81%93)
  - [评论系统](#%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F)
  - [全文搜索](#%E5%85%A8%E6%96%87%E6%90%9C%E7%B4%A2)
  - [i18n](#i18n)
- [部署](#%E9%83%A8%E7%BD%B2)
  - [部署到 Vercel](#%E9%83%A8%E7%BD%B2%E5%88%B0-vercel)
  - [部署到服务器](#%E9%83%A8%E7%BD%B2%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8)
  - [部署到 Cloudflare Pages](#%E9%83%A8%E7%BD%B2%E5%88%B0-cloudflare-pages)
- [感谢](#%E6%84%9F%E8%B0%A2)
- [开源许可](#%E5%BC%80%E6%BA%90%E8%AE%B8%E5%8F%AF)

<!-- /TOC -->

### 特性支持

| Feature                | Support  |
| ---------------------- | -------- |
| 公式渲染               | ✅       |
| RSS 推送               | ✅       |
| 博客全文搜索           | ✅       |
| 文本排版方向 RTL & LTR | 部分支持 |
| 代码块渲染             | ✅       |
| 开箱即用               | ✅       |
| 高度可配置化           | ✅       |
| 博客评论               | ✅       |
| SEO                    | ✅       |
| 无障碍设计             | ✅       |

### 案例展示

以下博客网站均采用了本项目。

- [NEXTJS-LEXICAL-BLOG DEMO](https://nextjs-lexical-blog-demo.vercel.app)
- [但为君故 NOTE & BLOG](https://dreams.plus)

如果你希望在此处也展示你搭建的博客，你也可以创建一个 Pull Request 来提交你的网址。

### 快速上手

着手本项目之前，我在此假设你已经具备以下知识水平：

- 对 React.js, Next.js, Node.js 开发和 TypeScript 语言较熟悉。
- 能较为熟练地书写 Markdown 文档、HTML 文档。
- 拥有基本的 Web 开发知识，如部署 Web 服务、SSL、反向代理等。

#### 初始化项目

本项目要求的运行环境如下：

- node.js v18+
- pnpm v9+
- Chromium 系浏览器（Chrome、Edge）或者 Firefox。

我推荐使用 Visual Studio Code 作为开发工具。

执行脚本以安装依赖，

```bash
pnpm install
```

#### 创建博客

所有的博客文件均用 Markdown 书写，储存在 `/data/posts` 目录下。但是，如果你要创建一篇新博客，**不要直接手动在 `/data/posts` 目录下直接创建 Markdown 文件！** 因为每一篇博客需要携带一些 FrontMatter 头信息，这些应该由程序自动生成，否则可能会在解析时出错。

你应该使用脚本来创建帖子。

```bash
pnpm run newpost
```

然后程序会问你一些问题，你只需要根据问题输入你的回答，程序会自动为你创建一个新帖子文件并打开它。

```plain text
> lexical-blog@0.1.0 newpost
> node ./scripts/newpost.mjs

? What's the title?
// 必选，在这里输入你的文章标题。建议不超过 20 字。

? What's the subtitle?
// 可选。在这里输入你的文章副标题。建议不超过 20 字。

? Assign tags for the posts and separate them with commas.
// 可选。为文章打上标签，并且用英文逗号来分隔它们。
// 比如technology,news,programming 。
// 建议标签数量不超过 4 个，每个标签不超过 3 个单词或者 5 个汉字。

? Do NOT prompt this post? (D:false) No
// 默认为否。是否要低调发布？
// 如果是，那么这篇文章发布后不会被推送到首页，也不会收录到 RSS 。
// 只能通过文章总列表中找到它。

? Do you want to pin this post? (D:false) No
// 默认为否。是否要置顶这篇文章？

? Do you allow everybody share this post? (D:true) Yes
// 默认为是。是否允许他人分享这篇文章？
// 如果为否，那么这篇文章会被禁止复制、通过社交链接分享。
```

然后程序就会通知如下信息，这代表着博客文件已经生成，你可以打开并编辑。

```plaintext
Create Post Succeed.
Open the file ./data/posts/2023-12-24-This-is-my-new-post.md to write your blog now.
Some fields, such as summary, need to be filled in by yourself after opening the file.
```

打开刚创建好的帖子文件，你可以看到如下信息：

```plaintext
---
title: "xxxxxxx"
subtitle: "xxxxxxx"
summary: ""
coverURL: ""
time: "2023-12-29"
tags: ["xxx","xxx"]
noPrompt: false
pin: false
allowShare: true
---

```

其中 `title` ，`subtitle` ，`tags` 等等字段在创建时脚本已经自动为你生成好了。只有 `summary` ，`coverURL` 字段还是空的。它们需要你手动填写。

`summary` 字段是对文章的大体总结，会展示到博客列表中，建议 100 字以内。而 `coverURL` 是博客的封面图片，需要写入图片的网络引用链接，会展示到帖子顶部。为了最佳展示效果，建议图片的长宽比为 5 : 2。

#### 开发

在开发环境下执行项目。

```bash
pnpm run dev
```

当然你可以使用 Turbo Build 来执行开发模式，它在项目热刷新上有良好的性能。

```bash
pnpm run dev:turbo
```

#### 构建

构建项目，可执行

```bash
pnpm run build
```

或者使用 Turbo Build 构建项目，以提高性能

```bash
pnpm run build:turbo
```

### 数据与配置

博客的配置文件在 `./data` 目录下，一共有两种，均用 TypeScript Object 定义。每一项的数据都用注释给出了说明。

- [config.ts](./data/config.ts) ：网站的主要配置信息，如网站标题、社交账号、头像、封面图象等。
- [friends.ts](./data/friends.ts) ：用于存放友情链接。

### 打包、还原用户数据

本项目可以提供对博客文件、配置等用户数据的一键打包、还原功能，以便于项目升级时迁移或者备份、恢复数据，可以使用脚本工具

```bash
pnpm run archive
```

来实现。运行脚本后，给你提供打包用户数据和还原用户数据两个选项：`Pack to archive the user data` 和 `Unpack and restore user data` ，分别用于打包归档用户数据和解包恢复用户数据。

来一键打包你的博客文件、配置文件等数据到 `*.tar.gz` 文件。执行脚本时，请输入你要存放的目录即可。

注意：若要恢复用户数据，请一定要注意当前 `./data` 目录下目前存放的用户数据是空的。否则恢复时会覆盖已有的用户数据。

### 一些问题

#### RTL & LTR

本项目默认布局为 LTR。不过，本项目也支持 RTL 布局。如果您使用的是阿拉伯语、波斯语、希伯来语等，请手动修改 [\_document.tsx](./pages/_document.tsx)，如下所示。

将 Html 标签

```tsx
<Html dir="ltr" lang="en">
  {....}
</Html>
```

更改为

```tsx
<Html dir="rtl" lang="en">
  {....}
</Html>
```

#### 字体

经过大量的实践验证，本站使用中文和英文作为主要文字，因此，本项目使用 **方正小标宋（非商业用途）、思源屏显臻宋、Source Serif 4、Source Serif KR** 等作为字体资源，支持绝大多数拉丁字符、西里尔字符等还有通用字符，以及中日韩汉字、朝鲜彦文、日文假名等。它们在移动端、PC 端的屏幕上均有不错的显示效果，所以分别作为正式标题和正文的字体。

#### MDX

经过综合考虑，本项目使用了 [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) 作为 MDX 引擎。但是，考虑到本博客是以记载文字为主，而非文档型网站，且 MDX 语法与 Markdown 语法差异较大，所以本项目支持大众更常用的 Markdown 语法来书写内容。当然，你也可以在 Markdown 中使用 HTML 片段实现更灵活的排版。

#### 图床、外链图片

由于本项目使用 next-mdx-remote 引擎，这个引擎不允许直接在 Markdown 中直接使用项目目录下的图片。所以，如果需要插入图片，应当先将图片上传到图床后在文档中引用图片链接。

我推荐使用 **PicGO** 工具来搭建自己的图床。[你可以点击此处查看文档。](https://picgo.github.io/PicGo-Doc/en/)

#### RSS Feed

本站支持 RSS Feed 2.0，每次构建网站时均自动生成 RSS 链接。每次 RSS Feed 推送的文章与首页的最新文章一致。当然你可可以通过 `./data/config.ts` 中的 `RSSFeed.enabled` 项来选择是否启用。

#### 赞助渠道

博客网站的 `/sponsor` 页面用于展示赞助渠道、赞助说明。可以在 [`./data/config.ts`](./data/config.ts) 中的 `Sponsor` 项来配置。博客网站目前支持的的赞助渠道有四个：微信支付、支付宝、Paypal 和 Patreon 。

你可以看到类似如下的配置项：

```typescript
Sponsor: {
  WechatPayQRCodeContent: "wxp://xxxxxxxxxxxxxxxxx",
  AlipayLink: "https://qr.alipay.com/xxxx",
  PaypalId: "xxxx",
  PatreonId: "xxxx",
  ....
},
```

- 如果你需要开通微信支付的赞助渠道，你可以先保存你的微信收款码，然后再使用二维码解码器，以纯文本的解码方式读取微信收款码的字符串内容，然后你会得到类似 `wxp://xxxxxxxxxxxxxxxxx` 的字符串，再输入到 `WechatPayQRCodeContent` 项中。
- 如果你需要开通支付宝的赞助渠道，同上，可以用二维码解码器的纯文本模式解码支付宝的收款码，然后你会得到类似 `https://qr.alipay.com/xxxx` 的支付宝链接，输入即可。
- 对于 Paypal 赞助渠道，输入你的 Paypal ID 即可。
- 对于 Patreon 赞助渠道，输入你的 Patreon ID 即可。

#### 评论系统

本网站使用 Giscus 作为评论系统。具体配置方法请看这里。它要求每一个评论者都要使用自己的 Github 账号。当然，你也可以使用其他的评论系统，比如 Disqus 。

你可以[点击这里查看 Giscus 的相关介绍和用法。](https://giscus.app/)

#### 全文搜索

本项目使用了 [MiniSearch](https://github.com/lucaong/minisearch) 作为基于内存索引的全文搜索引擎。以天下霸唱的《鬼吹灯》为例，有 200 万字左右的中文内容，它的性能表现非常不错：索引占据内存空间为 6 MB，一次查询调用，平均响应时间在 100 ms 以下。

注意：全文搜索目前只支持中文和拉丁系语言（英文、法文、西班牙文等）。对于还不支持其他亚洲语文，如日文、朝鲜文、泰文等。要支持这些语文，还需要集成一些好用的语句分词器来编制索引。欢迎使用这些语言的人提出 pull request 来帮我完成这些工作。

#### i18n

对于个人博客，i18n 其实并没有实用意义。所以，本项目暂时 **不支持 i18n** ，如果你是多语言作者，为了用语言来区分博客，我建议在每篇文章的 tags 下加一个当前语言的标志。比如，对中文博客，在 tags 下加一个 `中文博客` 标签，对英文博客，在 tags 下加一个 `English` 标签。

### 部署

#### 部署到 Vercel

如果你的受众不是以中国大陆的用户为主，那么我推荐使用 [Vercel](https://vercel.com) 部署这个博客网站。

点击以下按钮快速部署。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPrinOrange%2Fnextjs-lexical-blog&project-name=nextjs-lexical-blog-template&repository-name=nextjs-lexical-blog&demo-title=Lexical%20Blog%20Demo&demo-description=This%20is%20a%20sleek%20and%20efficient%20web%20blog%20project%2C%20built%20with%20Next.js%20%2B%20MDX%20%2B%20TailwindCSS.%20You%20can%20write%20your%20blog%20posts%20in%20Markdown%20and%20easily%20deploy%20them%20on%20Vercel.&demo-url=nextjs-lexical-blog-demo.vercel.app&demo-image=https%3A%2F%2Fnextjs-lexical-blog-demo.vercel.app%2Fimages%2Fpreview.png)

#### 部署到服务器

部署到自己的服务器较为麻烦。我们推荐使用 [PM2.js](https://github.com/Unitech/pm2) 来部署网站，并使用 nginx 等反向代理工具将主机域名映射到本地程序端口上。

另外，你可以使用 Let's Encrypt + Certbot 为网站配置免费的 SSL 证书，[点击这里获得更详细的说明。](https://letsencrypt.org/getting-started/)

#### 部署到 Cloudflare Pages

本项目目前暂时**不支持**部署到 Cloudflare Pages。因为本项目中的全文搜索功能还不支持在 Edge Runtime 中运行。本项目在动态运行时中使用了 MDX 库来对文档进行索引编排，而 Edge Runtime 和 MDX.js 库的 API 接口互不兼容。

不过这一方面的内容仍然在探索中。

### 感谢

- 感谢 [@timlrx](https://github.com/timlrx) 的项目 [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 给予的启发，为我提供了完成这个项目的理念和技术灵感。
- 感谢 [@江夏尧](https://github.com/KonghaYao) 的 Font Spilt Tools 和他的项目 [中文网字计划](https://chinese-font.netlify.app/)，为我提供了强大的字体处理工具，帮助我解决了前端加载 CJK 字体时加载大小的问题。

### 开源许可

本项目以 [MIT 协议](./LICENSE) 开源。我们欢迎一切具有建设性的意见、代码贡献。

**注意：尽量不要将本项目使用于商业用途。因为本项目引用的第三方图标、字体等部分美术资源要求非商业用途，可能存在法律风险。**

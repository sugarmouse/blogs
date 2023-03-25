---
title: nextjs 初体验
date: 2022-03-01
---

Next.js 是一个基于 React 的轻量级服务器渲染框架，提供了一系列现代化的开发工具和最佳实践，使得开发者可以快速地构建高性能、可维护的 Web 应用程序。在本文中，我们将介绍 Next.js 的一些核心特性和使用方法，帮助初学者快速上手 Next.js。

## 安装 Next.js

要使用 Next.js，您需要先安装 Node.js 和 npm 包管理器。然后，在您的项目目录中，运行以下命令来安装 Next.js：

npm install next react react-dom
安装完成后，您可以开始创建 Next.js 应用程序了。

创建 Next.js 应用程序
要创建一个新的 Next.js 应用程序，请运行以下命令：

```bash
npx create-next-app my-app
cd my-app
npm run dev
```

这将创建一个名为 my-app 的新项目，并在开发模式下启动 Next.js 服务器。您可以在浏览器中打开 <http://localhost:3000> 来查看应用程序。

页面路由
在 Next.js 中，页面路由是通过文件系统来实现的。每个页面都是一个独立的文件，存放在 pages 目录下。例如，要创建一个名为 about 的页面，只需要在 pages 目录下创建一个名为 about.js 的文件即可。

```js
function About() {
  return <h1>About Page</h1>
}
```

export default About
默认情况下，Next.js 会自动将所有页面转换为服务器渲染的 React 组件，并将它们包装在一个包含路由逻辑的页面框架中。

静态文件服务
在 Next.js 中，您可以通过将文件放置在 public 目录下来提供静态文件服务。例如，如果您将一个名为 image.jpg 的图像文件放置在 public 目录下，那么它可以通过以下 URL 访问：

<http://localhost:3000/image.jpg>
Next.js 还支持在页面组件中引用 public 目录下的静态文件，例如：

```js
function MyImage() {
  return <img src="/image.jpg" alt="My Image" />
}
```

## 数据获取

在 Next.js 中，您可以使用 getStaticProps() 和 getServerSideProps() 方法来获取数据并将其传递给页面组件。这两个方法可以在服务器端获取数据，然后将其注入到页面组件的 props 属性中。

例如，以下代码示例演示如何使用 getStaticProps() 方法获取一个名为 posts 的博客文章列表，并将其传递给页面组件：

```js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default Blog
```

## 总结

在本文中，我们介绍了 Next.js 的一些核心特性和使用方法，包括页面路由、静态文件服务和数据获取。Next.js 提供了一种简单、快速的方式来构建现代化的 Web 应用程序，并且具有出色的性能和可维护性。如果您正在寻找一种现代化的 Web 开发框架，那么 Next.js 绝对值得一试。

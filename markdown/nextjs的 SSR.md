---
title: Next.js 的 SSR
date: 2023-03-11
---

## 什么是 SSR

SSR（Server-Side Rendering）指的是在服务器端生成 HTML 页面内容，并将其发送给浏览器进行渲染。相比于传统的客户端渲染（CSR），SSR 可以提供更好的性能和更好的 SEO。

在客户端渲染中，浏览器会首先下载 HTML 和 JavaScript 文件，然后使用 JavaScript 代码来渲染页面。这种方式可以提高 Web 应用程序的交互性和响应速度，但也会导致页面加载速度较慢，对 SEO 不利。

相比之下，SSR 可以在服务器端渲染页面，然后将其发送给浏览器进行渲染。这种方式可以提高页面加载速度和 SEO，但也会增加服务器的负担。

## Next.js 的 SSR

Next.js 是一个基于 React 的轻量级服务器渲染框架，它支持 SSR 和 CSR 两种渲染方式。在 Next.js 中，SSR 是默认的渲染方式，它可以帮助开发者快速构建高性能、可维护的 Web 应用程序。

在 Next.js 中，页面的渲染是在服务器端完成的。当用户访问页面时，Next.js 会在服务器上生成 HTML 页面内容，并将其发送给浏览器进行渲染。这种方式可以提高页面加载速度和 SEO，同时也可以提高 Web 应用程序的可维护性和可扩展性。

## 如何使用 Next.js 的 SSR

要使用 Next.js 的 SSR，您需要掌握以下几个关键概念：

### 页面路由

在 Next.js 中，页面路由是通过文件系统来实现的。每个页面都是一个独立的文件，存放在 pages 目录下。例如，要创建一个名为 about 的页面，只需要在 pages 目录下创建一个名为 about.js 的文件即可。

```js
function About() {
  return <h1>About Page</h1>
}

export default About
```

### 数据获取

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

### 静态文件服务

在 Next.js 中，您可以通过将文件放置在 public 目录下来提供静态文件服务。例如，如果您将一个名为 image.jpg 的图像文件放置在 public 目录下，那么它可以通过以下 URL 访问：

`http://localhost:3000/image.jpg`
Next.js 还支持在页面组件中引用 public 目录下的静态文件，例如：

```js
function MyImage() {
  return <img src="/image.jpg" alt="My Image" />
}
```

## 总结

Next.js 的 SSR 提供了一种快速、可维护、高性能的 Web 应用程序开发方式。掌握 Next.js 的基本概念和技术，您可以快速构建出高质量的 Web 应用程序，并提供更好的用户体验和 SEO。

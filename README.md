# blog

## Getting Started

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 启动数据库

```bash
mkdir blog-data
docker run -v "$PWD/blog-data/":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

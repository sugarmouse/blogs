import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';

const markdownDir = path.join(process.cwd(), 'markdown');

export async function getPosts() {
  const fileNames = await fs.promises.readdir(markdownDir);

  const x = fileNames.map((fileName) => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');

    const {
      data: { title, date },
      content,
    } = matter(text);

    return { id, title, date };
  });

  return x;
}

export async function getPost(id: string) {
  const fullPath = path.join(markdownDir, id + '.md');
  const text = fs.readFileSync(fullPath, 'utf-8');

  const {
    data: { title, date },
    content,
  } = matter(text);

  const htmlContent = marked(content);

  return JSON.parse(JSON.stringify({ id, title, date, content, htmlContent }));
}

export async function getPostIds() {
  const fileNames = await fs.promises.readdir(markdownDir);
  return fileNames.map((fileNames) => fileNames.replace(/.md$/g, ''));
}

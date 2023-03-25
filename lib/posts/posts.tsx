import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

async function getPosts() {
  const markdownDir = path.join(process.cwd(), 'markdown');
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

export default getPosts;

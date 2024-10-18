import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPosts() {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    }));

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}
import { getPostBySlug, getPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <div className="mb-8">
          <span className="text-gray-600 mr-4">{post.date}</span>
          <span className="text-blue-600 font-medium">{post.category}</span>
        </div>
        <div className="prose max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </div>
  );
}
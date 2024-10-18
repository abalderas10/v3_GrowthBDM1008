'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  'Arquitectura',
  'Construcción',
  'Ingenierías',
  'Interiores Corporativos',
  'Business Development',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory === 'Todos'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-growth-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-growth-text">Blog de Growth Business Development</h1>
        
        <div className="mb-8">
          <Button
            onClick={() => setSelectedCategory('Todos')}
            variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
            className="mr-2 mb-2"
          >
            Todos
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="mr-2 mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <p className="text-center text-growth-text">Cargando posts...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredPosts.length === 0 ? (
          <p className="text-center text-growth-text">No hay posts disponibles en esta categoría.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-growth-text">{post.title}</h2>
                    <p className="text-growth-text mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm font-medium text-growth-blue">{post.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
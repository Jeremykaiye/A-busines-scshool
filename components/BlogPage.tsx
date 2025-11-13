import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 AI Tools That Will Revolutionize Your Content Creation',
    category: { name: 'AI Tools', href: '#' },
    description:
      'Discover the top AI-powered tools that can help you write, design, and create content faster and more efficiently than ever before. We dive deep into the features and use cases for each.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl: 'https://picsum.photos/id/240/100/100',
    },
  },
  {
    id: 2,
    title: 'How to Validate Your AI Business Idea in 48 Hours',
    category: { name: 'Business Strategy', href: '#' },
    description:
      'Got a great idea for an AI-driven business? Don\'t waste months building something nobody wants. Follow our step-by-step guide to validate your concept quickly and effectively.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    author: {
      name: 'Lindsay Walton',
      imageUrl: 'https://picsum.photos/id/241/100/100',
    },
  },
    {
    id: 3,
    title: 'The Future of E-commerce: Personalization at Scale with AI',
    category: { name: 'E-commerce', href: '#' },
    description:
      'Learn how artificial intelligence is transforming the online shopping experience. From personalized recommendations to automated customer service, AI is the key to scaling your e-commerce empire.',
    date: 'Feb 28, 2024',
    datetime: '2024-02-28',
    author: {
      name: 'Tom Cook',
      imageUrl: 'https://picsum.photos/id/242/100/100',
    },
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Insights, tutorials, and the latest news from the world of AI-powered business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors">
              <div className="relative w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-sky-300 hover:bg-gray-600"
                  >
                    {post.category.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.author.name}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

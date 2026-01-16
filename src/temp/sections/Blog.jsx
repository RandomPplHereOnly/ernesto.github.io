import { Section } from '../components';
import { EXPERIENCE } from '../data/experience';

const Blog = () => {
  return (
    <Section id="blog" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Latest Writings</h2>
        <a href="#" className="text-teal-600 dark:text-teal-400 hover:underline font-medium text-sm">View all posts</a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-3 font-mono">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Read Article <ArrowRight size={14} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
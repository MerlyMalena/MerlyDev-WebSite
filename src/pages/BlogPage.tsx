import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Calendar, Clock, Search } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';

interface BlogPageProps {
  onNavigateHome: () => void;
  onSelectPost: (id: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateHome, onSelectPost }) => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');

  // Extract all unique tags
  const allTags = ['todos', ...Array.from(new Set(BLOGS_DATA.flatMap((b) => b.tags)))];

  const filteredPosts = BLOGS_DATA.filter((post) => {
    const matchesTag = selectedTag === 'todos' || post.tags.includes(selectedTag);
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Link */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </button>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
            <BookOpen size={14} className="text-[#f3dc99]" />
            El Blog de MerlyDev
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#6c7c39] tracking-tight">
            Todos los Artículos
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#323e11]/80 font-sans">
            Guías, reflexiones, arquitecturas de frontend y experimentos de diseño web.
          </p>
        </div>

        {/* Search & Tags */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-3xl bg-[#cbd99e]/30 border-2 border-[#85984e]/30">
          {/* Tag filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all ${
                  selectedTag === tag
                    ? 'bg-[#85984e] text-white shadow-sm'
                    : 'bg-white/80 text-[#323e11] hover:bg-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#85984e]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artículo..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-white border border-[#85984e]/40 text-[#323e11] focus:outline-none focus:border-[#85984e] font-sans"
            />
          </div>
        </div>

        {/* Full Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#cbd99e]/30 rounded-[32px] border-2 border-[#85984e]/30">
            <p className="text-[#323e11]/80 text-lg font-sans">No se encontraron artículos con ese criterio.</p>
          </div>
        ) : (
          <div className={filteredPosts.length === 1 ? "max-w-xl mx-auto w-full" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -6 }}
                onClick={() => onSelectPost(post.id)}
                className="cursor-pointer rounded-[32px] bg-[#FAF8F2] border-2 border-[#85984e]/30 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#85984e] transition-all flex flex-col justify-between group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-[#cbd99e]/30">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/70 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white text-xs font-bold font-sans">
                    <span className="flex items-center gap-1 bg-[#323e11]/80 px-3 py-0.5 rounded-full text-[#f3dc99]">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 bg-[#323e11]/80 px-3 py-0.5 rounded-full">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#6c7c39] leading-snug group-hover:text-[#323e11] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#323e11]/80 font-sans leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#85984e]/20 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#85984e] group-hover:text-[#323e11] transition-colors">
                      Leer artículo completo →
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((t) => (
                        <span key={t} className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#cbd99e]/40 text-[#323e11]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';

interface BlogPreviewProps {
  onViewAll?: () => void;
  onSelectPost?: (id: string) => void;
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ onViewAll, onSelectPost }) => {
  // Take the 3 most recent blogs
  const recentBlogs = BLOGS_DATA.slice(0, 3);

  const handleSelect = (id: string) => {
    if (onSelectPost) {
      onSelectPost(id);
    } else {
      window.location.hash = `/articulo/${id}`;
    }
  };

  return (
    <section id="blog-preview" className="py-20 px-4 sm:px-6 relative font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
              <BookOpen size={14} className="text-[#f3dc99]" />
              Blog & Notas
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#6c7c39] tracking-tight">
              Artículos Recientes
            </h2>
            <p className="mt-2 text-base text-[#323e11]/80 font-sans">
              Reflexiones, aprendizajes y guías sobre desarrollo de software y diseño web.
            </p>
          </div>

          {/* Botón con fondo blanco sólido y alto contraste */}
          <a
            href="#/blog"
            onClick={(e) => {
              if (onViewAll) {
                e.preventDefault();
                onViewAll();
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-sm transition-all text-sm font-bold font-serif group"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Recent Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBlogs.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              onClick={() => handleSelect(post.id)}
              className="cursor-pointer rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#85984e] transition-all flex flex-col justify-between group"
            >
              {/* Cover Image */}
              <div className="relative h-44 w-full overflow-hidden bg-[#cbd99e]/30">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#85984e] mb-2 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#6c7c39] leading-snug line-clamp-2 group-hover:text-[#323e11] transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#323e11]/80 line-clamp-3 font-sans leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#85984e]/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#85984e] group-hover:text-[#323e11] flex items-center gap-1">
                    Leer nota completa →
                  </span>
                  <div className="flex gap-1">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#cbd99e]/40 text-[#323e11]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

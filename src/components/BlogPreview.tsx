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
    <section id="blog" className="min-h-[85vh] flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-20 px-3 sm:px-6 relative font-serif scroll-mt-28">
      <div className="w-full max-w-5xl mx-auto">
        {/* Contenedor transparente idéntico al de Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[28px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-4 sm:p-8 md:p-9 shadow-lg shadow-[#6c7c39]/10"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#85984e] text-white mb-1.5 shadow-xs">
                <BookOpen size={13} className="text-[#f3dc99]" />
                Blog & Notas
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6c7c39] tracking-tight leading-tight">
                Artículos Recientes
              </h2>
              <p className="mt-0.5 text-xs sm:text-sm text-[#323e11]/80 font-sans">
                Reflexiones, notas y guías sobre desarrollo de software y diseño web.
              </p>
            </div>

            {/* Botón con fondo blanco sólido y letras verdes */}
            <a
              href="#/blog"
              onClick={(e) => {
                if (onViewAll) {
                  e.preventDefault();
                  onViewAll();
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-xs sm:text-sm font-bold font-serif group"
            >
              <span>Ver todos los artículos</span>
              <ArrowRight size={15} className="text-[#6c7c39] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Recent Blogs Grid */}
          {recentBlogs.length === 0 ? (
            <div className="text-center py-12 bg-[#cbd99e]/20 rounded-[28px] border-2 border-dashed border-[#85984e]/30">
              <p className="text-sm font-sans text-[#323e11]/80">Próximamente nuevos artículos y notas de desarrollo...</p>
            </div>
          ) : (
            <div className={recentBlogs.length === 1 ? "max-w-md mx-auto w-full" : "grid grid-cols-1 md:grid-cols-3 gap-5"}>
              {recentBlogs.map((post) => (
                <motion.article
                  key={post.id}
                  whileHover={{ y: -5 }}
                  onClick={() => handleSelect(post.id)}
                  className="cursor-pointer rounded-[24px] bg-[#FAF8F2] border-2 border-[#85984e]/30 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#85984e] transition-all flex flex-col justify-between group"
                >
                  {/* Cover Image */}
                  <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#cbd99e]/30">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/60 via-transparent to-transparent opacity-50" />
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#85984e] mb-1.5 font-sans">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#6c7c39] leading-snug line-clamp-1 group-hover:text-[#323e11] transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#323e11]/80 line-clamp-2 font-sans leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#85984e]/20 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#6c7c39] group-hover:text-[#323e11] flex items-center gap-1">
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
          )}
        </motion.div>
      </div>
    </section>
  );
};

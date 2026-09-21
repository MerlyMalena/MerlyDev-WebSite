import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-serif">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#323e11]/70 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-3xl rounded-[32px] bg-[#FAF8F2] border-2 border-[#85984e] shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar artículo"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#323e11]/80 text-white hover:bg-[#85984e] transition-all active:scale-95 shadow-md"
          >
            <X size={20} />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#cbd99e]/40">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-white">
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#f3dc99] bg-[#323e11]/80 backdrop-blur-sm px-3.5 py-1 rounded-full">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#323e11]/80 backdrop-blur-sm px-3.5 py-1 rounded-full font-sans">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#6c7c39] leading-snug">
              {post.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1 border-b border-[#85984e]/20 pb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#cbd99e]/40 text-[#323e11] border border-[#85984e]/30 flex items-center gap-1"
                >
                  <Tag size={12} className="text-[#85984e]" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content formatted */}
            <div className="prose prose-stone text-[#323e11]/90 font-sans text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </div>

            <div className="pt-6 border-t border-[#85984e]/20 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#85984e] hover:bg-[#323e11] text-white font-serif font-bold text-sm shadow-md transition-all"
              >
                Cerrar Artículo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};


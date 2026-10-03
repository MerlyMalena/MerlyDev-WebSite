import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Check, BookOpen, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';
import { HoneycombIcon } from '../components/HoneycombIcon';

interface BlogDetailPageProps {
  postId: string;
  onBack: () => void;
  onSelectOtherPost: (id: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  postId,
  onBack,
  onSelectOtherPost,
}) => {
  const [copied, setCopied] = useState(false);
  const post = BLOGS_DATA.find((b) => b.id === postId) || BLOGS_DATA[0];
  const otherPosts = post ? BLOGS_DATA.filter((b) => b.id !== post.id).slice(0, 2) : [];

  if (!post) {
    return (
      <div className="pt-32 pb-20 px-4 text-center font-serif">
        <p className="text-xl text-[#323e11]">No hay artículos disponibles en este momento.</p>
        <button
          onClick={onBack}
          className="mt-6 px-6 py-2.5 rounded-full bg-[#85984e] text-white font-bold hover:bg-[#323e11] transition-all"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Helper to format content paragraphs and headings
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;

      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={idx}
            className="text-2xl sm:text-3xl font-bold text-[#6c7c39] mt-8 mb-3 font-serif"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      }

      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={idx}
            className="text-3xl sm:text-4xl font-bold text-[#6c7c39] mt-10 mb-4 font-serif"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      }

      // Check for inline code like `code`
      const formattedText = trimmed.split(/(`[^`]+`)/g).map((part, pIdx) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={pIdx}
              className="px-2 py-0.5 rounded-md bg-[#cbd99e]/40 text-[#323e11] font-mono text-sm border border-[#85984e]/30"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      });

      return (
        <p key={idx} className="text-[#323e11]/90 font-sans text-base sm:text-lg leading-relaxed mb-4">
          {formattedText}
        </p>
      );
    });
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Navigation back buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm font-bold group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Volver a Artículos</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-xs sm:text-sm font-bold"
            title="Copiar enlace"
          >
            {copied ? (
              <>
                <Check size={15} className="text-green-600" />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Share2 size={15} />
                <span>Compartir</span>
              </>
            )}
          </button>
        </div>

        {/* Article Full Card */}
        <article className="bg-[#FAF8F2] rounded-[36px] border-2 border-[#85984e]/40 p-6 sm:p-12 shadow-xl shadow-[#6c7c39]/10 space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-xs">
                <BookOpen size={13} className="text-[#f3dc99]" />
                Artículo
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#85984e] bg-[#cbd99e]/30 px-3.5 py-1 rounded-full font-sans">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#85984e] bg-[#cbd99e]/30 px-3.5 py-1 rounded-full font-sans">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#6c7c39] tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Lead Summary */}
            <p className="text-lg sm:text-2xl text-[#323e11]/80 font-sans leading-relaxed pt-2 border-l-4 border-[#85984e] pl-4 italic">
              {post.summary}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full rounded-[28px] overflow-hidden bg-[#cbd99e]/30 border border-[#85984e]/20 shadow-md">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/50 via-transparent to-transparent opacity-40" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#85984e]/20 pb-6">
            <span className="text-xs font-bold text-[#85984e] uppercase mr-2 flex items-center gap-1">
              <Tag size={13} /> Etiquetas:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#cbd99e]/40 text-[#323e11] border border-[#85984e]/30"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Body Content */}
          <div className="pt-2">
            {renderFormattedContent(post.content)}
          </div>

          {/* Author Bio Card at Bottom */}
          <div className="mt-12 pt-8 border-t-2 border-[#85984e]/20">
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#cbd99e]/30 border-2 border-[#85984e]/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-[#85984e] text-white flex items-center justify-center shrink-0 shadow-md">
                <HoneycombIcon className="w-8 h-8" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-lg font-bold text-[#6c7c39]">Escrito por Merly</h4>
                  <Sparkles size={16} className="text-[#85984e]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#85984e] font-sans">
                  Software Developer & Creator en MerlyDev
                </p>
                <p className="text-sm text-[#323e11]/85 font-sans pt-1">
                  Todo problema tiene salida; solo hay que saber diseñar la solución.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Other Articles Recommendation */}
        {otherPosts.length > 0 && (
          <div className="pt-8 border-t border-[#85984e]/20 space-y-6">
            <h3 className="text-2xl font-bold text-[#6c7c39] flex items-center gap-2">
              <BookOpen size={22} className="text-[#85984e]" />
              Sigue leyendo más artículos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectOtherPost(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer p-5 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30 hover:border-[#85984e] hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-[#85984e] mb-1 font-sans">
                      <span>{p.date}</span>
                      <span>•</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#323e11] group-hover:text-[#6c7c39] line-clamp-1 transition-colors">
                      {p.title}
                    </h4>
                    <span className="text-xs text-[#85984e] font-bold group-hover:underline mt-1 inline-block">
                      Leer nota completa →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


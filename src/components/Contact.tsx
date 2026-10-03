import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Copy, MessageSquare, Linkedin, Github, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const email = 'merlymalena2303@hotmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.7 },
        colors: ['#85984e', '#cbd99e', '#6c7c39', '#e59828', '#f3dc99'],
      });
    } catch {
      // ignore
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 relative font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
            <MessageSquare size={14} className="text-[#f3dc99]" />
            Contacto
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#6c7c39] tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#323e11]/85 font-sans">
            Hablemos sobre nuevas oportunidades, colaboraciones técnicas o simplemente intercambiemos ideas sobre desarrollo de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 rounded-[32px] bg-[#FAF8F2] border-2 border-[#85984e]/30 shadow-md">
              <h3 className="text-xl font-bold text-[#6c7c39] mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-[#85984e]" />
                Conectemos
              </h3>
              <p className="text-sm text-[#323e11]/70 mb-6 font-sans">
                Puedes escribirme directamente por correo o a través de mis redes profesionales:
              </p>

              <div className="space-y-3">
                {/* Email Box with copy button */}
                <div className="p-3.5 rounded-2xl bg-white border-2 border-[#85984e]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl bg-[#cbd99e]/40 text-[#85984e]">
                      <Mail size={18} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#323e11] truncate font-sans">
                      {email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copiar correo"
                    className="p-2 text-[#85984e] hover:text-[#323e11] rounded-lg transition-colors"
                  >
                    {copied ? <Check size={16} className="text-[#85984e]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/merly-hern%C3%A1ndez-a22984430/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border-2 border-[#85984e]/20 flex items-center justify-between hover:border-[#85984e] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#cbd99e]/40 text-[#85984e]">
                      <Linkedin size={18} />
                    </div>
                    <span className="text-sm font-bold text-[#323e11]">
                      LinkedIn
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#85984e] group-hover:translate-x-1 transition-transform">
                    Conectar →
                  </span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/MerlyMalena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border-2 border-[#85984e]/20 flex items-center justify-between hover:border-[#85984e] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#cbd99e]/40 text-[#85984e]">
                      <Github size={18} />
                    </div>
                    <span className="text-sm font-bold text-[#323e11]">
                      GitHub
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#85984e] group-hover:translate-x-1 transition-transform">
                    Seguir →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-[32px] bg-[#FAF8F2] border-2 border-[#85984e]/30 shadow-md">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#cbd99e] text-[#323e11] flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-[#85984e]">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#6c7c39]">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="mt-2 text-[#323e11]/70 text-sm font-sans">
                    Gracias por ponerte en contacto. Te responderé lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#6c7c39] mb-2">
                    Envíame un mensaje
                  </h3>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#85984e] mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 text-sm rounded-2xl bg-white border-2 border-[#85984e]/30 text-[#323e11] placeholder-[#323e11]/50 focus:outline-none focus:border-[#85984e] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#85984e] mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 text-sm rounded-2xl bg-white border-2 border-[#85984e]/30 text-[#323e11] placeholder-[#323e11]/50 focus:outline-none focus:border-[#85984e] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#85984e] mb-1">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                      className="w-full px-4 py-3 text-sm rounded-2xl bg-white border-2 border-[#85984e]/30 text-[#323e11] placeholder-[#323e11]/50 focus:outline-none focus:border-[#85984e] transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-serif font-bold text-white bg-[#323e11] hover:bg-[#85984e] shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                  >
                    <Send size={18} />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

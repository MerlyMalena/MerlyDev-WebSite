import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.25); // Suave permanente
  const [expanded, setExpanded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Pista suave Lo-Fi permanente
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

  // Sintetizador ambiental procedimental en Web Audio (100% offline y de respaldo)
  const startProceduralAmbient = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const frequencies = [174.61, 207.65, 233.08, 261.63, 311.13, 349.23, 415.30];

      const playChime = () => {
        if (!ctx || ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const now = ctx.currentTime;
        const currentVol = isMuted ? 0 : volume * 0.12;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(currentVol, now + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 4.8);
      };

      playChime();
      synthIntervalRef.current = window.setInterval(playChime, 2600);
    } catch {
      // ignore
    }
  };

  const attemptAutoPlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // El navegador requiere una primera interacción (click o scroll) para permitir sonido
          const unlockAudio = () => {
            if (audioRef.current) {
              audioRef.current.volume = isMuted ? 0 : volume;
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  startProceduralAmbient();
                  setIsPlaying(true);
                });
            }
            // Remover listeners una vez desbloqueado
            ['click', 'scroll', 'keydown', 'touchstart'].forEach((event) => {
              window.removeEventListener(event, unlockAudio);
            });
          };

          // Escuchar automáticamente el primer gesto del usuario sin preguntar
          ['click', 'scroll', 'keydown', 'touchstart'].forEach((event) => {
            window.addEventListener(event, unlockAudio, { once: true });
          });
        });
    }
  };

  useEffect(() => {
    // Intentar reproducir automáticamente tan pronto cargue la web
    attemptAutoPlay();

    return () => {
      if (synthIntervalRef.current) {
        clearInterval(synthIntervalRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.volume = newMuted ? 0 : volume;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <aside aria-label="Reproductor de música de fondo automática" className="fixed bottom-6 left-6 z-40 font-serif select-none">
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />

      <motion.div
        layout
        className="bg-[#85984e] text-white rounded-full shadow-lg shadow-[#85984e]/30 px-3.5 py-2 flex items-center gap-3 border-2 border-white/40 backdrop-blur-md transition-all"
      >
        {/* Animated Equalizer indicating automatic playback */}
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 cursor-pointer pr-1"
          title="Música Lo-Fi de fondo activa"
        >
          <div className="flex items-center gap-1 h-5 w-5 justify-center">
            {isPlaying && !isMuted ? (
              <>
                <span className="w-1 bg-[#f3dc99] rounded-full animate-equalizer h-4" />
                <span
                  className="w-1 bg-white rounded-full animate-equalizer h-2"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-1 bg-[#e59828] rounded-full animate-equalizer h-5"
                  style={{ animationDelay: '0.4s' }}
                />
              </>
            ) : (
              <Music size={16} className="text-white/80" />
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1">
              Lo-Fi Chill
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3dc99] animate-ping" />
            </span>
            <span className="text-[10px] text-[#f3dc99] font-medium font-sans">
              {isMuted ? 'Silenciado' : 'Música de fondo activa 🎶'}
            </span>
          </div>
        </div>

        {/* Volume & Mute control */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/20">
          <button
            onClick={toggleMute}
            className="text-white hover:text-[#f3dc99] transition-colors p-1"
            aria-label={isMuted ? "Reactivar sonido" : "Silenciar"}
            title={isMuted ? "Reactivar sonido" : "Silenciar"}
          >
            {isMuted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden pr-1"
              >
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1.5 bg-white/40 rounded-lg appearance-none cursor-pointer accent-[#e59828]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </aside>
  );
};

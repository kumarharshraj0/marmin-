import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Clean SVG Icons
const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const MuteIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
);

const FullscreenIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const SparkleIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
  </svg>
);

const Showreel = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // 2 second delayed load to guarantee page loads at 100% speed first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4"
        >
          <SparkleIcon />
          <span>Agency Showreel</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-clash"
        >
          Watch Marmin Media in <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Action</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
        >
          From viral creator formats to high-converting performance campaigns — see how we transform audience attention into compounding brand equity.
        </motion.p>
      </div>

      {/* Video Container Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative group rounded-2xl md:rounded-3xl p-1 md:p-1.5 bg-gradient-to-b from-purple-500/30 via-white/5 to-transparent border border-white/10 shadow-[0_20px_80px_rgba(147,51,234,0.15)] max-w-5xl mx-auto"
      >
        <div className="relative aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden bg-[#0c0919]">
          {!shouldLoad ? (
            /* Lightweight skeleton state for the first 2 seconds */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0a1b] text-gray-500">
              <div className="w-10 h-10 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin mb-3" />
              <p className="text-xs font-mono tracking-wider text-gray-400">Loading High-Definition Reel...</p>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src="/showreel.mp4"
                poster="/showreel_poster.jpg"
                preload="metadata"
                loop
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Big Center Play Button Overlay (when paused) */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px] transition-all cursor-pointer hover:bg-black/35"
                >
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-purple-600/50 hover:shadow-purple-600/70 transition-all border border-purple-300/30"
                    aria-label="Play Reel"
                  >
                    <PlayIcon className="w-7 h-7 md:w-8 md:h-8 translate-x-0.5" />
                  </motion.button>
                </div>
              )}

              {/* Video Bottom Control Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 md:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    className="p-2 md:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <PauseIcon className="w-4 h-4 md:w-5 md:h-5" /> : <PlayIcon className="w-4 h-4 md:w-5 md:h-5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 md:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <MuteIcon className="w-4 h-4 md:w-5 md:h-5" /> : <VolumeIcon className="w-4 h-4 md:w-5 md:h-5" />}
                  </button>

                  <span className="hidden sm:inline-block text-xs font-mono text-gray-300 pl-1">
                    Marmin Media • 2026 Reel
                  </span>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="p-2 md:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                  aria-label="Fullscreen"
                >
                  <FullscreenIcon className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Showreel;

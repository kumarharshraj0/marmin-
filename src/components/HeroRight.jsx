import React, { memo } from 'react'
import { m as motion } from "framer-motion"

const reelsData = [
  {
    id: 1,
    title: "Ferrari Cinematic Spec",
    tag: "CINEMATIC SPEC",
    views: "980K",
    likes: "64K",
    gradient: "from-red-950 via-rose-950 to-black",
    avatar: "🏎️",
    person: "Ferrari Reel",
    video: "/ferrari_reel.mp4",
    poster: "/ferrari_poster.jpg",
    pos: "top-[-5%] left-[8%] lg:top-[2%] lg:left-[12%]",
    rotate: "-7deg",
    floatDuration: 5,
    delay: 0.1
  },
  {
    id: 2,
    title: "Future of Payment & AI",
    tag: "FINTECH REEL",
    views: "720K",
    likes: "42K",
    gradient: "from-indigo-900 via-purple-950 to-black",
    avatar: "⚡",
    person: "Marmin Talk",
    pos: "top-[-15%] left-[52%] lg:top-[-6%] lg:left-[48%]",
    rotate: "3deg",
    floatDuration: 6,
    delay: 0.3
  },
  {
    id: 3,
    title: "Attention = Currency",
    tag: "KEYNOTE TALK",
    views: "1.0M",
    likes: "78K",
    gradient: "from-fuchsia-950 via-purple-950 to-black",
    avatar: "🎙️",
    person: "Sarah J.",
    pos: "top-[15%] right-[-6%] lg:top-[14%] lg:right-[0%]",
    rotate: "10deg",
    floatDuration: 5.5,
    delay: 0.5
  },
  {
    id: 4,
    title: "Viral hook breakdown",
    tag: "CASE STUDY",
    views: "640K",
    likes: "38K",
    gradient: "from-slate-900 via-purple-950 to-black",
    avatar: "🔥",
    person: "Tanmay B.",
    pos: "bottom-[5%] right-[6%] lg:bottom-[8%] lg:right-[16%]",
    rotate: "-5deg",
    floatDuration: 6.2,
    delay: 0.7
  },
  {
    id: 5,
    title: "Stop running bad ads",
    tag: "GROWTH TIPS",
    views: "530K",
    likes: "31K",
    gradient: "from-violet-950 via-indigo-950 to-black",
    avatar: "💡",
    person: "Media Mind",
    pos: "bottom-[-10%] left-[18%] lg:bottom-[-2%] lg:left-[22%]",
    rotate: "5deg",
    floatDuration: 5.8,
    delay: 0.9
  }
]

// 5 Curved lines connecting central node to each of the 5 reels
const paths = [
  "M 90 250 C 130 160, 150 110, 200 80",
  "M 100 240 C 180 150, 250 80, 330 50",
  "M 110 250 C 230 200, 330 170, 430 170",
  "M 110 260 C 220 280, 300 340, 370 370",
  "M 90 270 C 140 330, 170 390, 220 420"
]

export default memo(function HeroRight({ isLoaded }) {
  return (
    <div className="lg:col-span-5 order-2 flex justify-center items-center relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] -mt-36 sm:-mt-24 md:-mt-16 lg:mt-0 select-none overflow-visible z-10 opacity-80 sm:opacity-95 lg:opacity-100 pointer-events-auto">

      {/* Background Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-pink-600/15 rounded-full blur-[90px] sm:blur-[120px] animate-pulse" />
      </div>

      {/* SVG Infinite Flowing Lines + Glowing Particles */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
        viewBox="0 0 500 500"
        fill="none"
      >
        <defs>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.4" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {paths.map((d, index) => (
          <g key={index}>
            {/* Base faint guide line */}
            <path
              d={d}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1.5"
            />

            {/* Continuous Marching Dashed Stream (Infinite flowing dots) */}
            <path
              d={d}
              stroke="url(#streamGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-marching-dash"
              style={{
                strokeDashoffset: 0,
                animation: `dashStream ${1.5 + index * 0.2}s linear infinite`
              }}
            />

            {/* Glowing Flowing Pulse Bead */}
            <motion.path
              d={d}
              stroke="#E9D5FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="8 200"
              filter="url(#glow)"
              animate={{
                strokeDashoffset: [208, 0]
              }}
              transition={{
                duration: 2.2 + index * 0.3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.4
              }}
            />
          </g>
        ))}
      </svg>

      {/* Inline Keyframes for smooth infinite dash animation */}
      <style>{`
        @keyframes dashStream {
          from {
            stroke-dashoffset: 28;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* Center Origin: Earth / Hub Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 group cursor-pointer"
      >
        <div className="relative w-28 h-20 sm:w-32 sm:h-24 rounded-2xl bg-black/85 border border-purple-500/50 p-2 shadow-[0_0_35px_rgba(168,85,247,0.35)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden">
          {/* Animated Glow Halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-500/30 rounded-2xl animate-pulse" />

          {/* Rotating Globe Visual */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-inner flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-950 to-purple-950 border border-white/20">
            <span className="text-2xl animate-[spin_20s_linear_infinite]">🌍</span>
          </div>
          <span className="relative z-10 text-[9px] font-mono tracking-widest uppercase text-purple-300 mt-1 font-semibold">
            GLOBAL REACH
          </span>
        </div>
      </motion.div>

      {/* Floating Animated Reels Mockups */}
      {reelsData.map((reel) => (
        <motion.div
          key={reel.id}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={isLoaded ? {
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
            rotate: [reel.rotate, `${parseInt(reel.rotate) + (parseInt(reel.rotate) > 0 ? 2 : -2)}deg`, reel.rotate]
          } : {}}
          transition={{
            opacity: { delay: reel.delay, duration: 0.6 },
            scale: { delay: reel.delay, duration: 0.6 },
            y: { duration: reel.floatDuration, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: reel.floatDuration * 1.2, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.15, zIndex: 50, transition: { duration: 0.2 } }}
          className={`absolute ${reel.pos} z-10 cursor-pointer`}
        >
          {/* Smartphone Reel Container */}
          <div className={`w-[110px] sm:w-[130px] md:w-[145px] aspect-[9/16] rounded-2xl md:rounded-[1.4rem] bg-gradient-to-b ${reel.gradient} p-2 border border-white/15 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden relative group/card hover:border-purple-400/80 transition-colors`}>

            {/* If card has a real video reel, play looping in background */}
            {reel.video && (
              <>
                <video
                  src={reel.video}
                  poster={reel.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 z-[1] pointer-events-none" />
              </>
            )}

            {/* Top Phone Notch + Tag */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[7px] font-mono tracking-wider px-1.5 py-0.5 rounded-full bg-black/60 text-white/90 uppercase backdrop-blur-sm border border-white/10">
                {reel.tag}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            </div>

            {/* Middle Video Content Simulation */}
            <div className="relative my-auto flex flex-col items-center justify-center text-center z-10">
              {/* Profile Avatar / Speaker */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-base sm:text-lg mb-1.5 shadow-md backdrop-blur-sm">
                {reel.avatar}
              </div>
              <span className="text-[9px] font-semibold text-white/90 truncate max-w-full px-1 font-sans drop-shadow-md">
                {reel.person}
              </span>
              <span className="text-[8px] font-medium text-white/70 line-clamp-2 px-1 leading-tight mt-0.5 font-sans drop-shadow">
                "{reel.title}"
              </span>
            </div>

            {/* Bottom Floating Stats (Views / Likes) */}
            <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-white/80">
              <span className="flex items-center gap-1">
                <span>👁️</span> {reel.views}
              </span>
              <span className="flex items-center gap-0.5 text-pink-400">
                <span>♥</span> {reel.likes}
              </span>
            </div>

            {/* Bottom Reel Timeline Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 z-10">
              <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 w-2/3 animate-pulse" />
            </div>

            {/* Hover Spotlight Glow */}
            <div className="absolute inset-0 bg-purple-500/0 group-hover/card:bg-purple-500/10 transition-colors pointer-events-none z-10" />
          </div>
        </motion.div>
      ))}

    </div>
  )
})

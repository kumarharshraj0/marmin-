import { m as motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import FadeUp from "../components/FadeUp"

// Real viral reels data matching the agency's actual numbers & style
const reelsShowcase = [
  {
    id: 1,
    title: "",
    caption: "",
    views: "980K VIEWS",
    category: "",
    gradient: "from-[#3a0808] via-[#1f0505] to-[#0E0B1D]",
    avatar: " ",
    video: "/ferrari_reel.mp4",
    poster: "/ferrari_poster.jpg"
  },
  {
    id: 2,
    title: "",
    caption: "",
    views: "940K VIEWS",
    category: "",
    gradient: "from-[#1a1438] via-[#100c26] to-[#0E0B1D]",
    avatar: "",
    video: "/raj_shamani_1.mp4",
    poster: "/raj_shamani_1_poster.jpg"
  },
  {
    id: 3,
    title: "",
    caption: "",
    views: "820K VIEWS",
    category: "",
    gradient: "from-[#2A1E4D] via-[#1a1333] to-[#0E0B1D]",
    avatar: "",
    video: "/raj_shamani_2.mp4",
    poster: "/raj_shamani_2_poster.jpg"
  },
  {
    id: 4,
    title: "",
    caption: "",
    views: "760K VIEWS",
    category: "",
    gradient: "from-[#381a4d] via-[#1f0c2e] to-[#0E0B1D]",
    avatar: "",
    video: "/raj_shamani_3.mp4",
    poster: "/raj_shamani_3_poster.jpg"
  },
  {
    id: 5,
    title: "",
    caption: "founder brand authority",
    views: "890K VIEWS",
    category: "",
    gradient: "from-[#1e1b4b] via-[#151233] to-[#0E0B1D]",
    avatar: "",
    video: "/raj_shamani_4.mp4",
    poster: "/raj_shamani_4_poster.jpg"
  },
  {
    id: 6,
    title: "",
    caption: "",
    views: "670K VIEWS",
    category: "",
    gradient: "from-[#162a45] via-[#0b1726] to-[#0E0B1D]",
    avatar: "",
    video: "/clip_2.mp4",
    poster: "/clip_2_poster.jpg"
  }
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0) // start centered on featured video reel
  const [isMuted, setIsMuted] = useState(true)
  const videoRefs = useRef({})
  const sectionRef = useRef(null)
  const isHoveredRef = useRef(false)
  const directionRef = useRef(1) // 1: forward, -1: backward (ping-pong)
  const hoveredIndexRef = useRef(null)
  const isAnimatingRef = useRef(false)
  const touchStartXRef = useRef(null)
  const touchStartYRef = useRef(null)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reelsShowcase.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reelsShowcase.length) % reelsShowcase.length)
  }

  // Auto 3D animation: In-view detection + Alternate Ping-Pong Loop
  useEffect(() => {
    let interval = null

    const startTimer = () => {
      if (interval) return
      interval = setInterval(() => {
        // Pause auto-sliding if user is currently interacting (hovering or touching)
        if (isHoveredRef.current) return

        setActiveIndex((prev) => {
          const total = reelsShowcase.length
          let next = prev + directionRef.current

          // When reaching end (last reel), bounce back in reverse direction
          if (next >= total - 1) {
            directionRef.current = -1
            return total - 1
          }
          // When reaching start (first reel), bounce back in forward direction
          if (next <= 0) {
            directionRef.current = 1
            return 0
          }
          return next
        })
      }, 1900)
    }

    const stopTimer = () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // threshold 0.1 so it triggers reliably on mobile viewports
        if (entry.isIntersecting) {
          startTimer()
        } else {
          stopTimer()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    } else {
      // Fallback
      startTimer()
    }

    return () => {
      stopTimer()
      observer.disconnect()
    }
  }, [])

  // Desktop Hover handlers
  const handleCardHover = (index) => {
    isHoveredRef.current = true
    if (activeIndex === index || hoveredIndexRef.current === index || isAnimatingRef.current) {
      return
    }

    hoveredIndexRef.current = index
    isAnimatingRef.current = true
    setActiveIndex(index)

    setTimeout(() => {
      isAnimatingRef.current = false
    }, 850)
  }

  const handleCardLeave = (index) => {
    isHoveredRef.current = false
    if (hoveredIndexRef.current === index) {
      hoveredIndexRef.current = null
    }
  }

  // Mobile Touch handlers: Swipe gestures + touch card selection
  const handleTouchStart = (e) => {
    isHoveredRef.current = true
    touchStartXRef.current = e.touches[0].clientX
    touchStartYRef.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    setTimeout(() => {
      isHoveredRef.current = false
    }, 1500) // resume auto-scroll after a short delay

    if (touchStartXRef.current === null) return

    const diffX = touchStartXRef.current - e.changedTouches[0].clientX
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY

    // Only swipe if horizontal move was greater than vertical scroll
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }

    touchStartXRef.current = null
    touchStartYRef.current = null
  }

  // Play video only when active card has a video, pause all others to keep performance at 60fps
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([indexStr, el]) => {
      if (!el) return
      const idx = parseInt(indexStr)
      if (idx === activeIndex) {
        el.play().catch(() => { })
      } else {
        el.pause()
      }
    })
  }, [activeIndex])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-20 sm:py-28 px-2 sm:px-6 md:px-12 bg-black overflow-hidden font-sans select-none"
    >

      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] mask-radial pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Header matching user's reference image */}
      <div className="max-w-5xl mx-auto mb-10 sm:mb-16 text-center relative z-10 px-4">
        <FadeUp delay={0.1}>
          <span className="text-purple-300 font-medium uppercase tracking-[0.25em] text-[11px] md:text-[12px] mb-3 block font-sans">
            THE WORK, IN NUMBERS
          </span>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h2 className="text-[30px] sm:text-[44px] md:text-[54px] font-normal tracking-[-0.02em] font-display text-white leading-tight">
            Real reels. Real reach.
          </h2>
        </FadeUp>
      </div>

      {/* 3D Cylindrical / Coverflow Animated Reels Carousel */}
      <div
        className="relative w-full max-w-6xl mx-auto h-[480px] sm:h-[560px] md:h-[620px] flex items-center justify-center touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous reel"
          className="absolute left-2 sm:left-6 md:left-10 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white/[0.06] border border-white/15 hover:border-purple-500/50 hover:bg-white/[0.12] active:scale-95 text-white flex items-center justify-center transition-all backdrop-blur-xl group shadow-2xl"
        >
          <span className="text-base sm:text-lg group-hover:-translate-x-0.5 transition-transform">←</span>
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next reel"
          className="absolute right-2 sm:right-6 md:right-10 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white/[0.06] border border-white/15 hover:border-purple-500/50 hover:bg-white/[0.12] active:scale-95 text-white flex items-center justify-center transition-all backdrop-blur-xl group shadow-2xl"
        >
          <span className="text-base sm:text-lg group-hover:translate-x-0.5 transition-transform">→</span>
        </button>

        {/* Reels Cards Carousel */}
        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] sm:perspective-[1200px]">
          {reelsShowcase.map((reel, index) => {
            // Calculate offset relative to active card
            let offset = index - activeIndex
            const count = reelsShowcase.length

            // Wrap around logic so list is circular
            if (offset > Math.floor(count / 2)) offset -= count
            if (offset < -Math.floor(count / 2)) offset += count

            const isCenter = offset === 0
            const zIndex = 30 - Math.abs(offset) * 5

            // Scaled responsive spacing: tighter on mobile so adjacent cards peek nicely without overflow
            const scale = 1 - Math.abs(offset) * 0.16
            const rotateY = offset * -16 // 3D curve rotation
            const opacity = 1 - Math.abs(offset) * 0.28

            // Hide cards that are far away
            if (Math.abs(offset) > 2) return null

            return (
              <motion.div
                key={reel.id}
                onClick={() => {
                  if (activeIndex !== index) {
                    setActiveIndex(index)
                  }
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
                animate={{
                  x: `${offset * 68}%`, // responsive percentage spacing works on all mobile screens!
                  scale: isCenter ? 1.05 : scale,
                  y: isCenter ? -8 : 0,
                  rotateY,
                  opacity,
                  zIndex
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`absolute w-[215px] sm:w-[270px] md:w-[310px] aspect-[9/16] rounded-[2rem] bg-gradient-to-b ${reel.gradient} border ${isCenter ? 'border-purple-500/90 shadow-[0_0_50px_rgba(168,85,247,0.45)]' : 'border-white/10 shadow-2xl hover:border-purple-400/60'} p-4 sm:p-5 cursor-pointer backdrop-blur-2xl flex flex-col justify-between overflow-hidden group transition-colors duration-300`}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Top Notch & Category */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[9px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white/90 uppercase backdrop-blur-md border border-white/10 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 transition-all">
                    {reel.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {reel.video && isCenter && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const currentEl = videoRefs.current[index]
                          if (currentEl) {
                            currentEl.muted = !isMuted
                            setIsMuted(!isMuted)
                          }
                        }}
                        className="px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-[10px] text-white hover:bg-black/90 transition-colors"
                        aria-label="Toggle mute"
                      >
                        {isMuted ? "🔇" : "🔊"}
                      </button>
                    )}
                    <div className={`w-2 h-2 rounded-full ${isCenter ? 'bg-red-500 animate-pulse' : 'bg-white/30 group-hover:bg-red-400'} transition-colors`} />
                  </div>
                </div>

                {/* If card has a real video, play it seamlessly as clean background */}
                {reel.video ? (
                  <>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={reel.video}
                      poster={reel.poster}
                      playsInline
                      loop
                      muted={isMuted}
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-[1] pointer-events-none" />
                  </>
                ) : (
                  /* Placeholder icon & title only for non-video reels */
                  <div className="relative my-auto flex flex-col items-center text-center px-1 sm:px-2 z-10">
                    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-2xl mb-3 shadow-lg group-hover:scale-110 group-hover:border-purple-400/60 group-hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-md">
                      {reel.avatar}
                    </div>
                    <h4 className="text-[13px] sm:text-[16px] font-semibold text-white/95 leading-snug tracking-tight mb-2 font-sans group-hover:text-purple-200 transition-colors drop-shadow-md">
                      {reel.title}
                    </h4>
                    <p className="text-[11px] sm:text-[12px] text-purple-300 font-mono italic group-hover:text-white transition-colors drop-shadow">
                      "{reel.caption}"
                    </p>
                  </div>
                )}

                {/* Bottom View Counter Badge (From Reference Screenshot) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/70 border border-white/15 backdrop-blur-xl shadow-lg group-hover:border-purple-400/60 group-hover:bg-purple-950/60 group-hover:scale-105 transition-all">
                    <span className="text-[11px] text-purple-300 group-hover:scale-125 transition-transform">👁️</span>
                    <span className="text-[10px] sm:text-[12px] font-mono font-bold tracking-widest text-white group-hover:text-purple-200">
                      {reel.views}
                    </span>
                  </div>

                  {/* Playhead Progress Bar with Hover Speed/Glow */}
                  <div className="w-full h-[2.5px] bg-white/15 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 w-3/4 rounded-full group-hover:w-full group-hover:from-purple-300 group-hover:to-pink-400 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Interactive Spotlight Radial Aura on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Bottom Subtitle / Proof Bar */}
      <div className="text-center mt-8 sm:mt-12 relative z-10 px-4">
        <p className="text-white/60 text-[13px] sm:text-[15px] font-sans">
          Swipe or tap any reel to explore our high-engagement production pipeline.
        </p>
      </div>

    </section>
  )
}

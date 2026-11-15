import { m as motion } from "framer-motion"
import { useEffect } from "react"
import FadeUp from "./FadeUp"

export default function BlogModal({ post, onClose }) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const content = post?.fullContent

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0E0B1D]/85 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.96 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0B1D] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-50 w-10 h-10 bg-black/60 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Area */}
        <div className="overflow-y-auto scrollbar-hide flex-1">
          {/* Header Image */}
          <div className="relative w-full h-[36vh] md:h-[46vh]">
            <img decoding="async" 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B1D] via-[#0E0B1D]/50 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="px-6 md:px-14 pb-16 -mt-16 relative z-10">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-4 font-sans">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-[10px] font-medium uppercase tracking-widest text-purple-200">
                  {post.category}
                </span>
                <span className="text-xs text-white/50">{post.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-xs text-purple-300 uppercase tracking-wider">{post.readTime}</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-8">
                {post.title}
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="font-sans text-sm md:text-base leading-relaxed text-white/80 space-y-6">
                {/* Lead paragraph */}
                <p className="text-lg md:text-xl text-white font-light leading-relaxed border-l-2 border-purple-400 pl-4 py-1 italic bg-white/[0.02] rounded-r-lg">
                  {content?.lead || post.excerpt}
                </p>

                {/* Render Sections */}
                {content?.sections?.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    {sec.heading && (
                      <h3 className="text-xl md:text-2xl font-serif text-white pt-4">
                        {sec.heading}
                      </h3>
                    )}

                    {sec.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="text-white/70 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {sec.quote && (
                      <blockquote className="border-l-4 border-purple-500 pl-6 my-8 italic text-purple-200 font-serif text-lg md:text-xl bg-purple-900/10 py-3 rounded-r-xl">
                        "{sec.quote}"
                      </blockquote>
                    )}

                    {sec.takeaways && (
                      <ul className="space-y-3 my-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                        {sec.takeaways.map((item, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-3 text-white/75">
                            <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                            <span>
                              <strong className="text-white font-medium mr-1.5">{item.title}</strong>
                              {item.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

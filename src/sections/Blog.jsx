import { m as motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import FadeUp from "../components/FadeUp"
import BlogModal from "../components/BlogModal"

const blogPosts = [
  {
    id: 1,
    title: "Why Most Performance Ads Fail Without Brand Narrative",
    excerpt: "Throwing more budget at Meta or TikTok ad accounts won't fix an uncompelling story. Why narrative-driven creative outperforms brute-force ROAS targets.",
    date: "Aug 18, 2026",
    readTime: "5 min read",
    category: "Strategy & Creative",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
    fullContent: {
      lead: "Scaling paid ads is no longer an algorithmic bidding contest. In 2026, the creative is the targeting, and story is the only real moat.",
      sections: [
        {
          heading: "The Algorithm Has Solved Targeting — Creative Is The Differentiator",
          paragraphs: [
            "For years, media buyers obsessed over lookalike percentages, detailed demographic interest stacks, and micro-budget splits. Today, machine learning models on Meta, TikTok, and YouTube do the targeting automatically. What feeds those models isn't your bid strategy — it's your creative asset.",
            "If your hook is generic, your audience is generic. If your creative fails to provoke emotion or build curiosity within the first two seconds, the platform will penalize your CPMs and deliver unqualified impressions."
          ]
        },
        {
          quote: "Marketing is not about getting in front of the most eyeballs. It is about staying in the mind of the right eyeball long after the screen turns off."
        },
        {
          heading: "3 Principles of Narrative-Driven Performance",
          takeaways: [
            { title: "Hook with tension, not features:", desc: "Audiences do not care about product specs until they resonate with the problem's psychological friction." },
            { title: "Produce native, high-taste creative:", desc: "Polished corporate commercials get scrolled past. Organic, raw founder stories and authentic product demonstrations earn undivided attention." },
            { title: "Align narrative to the checkout funnel:", desc: "Ensure your landing pages and post-click experience fulfill the exact emotional promise made in the top-of-funnel creative." }
          ]
        },
        {
          heading: "The Bottom Line",
          paragraphs: [
            "Stop looking at marketing as a series of isolated experiments. Build an overarching brand thesis, transform it into magnetic storytelling, and let performance distribution amplify what is already inherently remarkable."
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Architecture of Viral Distribution for Modern Founders",
    excerpt: "How top tech founders and fast-growing consumer brands engineer organic virality and multi-channel reach without burning capital on empty PR.",
    date: "Jul 30, 2026",
    readTime: "4 min read",
    category: "Distribution",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000",
    fullContent: {
      lead: "Distribution isn't something you bolt on after building a product. It is an intentional design choice baked into every message, reel, and launch milestone.",
      sections: [
        {
          heading: "The Zero-Budget Virality Myth",
          paragraphs: [
            "People love the story of a company going viral overnight with zero spent. But true, repeatable organic momentum is never accidental. Behind every viral spike lies a deliberate editorial calendar, psychological hooks, and a sharp understanding of the cultural zeitgeist.",
            "Modern distribution belongs to founders who speak directly to the camera, demystify their industry secrets, and turn their company's core mission into engaging short-form media."
          ]
        },
        {
          quote: "A mediocre product with world-class distribution will consistently beat a world-class product that nobody has ever heard of."
        },
        {
          heading: "Key Distribution Playbooks",
          takeaways: [
            { title: "The 3-Second Rule:", desc: "Visual movement, sound design, and contrarian framing must seize retention before thumb scroll momentum kicks in." },
            { title: "The Pillar-to-Micro Flywheel:", desc: "Turn a single long-form podcast or keynote into 15 hyper-engaging vertical reels distributed across Instagram, YouTube Shorts, and TikTok." },
            { title: "Community Amplification:", desc: "Incentivize existing advocates and power users to co-create and broadcast your narrative within niche circles." }
          ]
        },
        {
          heading: "Scaling Organic Reach",
          paragraphs: [
            "When organic distribution is dialed in, your paid marketing metrics drop dramatically because audience familiarity and organic search volume do the heavy lifting."
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Positioning Psychology: Making Your Brand Impossible to Ignore",
    excerpt: "Why category leaders don't compete on price or minor feature increments, and how positioning around consumer psychology commands unfair brand premium.",
    date: "Jul 14, 2026",
    readTime: "6 min read",
    category: "Positioning & Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    fullContent: {
      lead: "If you try to appeal to everyone, you appeal to no one. Strong positioning isn't about what you do — it's about what you choose NOT to do.",
      sections: [
        {
          heading: "The Trap of Feature Parity",
          paragraphs: [
            "In hyper-saturated markets, listing 20 features and promising 10% faster service is a race to the bottom. Consumers evaluate brands through mental shortcuts, status signaling, and emotional affinity.",
            "Category creators win because they redefine the metrics of comparison. They don't claim to be a 'cheaper alternative' — they establish an entirely new standard."
          ]
        },
        {
          quote: "Positioning is not what you do to a product. Positioning is what you do to the mind of the prospect."
        },
        {
          heading: "The Strategic Framework",
          takeaways: [
            { title: "Define the Common Enemy:", desc: "Give your prospective buyers a clear villain — whether that is outdated legacy software, slow processes, or dishonest industry norms." },
            { title: "Command the Premium:", desc: "High price with exceptional design and messaging signals trust, quality, and exclusivity far better than discounting ever can." },
            { title: "Ruthless Consistency:", desc: "Ensure your aesthetic, tone of voice, customer support, and deliverables speak the exact same coherent language." }
          ]
        },
        {
          heading: "Executing with Intent",
          paragraphs: [
            "At Marmin Media, positioning is the bedrock upon which all our creative and distribution strategies are built. Think clearly first, execute with conviction, and win the category."
          ]
        }
      ]
    }
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="relative py-24 px-6 md:px-12 bg-black overflow-hidden font-outfit">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          <div className="max-w-3xl flex flex-col items-center">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-6 md:mb-10 justify-center">
                <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
                <span className="text-white/80 font-medium text-xs md:text-sm tracking-widest uppercase font-sans">
                  06 · Marketing Journal
                </span>
                <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]">
                Marketing insights & <span className="italic text-purple-400 font-light">distribution strategies.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl font-sans">
                Deep dives on brand positioning, organic virality, and why narrative-driven creative outperforms brute force ad spend.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <button 
              onClick={() => setSelectedPost(blogPosts[0])}
              className="text-white font-medium text-sm pb-1 border-b border-white hover:text-purple-400 hover:border-purple-400 transition-colors flex items-center gap-2 mx-auto font-sans"
            >
               Read latest article
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </FadeUp>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer flex flex-col bg-white/[0.02] hover:bg-white/[0.04] p-5 rounded-[2rem] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] rounded-[1.25rem] overflow-hidden mb-6 bg-[#111] border border-white/5">
                <img decoding="async"
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-colors duration-500" />
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-medium uppercase tracking-widest text-purple-200 font-sans">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4 font-sans">
                  <span className="text-[11px] text-white/50 tracking-wide">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-purple-500" />
                  <span className="text-[11px] text-purple-300/80 font-medium tracking-wide uppercase">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-sans">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-medium text-purple-300 group-hover:text-white uppercase tracking-widest mt-auto font-sans pt-2 border-t border-white/5 transition-all duration-300">
                  Read Article
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <BlogModal 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

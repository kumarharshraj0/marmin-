import { m as motion } from "framer-motion"
import { useState } from 'react'
import Tilt from '../components/Tilt'
import { portfolioData } from '../data/portfolio'
import FadeUp from '../components/FadeUp'

export default function About() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(portfolioData.profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const aboutCards = [
    {
      id: "origin",
      tag: "ORIGIN & PURPOSE",
      title: "Building Trust. Shaping Perceptions.",
      desc: "Marmin Media was founded on a simple, grounded reality: marketing isn't about filling feeds with noise or chasing vanity metrics. We exist to shape how ambitious businesses are perceived, discovered, and deliberately chosen in an oversaturated market.",
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      id: "founder",
      isFounderImage: true,
      tag: "LEADERSHIP",
      name: "Sachin Pandey",
      role: "Founder & Creative Strategist",
      image: "/sachin_pandey.jpg",
      className: "md:col-span-1 lg:col-span-1"
    },
    {
      id: "philosophy",
      tag: "02 · OUR PHILOSOPHY",
      title: "MARKETING WAS NEVER JUST DIGITAL.",
      lead: "The internet didn't invent marketing. It changed how marketing moves.",
      desc: "A great campaign doesn't begin with an ad account. It begins with an understanding of people, the market, the product and the reason someone should care.",
      extra: "Sometimes the answer is a creative idea. Sometimes it's a better distribution strategy. Sometimes it's changing how the brand is positioned entirely.",
      conclusion: [
        "We don't believe in choosing channels before understanding the problem.",
        "We believe in making marketing work as a whole."
      ],
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      id: "connect",
      tag: "CONVERSATION",
      title: "Let's Build Something Memorable",
      desc: "Ready to make your brand impossible to ignore? Connect directly with the team behind Marmin Media.",
      className: "md:col-span-1 lg:col-span-1"
    }
  ]

  return (
    <section id="about" className="py-24 px-4 md:px-20 min-h-screen relative overflow-hidden font-sans bg-black">
      {/* Background Parallax Glows */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <FadeUp delay={0.1}>
            <span className="text-purple-300 font-medium uppercase tracking-[0.18em] text-[11px] md:text-[12px] mb-3 block font-sans">
              05 · ABOUT
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-normal tracking-[-0.02em] text-white font-display leading-[1.15]">
              Who is behind Marmin Media.
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-white/70 text-[16px] md:text-[18px] max-w-2xl mt-4 leading-[1.65] font-normal font-sans">
              Our origin story, team philosophy, relevant experience, and the principles that guide our work.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <Tilt key={card.id} className={`${card.className}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 md:p-8 min-h-[280px] flex flex-col justify-between group hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-purple-500/30 rounded-3xl overflow-hidden relative ${card.isFounderImage ? 'p-0 md:p-0' : ''}`}
              >
                {card.isFounderImage ? (
                  <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-6 md:p-8 overflow-hidden rounded-3xl">
                    {/* Background Founder Portrait */}
                    <img 
                      src={card.image} 
                      alt="Founder"
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="relative z-10">
                      <span className="text-[11px] md:text-[12px] font-medium tracking-[0.16em] uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 inline-block text-purple-300 font-sans">
                        {card.tag}
                      </span>
                    </div>

                    <div className="relative z-10 pt-20">
                      <h3 className="text-[20px] md:text-[22px] font-semibold text-white tracking-tight leading-snug">
                        {card.name}
                      </h3>
                      <p className="text-[14px] text-white/70 font-sans mt-1">
                        {card.role}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <FadeUp delay={0.1}>
                        <span className="text-[11px] md:text-[12px] font-medium tracking-[0.16em] uppercase mb-4 block text-purple-300 font-sans">
                          {card.tag}
                        </span>
                      </FadeUp>

                      <FadeUp delay={0.15}>
                        <h3 className="text-[21px] sm:text-[24px] font-semibold text-white mb-3 font-sans tracking-tight">
                          {card.title}
                        </h3>
                      </FadeUp>

                      {card.lead && (
                        <FadeUp delay={0.2}>
                          <p className="text-[17px] sm:text-[18px] text-purple-200 font-medium mb-3 leading-snug font-sans">
                            {card.lead}
                          </p>
                        </FadeUp>
                      )}

                      {card.desc && (
                        <FadeUp delay={0.25}>
                          <p className="text-[15px] sm:text-[16px] text-white/75 leading-[1.65] font-normal font-sans mb-3">
                            {card.desc}
                          </p>
                        </FadeUp>
                      )}

                      {card.extra && (
                        <FadeUp delay={0.3}>
                          <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.65] font-normal font-sans mb-4">
                            {card.extra}
                          </p>
                        </FadeUp>
                      )}

                      {card.conclusion && (
                        <FadeUp delay={0.35}>
                          <div className="space-y-1.5 pt-3 border-t border-white/10">
                            {card.conclusion.map((line, cIdx) => (
                              <p key={cIdx} className="text-[14px] sm:text-[15px] font-medium text-purple-300 flex items-center gap-2 font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                {line}
                              </p>
                            ))}
                          </div>
                        </FadeUp>
                      )}
                    </div>

                    {card.id === 'connect' && (
                      <div className="mt-6 flex flex-col gap-3">
                        <button
                          onClick={handleCopyEmail}
                          className="w-full py-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all relative overflow-hidden group/btn font-sans"
                        >
                          <span className="text-[14px] font-semibold uppercase tracking-wider relative z-10 transition-colors group-hover/btn:text-purple-400 font-sans">
                            {copied ? 'Copied!' : 'Copy Email Address'}
                          </span>
                          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                        </button>
                        <a
                          href="#contact"
                          className="w-full py-3.5 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-2xl flex items-center justify-center text-[14px] font-semibold uppercase tracking-wider hover:bg-purple-600 hover:text-white transition-all text-center font-sans"
                        >
                          Contact Us
                        </a>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

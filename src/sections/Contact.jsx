import { m as motion } from "framer-motion"
import { useState } from 'react'
import Magnetic from '../components/Magnetic'
import { portfolioData } from '../data/portfolio'
import FadeUp from '../components/FadeUp'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState("idle") // "idle" | "loading" | "success" | "error"
  const [responseMsg, setResponseMsg] = useState("")

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error")
      setResponseMsg("Please fill in all fields.")
      return
    }

    setStatus("loading")
    setResponseMsg("")

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE"

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Marmin Media Website Lead",
          subject: `New Lead from ${formData.name} - Marmin Media`
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setResponseMsg("Thank you! Your message has been sent directly to our email. We will get back to you shortly.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setResponseMsg(data.message || "Something went wrong. Please try again or message via WhatsApp.")
      }
    } catch (err) {
      setStatus("error")
      setResponseMsg("Network error. Please try again or connect via WhatsApp.")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-20 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full">
        <div className="glass-card p-6 sm:p-10 md:p-16 relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0E0B1D]/80 backdrop-blur-2xl shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <FadeUp delay={0.1} className="text-center">
              <span className="text-purple-300 font-medium uppercase tracking-[0.2em] text-[11px] md:text-[12px] mb-3 inline-block font-sans">
                07 · GET IN TOUCH
              </span>
              <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-tight leading-tight">
                Let's make your brand impossible to ignore.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2} className="text-center">
              <p className="text-white/60 mb-8 md:mb-12 font-normal text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
                Tell us about your brand, current bottlenecks, or goals. Messages go straight to our executive inbox.
              </p>
            </FadeUp>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FadeUp delay={0.3} className="space-y-2">
                  <label className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-purple-300/80 font-sans">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Verma"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-purple-400 focus:bg-white/[0.06] transition-all font-normal text-sm md:text-base text-white placeholder-white/30"
                  />
                </FadeUp>
                <FadeUp delay={0.4} className="space-y-2">
                  <label className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-purple-300/80 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@company.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-purple-400 focus:bg-white/[0.06] transition-all font-normal text-sm md:text-base text-white placeholder-white/30"
                  />
                </FadeUp>
              </div>

              <FadeUp delay={0.5} className="space-y-2">
                <label className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-purple-300/80 font-sans">
                  How can we help your brand? *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details on your ad spend, organic reach goals, or creative requirements..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-purple-400 focus:bg-white/[0.06] transition-all resize-none font-normal text-sm md:text-base text-white placeholder-white/30 leading-relaxed"
                />
              </FadeUp>

              {/* Status Message Display */}
              {responseMsg && (
                <div className={`p-4 rounded-xl text-sm font-sans flex items-center gap-3 ${status === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-300' : 'bg-red-500/10 border border-red-500/30 text-red-300'}`}>
                  <span>{status === 'success' ? '✓' : '⚠️'}</span>
                  <span>{responseMsg}</span>
                </div>
              )}

              <Magnetic>
                <div className="flex flex-col sm:flex-row gap-4 pt-3">
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3.5 md:py-4 bg-white text-black font-semibold uppercase tracking-wider text-xs md:text-sm rounded-xl shadow-lg hover:bg-purple-400 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-sans"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

                  <motion.a
                    href={`https://wa.me/${(portfolioData.profile.whatsapp || "").replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3.5 md:py-4 bg-[#25D366] text-white font-semibold uppercase tracking-wider text-xs md:text-sm rounded-xl shadow-lg shadow-green-500/20 hover:bg-[#20ba5a] transition-all text-center flex items-center justify-center gap-2 font-sans"
                  >
                    <span>💬</span>
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </Magnetic>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

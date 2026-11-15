import { useState, lazy, Suspense } from 'react'
import { LazyMotion, domAnimation } from "framer-motion"
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import SkillsMarquee from './components/SkillsMarquee'
import { LoadingProvider, useLoading } from './context/LoadingContext'
import LazySection from './components/LazySection'

import Hero from './sections/Hero'
import About from './sections/About'
const Showreel = lazy(() => import('./sections/Showreel'))
const Thinking = lazy(() => import('./sections/Thinking'))
const Timeline = lazy(() => import('./sections/Timeline'))
const Services = lazy(() => import('./sections/Services'))
const Projects = lazy(() => import('./sections/Projects'))
const Industries = lazy(() => import('./sections/Industries'))
const Contact = lazy(() => import('./sections/Contact'))
const Achievements = lazy(() => import('./sections/Achievements'))
const FAQ = lazy(() => import('./sections/FAQ'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const Blog = lazy(() => import('./sections/Blog'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppFAB = lazy(() => import('./components/WhatsAppFAB'))

function AppContent() {
  const { isLoaded, setIsLoaded } = useLoading()

  return (
    <div className="bg-black text-white selection:bg-purple-500/30 relative overflow-clip">
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] will-change-transform" />
      <ScrollProgress />
      <Preloader onComplete={() => setIsLoaded(true)} />
      <CustomCursor />
      <Navbar />

      <main>
        <div id="hero"><Hero isLoaded={isLoaded} /></div>
        <SkillsMarquee />
        <LazySection height="min-h-screen">
          <div id="about"><About /></div>
        </LazySection>

        <Suspense fallback={<div className="min-h-[50vh] w-full" />}>
          <div id="showreel"><Showreel /></div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[60vh] w-full" />}>
          <LazySection height="min-h-[60vh]">
            <Thinking />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <Timeline />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-[50vh] w-full" />}>
          <LazySection height="min-h-[50vh]">
            <Achievements />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <div id="projects"><Projects /></div>
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <div id="services"><Services /></div>
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <div id="industries"><Industries /></div>
          </LazySection>
        </Suspense>



        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <div id="testimonials"><Testimonials /></div>
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-[50vh] w-full" />}>
          <LazySection height="min-h-[50vh]">
            <FAQ />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <div id="blog"><Blog /></div>
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <LazySection height="min-h-screen">
            <div id="contact"><Contact /></div>
          </LazySection>
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppFAB />
        </Suspense>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <LoadingProvider>
      <LazyMotion features={domAnimation}>
        <AppContent />
      </LazyMotion>
    </LoadingProvider>
  )
}

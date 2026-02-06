/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen } from 'lucide-react';

const ProjectCard = ({ name, category, delay }: { name: string; category: string; delay: string }) => {
  return (
    <div
      className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50"
      style={{ animationDelay: delay }}
    >
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{category}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">R</div>
            <span
              className={`font-serif font-bold text-lg tracking-wide transition-opacity ${
                scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}
            >
              Ronak Kanojia <span className="font-normal text-stone-500">Marketing Portfolio</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
              About
            </a>
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
              Services
            </a>
            <a href="#work" onClick={scrollToSection('work')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
              Work
            </a>
            <a href="#insights" onClick={scrollToSection('insights')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
              Insights
            </a>
            <a
              href="#contact"
              onClick={scrollToSection('contact')}
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Book a Call
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
          <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
            About
          </a>
          <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
            Services
          </a>
          <a href="#work" onClick={scrollToSection('work')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
            Work
          </a>
          <a href="#insights" onClick={scrollToSection('insights')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">
            Insights
          </a>
          <a
            href="#contact"
            onClick={scrollToSection('contact')}
            className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer"
          >
            Book a Call
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            Growth Marketing • 2024
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            Ronak Kanojia
            <br />
            <span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">Marketing strategist for ambitious brands</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            I help startups and scale-ups turn narrative into demand through launch strategy, performance campaigns, and full-funnel storytelling.
          </p>

          <div className="flex justify-center">
            <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
              <span>DISCOVER</span>
              <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                <ArrowDown size={16} />
              </span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* About */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">About</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Story-First Growth</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">R</span>onak Kanojia is a marketing strategist who blends brand, performance, and lifecycle thinking to grow modern companies. From category creation to retention, the goal is simple: build trust and move audiences to action.
              </p>
              <p>
                Over the last decade, Ronak has partnered with founders, product teams, and sales leaders to craft positioning, launch new products, and build always-on demand engines. The work is equal parts creative direction and measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-white border-t border-stone-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                  <BookOpen size={14} /> CORE SERVICES
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Launch, Demand, and Brand</h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  Full-funnel marketing that connects positioning to pipeline. From go-to-market readiness to paid media and lifecycle, every touchpoint aligns to the story your buyers need.
                </p>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  Typical engagements include messaging systems, campaign strategy, performance optimization, and customer advocacy programs that keep growth steady beyond the first launch.
                </p>
              </div>
              <div>
                <SurfaceCodeDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative" id="work">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
            <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <TransformerDecoderDiagram />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                  THE APPROACH
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">A System for Consistent Growth</h2>
                <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                  Every engagement starts with clarity on audience, narrative, and conversion pathways. From there, the work blends channel mix, creative testing, and sales alignment.
                </p>
                <p className="text-lg text-stone-400 leading-relaxed">
                  Weekly optimization and quarterly strategy refreshes keep the program resilient as product and market conditions evolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="insights" className="py-24 bg-[#F9F8F4]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Performance with Proof</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Recent campaigns improved qualified pipeline, reduced customer acquisition costs, and lifted activation across SaaS, fintech, and wellness brands.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <PerformanceMetricDiagram />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section id="highlights" className="py-24 bg-white border-t border-stone-200">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 relative">
              <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                <QuantumComputerScene />
                <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">
                  Narrative workshop + campaign sprint visualization
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">HIGHLIGHTS</div>
              <h2 className="font-serif text-4xl mb-6 text-stone-900">Launches that Land</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Led GTM for a B2B SaaS expansion into Europe, growing inbound demand by 42% in two quarters while tightening sales cycle time.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Built lifecycle programs for a consumer wellness brand that lifted repeat purchase rates by 28% and increased average order value.
              </p>

              <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                <p className="font-serif italic text-xl text-stone-800 mb-4">
                  “Ronak brought both creative strategy and revenue accountability. Our pipeline doubled while our brand finally felt cohesive.”
                </p>
                <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— VP Growth, SaaS Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="contact" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Selected Work</div>
              <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Marketing Portfolio</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Ronak Kanojia partners with teams across SaaS, fintech, and lifestyle brands to build demand and durability.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
              <ProjectCard name="Nimbus SaaS Launch" category="Positioning + Demand Gen" delay="0s" />
              <ProjectCard name="Verde Wellness" category="Brand Story + Lifecycle" delay="0.1s" />
              <ProjectCard name="Atlas Fintech" category="Pipeline Acceleration" delay="0.2s" />
              <ProjectCard name="Lumen Labs" category="Content Engine" delay="0.3s" />
              <ProjectCard name="Northwind Retail" category="Growth Experiments" delay="0.4s" />
              <ProjectCard name="Aster Mobile" category="Retention + Advocacy" delay="0.5s" />
            </div>
            <div className="text-center mt-12">
              <p className="text-stone-500 italic">Available for new engagements in Q4. Let’s talk about your next launch.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-white font-serif font-bold text-2xl mb-2">Ronak Kanojia</div>
            <p className="text-sm">Marketing strategy, growth programs, and launch support.</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-stone-300">hello@ronakkanojia.com</p>
            <p className="text-sm text-stone-300">San Francisco • Remote</p>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">© 2024 Ronak Kanojia. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;

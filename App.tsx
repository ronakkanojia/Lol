
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
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
      // Account for fixed header offset
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">R</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              Ronak Kanojia <span className="font-normal text-stone-500">Growth Studio</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Profile</a>
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Solutions</a>
            <a href="#work" onClick={scrollToSection('work')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Casework</a>
            <a href="#clients" onClick={scrollToSection('clients')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Partners</a>
            <a 
              href="mailto:ronak@kanojia.studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Book Strategy Call
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
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Profile</a>
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Solutions</a>
            <a href="#work" onClick={scrollToSection('work')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Casework</a>
            <a href="#clients" onClick={scrollToSection('clients')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Partners</a>
            <a 
              href="mailto:ronak@kanojia.studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setMenuOpen(false)} 
              className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer"
            >
              Book Strategy Call
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
            Growth Portfolio • 2025
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            Ronak Kanojia <br/><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">GTM Strategy, Demand Gen, Creative Leadership</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            I help modern teams turn brand clarity into compounding growth. From positioning and messaging to lifecycle programs, every engagement is built to scale with measurable outcomes.
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
        {/* Introduction */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Profile</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Growth With Narrative Discipline</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">R</span>onak Kanojia is a growth strategist who helps B2B and consumer brands translate complex products into irresistible narratives. He blends creative direction, lifecycle design, and paid performance to scale pipeline without sacrificing brand integrity.
              </p>
              <p>
                His approach centers on insight-driven messaging, structured experimentation, and systems thinking. The result: cohesive campaigns, stronger conversion rates, and a narrative that aligns teams from product to sales.
              </p>
            </div>
          </div>
        </section>

        {/* The Science: Surface Code */}
        <section id="services" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <BookOpen size={14}/> THE SOLUTIONS
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Revenue Momentum, Rebuilt for Scale</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Ronak aligns positioning, brand, and demand into a single revenue engine so every touchpoint compounds pipeline. Each engagement starts with precision on who you serve, why you win, and how your story travels across the funnel.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Core offerings include GTM strategy, messaging architecture, lifecycle programs, paid growth, and conversion-led creative direction—delivered as a cohesive operating system, not disconnected tactics.
                        </p>
                    </div>
                    <div>
                        <SurfaceCodeDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* The Science: Transformer Decoder */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                {/* Decorative background pattern - Gold/Stone theme */}
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
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Creative + Performance, Fully Synced</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            Ronak blends brand storytelling with performance rigor to build a living creative system. Insights flow from discovery to testing, so every asset is informed by real customer behavior and revenue goals.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            Launch plans, experiment sprints, and monthly growth reviews keep the program aligned to impact, efficiency, and long-term brand equity—so momentum never stalls.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* The Science: Results */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Proof of Momentum, at 10x Clarity</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Recent engagements accelerated conversion lift, pipeline velocity, and retention by pairing narrative precision with disciplined experimentation and cohesive creative systems.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <PerformanceMetricDiagram />
                </div>
            </div>
        </section>

        {/* Impact */}
        <section id="work" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.2),transparent_55%)]"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-500">
                                <span>Demand Pulse</span>
                                <span>Q2 Launch</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: 'Awareness', value: '68%' },
                                    { label: 'Intent', value: '42%' },
                                    { label: 'Pipeline', value: '5.4x' },
                                ].map((item) => (
                                    <div key={item.label} className="rounded-lg border border-stone-200 bg-white/80 p-3 shadow-sm">
                                        <div className="text-[10px] uppercase tracking-widest text-stone-400">{item.label}</div>
                                        <div className="text-lg font-serif text-stone-900">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {[
                                    { label: 'Paid Social', width: 'w-3/4' },
                                    { label: 'Lifecycle', width: 'w-2/3' },
                                    { label: 'Partner', width: 'w-1/2' },
                                ].map((row) => (
                                    <div key={row.label} className="flex items-center gap-3 text-xs text-stone-500">
                                        <span className="w-20 uppercase tracking-widest">{row.label}</span>
                                        <div className="flex-1 h-2 rounded-full bg-stone-200">
                                            <div className={`h-2 rounded-full bg-nobel-gold ${row.width}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Growth dashboard snapshot</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Work</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Campaigns Built to Accelerate</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Ronak partners with founders and growth leaders to launch positioning refreshes, product releases, and multi-channel campaigns that move buyers from awareness to decision.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        Each initiative ships with a clear measurement framework that ties brand signals to pipeline outcomes, so teams can scale with confidence.
                    </p>
                    
                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-serif italic text-xl text-stone-800 mb-4">
                            "Ronak brings structure and creative energy to growth. He turns complex products into confident buyer decisions."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— VP Marketing, Series B SaaS</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Authors */}
        <section id="clients" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">CLIENTS</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Trusted by Growth Teams</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Selected collaborations across SaaS, fintech, healthcare, and consumer brands.</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                    <AuthorCard 
                        name="Brightline AI" 
                        role="Series A SaaS • GTM Strategy" 
                        delay="0s" 
                    />
                    <AuthorCard 
                        name="NovaPay" 
                        role="Fintech • Retention Growth" 
                        delay="0.1s" 
                    />
                    <AuthorCard 
                        name="Lumen Health" 
                        role="Healthcare • Product Launch" 
                        delay="0.2s" 
                    />
                    <AuthorCard 
                        name="Studio K" 
                        role="Consumer • Brand Refresh" 
                        delay="0.3s" 
                    />
                    <AuthorCard 
                        name="CoreStack" 
                        role="Enterprise • Demand Gen" 
                        delay="0.4s" 
                    />
                    <AuthorCard 
                        name="SignalWorks" 
                        role="B2B • Lifecycle Marketing" 
                        delay="0.5s" 
                    />
                </div>
                <div className="text-center mt-12">
                    <p className="text-stone-500 italic">Available for select strategy, creative, and growth engagements.</p>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">Ronak Kanojia</div>
                <p className="text-sm">Marketing strategy, growth systems, and creative direction.</p>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            © 2024 Ronak Kanojia. Crafted for modern marketing teams.
        </div>
      </footer>
    </div>
  );
};

export default App;

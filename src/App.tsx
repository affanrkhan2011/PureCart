/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Trash2, 
  Phone, 
  CheckCircle2, 
  Menu, 
  X, 
  Droplets, 
  Leaf, 
  Thermometer, 
  Wind, 
  Star,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Zap,
  MessageSquare,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "(778) 955-0605";
const TEL_LINK = "tel:7789550605";
const SMS_LINK = `sms:7789550605?body=${encodeURIComponent("Number of bins:\nAddress:\nTime:\nAdditional Info:")}`;

const Logo = ({ className = "" }: { className?: string }) => (
  <img src="/logo.png" alt="Burnaby Bin Cleaners Logo" className={`object-contain ${className}`} />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-dark-text selection:bg-accent-green selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-subtle py-3' : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-12 h-12 text-primary-green group-hover:text-accent-green transition-all duration-300 shadow-lg shadow-primary-green/20" />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl md:text-2xl tracking-tight leading-none text-primary-green group-hover:text-accent-green transition-colors">
                BURNABY BIN
              </span>
              <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-medium-text/60 leading-none mt-1">
                CLEANERS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {['Services', 'How It Works', 'Pricing', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-medium-text hover:text-primary-green font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <a 
              href={SMS_LINK}
              className="bg-primary-green hover:bg-accent-green text-white px-5 py-2.5 rounded-full font-poppins font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-green/20"
            >
              <MessageSquare className="w-4 h-4" />
              BOOK NOW
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a 
              href={SMS_LINK}
              className="bg-primary-green text-white p-2.5 rounded-full shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 text-dark-text hover:text-primary-green transition-colors"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border-green shadow-xl py-6 px-4 flex flex-col gap-4"
            >
              {['Services', 'How It Works', 'Pricing', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-dark-text hover:text-primary-green px-4 py-2 rounded-lg hover:bg-light-green transition-all"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-border-green">
                <p className="text-muted-text text-sm mb-3 px-4 font-medium uppercase tracking-wider">Book Now</p>
                <a 
                  href={SMS_LINK}
                  className="w-full bg-primary-green text-white py-4 rounded-xl font-poppins font-bold text-center flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  TEXT TO BOOK
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-poppins font-bold text-5xl md:text-7xl text-dark-text leading-[1.1] mb-6"
            >
              Dirty Bins? <br />
              We'll Make Them <br />
              <span className="text-primary-green relative inline-block">
                Spotless.
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-accent-green/20 -z-10 origin-left"
                />
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-medium-text text-lg md:text-xl mb-10 leading-relaxed max-w-lg"
            >
              Hardworking high schoolers providing professional garbage can cleaning for local homes. Sanitised, deodorised, and looking brand new — right on your driveway.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a 
                href={SMS_LINK}
                className="bg-primary-green hover:bg-accent-green text-white px-8 py-5 rounded-2xl font-poppins font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary-green/20"
              >
                <MessageSquare className="w-5 h-5" />
                TEXT TO BOOK: {PHONE_NUMBER}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {[
                { icon: CheckCircle2, text: "No contracts" },
                { icon: Leaf, text: "Eco-friendly" },
                { icon: Zap, text: "Same-day available" }
              ].map((chip) => (
                <div key={chip.text} className="flex items-center gap-2 text-primary-green font-semibold">
                  <chip.icon className="w-5 h-5 text-accent-green" />
                  <span className="text-sm uppercase tracking-wide">{chip.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image / Before-After Comparison */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-border-green group cursor-ew-resize"
          >
            <div className="absolute inset-0 flex">
              {/* Left Side: Dirty */}
              <div className="w-1/2 h-full bg-[#2A2A2A] flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute top-8 left-8 bg-black/60 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md z-20">Before</div>
                 
                 {/* Grime Textures (Mockup with CSS) */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute bg-black rounded-full blur-xl"
                        style={{
                          width: `${Math.random() * 150 + 50}px`,
                          height: `${Math.random() * 150 + 50}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.5
                        }}
                      />
                    ))}
                 </div>

                 <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                   <div className="relative">
                     <Trash2 className="w-48 h-48 md:w-64 md:h-64 text-[#4A4A4A] drop-shadow-lg" strokeWidth={1} />
                     <div className="absolute inset-0 bg-black/20 mix-blend-multiply rounded-full blur-2xl" />
                   </div>
                   <p className="text-white/40 font-poppins font-bold text-center mt-4 tracking-widest">STAINED & SMELLY</p>
                 </div>
              </div>

              {/* Right Side: Spotless */}
              <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute top-8 right-8 bg-primary-green/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest z-20">After</div>
                 
                 {/* Shine Effect */}
                 <div className="absolute top-0 left-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />

                 <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                   <div className="relative">
                     <Trash2 className="w-48 h-48 md:w-64 md:h-64 text-primary-green drop-shadow-2xl" strokeWidth={1.5} />
                     <motion.div 
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-4 -right-4 bg-accent-green/30 w-12 h-12 rounded-full blur-xl" 
                     />
                   </div>
                   <p className="text-primary-green font-poppins font-bold text-center mt-4 tracking-widest">IMMACULATE</p>
                 </div>

                 {/* Sparkles Effect */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-accent-green opacity-40 scale-75"
                        style={{ 
                          top: `${15 + Math.random() * 70}%`, 
                          left: `${55 + Math.random() * 35}%` 
                        }}
                      >
                        <Star fill="currentColor" className="w-5 h-5" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>
            
            {/* Split Line / Slider Handle */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-accent-green z-30 shadow-[0_0_20px_rgba(76,175,80,0.6)] flex items-center justify-center">
               <div className="w-14 h-14 bg-accent-green rounded-2xl flex items-center justify-center shadow-2xl transform active:scale-95 transition-transform">
                 <div className="flex gap-1.5">
                   <div className="w-1.5 h-6 bg-white/40 rounded-full" />
                   <div className="w-1.5 h-6 bg-white rounded-full" />
                   <div className="w-1.5 h-6 bg-white/40 rounded-full" />
                 </div>
               </div>
            </div>
            
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-green mb-4">Your bins are dirtier than you think.</h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">Neglected bins aren't just an eyesore—they're a breeding ground for health risks and pests.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🦠", title: "Bacteria", desc: "Bins harbour E. coli and salmonella year-round" },
            { icon: "🤢", title: "Odour", desc: "Rotting waste causes unbearable smells" },
            { icon: "🐀", title: "Pests", desc: "Dirty bins attract rats, flies and maggots" },
            { icon: "☠️", title: "Hazardous", desc: "Leaking fluids and mould cause health risks" }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-subtle border border-border-green transition-all"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-dark-text">{item.title}</h3>
              <p className="text-medium-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-subtle font-poppins text-lg">
            <span className="text-muted-text">Average household: clean 0 times/year.</span>
            <span className="mx-4 text-border-green">|</span>
            <span className="text-primary-green font-bold">Burnaby Bin Cleaners customer: 12 times.</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-20">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark-text mb-4">Three steps to a spotless bin.</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Arrows (Desktop) */}
            <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-px border-t-2 border-dashed border-border-green -z-10" />
            
            {[
              { step: 1, icon: MessageSquare, title: "Text Us", desc: "Text us your info (using our preset template) and tell us how many bins you have." },
              { step: 2, icon: Calendar, title: "We Come To You", desc: "Our team arrives at your property on your chosen day. No need to be home." },
              { step: 3, icon: Star, title: "Spotless Bins", desc: "We clean, sanitise and deodorise every bin. You don't lift a finger." }
            ].map((step, idx) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center font-poppins font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-24 h-24 bg-light-green rounded-3xl flex items-center justify-center text-primary-green transition-transform group-hover:scale-110 duration-300">
                    <step.icon className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-dark-text">{step.title}</h3>
                <p className="text-medium-text leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <a 
              href={SMS_LINK}
              className="inline-flex items-center gap-3 bg-primary-green hover:bg-accent-green text-white px-10 py-5 rounded-2xl font-poppins font-bold text-xl shadow-xl shadow-primary-green/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-6 h-6" />
              TEXT TO BOOK: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark-text mb-4">Everything your bins need.</h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 mb-16">
          {/* Residential */}
          <div className="bg-white rounded-[2rem] shadow-xl border-t-8 border-primary-green overflow-hidden flex flex-col">
            <div className="p-10 flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-light-green rounded-2xl flex items-center justify-center text-primary-green">
                  <Box className="w-8 h-8" />
                </div>
                <h3 className="font-poppins font-bold text-3xl text-dark-text uppercase tracking-tight">Residential Bin Cleaning</h3>
              </div>
              <p className="text-medium-text text-lg mb-8">Professional cleaning for homeowners and families. We clean your wheelie bins, recycling bins and organic waste containers right at your curb.</p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                {[
                  "High-pressure pressure wash",
                  "Eco-friendly sanitiser",
                  "Deodorising treatment",
                  "Inside and outside clean",
                  "Bin returned to your spot",
                  "No-mess guarantee"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-medium-text">
                    <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 pt-0">
              <a href={SMS_LINK} className="block w-full bg-primary-green hover:bg-accent-green text-white py-5 rounded-2xl font-poppins font-bold text-center transition-colors text-lg shadow-lg">
                TEXT TO BOOK: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        {/* Process Icons */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
                {[
                  { icon: Droplets, label: "High-Pressure Hot Wash" },
                  { icon: Leaf, label: "Eco-Safe Detergent" },
                  { icon: Thermometer, label: "Hot Water Sanitising" },
                  { icon: Wind, label: "Deodoriser Treatment" }
                ].map(p => (
                  <div key={p.label} className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-[1.25rem] shadow-subtle flex items-center justify-center text-primary-green">
                      <p.icon className="w-8 h-8" />
                    </div>
                    <span className="font-poppins font-bold text-sm md:text-base text-dark-text uppercase tracking-wider">{p.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-medium-text text-lg max-w-3xl mx-auto leading-relaxed italic">
                Our high-powered pressure washing system uses eco-friendly cleaning agents — safe for your family, your pets, and the environment.
              </p>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark-text mb-4">Simple, honest pricing.</h2>
          <p className="text-muted-text text-lg">No hidden fees. No surprises.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "1 BIN", price: "$10", features: ["All bin types", "Full service", "Eco-friendly sanitiser"] },
            { title: "2 BINS", price: "$15", features: ["All bin types", "Full service", "Eco-friendly sanitiser", "Most requested"], recommended: true },
            { title: "3+ BINS", price: "$7", suffix: "per bin", features: ["Best value", "Custom quotes", "Neighborhood rates", "Multiple containers"] }
          ].map((plan) => (
            <div 
              key={plan.title}
              className={`relative bg-white rounded-[2.5rem] p-10 flex flex-col shadow-subtle border border-border-green transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.recommended ? 'ring-4 ring-primary-green/20 border-primary-green' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-green text-white px-6 py-2 rounded-full font-poppins font-bold text-sm tracking-widest uppercase flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  Best Value
                </div>
              )}
              <h3 className="font-poppins font-bold text-2xl text-dark-text mb-8 text-center">{plan.title}</h3>
              <div className="mb-10 text-center">
                <span className="text-5xl font-poppins font-bold text-primary-green">{plan.price}</span>
                {plan.suffix && <span className="text-muted-text ml-2">{plan.suffix}</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-medium-text font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href={SMS_LINK}
                className={`w-full py-5 rounded-2xl font-poppins font-bold text-center transition-all ${
                  plan.recommended 
                    ? 'bg-primary-green text-white hover:bg-accent-green shadow-xl shadow-primary-green/20' 
                    : 'bg-light-green text-primary-green hover:bg-primary-green hover:text-white'
                }`}
              >
                {plan.suffix ? 'TEXT US' : 'TEXT TO BOOK'}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-medium-text font-medium bg-light-green px-6 py-3 rounded-full inline-block">
          Need a special quote? Text us for custom neighborhood rates.
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-primary-green mb-4">Why homeowners choose Burnaby Bin Cleaners.</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: Leaf, title: "Eco-Safe Chemicals", desc: "Biodegradable, pet and child safe" },
            { icon: Droplets, title: "Professional Setup", desc: "We use high-power pressure washers for a deep clean" },
            { icon: Calendar, title: "Flexible Scheduling", desc: "After school and weekend slots available" },
            { icon: ShieldCheck, title: "Fully Insured", desc: "Professionally backed for your peace of mind" },
            { icon: Zap, title: "Same-Day Available", desc: "Need it done fast? We've got you covered" }
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-3xl text-center flex flex-col items-center shadow-subtle hover:shadow-xl transition-all h-full">
              <div className="w-14 h-14 bg-light-green rounded-2xl flex items-center justify-center text-primary-green mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="font-poppins font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
              <p className="text-sm text-medium-text leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 bg-light-green">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark-text mb-4">Frequently asked questions.</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Who runs Burnaby Bin Cleaners?", a: "We are a team of hardworking local high school students! We started this business to learn about entrepreneurship while providing a valuable service to our neighbours in Burnaby." },
              { q: "Do I need to be home for the clean?", a: "No. As long as your bins are accessible, we'll take care of everything and return them exactly where we found them." },
              { q: "What do you use to clean the bins?", a: "We use professional-grade high-pressure washers combined with biodegradable, eco-friendly cleaning agents. It's tough on grime but safe for children and pets." },
              { q: "How long does it take?", a: "Each bin takes approximately 10–15 minutes. Most residential cleans are completed in under 30 minutes." },
              { q: "What happens to the wastewater?", a: "We take care to ensure all residue is cleaned up and disposed of properly. We won't leave a mess on your driveway." }
            ].map((item) => (
              <FaqItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-green py-24 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Box className="absolute top-10 left-10 w-32 h-32 text-white/20 rotate-12" />
          <Trash2 className="absolute bottom-10 right-10 w-48 h-48 text-white/20 -rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto relative cursor-pointer" onClick={() => window.location.href = SMS_LINK}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 md:p-20 border border-white/20 hover:bg-white/20 transition-all group lg:hover:scale-105 active:scale-95 duration-500"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-8">Ready for cleaner bins?</h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 font-medium">Send us a text. We'll handle the rest.</p>
            <div className="font-poppins font-bold text-4xl md:text-7xl text-white mb-12 tracking-tight group-hover:scale-110 transition-transform">
              {PHONE_NUMBER}
            </div>
            <div className="text-white/70 text-lg mb-12 font-medium tracking-wide">
              Working Hours: Monday - Friday 4:30pm - 7:30pm
            </div>
            <div className="inline-flex items-center gap-3 bg-white text-primary-green px-12 py-5 rounded-full font-poppins font-bold text-2xl shadow-2xl transition-all group-hover:shadow-white/20">
              <MessageSquare className="w-8 h-8" />
              TAP TO TEXT
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B5E20] py-20 px-4 md:px-6 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center gap-4">
              <Logo className="w-16 h-16 text-accent-green" />
              <div className="text-left">
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-2xl md:text-3xl leading-none">BURNABY BIN</span>
                  <span className="text-accent-green text-sm font-bold uppercase tracking-[0.3em] mt-1">CLEANERS</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href={SMS_LINK} className="font-poppins font-bold text-2xl hover:text-accent-green transition-colors block mb-1">
                {PHONE_NUMBER}
              </a>
              <p className="text-white/60 font-medium">Working Hours: Mon–Fri 4:30pm–7:30pm</p>
            </div>
          </div>
          
          <div className="h-px bg-white/10 mb-12" />
          
          <nav className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {['Services', 'How It Works', 'Pricing', 'FAQ'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/70 hover:text-white transition-colors font-semibold"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="h-px bg-white/10 mb-12" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-medium">
            <p>© 2026 Burnaby Bin Cleaners. All rights reserved.</p>
            <p>Serving Vancouver, Burnaby, Richmond, Surrey and surrounding areas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string; key?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-subtle border border-border-green transition-all hover:shadow-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8 flex items-center justify-between gap-4 group"
      >
        <span className="font-poppins font-bold text-lg md:text-xl text-dark-text group-hover:text-primary-green transition-colors pr-2">
          {question}
        </span>
        <div className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-7 h-7 text-primary-green" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-medium-text text-lg leading-relaxed border-t border-border-green/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

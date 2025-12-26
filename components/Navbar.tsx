
import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Youtube, Globe, ArrowRight, Home, User, CreditCard, Mail, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background change threshold
      setScrolled(window.scrollY > 50);

      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#', icon: Home },
    { name: 'প্রোফাইল ফ্রেম', href: '#profile-frame', icon: User },
    { name: 'শুভেচ্ছা কার্ড', href: '#greeting-card', icon: CreditCard },
    { name: 'যোগাযোগ', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Adjusted offset for smaller navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled 
          ? 'py-2 bg-[#004d26]/85 backdrop-blur-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.4)] border-b border-white/5' 
          : 'py-5 bg-[#004d26] border-b border-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 transition-all duration-300 opacity-80"
        style={{ width: `${scrollProgress}%`, boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* Brand Identity with Shimmer */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')} 
            className="group relative flex items-center gap-4 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-2xl font-black tracking-tight text-white leading-[0.9] uppercase transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-green-200 group-hover:to-white group-hover:bg-[length:200%_auto] group-hover:animate-shimmer">
                বাংলাদেশ ইসলামী <br /> ছাত্র মজলিস
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="h-[1.5px] w-3 bg-green-400/40 group-hover:w-6 transition-all duration-700"></div>
                <span className="text-[9px] md:text-[10px] font-black text-white/40 tracking-[0.4em] uppercase group-hover:text-white/70 transition-colors">
                  Chhatra Majlis
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Menu - Floating Pill Design */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative px-5 py-2 text-white/70 hover:text-white font-bold text-xs transition-all rounded-full hover:bg-white/10 group overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-green-400 rounded-full transition-all group-hover:w-2"></span>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600' },
                { Icon: Youtube, color: 'hover:bg-red-600' }
              ].map(({ Icon, color }, idx) => (
                <div 
                  key={idx}
                  className={`group w-9 h-9 rounded-full flex items-center justify-center text-white/50 cursor-pointer transition-all duration-500 border border-white/10 hover:border-transparent hover:text-white hover:scale-110 relative ${color}`}
                >
                  <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 group-hover:scale-125 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <Icon className="w-4 h-4 relative z-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[110] text-white p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-lg active:scale-90"
            >
              {isOpen ? <X className="w-6 h-6 animate-in spin-in-90 duration-300" /> : <Menu className="w-6 h-6 animate-in fade-in duration-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 w-full h-screen z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#004d26] overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-900/40 rounded-full blur-[120px] animate-pulse delay-700"></div>
           <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-green-400/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative h-full flex flex-col px-8 pt-32 pb-12 justify-between z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6 opacity-40">
              <Sparkles className="w-4 h-4 text-green-300" />
              <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Explore Majlis 36</p>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ transitionDelay: `${idx * 80 + 200}ms` }}
                className={`flex items-center justify-between text-white hover:text-green-300 font-black text-2xl sm:text-3xl py-4 border-b border-white/5 group transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              >
                <div className="flex items-center gap-5">
                  <link.icon className="w-6 h-6 text-white/20 group-hover:text-green-400 transition-colors" />
                  {link.name}
                </div>
                <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-green-400" />
              </a>
            ))}

            <div 
              style={{ transitionDelay: '600ms' }}
              className={`mt-8 transform transition-all ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <a 
                href="#upload" 
                onClick={(e) => scrollToSection(e, '#upload')}
                className="inline-flex items-center gap-3 bg-white text-[#004d26] px-8 py-4 rounded-2xl font-black text-lg shadow-2xl hover:bg-green-50 active:scale-95 transition-all"
              >
                Join Campaign
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className={`pt-10 transition-all duration-1000 delay-600 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <div className="h-px w-full bg-white/10 mb-8"></div>
             <div className="flex items-center justify-between">
                <div className="space-y-2">
                   <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Stay Connected</p>
                   <div className="flex gap-6 text-white/40">
                    <Facebook className="w-6 h-6 hover:text-white transition-colors cursor-pointer hover:scale-110" />
                    <Youtube className="w-6 h-6 hover:text-white transition-colors cursor-pointer hover:scale-110" />
                    <Globe className="w-6 h-6 hover:text-white transition-colors cursor-pointer hover:scale-110" />
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Est.</p>
                   <p className="text-xl font-black text-white">1990</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 5s infinite linear;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

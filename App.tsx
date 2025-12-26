
import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, CheckCircle2, PartyPopper, Sparkles, Star, Copy, Check, MousePointer2, Facebook, Youtube, Globe, MapPin, Mail, ArrowUp, ArrowRight, ShieldCheck, Heart, Zap } from 'lucide-react';
import { BENGALI_TEXT, COLORS } from './constants';
import Navbar from './components/Navbar';
import ProfileFrameGenerator from './components/ProfileFrameGenerator';
import GreetingCardGenerator from './components/GreetingCardGenerator';
import CropModal from './components/CropModal';

const App: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userMessage, setUserMessage] = useState<string>(`দেশের জনপ্রিয় ছাত্র সংগঠন বাংলাদেশ ইসলামী ছাত্র মজলিস এর ৩৬ তম প্রতিষ্ঠাবার্ষিকী ৫ জানুয়ারি ২০২৬ । এই আনন্দঘন সময়ের সবাইকে জানাই আন্তরিক শুভেচ্ছা।`);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTempImage(event.target?.result as string);
        setIsCropModalOpen(true);
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  };

  const handleCopyHashtags = () => {
    const hashtags = "#ছাত্রমজলিস36 #ChhatraMajlis36";
    navigator.clipboard.writeText(hashtags).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/BICM1990" },
    { Icon: Youtube, href: "https://www.youtube.com/@BICM1990" },
    { Icon: Globe, href: "https://chhatra-majlis.org.bd" }
  ];

  return (
    <div className="min-h-screen text-slate-900 selection:bg-green-100 selection:text-green-900 overflow-x-hidden pb-0">
      {isCropModalOpen && tempImage && (
        <CropModal 
          imageSrc={tempImage} 
          onConfirm={(img) => { setUserImage(img); setIsCropModalOpen(false); }} 
          onCancel={() => setIsCropModalOpen(false)} 
        />
      )}

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-32 md:pt-40 pb-24 relative">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 -left-10 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>

        {/* Hero Section */}
        <div className={`relative mb-20 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center space-y-10 max-w-4xl mx-auto relative px-4">
            
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-white/50 blur-3xl rounded-full opacity-60"></div>
              <h1 className="relative flex flex-col items-center leading-[1.1]">
                <span className="text-4xl md:text-7xl lg:text-8xl font-black text-[#004d26] tracking-tight drop-shadow-sm">
                  {BENGALI_TEXT.subtitlePart1}
                </span>
                <span className="text-5xl md:text-8xl lg:text-9xl font-black text-gradient drop-shadow-xl py-6 animate-float inline-block">
                  {BENGALI_TEXT.subtitlePart2}
                </span>
              </h1>
              <div className="absolute -top-6 -right-12 animate-pulse hidden md:block">
                <PartyPopper className="w-12 h-12 text-yellow-500 rotate-12" />
              </div>
            </div>

            <div className="relative pt-4">
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#004d26]/40 to-transparent mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-3xl font-bold text-slate-600 max-w-3xl mx-auto leading-relaxed relative z-10 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-2xl inline-block border border-white/50">
                {BENGALI_TEXT.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Campaign Info Cards */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-[#004d26] via-[#005c2e] to-[#003d1e] rounded-[4rem] p-1 md:p-1.5 shadow-[0_40px_100px_-20px_rgba(0,77,38,0.5)] overflow-hidden">
            <div className="bg-[#004d26] rounded-[3.9rem] p-8 md:p-16 relative overflow-hidden group/card">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_70%)]"></div>
              
              <div className="relative z-10 grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-2 space-y-12">
                  <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-400/20 rounded-full text-[10px] font-black tracking-widest border border-emerald-400/30 text-emerald-100 uppercase">
                      <Sparkles className="w-3 h-3" /> প্রচারণা নির্দেশিকা
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white">
                      {BENGALI_TEXT.stepsTitle}
                    </h3>
                  </div>
                  
                  <div className="space-y-8">
                    {BENGALI_TEXT.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-6 group items-start">
                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center shrink-0 font-black text-xl group-hover:bg-white group-hover:text-[#004d26] transition-all duration-500 transform group-hover:rotate-6">
                          {idx + 1}
                        </div>
                        <p className="font-bold text-lg md:text-xl text-emerald-50/80 group-hover:text-white transition-colors leading-snug pt-2">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-white/5 backdrop-blur-2xl rounded-[3.5rem] p-8 md:p-14 border border-white/10 relative overflow-hidden">
                    <div className="relative z-10 space-y-12">
                      <p className="text-2xl md:text-4xl font-black leading-relaxed text-white drop-shadow-md">
                        {BENGALI_TEXT.anniversaryInfo}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <button 
                          onClick={handleCopyHashtags}
                          className="group relative flex flex-col items-start gap-4 bg-emerald-900/40 p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 text-left w-full shadow-xl"
                        >
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                            {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="font-bold text-sm text-emerald-50">
                              {BENGALI_TEXT.hashtags}
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/60 mt-2">
                              {copied ? 'Copied!' : 'Click to copy hashtags'}
                            </span>
                          </div>
                        </button>
                        
                        <div className="group relative flex flex-col gap-4 bg-yellow-500/10 p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
                          <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-300">
                            <Star className="w-6 h-6" />
                          </div>
                          <span className="font-bold text-sm text-yellow-50/90 leading-relaxed">
                            {BENGALI_TEXT.giftInfo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Upload Section */}
        <div className="max-w-xl mx-auto mb-28">
           <div id="upload" className="group relative bg-white glass rounded-[3.5rem] p-10 text-center border border-white shadow-2xl hover:shadow-[#004d26]/20 transition-all cursor-pointer overflow-hidden transform hover:-translate-y-2 active:scale-[0.98]">
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" accept="image/*" onChange={handleImageUpload} />
              
              <div className="flex items-center justify-between gap-8 px-4">
                 <div className="w-20 h-20 bg-[#004d26] rounded-3xl flex items-center justify-center text-white shadow-2xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                   <Camera className="w-10 h-10" />
                 </div>
                 <div className="text-left flex-1">
                   <h2 className="text-2xl font-black text-[#004d26]">{BENGALI_TEXT.uploadBtn}</h2>
                   <p className="text-slate-400 text-base font-bold">ক্লিক করে আপনার ছবি দিন</p>
                 </div>
                 <div className="bg-[#004d26]/5 p-4 rounded-full text-[#004d26] group-hover:bg-[#004d26] group-hover:text-white transition-all duration-500">
                   <MousePointer2 className="w-7 h-7" />
                 </div>
              </div>

              {userImage && (
                <div className="mt-8 flex items-center gap-3 text-emerald-700 font-black bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100 justify-center animate-in fade-in slide-in-from-top-4 duration-500">
                  <CheckCircle2 className="w-5 h-5" /> ছবি লোড হয়েছে! এখন ফ্রেম ডাউনলোড করুন।
                </div>
              )}
           </div>
        </div>

        {/* Generator Grids */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <section id="profile-frame" className="space-y-8">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 bg-white glass rounded-2xl flex items-center justify-center text-[#004d26] shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-[#004d26] tracking-tight">{BENGALI_TEXT.frameLabel}</h2>
            </div>
            <div className="bg-white/40 glass rounded-[4rem] p-8 md:p-12 shadow-2xl transition-all duration-700 border border-white">
              <ProfileFrameGenerator userImage={userImage} />
            </div>
          </section>

          <section id="greeting-card" className="space-y-8">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 bg-white glass rounded-2xl flex items-center justify-center text-[#004d26] shadow-lg">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-[#004d26] tracking-tight">{BENGALI_TEXT.greetingLabel}</h2>
            </div>
            <div className="bg-white/40 glass rounded-[4rem] p-8 md:p-12 shadow-2xl border border-white">
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Your Name</label>
                    <input 
                      type="text" 
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={BENGALI_TEXT.nameInputPlaceholder}
                      className="w-full px-6 py-4 bg-white/80 border-2 border-slate-50 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-[#004d26] focus:outline-none font-bold transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Anniversary Note</label>
                    <textarea 
                      rows={2}
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      placeholder={BENGALI_TEXT.messageInputPlaceholder}
                      className="w-full px-6 py-4 bg-white/80 border-2 border-slate-50 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-[#004d26] focus:outline-none font-bold transition-all shadow-sm resize-none"
                    />
                  </div>
                </div>
                <GreetingCardGenerator userImage={userImage} name={userName} message={userMessage} />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Premium Deep Gray "Midnight Slate" Footer */}
      <footer id="contact" className="relative mt-20 md:mt-32">
        {/* Subtle Slate Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>

        <div className="bg-[#0f172a] relative z-10 overflow-hidden">
          {/* Enhanced background textures for higher fidelity */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
             <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.15)_0%,transparent_60%)]"></div>
             <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 pt-24 pb-16 relative">
            
            {/* Header Action Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 pb-20 border-b border-white/5">
              <div className="space-y-4 text-center lg:text-left">
                <h4 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  আসুন, আমাদের এই ঐতিহাসিক <br /> <span className="text-emerald-400">সাফল্যের অংশীদার হই</span>
                </h4>
                <p className="text-slate-400 font-bold text-lg">বাংলাদেশের প্রতিটি প্রান্তে আমাদের আওয়াজ পৌঁছে দিন।</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                 <a href="#upload" className="group flex items-center gap-4 bg-emerald-500 text-slate-900 px-10 py-5 rounded-3xl font-black text-xl hover:bg-white transition-all shadow-2xl hover:scale-[1.03] active:scale-95">
                    <ImageIcon className="w-6 h-6" /> এখনই শুরু করুন
                 </a>
                 <button onClick={scrollToTop} className="group w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-emerald-500 hover:text-slate-900 transition-all">
                    <ArrowUp className="w-6 h-6" />
                 </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 mb-32">
              
              {/* Branding Section */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/80 rounded-2xl border border-white/5 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Official Portal</span>
                  </div>
                  <h4 className="text-4xl md:text-5xl font-black text-white leading-[0.85] tracking-tighter">
                    বাংলাদেশ ইসলামী <br /> ছাত্র মজলিস
                  </h4>
                </div>
                <p className="text-xl text-slate-400 font-bold italic leading-relaxed">
                  "{BENGALI_TEXT.tagline}"
                </p>
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, href }, i) => (
                    <a 
                      key={i} 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:text-slate-900 hover:-translate-y-2 transition-all duration-500 shadow-xl"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact detail block */}
              <div className="space-y-10 lg:pl-12">
                <div className="space-y-2">
                   <h5 className="font-black text-slate-500 text-[10px] tracking-[0.4em] uppercase opacity-80">Connectivity</h5>
                   <div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="space-y-10">
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 shrink-0 transition-all group-hover:bg-emerald-500 group-hover:text-slate-900">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-white font-black text-xl mb-1">{BENGALI_TEXT.address}</p>
                      <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">HQ Location</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 shrink-0 transition-all group-hover:bg-emerald-500 group-hover:text-slate-900">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-white font-black text-xl mb-1">info@chhatramajlis.org</p>
                      <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">Email Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Anniversary Card Widget */}
              <div className="relative">
                 <div className="absolute -inset-10 bg-slate-500/10 blur-[100px] rounded-full animate-pulse"></div>
                 <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 text-center overflow-hidden group hover:bg-white/[0.05] transition-all duration-700">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Zap className="w-12 h-12 text-white" />
                    </div>
                    <span className="block text-slate-500 font-black text-[10px] tracking-[0.5em] uppercase mb-6">Established 1990</span>
                    <div className="relative inline-block mb-4">
                       <span className="block text-9xl font-black text-white leading-none tracking-tighter transition-all group-hover:scale-105">৩৬</span>
                       <div className="absolute -bottom-2 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900 font-black text-[10px] shadow-2xl animate-bounce">YEARS</div>
                    </div>
                    <p className="text-slate-500 font-black text-[10px] tracking-[0.3em] uppercase">Glorious Journey</p>
                    <div className="mt-8 flex justify-center gap-2">
                       <Star className="w-4 h-4 text-yellow-500/50 fill-yellow-500/50" />
                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                       <Star className="w-4 h-4 text-yellow-500/50 fill-yellow-500/50" />
                    </div>
                 </div>
              </div>
            </div>

            {/* Final Bottom Bar */}
            <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center md:text-left">
                <p className="text-slate-500 font-black text-[11px] tracking-[0.4em] uppercase mb-4">
                  {BENGALI_TEXT.footerText}
                </p>
                <div className="flex justify-center md:justify-start gap-8">
                   <div className="flex items-center gap-2 text-slate-600 text-[9px] font-black uppercase">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500/30" /> Official Website
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-8 bg-black/40 backdrop-blur-3xl px-10 py-6 rounded-[2.5rem] border border-white/5 group/dev transition-all duration-700 hover:shadow-emerald-500/10 hover:shadow-[0_20px_80px_-10px_rgba(0,0,0,0.8)]">
                <div className="space-y-1">
                  <span className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Designed & Developed By</span>
                  <a 
                    href="https://www.facebook.com/MHabib8300" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white font-black text-2xl flex items-center gap-4 group-hover:text-emerald-400 transition-colors"
                  >
                    Habibullah Habib
                    <div className="relative flex items-center justify-center">
                       <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                       <div className="relative w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
                    </div>
                  </a>
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
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default App;

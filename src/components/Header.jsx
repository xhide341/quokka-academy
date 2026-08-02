import React, { useState } from 'react';
import { Volume2, VolumeX, Calendar, Menu, X } from 'lucide-react';
import { playPopSound, setSoundEnabled } from '../utils/audio';

export const Header = ({ onOpenBooking, soundOn, setSoundOn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playPopSound(600, 'sine');
  };

  const handleNavClick = (id) => {
    playPopSound(500, 'sine');
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 bg-[#FFFDF6] px-4 pt-6 pb-3.5">
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 bg-[#FF9F1C] border-[3px] border-[#121212] rounded-xl flex items-center justify-center text-2xl shadow-[3px_3px_0px_#121212] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_#121212] transition-all">
            🦘
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-['Outfit'] font-black text-xl md:text-2xl tracking-tight text-[#121212]">
              QUOKKA
            </span>
            <span className="bg-[#FFDE59] text-[#121212] font-black text-xs md:text-sm px-2 py-0.5 border-[2px] border-[#121212] rounded-md shadow-[1.5px_1.5px_0px_#121212]">
              ACADEMY
            </span>
          </div>
        </div>

        {/* Desktop Navigation Pills (Enlarged Navigation Text) */}
        <nav className="hidden md:flex items-center gap-2 font-['Outfit'] font-black text-base lg:text-lg text-[#121212]">
          <button 
            onClick={() => handleNavClick('teachers')}
            className="px-4 py-2 rounded-xl border-[2px] border-transparent hover:border-[#121212] hover:bg-[#FFDE59] hover:shadow-[2.5px_2.5px_0px_#121212] transition-all"
          >
            Teachers
          </button>

          <button 
            onClick={() => handleNavClick('curriculum')}
            className="px-4 py-2 rounded-xl border-[2px] border-transparent hover:border-[#121212] hover:bg-[#2EC4B6] hover:shadow-[2.5px_2.5px_0px_#121212] transition-all"
          >
            Curriculum
          </button>

          <button 
            onClick={() => handleNavClick('reviews')}
            className="px-4 py-2 rounded-xl border-[2px] border-transparent hover:border-[#121212] hover:bg-[#A594F9] hover:shadow-[2.5px_2.5px_0px_#121212] transition-all"
          >
            Reviews
          </button>

          <button 
            onClick={() => handleNavClick('pricing')}
            className="px-4 py-2 rounded-xl border-[2px] border-transparent hover:border-[#121212] hover:bg-[#FF85A1] hover:shadow-[2.5px_2.5px_0px_#121212] transition-all"
          >
            Pricing
          </button>
        </nav>

        {/* Header Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className="w-10 h-10 bg-[#A594F9] text-[#121212] border-[2.5px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2.5px_2.5px_0px_#121212] hover:translate-y-[-1px] hover:shadow-[3.5px_3.5px_0px_#121212] active:translate-y-[1px] active:shadow-[1px_1px_0px_#121212] transition-all"
            title={soundOn ? "Disable Sound Effects" : "Enable Sound Effects"}
          >
            {soundOn ? <Volume2 size={18} strokeWidth={2.5} /> : <VolumeX size={18} strokeWidth={2.5} />}
          </button>

          {/* Book Trial Button */}
          <button
            onClick={() => {
              playPopSound(700, 'triangle');
              onOpenBooking();
            }}
            className="neo-btn-primary hidden sm:flex items-center gap-2 text-sm md:text-base font-black px-4.5 py-2.5 rounded-xl border-[2.5px] border-[#121212] shadow-[3px_3px_0px_#121212]"
          >
            <Calendar size={18} strokeWidth={2.5} />
            <span>Book Free Trial</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => {
              playPopSound(500, 'sine');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="w-10 h-10 bg-[#FFDE59] text-[#121212] border-[2.5px] border-[#121212] rounded-xl flex md:hidden items-center justify-center shadow-[2.5px_2.5px_0px_#121212] active:translate-y-[1px]"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#FFFDF6] border-[3px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212] space-y-3 animate-float">
          <div className="grid grid-cols-2 gap-2 font-['Outfit'] font-black text-base">
            <button
              onClick={() => handleNavClick('teachers')}
              className="p-3.5 bg-white border-[2px] border-[#121212] rounded-xl shadow-[2px_2px_0px_#121212] text-left hover:bg-[#FFDE59]"
            >
              Certified Teachers
            </button>
            <button
              onClick={() => handleNavClick('curriculum')}
              className="p-3.5 bg-white border-[2px] border-[#121212] rounded-xl shadow-[2px_2px_0px_#121212] text-left hover:bg-[#2EC4B6]"
            >
              Curriculum
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="p-3.5 bg-white border-[2px] border-[#121212] rounded-xl shadow-[2px_2px_0px_#121212] text-left hover:bg-[#A594F9]"
            >
              Parent Reviews
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="p-3.5 bg-white border-[2px] border-[#121212] rounded-xl shadow-[2px_2px_0px_#121212] text-left hover:bg-[#FF85A1]"
            >
              Pricing Tiers
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full neo-btn-primary py-3.5 font-black text-base text-center border-[2.5px] border-[#121212] rounded-xl flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            <span>Book Free 20-Min Trial Lesson</span>
          </button>
        </div>
      )}
    </header>
  );
};

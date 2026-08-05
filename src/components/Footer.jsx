import React, { useState } from "react";
import { Heart, Mail, CheckCircle2, Youtube, Instagram, Facebook, Globe } from "lucide-react";
import { playPopSound } from "../utils/audio";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    playPopSound(700, "triangle");
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-[#F0EBFF] text-[#121212] pt-16 pb-12 border-t-[3.5px] border-[#121212] relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#121212_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      />

      {/* Soft Ambient Background Glows */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFDE59]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#A594F9]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#2EC4B6]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Newsletter Subscription Box */}
        <div className="bg-[#FF9F1C] border-[3.5px] border-[#121212] rounded-3xl p-6 md:p-10 shadow-[8px_8px_0px_#121212] relative overflow-hidden mb-10">
          {/* Background Decorative Shapes */}
          <div className="absolute -top-4 right-60 w-24 h-10 bg-[#A594F9] border-[3px] border-[#121212] rounded-full shadow-[3.5px_3.5px_0px_#121212] rotate-12 select-none pointer-events-none opacity-90 hidden sm:block" />
          <div className="absolute -top-3 left-89 w-12 h-12 bg-[#FFDE59] border-[2.5px] border-[#121212] rounded-2xl shadow-[3px_3px_0px_#121212] -rotate-12 select-none pointer-events-none opacity-90 hidden md:block" />
          <div className="absolute -bottom-9 left-6 w-16 h-16 bg-[#2EC4B6] border-[3px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] rotate-45 select-none pointer-events-none opacity-85 hidden sm:block" />
          <div className="absolute bottom-2 right-1/2 w-10 h-10 bg-[#FF85A1] border-[2.5px] border-[#121212] rounded-2xl shadow-[2.5px_2.5px_0px_#121212] rotate-12 select-none pointer-events-none opacity-80 hidden lg:block" />
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#2EC4B6] border-[3px] border-[#121212] rounded-full opacity-85 shadow-[4px_4px_0px_#121212] pointer-events-none hidden md:block" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 text-center lg:text-left">
            <div className="lg:col-span-7 space-y-2 text-[#121212] flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 bg-[#FFFDF6] text-[#121212] px-3.5 py-1 rounded-full border-[2px] border-[#121212] font-heading font-extrabold text-xs uppercase tracking-wider shadow-[2px_2px_0px_#121212] mx-auto lg:mx-0">
                <span>Free Educational Resources</span>
              </div>
              <h3 className="font-heading font-black text-2xl md:text-3xl tracking-tight text-[#121212]">
                Get Pip's Weekly Fun Learning Pack
              </h3>
              <p className="font-body font-bold text-xs md:text-sm text-[#121212] max-w-xl mx-auto lg:mx-0">
                Join 10,000+ parents receiving free printable English activity sheets, phonics
                games, and expert child literacy tips every Tuesday.
              </p>
            </div>

            <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
              {subscribed ? (
                <div className="bg-[#FFFDF6] border-[3px] border-[#121212] rounded-2xl p-4 flex items-center justify-center lg:justify-start gap-3 shadow-[4px_4px_0px_#121212] text-[#121212] font-heading font-black text-sm">
                  <CheckCircle2 size={24} className="text-[#2EC4B6] shrink-0" strokeWidth={3} />
                  <span>You're in! Check your inbox for Pip's welcome activity pack. 🎉</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#121212]"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#FFFDF6] text-[#121212] font-body font-bold text-sm border-[3px] border-[#121212] rounded-2xl placeholder:text-[#121212]/70 focus:outline-none focus:ring-2 focus:ring-[#121212] shadow-[3px_3px_0px_#121212]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#FFDE59] text-[#121212] font-heading font-black text-sm border-[3px] border-[#121212] rounded-2xl shadow-[4px_4px_0px_#121212] hover:shadow-[2px_2px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Subscribe</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start mb-6 md:mb-8">
          {/* Brand Info (3 Columns wide on MD, 2 Columns wide on LG) */}
          <div className="md:col-span-3 lg:col-span-2 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="text-center sm:text-left">
                <span className="font-heading font-black text-2xl tracking-tight text-[#121212]">
                  QUOKKA ACADEMY
                </span>
                <p className="text-xs font-bold text-[#121212]/90">
                  Where Kids Fall in Love with Learning
                </p>
              </div>
            </div>

            <p className="font-body font-bold text-xs md:text-sm text-[#121212] leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              Empowering young learners aged 4 to 12 with live 1-on-1 English lessons, interactive
              game quests with Pip the Quokka, and certified native educators.
            </p>

            {/* Social Pill Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="w-11 h-11 bg-white border-[2px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:bg-[#FF85A1] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-11 h-11 bg-white border-[2px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:bg-[#A594F9] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-11 h-11 bg-white border-[2px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:bg-[#2EC4B6] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#global"
                onClick={(e) => e.preventDefault()}
                className="w-11 h-11 bg-white border-[2px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:bg-[#FFDE59] transition-colors"
                aria-label="Global Community"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Column 1: Programs */}
          <div className="md:col-span-1 space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#121212]">
              Learning Tracks
            </h4>
            <ul className="space-y-2 font-body font-bold text-xs text-[#121212] flex flex-col items-center lg:items-start">
              <li>
                <a href="#curriculum" className="hover:underline transition-colors">
                  Phonics & Early Literacy
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:underline transition-colors">
                  Conversational Fluency
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:underline transition-colors">
                  Public Speaking for Kids
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:underline transition-colors">
                  Academic Debate Prep
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:underline transition-colors">
                  1-on-1 Customized Tutoring
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: About & Parents */}
          <div className="md:col-span-1 space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#121212]">
              Parent Hub
            </h4>
            <ul className="space-y-2 font-body font-bold text-xs text-[#121212] flex flex-col items-center lg:items-start">
              <li>
                <a href="#teachers" className="hover:underline transition-colors">
                  Meet Certified Teachers
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:underline transition-colors">
                  Parent Reviews & Stories
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline transition-colors">
                  Pricing & Package Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Safety */}
          <div className="md:col-span-1 space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#121212]">
              Safety & Legal
            </h4>
            <ul className="space-y-2 font-body font-bold text-xs text-[#121212] flex flex-col items-center lg:items-start">
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => e.preventDefault()}
                  className="hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(e) => e.preventDefault()}
                  className="hover:underline transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#coppa"
                  onClick={(e) => e.preventDefault()}
                  className="hover:underline transition-colors"
                >
                  Child Online Safety (COPPA)
                </a>
              </li>
              <li>
                <a
                  href="#accessibility"
                  onClick={(e) => e.preventDefault()}
                  className="hover:underline transition-colors"
                >
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  onClick={(e) => e.preventDefault()}
                  className="hover:underline transition-colors"
                >
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee note */}
        <div className="pt-6 border-t-[3.5px] border-[#121212] flex flex-col sm:flex-row items-center justify-between gap-4 font-body font-bold text-xs text-[#121212] text-center sm:text-left">
          <div>© {new Date().getFullYear()} Quokka Academy Inc. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-[#FF85A1] fill-[#FF85A1] inline mx-0.5" />{" "}
            for young learners worldwide.
          </div>
        </div>
      </div>
    </footer>
  );
};

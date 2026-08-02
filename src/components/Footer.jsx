import React, { useState } from 'react';
import { ShieldCheck, Lock, Award, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { playPopSound } from '../utils/audio';

const FAQS = [
  {
    q: "How does the free 20-minute trial lesson work?",
    a: "Your trial lesson is 100% free with no credit card required! A certified native teacher connects 1-on-1 with your child on Zoom/Web browser, introduces Pip the Quokka games, assesses your child's speaking level, and provides a customized learning plan."
  },
  {
    q: "What equipment do we need for live classes?",
    a: "All you need is an iPad, tablet, laptop, or desktop computer with a working webcam, microphone, and stable internet connection. No special software installation needed."
  },
  {
    q: "Can we request a specific teacher or switch teachers later?",
    a: "Yes! You can choose your preferred fixed teacher or switch teachers anytime with 1 click in your parent dashboard."
  },
  {
    q: "What ages is Quokka Academy suitable for?",
    a: "Our curriculum is tailored specifically for kids aged 4 to 12, spanning beginner phonics up to advanced public speaking & academic debate."
  }
];

export const Footer = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    playPopSound(500, 'sine');
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="bg-[#121212] text-white pt-16 pb-12 border-t-[4px] border-[#121212]">
      <div className="container space-y-12">
        
        {/* Parent FAQs Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="neo-badge bg-[#FFDE59] text-[#121212]">
              ❓ FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              Got Questions? We've Got Answers!
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#FFFDF6] text-[#121212] border-[3px] border-white rounded-2xl shadow-[4px_4px_0px_#FF9F1C] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 font-black text-sm md:text-base text-left flex items-center justify-between gap-3 hover:bg-[#FFDE59] transition-all"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} strokeWidth={3} /> : <ChevronDown size={20} strokeWidth={3} />}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-1 font-bold text-xs md:text-sm text-[#444] border-t-[2px] border-[#121212] bg-white leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Accreditation & Safety Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-4 bg-[#FF9F1C] text-[#121212] border-[3px] border-white rounded-2xl shadow-[4px_4px_0px_#FFFDF6] flex items-center gap-3">
            <ShieldCheck size={28} className="shrink-0" strokeWidth={2.5} />
            <div>
              <h4 className="font-black text-sm">Child Safety First</h4>
              <p className="font-bold text-xs">100% Monitored & Encrypted Live Classrooms</p>
            </div>
          </div>
          <div className="p-4 bg-[#2EC4B6] text-[#121212] border-[3px] border-white rounded-2xl shadow-[4px_4px_0px_#FFFDF6] flex items-center gap-3">
            <Award size={28} className="shrink-0" strokeWidth={2.5} />
            <div>
              <h4 className="font-black text-sm">TESOL Accredited</h4>
              <p className="font-bold text-xs">Certified University Native Educators</p>
            </div>
          </div>
          <div className="p-4 bg-[#A594F9] text-[#121212] border-[3px] border-white rounded-2xl shadow-[4px_4px_0px_#FFFDF6] flex items-center gap-3">
            <Lock size={28} className="shrink-0" strokeWidth={2.5} />
            <div>
              <h4 className="font-black text-sm">Instant Cancellation</h4>
              <p className="font-bold text-xs">Cancel anytime with 1 click • Zero Hassle</p>
            </div>
          </div>
        </div>

        {/* Footer Main Links & Brand */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF9F1C] border-[2.5px] border-white rounded-xl flex items-center justify-center text-xl shadow-[3px_3px_0px_#FFDE59]">
              🦘
            </div>
            <div>
              <span className="font-['Outfit'] font-black text-xl tracking-tight text-white">
                QUOKKA ACADEMY
              </span>
              <p className="text-xs font-bold text-gray-400">
                Where Kids Fall in Love with Learning
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-black text-xs text-gray-300">
            <a href="#teachers" className="hover:text-[#FFDE59] transition-all">Certified Teachers</a>
            <a href="#curriculum" className="hover:text-[#2EC4B6] transition-all">Curriculum</a>
            <a href="#reviews" className="hover:text-[#A594F9] transition-all">Parent Reviews</a>
            <a href="#pricing" className="hover:text-[#FF85A1] transition-all">Pricing Plans</a>
          </div>

          <button
            onClick={() => {
              playPopSound(600, 'sine');
              onOpenBooking();
            }}
            className="neo-btn-primary px-5 py-2.5 font-black text-xs border-[2.5px] border-white rounded-xl"
          >
            Book Free Trial Lesson
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center font-bold text-xs text-gray-500 pt-4">
          © {new Date().getFullYear()} Quokka Academy Inc. All rights reserved. Made with ❤️ for young learners worldwide.
        </div>

      </div>
    </footer>
  );
};

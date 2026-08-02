import React, { useState } from 'react';
import { Check, Sparkles, Shield, Gift, Zap } from 'lucide-react';
import { playPopSound } from '../utils/audio';

export const Pricing = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'pack'

  const handleToggleCycle = (cycle) => {
    playPopSound(500, 'sine');
    setBillingCycle(cycle);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#FFDE59] border-b-[3.5px] border-[#121212] relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-10 left-10 hidden lg:block rotate-[-12deg] pointer-events-none">
        {/* Simple Solid Rectangle Shape Accent */}
        <div className="w-14 h-14 bg-[#FFFDF6] border-[3.5px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212]"></div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block rotate-[-15deg] pointer-events-none">
        {/* Custom Melon Slice / Macaroni Arc Accent (From User Image) */}
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[5px_5px_0px_#121212]">
          <path d="M 18 82 A 45 45 0 0 1 82 18 L 65 35 A 22 22 0 0 0 35 65 Z" fill="#2EC4B6" stroke="#121212" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="container space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-black text-xs uppercase tracking-wider">
            <Zap size={15} className="text-[#FF9F1C]" />
            NO HIDDEN FEES • FLEXIBLE PLANS
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight leading-tight">
            Transparent Pricing for <br />
            <span className="bg-[#FFFDF6] px-3.5 py-1 border-[3.5px] border-[#121212] rounded-xl shadow-[5px_5px_0px_#121212] inline-block rotate-[1deg] mt-1">
              Every Budget
            </span>
          </h2>

          <p className="font-bold text-base md:text-lg text-[#121212] pt-2 leading-relaxed">
            Start with a 100% Free 20-Minute Trial Lesson. No credit card required. Cancel anytime with 1 click.
          </p>
        </div>

        {/* Billing Switcher Toggle */}
        <div className="flex items-center justify-center gap-3">
          <div className="p-1.5 bg-white border-[3.5px] border-[#121212] rounded-2xl shadow-[4px_4px_0px_#121212] flex items-center gap-2">
            <button
              onClick={() => handleToggleCycle('monthly')}
              className={`px-5 py-2 rounded-xl font-black text-sm transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#FF9F1C] text-[#121212] border-[2px] border-[#121212] shadow-[2px_2px_0px_#121212]'
                  : 'text-[#121212] hover:bg-[#FFFDF6]'
              }`}
            >
              Monthly Subscription
            </button>
            <button
              onClick={() => handleToggleCycle('pack')}
              className={`px-5 py-2 rounded-xl font-black text-sm transition-all flex items-center gap-1.5 ${
                billingCycle === 'pack'
                  ? 'bg-[#2EC4B6] text-[#121212] border-[2px] border-[#121212] shadow-[2px_2px_0px_#121212]'
                  : 'text-[#121212] hover:bg-[#FFFDF6]'
              }`}
            >
              <span>12-Lesson Saver Pack</span>
              <span className="text-xs font-black bg-[#FF85A1] px-1.5 py-0.5 border-[1px] border-[#121212] rounded">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch pt-2">
          
          {/* Card 1: Free Trial */}
          <div className="neo-card p-6 bg-white border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-black bg-[#FFFDF6] px-2.5 py-0.5 border-[1.5px] border-[#121212] rounded-md uppercase">
                  Zero Risk
                </span>
                <h3 className="font-black text-2xl text-[#121212]">
                  Free Trial Class
                </h3>
                <p className="text-xs font-bold text-[#555]">
                  Experience a 1-on-1 live lesson with a native teacher.
                </p>
              </div>

              <div className="py-2 border-y-[2.5px] border-[#121212]">
                <span className="font-black text-4xl text-[#121212]">$0</span>
                <span className="font-bold text-xs text-[#666] ml-2">/ 20-Min Lesson</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-[#333]">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#2EC4B6]" strokeWidth={3} />
                  1-on-1 Live Class with Native Teacher
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#2EC4B6]" strokeWidth={3} />
                  Pip the Quokka Mascot Interactive Games
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#2EC4B6]" strokeWidth={3} />
                  Full Kid English Level Assessment Report
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#2EC4B6]" strokeWidth={3} />
                  No Credit Card Required
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playPopSound(600, 'triangle');
                onOpenBooking('4-6');
              }}
              className="w-full neo-btn-secondary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl text-center shadow-[3px_3px_0px_#121212]"
            >
              Book Free Trial Now
            </button>
          </div>

          {/* Card 2: Explorer (POPULAR) */}
          <div className="neo-card p-6 bg-[#FFFDF6] border-[4px] border-[#121212] shadow-[8px_8px_0px_#121212] rounded-3xl flex flex-col justify-between space-y-6 relative translate-y-[-4px]">
            {/* Popular Ribbon Tag */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9F1C] text-[#121212] font-black text-xs px-4 py-1 border-[2.5px] border-[#121212] rounded-full shadow-[2px_2px_0px_#121212] uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={14} />
              MOST POPULAR
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-black bg-[#2EC4B6] px-2.5 py-0.5 border-[1.5px] border-[#121212] rounded-md uppercase">
                  Weekly Practice
                </span>
                <h3 className="font-black text-2xl text-[#121212]">
                  Explorer Plan
                </h3>
                <p className="text-xs font-bold text-[#555]">
                  Perfect steady momentum for consistent progress.
                </p>
              </div>

              <div className="py-2 border-y-[2.5px] border-[#121212]">
                <span className="font-black text-4xl text-[#121212]">
                  {billingCycle === 'monthly' ? '$79' : '$63'}
                </span>
                <span className="font-bold text-xs text-[#666] ml-2">/ month (4 Lessons)</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-[#333]">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#FF9F1C]" strokeWidth={3} />
                  4 Live 1-on-1 Classes / Month
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#FF9F1C]" strokeWidth={3} />
                  Choice of Dedicated Fixed Teacher
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#FF9F1C]" strokeWidth={3} />
                  Weekly Homework & Voice Note Feedback
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#FF9F1C]" strokeWidth={3} />
                  Quokka Academy App & Games Access
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playPopSound(650, 'triangle');
                onOpenBooking('4-6');
              }}
              className="w-full neo-btn-primary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl text-center shadow-[4px_4px_0px_#121212]"
            >
              Get Started with Explorer
            </button>
          </div>

          {/* Card 3: VIP Academy */}
          <div className="neo-card p-6 bg-white border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-black bg-[#A594F9] px-2.5 py-0.5 border-[1.5px] border-[#121212] rounded-md uppercase">
                  Fast-Track Fluency
                </span>
                <h3 className="font-black text-2xl text-[#121212]">
                  Academy VIP
                </h3>
                <p className="text-xs font-bold text-[#555]">
                  Accelerated fluency with 2 lessons weekly & bonus gift.
                </p>
              </div>

              <div className="py-2 border-y-[2.5px] border-[#121212]">
                <span className="font-black text-4xl text-[#121212]">
                  {billingCycle === 'monthly' ? '$149' : '$119'}
                </span>
                <span className="font-bold text-xs text-[#666] ml-2">/ month (8 Lessons)</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-[#333]">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#A594F9]" strokeWidth={3} />
                  8 Live 1-on-1 Classes / Month
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#A594F9]" strokeWidth={3} />
                  Priority Teacher Scheduling
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#A594F9]" strokeWidth={3} />
                  Includes Public Speaking & Writing Modules
                </li>
                <li className="flex items-center gap-2">
                  <Gift size={16} className="text-[#FF85A1]" strokeWidth={3} />
                  FREE Pip the Quokka Plushie Welcome Box! 🎁
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playPopSound(600, 'triangle');
                onOpenBooking('4-6');
              }}
              className="w-full neo-btn-mint py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl text-center shadow-[3px_3px_0px_#121212]"
            >
              Choose Academy VIP
            </button>
          </div>

        </div>

        {/* Guarantee Banner */}
        <div className="max-w-2xl mx-auto p-4 bg-white border-[3.5px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212] flex items-center justify-center gap-3 text-center">
          <Shield size={24} className="text-[#2EC4B6] shrink-0" strokeWidth={2.5} />
          <p className="font-black text-xs md:text-sm text-[#121212]">
            100% Happiness Guarantee: If your child isn't completely delighted after their trial, cancel anytime with 1 click.
          </p>
        </div>

      </div>
    </section>
  );
};

import { useState } from "react";
import { Shield, Tag } from "lucide-react";
import { playPopSound } from "../utils/audio";
import { CustomCheckIcon } from "../assets/icons/CustomCheckIcon";
import { PopularAchievementSeal } from "../assets/icons/PopularAchievementSeal";

export const Pricing = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleToggleCycle = (cycle) => {
    playPopSound(500, "sine");
    setBillingCycle(cycle);
  };

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-[#E6F8F2] border-b-[3.5px] border-[#121212] relative overflow-hidden"
    >
      <div className="container space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-black text-xs uppercase tracking-wider">
            <Tag size={16} fill="#FF9F1C" stroke="#121212" strokeWidth={2} className="shrink-0" />
            <span>NO HIDDEN FEES</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#121212] text-pretty tracking-tight leading-tight">
            Flexible Plans for <br /> Growing Learners
          </h2>

          <p className="font-bold text-base md:text-lg text-[#121212] pt-2 leading-relaxed">
            Start with 1 Free Trial Session. Pip the Quokka. Cancel anytime.
          </p>
        </div>

        {/* Billing Switcher Toggle */}
        <div className="flex items-center justify-center gap-3">
          <div className="p-1.5 bg-white border-[3.5px] border-[#121212] rounded-2xl shadow-[4px_4px_0px_#121212] flex items-center gap-2">
            <button
              onClick={() => handleToggleCycle("monthly")}
              className={`px-5 py-2 rounded-xl font-black text-sm transition-all border-[2px] ${
                billingCycle === "monthly"
                  ? "bg-[#FFDE59] text-[#121212] border-[#121212] shadow-[2px_2px_0px_#121212]"
                  : "bg-transparent text-[#121212] border-transparent shadow-[2px_2px_0px_transparent] hover:bg-[#FFFDF6]"
              }`}
            >
              Monthly Subscription
            </button>
            <button
              onClick={() => handleToggleCycle("yearly")}
              className={`px-5 py-2 rounded-xl font-black text-sm transition-all flex items-center gap-1.5 border-[2px] ${
                billingCycle === "yearly"
                  ? "bg-[#FF85A1] text-[#121212] border-[#121212] shadow-[2px_2px_0px_#121212]"
                  : "bg-transparent text-[#121212] border-transparent shadow-[2px_2px_0px_transparent] hover:bg-[#FFFDF6]"
              }`}
            >
              <span>Yearly Subscription</span>
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 border-[1.5px] border-[#121212] rounded transition-all ${
                  billingCycle === "yearly" ? "bg-[#FFDE59]" : "bg-[#FF85A1]"
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto items-stretch pt-2">
          {/* Card 1: Free Trial */}
          <div className="neo-card p-6 bg-white border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-black text-2xl text-[#121212]">Free Trial</h3>
                <p className="text-xs font-bold text-[#555]">
                  Experience a 1-on-1 live lesson with a certified teacher.
                </p>
              </div>

              <div className="py-2 border-y-[2.5px] border-[#121212]">
                <span className="font-black text-4xl text-[#121212]">$0</span>
                <span className="font-bold text-xs text-[#666] ml-2">/ 1 Session</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-[#333]">
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  1-on-1 Live Class with Certified Teacher
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Pip the Quokka Mascot Interactive Games
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Full Kid English Level Assessment Report
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Pip the Quokka
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playPopSound(600, "triangle");
                onOpenBooking("4-6");
              }}
              className="relative w-full neo-btn-secondary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl text-center shadow-[3px_3px_0px_#121212] overflow-hidden select-none"
            >
              {/* Background Decorative Shapes (Spaced out across Left, Middle, Right) */}
              <div className="absolute -top-2 left-2 w-6 h-6 bg-[#FFDE59] border-[2px] border-[#121212] rounded-lg shadow-[1.5px_1.5px_0px_#121212] -rotate-12 select-none pointer-events-none" />
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-10 h-5 bg-[#A594F9] border-[2px] border-[#121212] rounded-full shadow-[1.5px_1.5px_0px_#121212] rotate-6 select-none pointer-events-none" />
              <div className="absolute -top-2 right-2 w-7 h-7 bg-[#2EC4B6] border-[2px] border-[#121212] rounded-full shadow-[1.5px_1.5px_0px_#121212] -rotate-45 select-none pointer-events-none" />

              <span className="relative z-10">Subscribe to Free Trial</span>
            </button>
          </div>

          {/* Card 2: Scholar Plan (POPULAR) */}
          <div className="neo-card p-6 bg-[#FFFDF6] border-[4px] border-[#121212] shadow-[8px_8px_0px_#121212] rounded-3xl flex flex-col justify-between space-y-6 relative translate-y-[-4px]">
            {/* Popular Achievement Seal */}
            <div className="absolute -top-7 right-2 z-20 pointer-events-none">
              <PopularAchievementSeal size={54} />
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <h3 className="font-black text-2xl text-[#121212]">Scholar Plan</h3>
                <p className="text-xs font-bold text-[#555]">
                  Perfect steady momentum for consistent progress.
                </p>
              </div>

              <div className="py-2 border-y-[2.5px] border-[#121212]">
                <span className="font-black text-4xl text-[#121212]">
                  {billingCycle === "monthly" ? "$79" : "$63"}
                </span>
                <span className="font-bold text-xs text-[#666] ml-2">/ month (4 Lessons)</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-[#333]">
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />4 Live 1-on-1 Classes / Month
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Choice of Dedicated Fixed Teacher
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Weekly Homework & Voice Note Feedback
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Quokka Academy App & Games Access
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playPopSound(650, "triangle");
                onOpenBooking("4-6");
              }}
              className="relative w-full neo-btn-primary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl text-center shadow-[4px_4px_0px_#121212] overflow-hidden select-none"
            >
              {/* Background Decorative Shapes (Spaced out across Left, Middle, Right) */}
              <div className="absolute -bottom-2 left-2.5 w-7 h-7 bg-[#2EC4B6] border-[2px] border-[#121212] rounded-lg shadow-[1.5px_1.5px_0px_#121212] rotate-12 select-none pointer-events-none" />
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-5 bg-[#FFDE59] border-[2px] border-[#121212] rounded-full shadow-[1.5px_1.5px_0px_#121212] -rotate-6 select-none pointer-events-none" />
              <div className="absolute -bottom-2 right-2.5 w-6.5 h-6.5 bg-[#FF85A1] border-[2px] border-[#121212] rounded-full shadow-[1.5px_1.5px_0px_#121212] rotate-45 select-none pointer-events-none" />

              <span className="relative z-10">Subscribe to Scholar Plan</span>
            </button>
          </div>

          {/* Card 3: VIP Academy */}
          <div className="neo-card p-6 bg-white border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-black text-2xl text-[#121212]">Academy VIP</h3>
                <p className="text-xs font-bold text-[#555]">
                  Accelerated fluency with 2 lessons weekly.
                </p>
              </div>

              <div className="py-2 border-y-[2.5px] border-[#121212]">
                <span className="font-black text-4xl text-[#121212]">
                  {billingCycle === "monthly" ? "$149" : "$119"}
                </span>
                <span className="font-bold text-xs text-[#666] ml-2">/ month (8 Lessons)</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-[#333]">
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Includes everything in Scholar Plan
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />8 Live 1-on-1 Classes / Month
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Priority Teacher Scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CustomCheckIcon color="#121212" />
                  Includes Public Speaking & Writing Modules
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playPopSound(600, "triangle");
                onOpenBooking("4-6");
              }}
              className="relative w-full neo-btn-mint py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl text-center shadow-[3px_3px_0px_#121212] overflow-hidden select-none"
            >
              {/* Background Decorative Shapes (Spaced out across Left, Middle, Right) */}
              <div className="absolute -top-2 left-2.5 w-7 h-7 bg-[#FF9F1C] border-[2px] border-[#121212] rounded-lg shadow-[1.5px_1.5px_0px_#121212] -rotate-12 select-none pointer-events-none" />
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-10 h-5 bg-[#FFDE59] border-[2px] border-[#121212] rounded-full shadow-[1.5px_1.5px_0px_#121212] rotate-6 select-none pointer-events-none" />
              <div className="absolute -top-2 right-2.5 w-6.5 h-6.5 bg-[#A594F9] border-[2px] border-[#121212] rounded-full shadow-[1.5px_1.5px_0px_#121212] -rotate-45 select-none pointer-events-none" />

              <span className="relative z-10">Subscribe to Academy VIP</span>
            </button>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-5xl w-fit mx-auto px-6 py-4 bg-white border-[3.5px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212] flex items-center justify-center gap-3 text-center">
          <Shield
            size={24}
            fill="#4361EE"
            stroke="#121212"
            strokeWidth={2}
            className="shrink-0 text-[#4361EE]"
          />
          <p className="font-black text-xs md:text-sm text-[#121212]">
            100% Happiness Guarantee: Cancel anytime with 1 click.
          </p>
        </div>
      </div>
    </section>
  );
};

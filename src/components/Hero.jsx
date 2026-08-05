import { Award } from "lucide-react";
import { QuokkaMascot } from "./QuokkaMascot";
import { playPopSound } from "../utils/audio";
import { ArrowRightIcon } from "../assets/icons/ArrowRightIcon";
import { CheckCircleIcon } from "../assets/icons/CheckCircleIcon";

export const Hero = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="bg-[#FFFDF6] border-b-[3.5px] border-[#121212] relative overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Viewport Stage: Header (72px) + Main Stage = 100dvh */}
      <div className="min-h-[calc(100dvh-72px)] flex flex-col justify-center relative z-10 py-8 md:py-12">
        {/* Main Hero Grid Content */}
        <div className="container relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Top Badges, Headline, Description & CTA */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Top Trust Badges (Consolidated Eyebrow) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="bg-[#2EC4B6] border-[2.5px] border-[#121212] px-3.5 py-1.5 rounded-full shadow-[2.5px_2.5px_0px_#121212] text-xs sm:text-sm font-black text-[#121212] flex items-center gap-1.5 uppercase tracking-wide">
                  <CheckCircleIcon size={16} color="#121212" fill="#FFFDF6" />
                  100% CERTIFIED PROFESSIONAL EDUCATORS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl uppercase font-black text-[#121212] tracking-tight leading-[1.08]">
                Learning English Made{" "}
                <span className="inline-block bg-[#5bd14b] px-4 py-1 border-[3.5px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212] rotate-[5deg] my-1">
                  Joyful
                </span>
                <br className="hidden sm:inline" />
              </h1>

              {/* Description (Plain text Pip the Quokka) */}
              <p className="text-lg md:text-xl font-bold text-[#1e1e1e] max-w-xl leading-relaxed text-pretty mx-auto lg:mx-0">
                Interactive live classes for young children. Guided by certified professional
                educators and our cheerful mascot Pip the Quokka to build natural speaking
                confidence.
              </p>

              {/* Primary Action CTA */}
              <div className="pt-2 w-full flex justify-center lg:justify-start">
                <button
                  onClick={() => {
                    playPopSound(650, "triangle");
                    onOpenBooking("4-6");
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg md:text-xl font-black bg-[#FF9F1C] hover:bg-[#FF8C00] text-[#121212] px-9 py-4.5 rounded-2xl border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#121212] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#121212] transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-[#FF9F1C]/40"
                >
                  <span>Book Free Trial</span>
                  <ArrowRightIcon size={24} color="#121212" className="rotate-45 transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Pip Mascot Stage */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative my-auto pt-6 lg:pt-0">
              <div className="relative flex justify-center items-center w-full">
                {/* Introduction Speech Bubble (Centered) */}
                <div className="absolute -top-7 md:-top-4 lg:-top-2 left-1/2 -translate-x-1/2 bg-[#F5F2E8] border-[3.5px] border-[#121212] rounded-[22px] px-6 py-4 shadow-[5px_5px_0px_#121212] max-w-none whitespace-nowrap z-30">
                  <p className="font-['Outfit'] font-black text-lg sm:text-xl md:text-2xl text-[#121212] leading-none text-center">
                    G'day! I'm Pip, your learning buddy!
                  </p>
                  {/* Speech Bubble Arrow centered pointing straight down to Pip */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[12px] border-t-[#121212]"></div>
                  <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] border-t-[#F5F2E8]"></div>
                </div>

                {/* Overlapping Left Badge (Higher Up) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 bg-[#FFDE59] border-[3px] border-[#121212] px-5 py-2 rounded-full text-sm sm:text-base md:text-lg font-black text-[#121212] z-20 rotate-0 transform-none shadow-[3.5px_3.5px_0px_#121212] flex items-center gap-1.5 whitespace-nowrap">
                  PIP THE QUOKKA
                </div>

                {/* Mascot Component */}
                <QuokkaMascot
                  className="w-[320px] sm:w-[420px] md:w-[480px] lg:w-[530px] xl:w-[580px] max-w-full"
                  size="100%"
                  showSpeechBubble={false}
                  interactive={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation Continuous Marquee Loop Bar */}
      <div className="w-full bg-[#121212] border-t-[3.5px] border-[#121212] py-3.5 overflow-hidden text-white shrink-0">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {/* Loop Set 1 */}
          <div className="flex items-center gap-8 shrink-0">
            <span className="text-[#FFDE59] uppercase tracking-widest font-black text-xs md:text-sm flex items-center gap-2">
              <Award size={18} className="text-[#FF9F1C]" fill="#FF9F1C" />
              GLOBAL ACCREDITATION STANDARDS:
            </span>
            <div className="bg-[#FF9F1C] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              TESOL Certified Educators
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#A594F9] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              Cambridge English Prep
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#2EC4B6] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              Oxford ESL Curriculum
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#FF85A1] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              CEFR Global Aligned
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#FFDE59] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              1-on-1 & Small Group Live Classes
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
          </div>

          {/* Loop Set 2 (Identical Duplicate for Smooth Infinite Scroll) */}
          <div className="flex items-center gap-8 shrink-0">
            <span className="text-[#FFDE59] uppercase tracking-widest font-black text-xs md:text-sm flex items-center gap-2">
              <Award size={18} className="text-[#FF9F1C]" fill="#FF9F1C" />
              GLOBAL ACCREDITATION STANDARDS:
            </span>
            <div className="bg-[#FF9F1C] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              TESOL Certified Educators
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#A594F9] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              Cambridge English Prep
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#2EC4B6] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              Oxford ESL Curriculum
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#FF85A1] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              CEFR Global Aligned
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
            <div className="bg-[#FFDE59] text-[#121212] px-3.5 py-1.5 rounded-xl border-[2px] border-[#121212] font-black text-xs md:text-sm uppercase tracking-wide">
              1-on-1 & Small Group Live Classes
            </div>
            <span className="text-[#FFDE59] font-black">★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

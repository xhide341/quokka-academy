import { ShieldCheck, ArrowRight, CheckCircle2, Award, Sparkles, Star } from 'lucide-react';
import { QuokkaMascot } from './QuokkaMascot';
import { playPopSound } from '../utils/audio';

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Top Badges, Headline, Description & CTA */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              
              {/* Top Trust Badges (Consolidated Eyebrow) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#2EC4B6] border-[2.5px] border-[#121212] px-3.5 py-1.5 rounded-full shadow-[2.5px_2.5px_0px_#121212] text-xs sm:text-sm font-black text-[#121212] flex items-center gap-1.5 uppercase tracking-wide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M20.0001 12.0007C20.0001 17.4557 13.6811 21.0337 12.0001 21.8897C10.3171 21.0367 4.00012 17.4697 4.00012 12.0007V6.88367C4.00018 6.25395 4.1984 5.64021 4.56669 5.12941C4.93498 4.61861 5.45467 4.23666 6.05212 4.03767L12.0001 2.05467L17.9481 4.03767C18.5456 4.23666 19.0653 4.61861 19.4336 5.12941C19.8018 5.64021 20.0001 6.25395 20.0001 6.88367V12.0007Z" fill="#FFFDF6" />
                    <path d="M18.5811 2.14067L12.3161 0.0516681C12.111 -0.016653 11.8893 -0.016653 11.6841 0.0516681L5.41912 2.14067C4.42303 2.47155 3.55654 3.10793 2.94277 3.95938C2.329 4.81083 1.99916 5.83406 2.00012 6.88367V12.0007C2.00012 19.5637 11.2001 23.7407 11.5941 23.9147C11.7219 23.9715 11.8603 24.0008 12.0001 24.0008C12.14 24.0008 12.2783 23.9715 12.4061 23.9147C12.8001 23.7407 22.0001 19.5637 22.0001 12.0007V6.88367C22.0011 5.83406 21.6713 4.81083 21.0575 3.95938C20.4437 3.10793 19.5772 2.47155 18.5811 2.14067ZM20.0001 12.0007C20.0001 17.4557 13.6811 21.0337 12.0001 21.8897C10.3171 21.0367 4.00012 17.4697 4.00012 12.0007V6.88367C4.00018 6.25395 4.1984 5.64021 4.56669 5.12941C4.93498 4.61861 5.45467 4.23666 6.05212 4.03767L12.0001 2.05467L17.9481 4.03767C18.5456 4.23666 19.0653 4.61861 19.4336 5.12941C19.8018 5.64021 20.0001 6.25395 20.0001 6.88367V12.0007Z" fill="#121212" />
                    <g transform="translate(-1.2, -1.1) scale(1.1)">
                      <path d="M15.2999 8.30032L11.1119 12.5003L8.86792 10.1603C8.77786 10.0619 8.66901 9.98242 8.54778 9.92667C8.42654 9.87092 8.29538 9.84001 8.16201 9.83573C8.02864 9.83146 7.89577 9.85393 7.77122 9.9018C7.64667 9.94968 7.53296 10.022 7.43679 10.1145C7.34062 10.207 7.26393 10.3178 7.21125 10.4404C7.15856 10.563 7.13095 10.6949 7.13003 10.8283C7.12911 10.9618 7.1549 11.094 7.20589 11.2173C7.25688 11.3407 7.33203 11.4525 7.42692 11.5463L9.73291 13.9463C9.90489 14.1321 10.1128 14.281 10.3439 14.3842C10.5751 14.4873 10.8248 14.5425 11.0779 14.5463H11.1109C11.359 14.5472 11.6047 14.4987 11.8339 14.4038C12.0631 14.3088 12.2711 14.1693 12.4459 13.9933L16.7179 9.72132C16.8112 9.62822 16.8853 9.51764 16.9358 9.39592C16.9864 9.27419 17.0125 9.14369 17.0127 9.01188C17.0128 8.88007 16.987 8.74952 16.9367 8.62769C16.8863 8.50585 16.8125 8.39512 16.7194 8.30182C16.6263 8.20852 15.5157 8.13446 16.394 8.08389C16.2723 8.03332 16.1418 8.00722 16.01 8.00708C15.8782 8.00694 15.7476 8.03277 15.6258 8.08308C15.5039 8.13339 15.3932 8.20721 15.2999 8.30032Z" fill="#121212" />
                    </g>
                  </svg>
                  100% CERTIFIED PROFESSIONAL EDUCATORS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl uppercase  font-black text-[#121212] tracking-tight leading-[1.08]">
                Learning English Made{' '}
                <span className="inline-block bg-[#5bd14b] px-4 py-1 border-[3.5px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212] rotate-[5deg] my-1">
                  Joyful
                </span><br className="hidden sm:inline" />
                
              </h1>

              {/* Description (Plain text Pip the Quokka) */}
              <p className="text-lg md:text-xl font-bold text-[#1e1e1e] max-w-xl leading-relaxed text-pretty">
                Interactive live classes for young children. Guided by certified professional educators and our cheerful mascot Pip the Quokka to build natural speaking confidence.
              </p>

              {/* Primary Action CTA */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    playPopSound(650, 'triangle');
                    onOpenBooking('4-6');
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg md:text-xl font-black bg-[#FF9F1C] hover:bg-[#FF8C00] text-[#121212] px-9 py-4.5 rounded-2xl border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#121212] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#121212] transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-[#FF9F1C]/40"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <g clipPath="url(#clip0_403_3164_hero_book)">
                      <rect x="0" y="2" width="24" height="22" rx="5" fill="#FFFDF6" />
                      <path d="M19 2H18V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1V2H8V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1V2H5C3.67441 2.00159 2.40356 2.52888 1.46622 3.46622C0.528882 4.40356 0.00158786 5.67441 0 7L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V7C23.9984 5.67441 23.4711 4.40356 22.5338 3.46622C21.5964 2.52888 20.3256 2.00159 19 2ZM2 7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V8H2V7ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V10H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22Z" fill="#374957"/>
                      <path d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z" fill="#374957"/>
                      <path d="M6.99982 16.5C7.82824 16.5 8.49982 15.8284 8.49982 15C8.49982 14.1716 7.82824 13.5 6.99982 13.5C6.17139 13.5 5.49982 14.1716 5.49982 15C5.49982 15.8284 6.17139 16.5 6.99982 16.5Z" fill="#374957"/>
                      <path d="M17.0001 16.5C17.8285 16.5 18.5001 15.8284 18.5001 15C18.5001 14.1716 17.8285 13.5 17.0001 13.5C16.1717 13.5 15.5001 14.1716 15.5001 15C15.5001 15.8284 16.1717 16.5 17.0001 16.5Z" fill="#374957"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_403_3164_hero_book">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Book Free 20-Min Trial</span>
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>
              </div>

            </div>

            {/* Right Column: Pip Mascot Stage */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative my-auto">
              <div className="relative flex justify-center items-center w-full">
                {/* Introduction Speech Bubble (Centered) */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5F2E8] border-[3.5px] border-[#121212] rounded-[20px] px-5 py-3.5 shadow-[4.5px_4.5px_0px_#121212] max-w-none whitespace-nowrap z-30">
                  <p className="font-['Outfit'] font-black text-base sm:text-lg md:text-xl text-[#121212] leading-none text-center">
                    G'day! I'm Pip, your learning buddy!
                  </p>
                  {/* Speech Bubble Arrow centered pointing straight down to Pip */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[12px] border-t-[#121212]"></div>
                  <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] border-t-[#F5F2E8]"></div>
                </div>

                {/* Overlapping Right Credit Card Required Badge (Proportionate 2.5px Shadow) */}
                <div className="absolute bottom-10 right-0 sm:right-4 md:right-8 lg:right-2 bg-[#FFDE59] border-[2.5px] border-[#121212] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black text-[#121212] z-20 rotate-0 transform-none shadow-[2.5px_2.5px_0px_#121212] flex items-center gap-1.5 whitespace-nowrap">
                  <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <circle cx="14" cy="14" r="12.5" stroke="#121212" strokeWidth="2.5" fill="#FFFDF6"/>
                    <g transform="translate(2, 2)">
                      <path d="M9.33282 15.919L5.41382 12C5.22629 11.8126 4.97198 11.7073 4.70682 11.7073C4.44165 11.7073 4.18735 11.8126 3.99982 12C3.81235 12.1876 3.70703 12.4419 3.70703 12.707C3.70703 12.9722 3.81235 13.2265 3.99982 13.414L7.91882 17.333C8.10455 17.5188 8.32506 17.6662 8.56776 17.7668C8.81047 17.8674 9.07061 17.9191 9.33332 17.9191C9.59603 17.9191 9.85617 17.8674 10.0989 17.7668C10.3416 17.6662 10.5621 17.5188 10.7478 17.333L19.9998 8.08105C20.1873 7.89352 20.2926 7.63922 20.2926 7.37405C20.2926 7.10889 20.1873 6.85458 19.9998 6.66705C19.8123 6.47958 19.558 6.37427 19.2928 6.37427C19.0277 6.37427 18.7733 6.47958 18.5858 6.66705L9.33282 15.919Z" fill="#121212"/>
                    </g>
                  </svg>
                  NO CREDIT CARD REQUIRED
                </div>

                {/* Pointer Cursor pointing to mascot (Top Right) */}
                <div className="absolute top-10 -right-2 sm:-right-6 lg:-right-6 z-20 pointer-events-none">
                  <svg 
                    width="42" 
                    height="42" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[-78deg]"
                  >
                    <path 
                      d="M4 4L13.5 27.5L18.2 18.2L27.5 13.5L4 4Z" 
                      fill="#36749A" 
                      stroke="#121212" 
                      strokeWidth="2.8" 
                      strokeLinejoin="round" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Pointer Cursor pointing to mascot (Bottom Left) */}
                <div className="absolute bottom-12 left-3 z-20 pointer-events-none">
                  <svg 
                    width="42" 
                    height="42" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[95deg]"
                  >
                    <path 
                      d="M4 4L13.5 27.5L18.2 18.2L27.5 13.5L4 4Z" 
                      fill="#A594F9" 
                      stroke="#121212" 
                      strokeWidth="2.8" 
                      strokeLinejoin="round" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Mascot Component */}
                <QuokkaMascot 
                  className="w-[260px] sm:w-[330px] md:w-[380px] lg:w-[430px] xl:w-[450px] max-w-full"
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
              <Award size={18} className="text-[#FF9F1C]" />
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
              <Award size={18} className="text-[#FF9F1C]" />
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






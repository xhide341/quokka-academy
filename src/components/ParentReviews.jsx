import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    studentName: "Lucas (Age 6)",
    location: "California, USA",
    rating: 5,
    tag: "Little Explorers",
    review:
      "Lucas used to be so shy when asked to speak English. After just 4 weeks with Teacher Sarah and Pip the Quokka, he asks for English storytime every night! The 1-on-1 attention is unmatched.",
  },
  {
    id: 2,
    studentName: "Maya (Age 9)",
    location: "London, UK",
    rating: 5,
    tag: "Junior Scholars",
    review:
      "The STEM English curriculum is brilliant. Maya learns about space and ocean life while improving her grammar seamlessly. Her teacher gives immediate, encouraging feedback!",
  },
  {
    id: 3,
    studentName: "Ethan (Age 11)",
    location: "Singapore",
    rating: 5,
    tag: "Master Communicators",
    review:
      "Quokka Academy prepared Ethan for his international school interview and debate club. Teacher Emma helped him structure arguments and speak with natural poise.",
  },
  {
    id: 4,
    studentName: "Chloe (Age 5)",
    location: "Sydney, Australia",
    rating: 5,
    tag: "Little Explorers",
    review:
      "Chloe was reluctant with online classes until Pip popped up! Now she looks forward to class every Tuesday and Thursday. Her pronunciation has improved dramatically.",
  },
  {
    id: 5,
    studentName: "Kenji (Age 8)",
    location: "Tokyo, Japan",
    rating: 5,
    tag: "Junior Scholars",
    review:
      "Kenji used to freeze when speaking English. Now he confidently orders food and talks about his favorite video games in full, clear English sentences!",
  },
];

const _TRACK_COLORS = {
  "Little Explorers": "bg-[#FFDE59]",
  "Junior Scholars": "bg-[#2EC4B6]",
  "Master Communicators": "bg-[#A594F9]",
};

const TRACK_CARD_BG = {
  "Little Explorers": "#FFFDF0",
  "Junior Scholars": "#F0FBFA",
  "Master Communicators": "#F5F3FF",
};

const TRACK_ACCENT_COLOR = {
  "Little Explorers": "#FFDE59",
  "Junior Scholars": "#2EC4B6",
  "Master Communicators": "#A594F9",
};

export const ParentReviews = () => {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-[#F6EEFF] border-b-[3.5px] border-[#121212] relative overflow-hidden"
    >
      <div className="container space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-black text-xs uppercase tracking-wider text-[#121212]">
            <Star
              size={16}
              fill="#FF9F1C"
              stroke="#121212"
              strokeWidth={1.5}
              className="shrink-0"
            />
            <span>4.9 / 5 OVERALL RATING</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight leading-tight">
            Loved and Adored by Kids!
          </h2>

          <p className="font-bold text-base md:text-lg text-[#333] leading-relaxed max-w-[65ch] mx-auto">
            Over 15,000 parents trust Quokka Academy to give their children English fluency and
            lifelong learning confidence.
          </p>
        </div>

        {/* Reviews Cards Section: 1 Big Featured Card + 4 Small Cards (2x2 Grid) */}
        {(() => {
          const featured = REVIEWS[0];
          const smalls = REVIEWS.slice(1, 5);
          const featuredBg = TRACK_CARD_BG[featured.tag] || "#FFFDF0";
          const featuredAccent = TRACK_ACCENT_COLOR[featured.tag] || "#FFDE59";

          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2 pb-4">
              {/* Left Column: Key Metrics Counter Strip (3 Compact Circles) + Featured Big Card */}
              <div className="lg:col-span-5 flex flex-col justify-end mt-auto space-y-6">
                {/* Key Metrics Counter Strip (3 Compact Circles) */}
                <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full mx-auto">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#FFDE59] border-[3px] border-[#121212] shadow-[4px_4px_0px_#121212] rounded-full flex flex-col items-center justify-center p-2 text-center select-none shrink-0">
                    <div className="font-black text-base sm:text-lg text-[#121212]">15,000+</div>
                    <div className="font-extrabold text-[9px] sm:text-[10px] text-[#121212] leading-tight mt-0.5 uppercase tracking-wide max-w-[80px]">
                      Active Students Worldwide
                    </div>
                  </div>
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#2EC4B6] border-[3px] border-[#121212] shadow-[4px_4px_0px_#121212] rounded-full flex flex-col items-center justify-center p-2 text-center select-none shrink-0">
                    <div className="font-black text-base sm:text-lg text-[#121212]">98.4%</div>
                    <div className="font-extrabold text-[9px] sm:text-[10px] text-[#121212] leading-tight mt-0.5 uppercase tracking-wide max-w-[80px]">
                      Student Retention Rate
                    </div>
                  </div>
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#A594F9] border-[3px] border-[#121212] shadow-[4px_4px_0px_#121212] rounded-full flex flex-col items-center justify-center p-2 text-center select-none shrink-0">
                    <div className="font-black text-base sm:text-lg text-[#121212]">4.9 / 5</div>
                    <div className="font-extrabold text-[9px] sm:text-[10px] text-[#121212] leading-tight mt-0.5 uppercase tracking-wide max-w-[80px]">
                      Average Review Score
                    </div>
                  </div>
                </div>

                <div
                  className="relative p-6 sm:p-7 border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] rounded-[24px] flex flex-col justify-between space-y-4"
                  style={{ backgroundColor: featuredBg }}
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="bg-[#FFDE59] text-[#121212] border-[2px] border-[#121212] px-3.5 py-1 rounded-full font-heading font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#121212]">
                        Featured Parent Story
                      </span>
                      <Quote
                        size={24}
                        fill={featuredAccent}
                        stroke="#121212"
                        strokeWidth={2}
                        className="shrink-0"
                      />
                    </div>

                    <div className="flex items-center text-[#FF9F1C] gap-1">
                      {[...Array(featured.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#FF9F1C" stroke="#121212" strokeWidth={2} />
                      ))}
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-[#121212] leading-relaxed italic">
                      "{featured.review}"
                    </p>
                  </div>

                  <div className="pt-3.5 border-t-[2.5px] border-[#121212]/15 flex items-center justify-between relative z-10">
                    <div>
                      <div className="font-heading font-black text-base text-[#121212]">
                        {featured.studentName}
                      </div>
                      <div className="font-body font-bold text-xs text-[#555]">
                        {featured.location}
                      </div>
                    </div>
                    <span className="bg-white border-[2px] border-[#121212] px-3 py-1 rounded-full text-xs font-heading font-black shadow-[2px_2px_0px_#121212]">
                      {featured.tag}
                    </span>
                  </div>

                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-[18px] left-10 pointer-events-none z-20">
                    <svg
                      width="26"
                      height="18"
                      viewBox="0 0 26 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 0 -3 L 8 15 L 24 -3"
                        fill={featuredBg}
                        stroke="#121212"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 4 Smaller Cards (2x2 Grid) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {smalls.map((item) => {
                  const cardBg = TRACK_CARD_BG[item.tag] || "#FFFDF6";
                  const accentColor = TRACK_ACCENT_COLOR[item.tag] || "#FFDE59";

                  return (
                    <div
                      key={item.id}
                      className="relative p-5 border-[3.5px] border-[#121212] shadow-[5px_5px_0px_#121212] rounded-[22px] flex flex-col justify-between space-y-4"
                      style={{ backgroundColor: cardBg }}
                    >
                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center text-[#FF9F1C] gap-0.5">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill="#FF9F1C"
                                stroke="#121212"
                                strokeWidth={2}
                              />
                            ))}
                          </div>
                          <Quote
                            size={20}
                            fill={accentColor}
                            stroke="#121212"
                            strokeWidth={2}
                            className="shrink-0"
                          />
                        </div>

                        <p className="font-body text-xs sm:text-sm text-[#1e1e1e] leading-relaxed italic">
                          "{item.review}"
                        </p>
                      </div>

                      <div className="pt-3 border-t-[2px] border-[#121212]/15 flex items-center justify-between text-xs relative z-10">
                        <div className="font-heading font-black text-xs md:text-sm text-[#121212]">
                          {item.studentName}
                        </div>
                        <div className="font-body font-bold text-[11px] text-[#555]">
                          {item.location}
                        </div>
                      </div>

                      {/* Speech Bubble Tail */}
                      <div className="absolute -bottom-[16px] left-8 pointer-events-none z-20">
                        <svg
                          width="24"
                          height="16"
                          viewBox="0 0 26 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M 0 -3 L 8 15 L 24 -3"
                            fill={cardBg}
                            stroke="#121212"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

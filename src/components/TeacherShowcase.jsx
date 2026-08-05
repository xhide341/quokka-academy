import React, { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { playPopSound } from "../utils/audio";
import { GraduationCapIcon } from "../assets/icons/GraduationCapIcon";

const TEACHERS_DATA = [
  {
    id: 1,
    name: "Teacher Sarah Miller",
    countryName: "USA",
    role: "Head of ESL & Phonics",
    rating: 5.0,
    pipBadge: "Pip's Star Teacher ⭐",
    pipBadgeBg: "bg-[#FFDE59]",
    rotation: "-rotate-3",
    degree: "Master of Education in Elementary Ed & TEFL",
    motto: "Building confidence through phonics games & songs",
    tags: ["Phonics", "Blending", "Decoding"],
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    accentColor: "#FFDE59",
    cardBg: "#FFFDF0",
  },
  {
    id: 2,
    name: "Teacher David Chen",
    countryName: "Canada",
    role: "STEM & Science English",
    rating: 4.98,
    pipBadge: "Pip's Science Buddy 🔬",
    pipBadgeBg: "bg-[#2EC4B6]",
    rotation: "rotate-3",
    degree: "Bachelor of Arts in Linguistics & TESOL",
    motto: "Hands-on STEM experiments meets English discovery",
    tags: ["Science", "Experiments", "STEM"],
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    accentColor: "#2EC4B6",
    cardBg: "#F0FBFA",
  },
  {
    id: 3,
    name: "Teacher Emma Watson",
    countryName: "UK",
    role: "Public Speaking & Debate",
    rating: 5.0,
    pipBadge: "Master Storyteller 📚",
    pipBadgeBg: "bg-[#A594F9]",
    rotation: "-rotate-2",
    degree: "Bachelor of Arts in English Literature (Cambridge)",
    motto: "Persuasive speaking & Cambridge exam prep",
    tags: ["Conversation", "Presentation", "Debate"],
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    accentColor: "#A594F9",
    cardBg: "#F5F3FF",
  },
  {
    id: 4,
    name: "Teacher Liam Wilson",
    countryName: "Australia",
    role: "Interactive Reading & Vocab",
    rating: 4.96,
    pipBadge: "Pip's Aussie Mate 🦘",
    pipBadgeBg: "bg-[#FF9F1C]",
    rotation: "rotate-4",
    degree: "Bachelor of Education in Early Childhood",
    motto: "Interactive Aussie storybooks & pronunciation",
    tags: ["Reading", "Vocabulary", "Pronunciation"],
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    accentColor: "#FF9F1C",
    cardBg: "#FFF7ED",
  },
  {
    id: 5,
    name: "Teacher Maria Garcia",
    countryName: "USA",
    role: "Early Childhood Songs & Games",
    rating: 4.99,
    pipBadge: "Music & Rhymes 🎵",
    pipBadgeBg: "bg-[#FF85A1]",
    rotation: "-rotate-4",
    degree: "Master of Arts in Early Childhood Education",
    motto: "Puppets, music & rhymes for early learners",
    tags: ["Songs", "Rhymes", "Games"],
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    accentColor: "#FF85A1",
    cardBg: "#FFF1F2",
  },
  {
    id: 6,
    name: "Teacher James Taylor",
    countryName: "UK",
    role: "Logic & Math in English",
    rating: 4.97,
    pipBadge: "Math Explorer 🧮",
    pipBadgeBg: "bg-[#2EC4B6]",
    rotation: "rotate-2",
    degree: "Bachelor of Science in Mathematics & TEFL",
    motto: "Logic puzzles & problem-solving in English",
    tags: ["Reasoning", "Puzzles", "Numbers"],
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    accentColor: "#2EC4B6",
    cardBg: "#F0FBFA",
  },
];

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.15;
const MAX_VISIBLE = 2;
const DEPTH = 240;

export const TeacherShowcase = ({ onOpenBooking }) => {
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(380);
  const [cardHeight, setCardHeight] = useState(490);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const lockRef = useRef(false);

  const n = TEACHERS_DATA.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(290);
        setCardHeight(450);
      } else if (window.innerWidth < 1024) {
        setCardWidth(330);
        setCardHeight(460);
      } else {
        setCardWidth(360);
        setCardHeight(470);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 600);
  }, []);

  const step = useCallback(
    (dir) => {
      if (lockRef.current) return;
      lock();
      playPopSound(dir > 0 ? 620 : 520, "sine");
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock],
  );

  const handleCardClick = useCallback(
    (i) => {
      if (lockRef.current) return;
      if (i !== active) {
        lock();
        playPopSound(580, "sine");
        setActive(i);
      }
    },
    [active, lock],
  );

  const handleDotClick = (i) => {
    if (lockRef.current || i === active) return;
    lock();
    playPopSound(580, "sine");
    setActive(i);
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step],
  );

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      step(1);
    } else if (distance < -50) {
      step(-1);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      id="teachers"
      className="py-16 md:py-24 bg-[#E8F4FD] border-b-[3.5px] border-[#121212] relative overflow-hidden"
    >
      <div className="container space-y-8 relative z-10 overflow-hidden">
        {/* Section Header & Coverflow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-[2.5px] border-[#121212] rounded-full shadow-[2.5px_2.5px_0px_#121212] font-black text-xs uppercase tracking-wider text-[#121212]">
              <GraduationCapIcon size={16} color="#121212" fill="#FFDE59" />
              <span>100% CERTIFIED PROFESSIONAL TEACHERS</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight leading-tight">
              Meet Our Star Educators
            </h2>
            <p className="font-body font-bold text-base md:text-lg text-[#121212] leading-relaxed text-pretty">
              Get to know our dedicated teachers, their teaching specialties, and the unique
              strengths they bring to every lesson.
            </p>
          </div>

          {/* Coverflow Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => step(-1)}
              aria-label="Previous teacher"
              className="w-12 h-12 bg-white hover:bg-[#FFDE59] text-[#121212] border-[3px] border-[#121212] rounded-2xl shadow-[3.5px_3.5px_0px_#121212] flex items-center justify-center transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212]"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next teacher"
              className="w-12 h-12 bg-[#FFDE59] hover:bg-[#ff9f1c] text-[#121212] border-[3px] border-[#121212] rounded-2xl shadow-[3.5px_3.5px_0px_#121212] flex items-center justify-center transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212]"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Originkit 3D Coverflow Container */}
        <div
          className="relative w-full h-130 md:h-135 flex items-center justify-center overflow-hidden focus:outline-none py-4"
          style={{ perspective: `${PERSPECTIVE}px` }}
          tabIndex={0}
          role="group"
          aria-label="3D Teacher Coverflow Gallery"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative"
            style={{
              width: cardWidth,
              height: cardHeight,
              transformStyle: "preserve-3d",
            }}
          >
            {TEACHERS_DATA.map((teacher, i) => {
              let rel = i - active;
              if (rel > n / 2) rel -= n;
              if (rel < -n / 2) rel += n;

              const ax = Math.abs(rel);
              const visible = ax <= MAX_VISIBLE;
              const isActive = rel === 0;
              const sc = Math.max(0.4, 1 - ax * SCALE_STEP);

              const gapParam = 7.5;
              const tx = rel * (gapParam * 30);
              const tz = -ax * DEPTH;
              const tilt = 15;
              const sideTilt = 5;
              const ry = -rel * tilt;
              const rz = rel * sideTilt;

              const cardStyle = {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: cardWidth,
                height: cardHeight,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
                transition:
                  "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                opacity: visible ? 1 : 0,
                cursor: isActive ? "default" : "pointer",
                pointerEvents: visible ? "auto" : "none",
                zIndex: 10 - ax,
              };

              return (
                <div
                  key={teacher.id}
                  style={cardStyle}
                  onClick={() => handleCardClick(i)}
                  aria-label={teacher.name}
                >
                  <div
                    className={`neo-card p-4 md:p-5 flex flex-col justify-between space-y-2.5 border-[3.5px] border-[#121212] rounded-2xl shadow-[5px_5px_0px_#121212] relative h-full select-none ${isActive ? "" : "hover:brightness-95"}`}
                    style={{ backgroundColor: teacher.cardBg || "#FFFDF6" }}
                  >
                    {/* Top Image Frame */}
                    <div className="relative">
                      {/* Pinned Country Badge breaking out of image */}
                      <div className="absolute -top-3 -left-2 bg-white text-[#121212] font-black text-xs px-2.5 py-1 border-[2.5px] border-[#121212] rounded-full shadow-[2.5px_2.5px_0px_#121212] flex items-center gap-1.5 z-20">
                        <span
                          className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#121212] shrink-0 inline-block"
                          style={{ backgroundColor: teacher.accentColor }}
                        />
                        <span>{teacher.countryName}</span>
                      </div>

                      <div className="relative rounded-xl overflow-hidden border-[3px] border-[#121212] aspect-4/3 bg-[#F9F7F1] shadow-[inset_0_0_0_3px_rgba(18,18,18,0.15),inset_0_8px_20px_rgba(0,0,0,0.12)]">
                        <img
                          src={teacher.avatar}
                          alt={teacher.name}
                          className="w-full h-full object-cover pointer-events-none"
                          draggable={false}
                        />
                      </div>

                      {/* Dual Award Ribbon Tails attached outside bottom image border */}
                      <div className="absolute top-0 right-4 flex items-start gap-1 z-20 pointer-events-none mt-px">
                        {/* Left Ribbon Tail (Shorter) */}
                        <svg
                          width="18"
                          height="22"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M 2 0 L 16 0 L 16 20 L 9 15 L 2 20 Z"
                            fill={teacher.accentColor}
                            stroke="#121212"
                            strokeWidth="2"
                            strokeLinejoin="miter"
                          />
                        </svg>

                        {/* Right Ribbon Tail (Longer) */}
                        <svg
                          width="20"
                          height="28"
                          viewBox="0 0 20 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M 2 0 L 18 0 L 18 26 L 10 20 L 2 26 Z"
                            fill={teacher.accentColor}
                            stroke="#121212"
                            strokeWidth="2"
                            strokeLinejoin="miter"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Card Content Header */}
                    <div className="space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1.5">
                          <div>
                            <h3 className="font-black text-base md:text-lg text-[#121212] leading-tight">
                              {teacher.name}
                            </h3>
                            <p className="font-bold text-xs text-[#555] mt-0.5">{teacher.role}</p>
                          </div>
                          {/* Rating Badge in Sunshine Yellow */}
                          <div
                            className="text-[#121212] font-black text-xs px-2.5 py-0.5 border-2 border-[#121212] rounded-lg shadow-[1.5px_1.5px_0px_#121212] flex items-center gap-1 shrink-0 mt-0.5"
                            style={{ backgroundColor: teacher.accentColor }}
                          >
                            <Star size={12} fill="#FFDE59" stroke="#121212" strokeWidth={1.5} />
                            <span>{teacher.rating.toFixed(2)}</span>
                          </div>
                        </div>

                        {/* Verified Credential / Achievement Tag */}
                        <div className="mt-2 flex items-start gap-1 px-3 py-2 bg-[#FFFDF6] border-[1.5px] border-[#121212] rounded-lg shadow-[1.5px_1.5px_0px_#121212] text-sm font-black text-[#121212]">
                          <Award
                            size={18}
                            className="text-[#FF9F1C] shrink-0"
                            fill="#FF9F1C"
                            stroke="#121212"
                            strokeWidth={2}
                          />
                          <span className="leading-snug">{teacher.degree}</span>
                        </div>

                        {/* Subject / Skill Tags */}
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {teacher.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs uppercase font-black bg-[#FFFDF6] text-[#121212] px-2 py-0.5 rounded-md border-[1.5px] border-[#121212] shadow-[1.5px_1.5px_0px_#121212]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action CTA */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playPopSound(650, "triangle");
                        onOpenBooking();
                      }}
                      className="w-full py-2.5 bg-[#FFDE59] hover:bg-[#ff9f1c] text-[#121212] font-black text-xs uppercase tracking-wide text-center border-[2.5px] border-[#121212] rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all"
                    >
                      <span>Reserve Class</span>
                    </button>

                    {/* Semi-transparent Dim Overlay for non-active 3D cards */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-[#FFFDF6]/40 rounded-2xl pointer-events-none transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coverflow Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {TEACHERS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all ${
                active === idx
                  ? "w-8 h-3 bg-[#121212] border-2 border-[#121212] rounded-full shadow-[2px_2px_0px_#A594F9]"
                  : "w-3 h-3 bg-white border-2 border-[#121212] rounded-full hover:bg-[#FFDE59]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

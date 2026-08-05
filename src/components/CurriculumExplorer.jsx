import React, { useState } from "react";
import { Sparkles, Clock3, CalendarDays, Timer } from "lucide-react";
import { playPopSound } from "../utils/audio";
import { BookIcon } from "../assets/icons/BookIcon";

const CURRICULUM_TRACKS = [
  {
    id: "explorers",
    level: "Ages 4 - 6",
    title: "Little Explorers",
    badge: "Beginner • Phonics & Play",
    badgeBg: "bg-[#FF9F1C]",
    summary:
      "Play-infused first steps in English built around songs, stories, and guided speaking.",
    stats: [
      { label: "Duration", value: "8 weeks" },
      { label: "Weekly time", value: "~1.5 hrs" },
      { label: "Session length", value: "30 min" },
    ],
    modules: [
      {
        name: "Phonics & Alphabet Magic",
        detail: "Master 26 letter sounds and blend simple consonant-vowel patterns.",
      },
      {
        name: "Daily Vocabulary & Songs",
        detail: "Build everyday words through music, repetition, and picture prompts.",
      },
      {
        name: "Interactive Story Time",
        detail: "Follow Pip through short stories and answer with simple phrases.",
      },
    ],
    outcomes: [
      "26 Phonics Sounds",
      "First 100 Words",
      "Simple Spoken Answers",
      "Classroom Basics",
      "Listening Confidence",
    ],
    parentNotes: [
      "If your child is taking their first steps in English, this track gives them the perfect mix of playful discovery and warm 1-on-1 structure. You'll receive quick, fun at-home prompts after each session, watching your child naturally build listening confidence and ask for English storytime without any pressure.",
    ],
  },
  {
    id: "scholars",
    level: "Ages 7 - 9",
    title: "Junior Scholars",
    badge: "Intermediate • Reading & Grammar",
    badgeBg: "bg-[#2EC4B6]",
    summary:
      "Balanced reading and speaking work for children who are ready to move into full sentences and short stories.",
    stats: [
      { label: "Duration", value: "10 weeks" },
      { label: "Weekly time", value: "~2.25 hrs" },
      { label: "Session length", value: "45 min" },
    ],
    modules: [
      {
        name: "Full Sentence Speaking",
        detail: "Move from single words into clear grammar patterns and complete answers.",
      },
      {
        name: "Guided Reading & Comprehension",
        detail: "Read illustrated storybooks and discuss the main idea with a teacher.",
      },
      {
        name: "STEM & World Explorer",
        detail: "Learn English while exploring animals, space, geography, and science.",
      },
    ],
    outcomes: [
      "Full Sentences",
      "Short Story Reading",
      "Grammar Confidence",
      "Vocabulary Expansion",
    ],
    parentNotes: [
      "If your child already knows basic classroom English, this track helps them leap into full, confident sentences. You'll notice steady progress as our certified teachers gently guide them through guided storybooks and STEM topics, building natural grammar fluency and classroom confidence.",
    ],
  },
  {
    id: "communicators",
    level: "Ages 10 - 12",
    title: "Master Communicators",
    badge: "Advanced • Debate & Writing",
    badgeBg: "bg-[#A594F9]",
    summary:
      "Advanced work for fluent speaking, structured writing, presentation skills, and school or exam preparation.",
    stats: [
      { label: "Duration", value: "12 weeks" },
      { label: "Weekly time", value: "~2 hrs" },
      { label: "Session length", value: "60 min" },
    ],
    modules: [
      {
        name: "Public Speaking & Presentation",
        detail: "Prepare and deliver short speeches on topics children care about.",
      },
      {
        name: "Creative Writing & Essay Structuring",
        detail: "Write structured paragraphs, stories, and opinion pieces with clarity.",
      },
      {
        name: "Critical Thinking & Debate",
        detail: "Discuss global topics, defend a point of view, and respond thoughtfully.",
      },
    ],
    outcomes: [
      "Debate & Reasoning",
      "Structured Writing",
      "Presentation Poise",
      "Critical Thinking",
      "Academic Expression",
    ],
    parentNotes: [
      "Designed for confident young speakers ready to express big ideas, this track equips your child with real public speaking poise, structured essay writing, and thoughtful debate skills. It's ideal if you're preparing your child for international school interviews or academic speech exams.",
    ],
  },
];

const getStatTheme = (label) => {
  const l = label.toLowerCase();
  if (l.includes("duration")) {
    return { icon: CalendarDays, bg: "bg-[#FFDE59]", labelTag: "DURATION" };
  }
  if (l.includes("time")) {
    return { icon: Clock3, bg: "bg-[#2EC4B6]", labelTag: "WEEKLY PACE" };
  }
  if (l.includes("session")) {
    return { icon: Timer, bg: "bg-[#FF85A1]", labelTag: "CLASS LENGTH" };
  }
  return { icon: Sparkles, bg: "bg-[#FF9F1C]", labelTag: "METRIC" };
};

export const CurriculumExplorer = ({ onOpenBooking }) => {
  const [activeTrackId, setActiveTrackId] = useState("explorers");

  const activeTrack = CURRICULUM_TRACKS.find((t) => t.id === activeTrackId);

  const handleTrackChange = (id) => {
    playPopSound(500, "sine");
    setActiveTrackId(id);
  };

  return (
    <section
      id="curriculum"
      className="py-16 md:py-24 bg-[#FFF0E5] border-b-[3.5px] border-[#121212] relative overflow-hidden"
    >
      <div className="container space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-black text-xs uppercase tracking-wider text-[#121212]">
            <BookIcon size={16} color="#121212" fill="#FFDE59" />
            EXPLORE OUR AGE TRACKS
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight leading-tight">
            Curriculum at a Glance
          </h2>

          <p className="font-bold text-base md:text-lg text-[#121212] leading-relaxed max-w-2xl mx-auto text-pretty">
            Compare the three age bands and understand the learning outcomes before booking your
            trial lesson.
          </p>
        </div>

        {/* Main Curriculum Explorer Stage Card */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Age Tracks Selector (Outside Poster, Left Aligned) */}
          <div
            className="flex flex-wrap items-center gap-3 mb-4 relative z-30 justify-start"
            role="tablist"
            aria-label="Curriculum Age Tracks"
          >
            {CURRICULUM_TRACKS.map((track) => {
              const isActive = activeTrackId === track.id;

              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTrackChange(track.id)}
                  className={`inline-flex items-center justify-center rounded-2xl border-[2.5px] border-[#121212] px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wide transition-all duration-150 cursor-pointer select-none ${track.badgeBg} text-[#121212] ${
                    isActive
                      ? "shadow-[4px_4px_0px_#121212] translate-y-[-2px] opacity-100"
                      : "shadow-[2px_2px_0px_#121212] opacity-80 hover:opacity-100 hover:shadow-[3.5px_3.5px_0px_#121212] hover:translate-y-[-1px]"
                  }`}
                >
                  <span>{track.level}</span>
                </button>
              );
            })}
          </div>

          <div className="neo-card p-8 sm:p-10 md:p-12 lg:p-14 bg-white border-[3.5px] border-[#121212] shadow-[8px_8px_0px_#121212] rounded-4xl space-y-8 relative">
            {/* Corner 3D Pushpins */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-5 left-6 w-4.5 h-4.5 rounded-full bg-[#FFDE59] border-[2px] border-[#121212] shadow-[2px_2px_0px_#121212] overflow-hidden">
                <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/90" />
              </div>
              <div className="absolute top-5 right-6 w-4.5 h-4.5 rounded-full bg-[#2EC4B6] border-[2px] border-[#121212] shadow-[2px_2px_0px_#121212] overflow-hidden">
                <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/90" />
              </div>
              <div className="absolute bottom-0 left-6 w-4.5 h-4.5 rounded-full bg-[#FF85A1] border-[2px] border-[#121212] shadow-[2px_2px_0px_#121212] overflow-hidden">
                <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/90" />
              </div>
              <div className="absolute bottom-0 right-6 w-4.5 h-4.5 rounded-full bg-[#A594F9] border-[2px] border-[#121212] shadow-[2px_2px_0px_#121212] overflow-hidden">
                <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/90" />
              </div>
            </div>

            {/* Active Track Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start !mt-0 !mb-0">
              {/* Left Column: Track Info, Stats, Modules & Outcomes */}
              <div className="lg:col-span-7 space-y-6">
                {/* Header & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#121212] tracking-tight">
                    {activeTrack.title}
                  </h3>
                  <p className="font-bold text-base text-[#333] leading-relaxed max-w-[65ch]">
                    {activeTrack.summary}
                  </p>
                </div>

                {/* Stats Card Grid */}
                <div className="grid gap-3.5 sm:grid-cols-3">
                  {activeTrack.stats.map((stat) => {
                    const theme = getStatTheme(stat.label);
                    const IconComponent = theme.icon;
                    return (
                      <div
                        key={stat.label}
                        className="relative rounded-xl bg-[#FFFDF6] p-2.5 border-[2px] border-dashed border-[#121212] flex items-center gap-2.5 overflow-hidden"
                      >
                        <div
                          className={`${theme.bg} p-1.5 rounded-lg border-[1.5px] border-[#121212] text-[#121212] shrink-0`}
                        >
                          <IconComponent size={16} strokeWidth={2.5} />
                        </div>

                        <div className="min-w-0">
                          <div className="text-[10px] font-extrabold uppercase tracking-wide text-[#555] truncate">
                            {stat.label}
                          </div>
                          <div className="text-sm font-black text-[#121212] tracking-tight leading-tight truncate">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Included Core Modules */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm uppercase text-[#121212] tracking-wider">
                    Included Core Modules:
                  </h4>
                  <div className="space-y-3">
                    {activeTrack.modules.map((m) => (
                      <div key={m.name} className="space-y-0.5">
                        <h5 className="font-black text-base text-[#121212]">{m.name}</h5>
                        <p className="text-sm font-medium text-[#555] leading-relaxed max-w-[62ch]">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes (Visible on screens smaller than LG) */}
                <div className="space-y-3 lg:hidden">
                  <h4 className="font-black text-sm uppercase text-[#121212] tracking-wider">
                    Learning Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTrack.outcomes.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 bg-[#FFFDF6] text-[#121212] border-[2px] border-[#121212] rounded-xl shadow-[2.5px_2.5px_0px_#121212] font-black text-sm uppercase tracking-wider"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Parent Notes & Booking CTA */}
              <div className="lg:col-span-5 space-y-6 lg:pl-2 relative z-10">
                {/* What Parents Should Expect */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm uppercase text-[#121212] tracking-wider">
                    What Parents Should Expect:
                  </h4>
                  <p className="text-sm font-medium text-[#555] leading-relaxed max-w-[62ch]">
                    {activeTrack.parentNotes.join(" ")}
                  </p>
                </div>

                {/* Primary CTA Button */}
                <button
                  onClick={() => {
                    playPopSound(650, "triangle");
                    onOpenBooking(activeTrack.id);
                  }}
                  className="relative w-full text-base sm:text-lg font-black bg-[#FF9F1C] hover:bg-[#FF8C00] text-[#121212] px-6 py-4 rounded-2xl border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#121212] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#121212] transition-all duration-150 flex items-center justify-center gap-2.5 focus:outline-none overflow-hidden select-none"
                >
                  {/* Background Decorative Asymmetrical Shapes (Inside button only, 100% opacity, solid neo-brutalist style matching footer) */}
                  <div className="absolute -top-3.5 -left-3.5 w-10 h-10 bg-[#FFDE59] border-[2.5px] border-[#121212] rounded-2xl shadow-[2.5px_2.5px_0px_#121212] -rotate-12 select-none pointer-events-none" />
                  <div className="absolute -bottom-4 right-10 w-16 h-8 bg-[#A594F9] border-[2.5px] border-[#121212] rounded-full shadow-[2.5px_2.5px_0px_#121212] -rotate-6 select-none pointer-events-none" />
                  <div className="absolute -top-3.5 -right-3.5 w-9 h-9 bg-[#2EC4B6] border-[2.5px] border-[#121212] rounded-full shadow-[2.5px_2.5px_0px_#121212] rotate-45 select-none pointer-events-none" />

                  <span className="relative z-10">Book Free Trial</span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 rotate-45 transform relative z-10"
                  >
                    <path
                      d="M18.0001 11.9999C17.9952 11.4738 17.7832 10.9708 17.4101 10.5999L13.1201 6.29995C12.9327 6.1137 12.6792 6.00916 12.4151 6.00916C12.1509 6.00916 11.8974 6.1137 11.7101 6.29995C11.6163 6.39291 11.5419 6.50351 11.4912 6.62537C11.4404 6.74723 11.4143 6.87794 11.4143 7.00995C11.4143 7.14196 11.4404 7.27266 11.4912 7.39452C11.5419 7.51638 11.6163 7.62698 11.7101 7.71995L15.0001 10.9999H5.00006C4.73484 10.9999 4.48049 11.1053 4.29295 11.2928C4.10542 11.4804 4.00006 11.7347 4.00006 11.9999C4.00006 12.2652 4.10542 12.5195 4.29295 12.707C4.48049 12.8946 4.73484 12.9999 5.00006 12.9999H15.0001L11.7101 16.2899C11.5218 16.4769 11.4154 16.731 11.4145 16.9964C11.4136 17.2618 11.5181 17.5166 11.7051 17.7049C11.892 17.8932 12.1462 17.9996 12.4115 18.0005C12.6769 18.0014 12.9318 17.8969 13.1201 17.7099L17.4101 13.4099C17.7856 13.0366 17.9978 12.5295 18.0001 11.9999Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Poster Footer: Learning Outcomes (Visible on LG size and up) */}
            <div className="hidden lg:block pt-6 border-t-[2.5px] border-[#121212] space-y-3">
              <h4 className="font-black text-sm uppercase tracking-wider text-[#121212]">
                Key Learning Outcomes
              </h4>
              <div className="flex flex-wrap items-center gap-2.5">
                {activeTrack.outcomes.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-1.5 bg-[#FFFDF6] text-[#121212] border-[2px] border-[#121212] rounded-xl shadow-[2px_2px_0px_#121212] font-black text-sm uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

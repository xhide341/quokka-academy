import React from 'react';
import { Star, CheckCircle, Heart, ThumbsUp } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    parentName: 'Jennifer & Lucas (Age 6)',
    location: '🇺🇸 California, USA',
    rating: 5,
    tag: 'Little Explorers',
    review: 'Lucas used to be so shy when asked to speak English. After just 4 weeks with Teacher Sarah and Pip the Quokka, he asks for English storytime every night! The 1-on-1 attention is unmatched.',
    metric: 'Increased vocabulary by 120+ words in 1 month'
  },
  {
    id: 2,
    parentName: 'Marcus & Maya (Age 9)',
    location: '🇬🇧 London, UK',
    rating: 5,
    tag: 'Junior Scholars',
    review: 'The STEM English curriculum is brilliant. Maya learns about space and ocean life while improving her grammar seamlessly. Her teacher gives immediate, encouraging feedback!',
    metric: 'Improved school speaking grade to A+'
  },
  {
    id: 3,
    parentName: 'Sophia & Ethan (Age 11)',
    location: '🇸🇬 Singapore',
    rating: 5,
    tag: 'Master Communicators',
    review: 'Quokka Academy prepared Ethan for his international school interview and debate club. Teacher Emma helped him structure arguments and speak with natural poise.',
    metric: 'Passed international academy speech exam'
  }
];

export const ParentReviews = ({ onOpenBooking }) => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FFFDF6] border-b-[3.5px] border-[#121212] relative overflow-hidden">
      {/* Varied Organic Background Decorative Shapes */}
      <div className="absolute top-10 right-10 hidden lg:block rotate-[-10deg] pointer-events-none">
        {/* Solid Pebble Cloud Blob */}
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[4px_4px_0px_#121212]">
          <path d="M 30 10 C 60 0, 90 15, 95 45 C 100 75, 75 95, 45 90 C 15 85, 0 65, 5 35 C 10 15, 15 15, 30 10 Z" fill="#FF85A1" stroke="#121212" strokeWidth="4" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 hidden lg:block rotate-6 pointer-events-none">
        {/* Solid Arch Tunnel Portal Accent */}
        <svg width="60" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[3.5px_3.5px_0px_#121212]">
          <path d="M 15 90 L 15 45 C 15 15, 85 15, 85 45 L 85 90 L 60 90 L 60 50 C 60 35, 40 35, 40 50 L 40 90 Z" fill="#FFDE59" stroke="#121212" strokeWidth="4" />
        </svg>
      </div>

      <div className="container space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#A594F9] border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-black text-xs uppercase tracking-wider">
            <Heart size={15} fill="#121212" />
            REAL PARENT TESTIMONIALS
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight leading-tight">
            Loved by Parents & <br />
            <span className="bg-[#FF9F1C] px-3.5 py-1 border-[3.5px] border-[#121212] rounded-xl shadow-[5px_5px_0px_#121212] inline-block rotate-[-1deg] mt-1">
              Adored by Kids!
            </span>
          </h2>

          <p className="font-bold text-base md:text-lg text-[#333] pt-2 leading-relaxed">
            Over 15,000 parents trust Quokka Academy to give their children native English fluency and lifelong learning confidence.
          </p>
        </div>

        {/* Stats Metrics Counter Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 bg-[#FFDE59] border-[3.5px] border-[#121212] shadow-[5px_5px_0px_#121212] rounded-2xl text-center">
            <div className="font-black text-4xl text-[#121212]">15,000+</div>
            <div className="font-extrabold text-sm text-[#121212] mt-1">Active Students Worldwide</div>
          </div>
          <div className="p-5 bg-[#2EC4B6] border-[3.5px] border-[#121212] shadow-[5px_5px_0px_#121212] rounded-2xl text-center">
            <div className="font-black text-4xl text-[#121212]">98.4%</div>
            <div className="font-extrabold text-sm text-[#121212] mt-1">Parent Retention Rate</div>
          </div>
          <div className="p-5 bg-[#A594F9] border-[3.5px] border-[#121212] shadow-[5px_5px_0px_#121212] rounded-2xl text-center">
            <div className="font-black text-4xl text-[#121212]">4.9 / 5</div>
            <div className="font-extrabold text-sm text-[#121212] mt-1">Average Review Score</div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(item => (
            <div
              key={item.id}
              className="neo-card p-6 bg-white border-[3.5px] border-[#121212] shadow-[6px_6px_0px_#121212] rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#FF9F1C] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#FF9F1C" stroke="#121212" strokeWidth={2} />
                    ))}
                  </div>
                  <span className="text-xs font-black bg-[#FFFDF6] px-2 py-0.5 border-[1.5px] border-[#121212] rounded-md shadow-[1px_1px_0px_#121212]">
                    {item.tag}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="font-bold text-sm text-[#333] leading-relaxed italic">
                  "{item.review}"
                </p>

                {/* Achievement Metric Pill */}
                <div className="p-2.5 bg-[#FFFDF6] border-[2px] border-[#121212] rounded-xl flex items-center gap-2 shadow-[2px_2px_0px_#121212]">
                  <ThumbsUp size={15} className="text-[#2EC4B6] shrink-0" strokeWidth={3} />
                  <span className="font-black text-xs text-[#121212]">
                    {item.metric}
                  </span>
                </div>
              </div>

              {/* Parent Info */}
              <div className="pt-3 border-t-[2px] border-[#121212] flex items-center justify-between text-xs">
                <div>
                  <div className="font-black text-sm text-[#121212]">
                    {item.parentName}
                  </div>
                  <div className="font-bold text-[#666]">
                    {item.location}
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-black text-[#2EC4B6]">
                  <CheckCircle size={14} strokeWidth={3} />
                  Verified Parent
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

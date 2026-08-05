import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { playPopSound } from "../utils/audio";
import { FaqHelpIcon } from "../assets/icons/FaqHelpIcon";

const FAQS = [
  {
    q: "How does the 100% free trial lesson work?",
    a: "Your trial lesson is completely free with Pip the Quokka! A certified native educator connects 1-on-1 with your child in a safe, monitored digital classroom. They will meet Pip the Quokka, explore interactive games, assess your child's English speaking level, and present a custom learning plan.",
  },
  {
    q: "What devices and equipment do we need?",
    a: "All you need is an iPad, tablet, laptop, or desktop computer with a working webcam, microphone, and internet connection. No downloads or complex software setup required — everything runs seamlessly in your web browser!",
  },
  {
    q: "Can we pick our preferred teacher or switch later?",
    a: "Absolutely! You can choose your child's fixed dedicated teacher based on their video introductions and specialties. If your scheduling needs change, you can switch teachers anytime with 1 click from your parent dashboard.",
  },
  {
    q: "What ages is Quokka Academy designed for?",
    a: "Our curriculum is specifically tailored for children aged 4 to 12. We offer distinct level tracks spanning beginner phonics & vocabulary for early learners up to advanced academic debate & public speaking for older kids.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "We believe in 100% parent peace of mind. All subscription plans come with 1-click cancellation anytime with zero hidden fees or hassle. If you are ever unsatisfied with a lesson, our Happiness Guarantee ensures a full class credit or instant refund.",
  },
];

const MARKER_COLORS = [
  "bg-[#FFDE59] -rotate-3",
  "bg-[#2EC4B6] rotate-2",
  "bg-[#A594F9] -rotate-2",
  "bg-[#FF85A1] rotate-3",
  "bg-[#FF9F1C] -rotate-3",
];

export const Faq = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    playPopSound(500, "sine");
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#EEF2FF] relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF6] text-[#121212] border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-heading font-black text-xs uppercase tracking-wider">
            <FaqHelpIcon size={16} color="#121212" fill="#FF9F1C" />
            <span>Everything You Need to Know</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-[#121212] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body font-bold text-base md:text-lg text-[#121212]/70 max-w-xl mx-auto">
            Everything you need to know about live 1-on-1 lessons with Pip the Quokka and certified
            native educators.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-2xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`bg-white text-[#121212] border-[2.5px] border-[#121212] rounded-xl transition-all duration-200 ${
                  isOpen
                    ? "shadow-[4px_4px_0px_#121212] bg-[#FFFDF6]"
                    : "shadow-[3px_3px_0px_#121212] hover:shadow-[4px_4px_0px_#121212] hover:-translate-y-0.5"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 font-heading font-extrabold text-sm md:text-base text-left flex items-center justify-between gap-3 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-[#121212]">
                    <span className="relative inline-flex items-center justify-center shrink-0 select-none">
                      {/* Fully Enclosing Marker Badge */}
                      <span
                        className={`absolute inset-0 ${MARKER_COLORS[idx % MARKER_COLORS.length]} border-[2px] border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] pointer-events-none`}
                      />
                      <span className="relative z-10 font-heading font-black text-xs md:text-sm text-[#121212] px-2 py-0.5">
                        0{idx + 1}
                      </span>
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={3}
                    className={`text-[#121212] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 md:px-5 md:pb-4 font-body font-medium text-xs md:text-sm text-[#121212]/80 leading-relaxed border-t-[2px] border-[#121212] pt-3 mt-0.5 bg-[#FFFFFF] rounded-b-lg">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Callout */}
        <div className="mt-12 max-w-3xl mx-auto p-6 md:p-8 bg-[#2EC4B6] border-[3.5px] border-[#121212] rounded-3xl shadow-[6px_6px_0px_#121212] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Background Decorative Asymmetrical Shapes */}
          <div className="absolute -bottom-3.5 left-8 w-11 h-11 bg-[#FF9F1C] border-[2.5px] border-[#121212] rounded-xl shadow-[3px_3px_0px_#121212] -rotate-12 select-none pointer-events-none opacity-90" />
          <div className="absolute -bottom-4 right-6 w-20 h-7 bg-[#A594F9] border-[2.5px] border-[#121212] rounded-full shadow-[2.5px_2.5px_0px_#121212] -rotate-6 select-none pointer-events-none opacity-85" />
          <div className="absolute -top-3 right-2 w-7 h-7 bg-[#FF85A1] border-[2px] border-[#121212] rounded-full shadow-[2px_2px_0px_#121212] rotate-45 select-none pointer-events-none opacity-90" />

          <div className="space-y-1 text-center md:text-left relative z-10">
            <h3 className="font-heading font-black text-xl md:text-2xl text-[#121212]">
              Have a question not listed here?
            </h3>
            <p className="font-body font-bold text-sm md:text-base text-[#121212]/90">
              Our education advisors are ready to match your child with the perfect educator.
            </p>
          </div>
          <button
            onClick={() => {
              playPopSound(600, "sine");
              onOpenBooking();
            }}
            className="px-6 py-3.5 bg-[#FFDE59] text-[#121212] font-heading font-black text-sm md:text-base border-[3px] border-[#121212] rounded-2xl shadow-[4px_4px_0px_#121212] hover:shadow-[2px_2px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] transition-all shrink-0 flex items-center gap-2 relative z-10"
          >
            <MessageCircle size={20} strokeWidth={2.5} fill="#FFFFFF" color="#121212" />
            <span>Chat with an Advisor</span>
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TeacherShowcase } from "./components/TeacherShowcase";
import { CurriculumExplorer } from "./components/CurriculumExplorer";
import { ParentReviews } from "./components/ParentReviews";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function App() {
  const [soundOn, setSoundOn] = useState(true);

  const handleOpenBooking = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreCurriculum = () => {
    const el = document.getElementById("curriculum");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF6] flex flex-col font-['Plus_Jakarta_Sans'] text-[#121212] selection:bg-[#FFDE59] selection:text-[#121212]">
      {/* Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} soundOn={soundOn} setSoundOn={setSoundOn} />

      {/* Main Content Surfaces */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} onExploreCurriculum={handleExploreCurriculum} />

        <TeacherShowcase onOpenBooking={handleOpenBooking} />

        <CurriculumExplorer onOpenBooking={handleOpenBooking} />

        <ParentReviews onOpenBooking={handleOpenBooking} />

        <Pricing onOpenBooking={handleOpenBooking} />

        <Faq onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}

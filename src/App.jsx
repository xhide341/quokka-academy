import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeacherShowcase } from './components/TeacherShowcase';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { ParentReviews } from './components/ParentReviews';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { TrialBookingModal } from './components/TrialBookingModal';
import { VideoPreviewModal } from './components/VideoPreviewModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingAgeGroup, setBookingAgeGroup] = useState('4-6');
  const [activeTeacherVideo, setActiveTeacherVideo] = useState(null);
  const [soundOn, setSoundOn] = useState(true);

  const handleOpenBooking = (ageGroup = '4-6') => {
    if (ageGroup) setBookingAgeGroup(ageGroup);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenTeacherVideo = (teacher) => {
    setActiveTeacherVideo(teacher);
  };

  const handleCloseTeacherVideo = () => {
    setActiveTeacherVideo(null);
  };

  const handleExploreCurriculum = () => {
    const el = document.getElementById('curriculum');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF6] flex flex-col font-['Plus_Jakarta_Sans'] text-[#121212] selection:bg-[#FFDE59] selection:text-[#121212]">
      {/* Sticky Header */}
      <Header 
        onOpenBooking={() => handleOpenBooking('4-6')}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />

      {/* Main Content Surfaces */}
      <main className="flex-1">
        <Hero 
          onOpenBooking={handleOpenBooking}
          onExploreCurriculum={handleExploreCurriculum}
        />

        <TeacherShowcase 
          onOpenBooking={() => handleOpenBooking('4-6')}
          onOpenVideo={handleOpenTeacherVideo}
        />

        <CurriculumExplorer 
          onOpenBooking={() => handleOpenBooking('4-6')}
        />

        <ParentReviews 
          onOpenBooking={() => handleOpenBooking('4-6')}
        />

        <Pricing 
          onOpenBooking={() => handleOpenBooking('4-6')}
        />
      </main>

      {/* Footer & FAQs */}
      <Footer 
        onOpenBooking={() => handleOpenBooking('4-6')}
      />

      {/* Modals */}
      <TrialBookingModal 
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialAge={bookingAgeGroup}
      />

      <VideoPreviewModal 
        teacher={activeTeacherVideo}
        isOpen={!!activeTeacherVideo}
        onClose={handleCloseTeacherVideo}
        onBookTeacher={(teacher) => handleOpenBooking('4-6')}
      />
    </div>
  );
}

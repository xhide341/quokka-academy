import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { playPopSound } from '../utils/audio';

export const VideoPreviewModal = ({ teacher, isOpen, onClose, onBookTeacher }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  if (!isOpen || !teacher) return null;

  const togglePlay = () => {
    playPopSound(500, 'sine');
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    playPopSound(400, 'sine');
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleModalClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    onClose();
  };

  // Demo sample educational classroom video stream
  const demoVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="neo-card w-full max-w-xl bg-white border-[4px] border-[#121212] shadow-[10px_10px_0px_#121212] rounded-3xl p-6 relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#FF85A1] border-[2.5px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:bg-[#ff6b8b] transition-all"
        >
          <X size={20} strokeWidth={3} />
        </button>

        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <img 
              src={teacher.avatar} 
              alt={teacher.name} 
              className="w-12 h-12 rounded-xl object-cover border-[2.5px] border-[#121212] shadow-[2px_2px_0px_#121212]"
            />
            <div>
              <h3 className="font-black text-xl text-[#121212] flex items-center gap-2">
                {teacher.name}
                <span className="text-xs bg-[#FFDE59] px-2 py-0.5 border-[1.5px] border-[#121212] rounded-md font-bold">
                  {teacher.country}
                </span>
              </h3>
              <p className="font-bold text-xs text-[#555]">
                {teacher.role} • {teacher.exp}
              </p>
            </div>
          </div>

          {/* HTML5 Video Player Stage */}
          <div className="relative rounded-2xl overflow-hidden border-[3.5px] border-[#121212] shadow-[5px_5px_0px_#121212] bg-[#121212] aspect-video group">
            <video
              ref={videoRef}
              src={demoVideoUrl}
              poster={teacher.avatar}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />
            
            {/* Custom Overlay Controls */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-[#FF9F1C] border-[3px] border-[#121212] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#121212] hover:scale-105 transition-all"
              >
                {isPlaying ? <Pause size={28} fill="#121212" stroke="#121212" /> : <Play size={28} fill="#121212" stroke="#121212" className="ml-1" />}
              </button>
            </div>

            {/* Video Controls Bar */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
              <span className="bg-[#2EC4B6] text-[#121212] font-black text-xs px-2.5 py-1 border-[1.5px] border-[#121212] rounded-md shadow-[1px_1px_0px_#121212]">
                {isPlaying ? '▶ Playing Class Sample' : '⏸ Video Paused'}
              </span>

              <button
                onClick={toggleMute}
                className="pointer-events-auto w-8 h-8 bg-white border-[1.5px] border-[#121212] rounded-lg flex items-center justify-center shadow-[1px_1px_0px_#121212]"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          </div>

          {/* Teacher Bio & Tags */}
          <div className="space-y-2 text-xs font-bold text-[#333]">
            <p className="leading-relaxed italic">
              "{teacher.bio}"
            </p>
            <div className="flex items-center gap-2 text-[#121212]">
              <CheckCircle2 size={16} className="text-[#2EC4B6]" strokeWidth={3} />
              <span>{teacher.degree}</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              playPopSound(650, 'triangle');
              handleModalClose();
              onBookTeacher(teacher);
            }}
            className="w-full neo-btn-primary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl flex items-center justify-center gap-2 shadow-[4px_4px_0px_#121212]"
          >
            <Sparkles size={18} />
            <span>Book Free Trial Class with {teacher.name.split(' ')[1]}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

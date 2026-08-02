import React, { useState } from 'react';
import { BookOpen, CheckCircle, Gamepad2, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { playPopSound, playSuccessSound } from '../utils/audio';

const CURRICULUM_TRACKS = [
  {
    id: 'explorers',
    level: 'Ages 4 - 6',
    title: 'Little Explorers Track',
    badge: 'Beginner • Phonics & Play',
    badgeBg: 'bg-[#FF9F1C]',
    desc: 'Fun, play-infused lessons that build natural English speech through songs, stories, and Pip the Quokka animated games.',
    modules: [
      { name: 'Phonics & Alphabet Magic', detail: 'Master 26 letter sounds and blend initial consonant-vowel combinations.' },
      { name: 'Daily Vocabulary & Songs', detail: 'Learn 150+ everyday words (Animals, Colors, Family, Food) through fun music.' },
      { name: 'Interactive Story Time', detail: 'Follow Pip on adventures while answering simple 1-word & 2-word questions.' }
    ],
    questions: [
      {
        question: "What fruit is red and crunchy?",
        options: ['🍎 Apple', '🌿 Eucalyptus Leaf', '🍕 Pizza'],
        correctIndex: 0,
        hint: "It starts with the letter A!"
      },
      {
        question: "Which animal says 'ROAR'?",
        options: ['🐶 Puppy', '🦁 Lion', '🐱 Kitten'],
        correctIndex: 1,
        hint: "King of the jungle!"
      },
      {
        question: "What color is Pip's bow tie?",
        options: ['🩵 Mint Green', '🔴 Red', '🟡 Yellow'],
        correctIndex: 0,
        hint: "Look at Pip's neck accessory!"
      }
    ]
  },
  {
    id: 'scholars',
    level: 'Ages 7 - 9',
    title: 'Junior Scholars Track',
    badge: 'Intermediate • Reading & Grammar',
    badgeBg: 'bg-[#2EC4B6]',
    desc: 'Empowers kids to speak in complete sentences, read short stories, and express their opinions confidently.',
    modules: [
      { name: 'Full Sentence Speaking', detail: 'Transition from single words to structured grammar patterns & questions.' },
      { name: 'Guided Reading & Comprehension', detail: 'Read illustrated storybooks and discuss main ideas with native teachers.' },
      { name: 'STEM & World Explorer', detail: 'Learn English while discovering animals, space, geography, and science.' }
    ],
    questions: [
      {
        question: "Fill in the blank: 'Pip ____ to read books every day.'",
        options: ['love', 'loves', 'loving'],
        correctIndex: 1,
        hint: "Use third-person singular present tense!"
      },
      {
        question: "Which sentence is grammatically correct?",
        options: ['"They is happy"', '"They are happy"', '"They am happy"'],
        correctIndex: 1,
        hint: "'They' pairs with the plural verb 'are'!"
      },
      {
        question: "What is a synonym of 'BRAVE'?",
        options: ['Courageous', 'Fearful', 'Quiet'],
        correctIndex: 0,
        hint: "Someone who faces fear with courage!"
      }
    ]
  },
  {
    id: 'communicators',
    level: 'Ages 10 - 12',
    title: 'Master Communicators Track',
    badge: 'Advanced • Debate & Writing',
    badgeBg: 'bg-[#A594F9]',
    desc: 'Advanced curriculum for fluent speaking, persuasive writing, public presentation, and international school/exam prep.',
    modules: [
      { name: 'Public Speaking & Presentation', detail: 'Prepare and deliver 2-minute speeches on topics kids care about.' },
      { name: 'Creative Writing & Essay Structuring', detail: 'Write structured paragraphs, stories, and opinion pieces.' },
      { name: 'Critical Thinking & Debate', detail: 'Discuss global topics, respectfully defend points of view, and analyze texts.' }
    ],
    questions: [
      {
        question: "Which word best replaces 'VERY HAPPY' in a formal speech?",
        options: ['Glad', 'Thrilled', 'Good'],
        correctIndex: 1,
        hint: "Choose a strong, vibrant adjective!"
      },
      {
        question: "Identify the persuasive technique in: 'Over 15,000 parents trust us!'",
        options: ['Social Proof', 'Alliteration', 'Metaphor'],
        correctIndex: 0,
        hint: "Showing real evidence of community trust!"
      },
      {
        question: "Choose the correct prefix for 'BELIEVABLE' to mean NOT believable.",
        options: ['Un-', 'Dis-', 'In-'],
        correctIndex: 0,
        hint: "Un + believable = Unbelievable!"
      }
    ]
  }
];

export const CurriculumExplorer = ({ onOpenBooking }) => {
  const [activeTrackId, setActiveTrackId] = useState('explorers');
  const [questionIndices, setQuestionIndices] = useState({ explorers: 0, scholars: 0, communicators: 0 });
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const activeTrack = CURRICULUM_TRACKS.find(t => t.id === activeTrackId);
  const currentQIndex = questionIndices[activeTrackId] || 0;
  const currentQuestion = activeTrack.questions[currentQIndex];

  const handleTrackChange = (id) => {
    playPopSound(500, 'sine');
    setActiveTrackId(id);
    setSelectedOption(null);
    setQuizAnswered(false);
  };

  const handleAnswerQuiz = (idx) => {
    setSelectedOption(idx);
    setQuizAnswered(true);
    if (idx === currentQuestion.correctIndex) {
      playSuccessSound();
      setScore(s => s + 1);
    } else {
      playPopSound(300, 'sawtooth');
    }
  };

  const handleNextQuestion = () => {
    playPopSound(600, 'sine');
    const nextIdx = (currentQIndex + 1) % activeTrack.questions.length;
    setQuestionIndices({ ...questionIndices, [activeTrackId]: nextIdx });
    setSelectedOption(null);
    setQuizAnswered(false);
  };

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[#FFDE59] border-b-[3.5px] border-[#121212] relative overflow-hidden">
      {/* Varied Organic Background Decorative Shapes */}
      <div className="absolute top-8 left-8 hidden lg:block rotate-[-15deg] pointer-events-none">
        {/* Solid Asymmetrical Gem Hexagon */}
        <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[5px_5px_0px_#121212]">
          <path d="M 50 5 L 90 25 L 85 75 L 45 95 L 10 70 L 15 25 Z" fill="#FFFDF6" stroke="#121212" strokeWidth="4" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block rotate-12 pointer-events-none">
        {/* Solid Wavy Ribbon Squiggle */}
        <svg width="85" height="85" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[4px_4px_0px_#121212]">
          <path d="M 10 30 Q 30 5 50 30 T 90 30 L 80 60 Q 60 85 40 60 T 0 60 Z" fill="#A594F9" stroke="#121212" strokeWidth="4" />
        </svg>
      </div>

      <div className="container space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-[2.5px] border-[#121212] rounded-full shadow-[3px_3px_0px_#121212] font-black text-xs uppercase tracking-wider">
            <BookOpen size={15} />
            INTERACTIVE CURRICULUM PATHWAY
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight leading-tight">
            Designed for Every Stage of <br />
            <span className="bg-[#FFFDF6] px-3.5 py-1 border-[3.5px] border-[#121212] rounded-xl shadow-[5px_5px_0px_#121212] inline-block rotate-[1deg] mt-1">
              Child Development
            </span>
          </h2>

          <p className="font-bold text-base md:text-lg text-[#121212] pt-2 leading-relaxed">
            Our CEFR-aligned curriculum progresses smoothly from first words to fluent public speaking and creative writing.
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {CURRICULUM_TRACKS.map(track => (
            <button
              key={track.id}
              onClick={() => handleTrackChange(track.id)}
              className={`p-4.5 rounded-2xl border-[3.5px] border-[#121212] font-black text-left transition-all ${
                activeTrackId === track.id
                  ? 'bg-white text-[#121212] shadow-[6px_6px_0px_#121212] translate-y-[-3px]'
                  : 'bg-[#FFFDF6] text-[#121212] opacity-90 hover:opacity-100 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-[#FF9F1C] text-[#121212] px-2.5 py-0.5 border-[2px] border-[#121212] rounded-md shadow-[1.5px_1.5px_0px_#121212]">
                  {track.level}
                </span>
                <Sparkles size={16} className={activeTrackId === track.id ? 'text-[#FF9F1C]' : 'opacity-30'} />
              </div>
              <h3 className="font-black text-lg text-[#121212] mt-2">
                {track.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Track Explorer Box */}
        <div className="neo-card p-6 md:p-8 bg-white border-[3.5px] border-[#121212] shadow-[8px_8px_0px_#121212] rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Track Overview & Modules */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className={`inline-block font-black text-xs uppercase px-3 py-1 border-[2px] border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] ${activeTrack.badgeBg}`}>
                {activeTrack.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#121212]">
                {activeTrack.title} ({activeTrack.level})
              </h3>
              <p className="font-bold text-base text-[#444] leading-relaxed">
                {activeTrack.desc}
              </p>
            </div>

            {/* Core Modules List */}
            <div className="space-y-3">
              <h4 className="font-black text-xs uppercase text-[#121212] tracking-wider">
                Included Core Modules:
              </h4>
              {activeTrack.modules.map((m, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl shadow-[3px_3px_0px_#121212] flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-[#2EC4B6] shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <h5 className="font-black text-base text-[#121212]">
                      {m.name}
                    </h5>
                    <p className="text-xs font-bold text-[#555]">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                playPopSound(600, 'triangle');
                onOpenBooking();
              }}
              className="neo-btn-primary px-6 py-3.5 font-black text-base border-[3px] border-[#121212] rounded-xl inline-flex items-center gap-2 shadow-[4px_4px_0px_#121212]"
            >
              <span>Enroll Child in {activeTrack.title}</span>
              <Sparkles size={18} />
            </button>
          </div>

          {/* Right: Interactive Sample Quiz Sandbox Widget with Question Rotation Pool */}
          <div className="lg:col-span-5 bg-[#FFFDF6] border-[3px] border-[#121212] rounded-2xl p-5 shadow-[5px_5px_0px_#121212] space-y-4">
            <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#121212]">
              <span className="font-black text-xs uppercase text-[#121212] flex items-center gap-1.5">
                <Gamepad2 size={16} className="text-[#FF9F1C]" />
                Lesson Quiz Pool ({currentQIndex + 1}/{activeTrack.questions.length})
              </span>
              <span className="text-xs font-black bg-[#FFDE59] px-2 py-0.5 border-[1.5px] border-[#121212] rounded-md shadow-[1px_1px_0px_#121212]">
                Score: {score} ⭐
              </span>
            </div>

            <div className="space-y-3">
              <p className="font-black text-base text-[#121212]">
                {currentQuestion.question}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;
                  
                  let btnStyle = "bg-white text-[#121212] hover:bg-[#FFDE59]";
                  if (quizAnswered && isSelected) {
                    btnStyle = isCorrect 
                      ? "bg-[#2EC4B6] text-[#121212] font-black" 
                      : "bg-[#FF85A1] text-[#121212]";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerQuiz(idx)}
                      disabled={quizAnswered}
                      className={`w-full p-3 rounded-xl border-[2.5px] border-[#121212] font-bold text-sm text-left transition-all flex items-center justify-between shadow-[2.5px_2.5px_0px_#121212] ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {quizAnswered && isSelected && (
                        <span>{isCorrect ? '✅ Great Job!' : '❌ Try again'}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quiz Feedback & Question Rotation Button */}
              {quizAnswered && (
                <div className="p-3 bg-[#2EC4B6] border-[2px] border-[#121212] rounded-xl text-center space-y-2">
                  <p className="font-black text-xs text-[#121212]">
                    {selectedOption === currentQuestion.correctIndex 
                      ? "🎉 Awesome! That's correct!" 
                      : `Hint: ${currentQuestion.hint}`}
                  </p>
                  <button
                    onClick={handleNextQuestion}
                    className="w-full neo-btn-primary py-2 text-xs font-black border-[2px] border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] flex items-center justify-center gap-1.5"
                  >
                    <span>Next Question in Pool</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}

              <p className="text-xs font-bold text-[#666] text-center pt-1">
                Classes feature 100+ interactive games & instant teacher feedback!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from "react";
import { playQuokkaGiggle } from "../utils/audio";
import pipMascotLogo from "../assets/mascot/pip-mascot-logo.svg";
import pipMascotSleepy from "../assets/mascot/pip-mascot-sleepy.svg";
import pipMascotSleeping from "../assets/mascot/pip-mascot-sleeping.svg";

export const QuokkaMascot = ({
  size = 360,
  showSpeechBubble = false,
  speechText = "G'day Mate! Ready to learn?",
  interactive = false,
  className = "",
  enableBlinking = true,
  eyeState = "auto", // 'auto' | 'open' | 'sleepy' | 'sleeping' | 'closed'
}) => {
  const [isJumping, setIsJumping] = useState(false);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [currentEyeFrame, setCurrentEyeFrame] = useState("open");

  // Preload SVG assets to eliminate image swap latency/flashing
  useEffect(() => {
    const img1 = new Image();
    img1.src = pipMascotSleepy;
    const img2 = new Image();
    img2.src = pipMascotSleeping;
  }, []);

  // Multi-frame Forward & Reverse Blinking Loop (open -> sleepy [90ms] -> sleeping [130ms] -> sleepy [90ms] -> open)
  useEffect(() => {
    if (!enableBlinking || eyeState !== "auto") return;

    let stepTimeout1, stepTimeout2, stepTimeout3, nextBlinkTimeout;

    const triggerBlink = () => {
      // Step 1: Half-closed (sleepy) for 90ms
      setCurrentEyeFrame("sleepy");

      stepTimeout1 = setTimeout(() => {
        // Step 2: Fully closed (sleeping) for 130ms
        setCurrentEyeFrame("sleeping");

        stepTimeout2 = setTimeout(() => {
          // Step 3: Reverse back to half-closed (sleepy) for 90ms
          setCurrentEyeFrame("sleepy");

          stepTimeout3 = setTimeout(() => {
            // Step 4: Fully open restored
            setCurrentEyeFrame("open");

            // Schedule next blink in 3.5s to 5.5s
            const nextDelay = 3500 + Math.random() * 2000;
            nextBlinkTimeout = setTimeout(triggerBlink, nextDelay);
          }, 90);
        }, 130);
      }, 90);
    };

    const initialDelay = 2000 + Math.random() * 2000;
    nextBlinkTimeout = setTimeout(triggerBlink, initialDelay);

    return () => {
      clearTimeout(stepTimeout1);
      clearTimeout(stepTimeout2);
      clearTimeout(stepTimeout3);
      clearTimeout(nextBlinkTimeout);
    };
  }, [enableBlinking, eyeState]);

  const activeState = eyeState !== "auto" ? eyeState : currentEyeFrame;
  const activeSvg =
    activeState === "sleeping" || activeState === "closed"
      ? pipMascotSleeping
      : activeState === "sleepy"
        ? pipMascotSleepy
        : pipMascotLogo;

  const speechOptions = [
    speechText,
    "100% Certified Teachers! 🎓",
    "Let's practice together! ✨",
    "High five! 🐾",
    "Giggle giggle! 🐨",
  ];

  const handleClick = () => {
    if (!interactive) return;
    playQuokkaGiggle();
    setIsJumping(true);
    setSpeechIndex((prev) => (prev + 1) % speechOptions.length);

    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  const currentSpeech = speechOptions[speechIndex] || speechText;

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${interactive ? "cursor-pointer" : ""} ${className}`}
      onClick={handleClick}
      title={interactive ? "Click Pip the Quokka for a giggle!" : ""}
      style={{
        transform: isJumping ? "translateY(-16px) scale(1.04) rotate(-2deg)" : "none",
        transition: "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {/* Neo-Brutalist Speech Bubble */}
      {showSpeechBubble && (
        <div
          className="mb-3 px-4 py-2 bg-[#FFFDF6] border-[3.5px] border-[#121212] rounded-[18px] shadow-[4px_4px_0px_#121212] relative z-10 animate-float"
          style={{ maxWidth: "240px" }}
        >
          <p className="font-['Outfit'] font-black text-sm text-[#121212] text-center leading-snug">
            {currentSpeech}
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#121212]"></div>
          <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FFFDF6]"></div>
        </div>
      )}

      {/* Vector Mascot SVG */}
      <div
        style={{
          width: typeof size === "number" ? `${size}px` : size,
          aspectRatio: "329 / 325",
        }}
        className={`relative group max-w-full transition-transform duration-200 ${interactive ? "hover:scale-[1.02]" : ""}`}
      >
        <img src={activeSvg} alt="Pip the Quokka Mascot" className="w-full h-full filter" />
      </div>

      {/* Hidden pre-renderers to ensure instant zero-latency SVG swaps */}
      <div className="hidden" aria-hidden="true">
        <img src={pipMascotSleepy} alt="" />
        <img src={pipMascotSleeping} alt="" />
      </div>
    </div>
  );
};

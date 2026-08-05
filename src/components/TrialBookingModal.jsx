import { useState } from "react";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import { playPopSound, playSuccessSound } from "../utils/audio";

export const TrialBookingModal = ({ isOpen, onClose, initialAge = "4-6" }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ageGroup: initialAge,
    goal: "General ESL & Speaking",
    date: "Tomorrow",
    timeSlot: "16:00 PM",
    parentName: "",
    email: "",
    phone: "",
    childName: "",
  });

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      playPopSound(600, "sine");
      setStep(step + 1);
    } else {
      // Final confirmation
      playSuccessSound();
      // Launch celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
      setStep(4);
    }
  };

  const handleClose = () => {
    playPopSound(400, "sine");
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="neo-card w-full max-w-lg bg-white border-[4px] border-[#121212] shadow-[10px_10px_0px_#121212] rounded-3xl p-6 md:p-8 relative my-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 bg-[#FF85A1] border-[2.5px] border-[#121212] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:bg-[#ff6b8b] transition-all"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <span className="neo-badge bg-[#FFDE59] text-xs">✨ FREE 1 TRIAL SESSION</span>
          <h3 className="text-2xl font-black text-[#121212]">
            {step === 4 ? "🎉 Trial Class Booked!" : "Book Free Trial Class"}
          </h3>
          {step < 4 && (
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2.5 rounded-full transition-all ${
                    step >= i
                      ? "w-10 bg-[#FF9F1C] border-[1.5px] border-[#121212]"
                      : "w-4 bg-gray-200 border-[1.5px] border-[#121212]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* STEP 1: Child Info */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-5">
            <div className="space-y-2">
              <label className="block font-black text-sm text-[#121212]">
                Child's Name (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Lucas"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                className="w-full p-3 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl font-bold text-sm focus:outline-none focus:bg-white shadow-[2px_2px_0px_#121212]"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-black text-sm text-[#121212]">
                Select Child's Age Group:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {["4-6", "7-9", "10-12"].map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => {
                      playPopSound(500, "sine");
                      setFormData({ ...formData, ageGroup: age });
                    }}
                    className={`p-3 rounded-xl border-[2.5px] border-[#121212] font-black text-xs md:text-sm text-center shadow-[2px_2px_0px_#121212] ${
                      formData.ageGroup === age
                        ? "bg-[#FF9F1C] text-[#121212]"
                        : "bg-[#FFFDF6] hover:bg-[#FFDE59]"
                    }`}
                  >
                    Ages {age}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-black text-sm text-[#121212]">Primary Goal:</label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full p-3 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl font-bold text-sm focus:outline-none shadow-[2px_2px_0px_#121212]"
              >
                <option>Phonics & Fun Songs (Beginner)</option>
                <option>General ESL & Speaking Confidence</option>
                <option>Reading & Grammar Building</option>
                <option>Public Speaking & Academic Prep</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full neo-btn-primary py-3 font-black text-base border-[3px] border-[#121212] rounded-xl"
            >
              Continue to Select Time →
            </button>
          </form>
        )}

        {/* STEP 2: Time Picker */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-5">
            <div className="space-y-2">
              <label className="block font-black text-sm text-[#121212]">Select Date:</label>
              <div className="grid grid-cols-3 gap-2">
                {["Today", "Tomorrow", "This Saturday"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setFormData({ ...formData, date: d })}
                    className={`p-2.5 rounded-xl border-[2.5px] border-[#121212] font-black text-xs text-center shadow-[2px_2px_0px_#121212] ${
                      formData.date === d ? "bg-[#2EC4B6]" : "bg-[#FFFDF6] hover:bg-gray-100"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-black text-sm text-[#121212]">Select Time Slot:</label>
              <div className="grid grid-cols-2 gap-2">
                {["10:00 AM", "14:00 PM", "16:30 PM", "18:00 PM"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: t })}
                    className={`p-2.5 rounded-xl border-[2.5px] border-[#121212] font-black text-xs text-center shadow-[2px_2px_0px_#121212] ${
                      formData.timeSlot === t ? "bg-[#FF9F1C]" : "bg-[#FFFDF6] hover:bg-gray-100"
                    }`}
                  >
                    ⏰ {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 neo-btn-secondary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="w-2/3 neo-btn-primary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl"
              >
                Parent Details →
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Parent Contact */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="space-y-1">
              <label className="block font-black text-xs text-[#121212]">
                Parent / Guardian Full Name:
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Sarah Connor"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full p-2.5 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl font-bold text-sm focus:outline-none shadow-[2px_2px_0px_#121212]"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-black text-xs text-[#121212]">
                Email Address (For Class Link):
              </label>
              <input
                required
                type="email"
                placeholder="parent@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl font-bold text-sm focus:outline-none shadow-[2px_2px_0px_#121212]"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-black text-xs text-[#121212]">
                WhatsApp / Phone Number:
              </label>
              <input
                required
                type="tel"
                placeholder="+1 (555) 000-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl font-bold text-sm focus:outline-none shadow-[2px_2px_0px_#121212]"
              />
            </div>

            <div className="p-3 bg-[#FFDE59] border-[2px] border-[#121212] rounded-xl text-xs font-bold text-[#121212]">
              🔒 We respect your privacy. No spam. You will receive a reminder with the Zoom/Class
              link.
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 neo-btn-secondary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="w-2/3 neo-btn-primary py-3 font-black text-sm border-[3px] border-[#121212] rounded-xl"
              >
                Confirm Booking 🎉
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Confirmation */}
        {step === 4 && (
          <div className="text-center space-y-5">
            <div className="p-4 bg-[#FFDE59] border-[3px] border-[#121212] rounded-2xl shadow-[4px_4px_0px_#121212] space-y-2">
              <span className="text-3xl">🦘</span>
              <h4 className="font-black text-xl text-[#121212]">
                Yay! Pip is excited to meet {formData.childName || "your child"}!
              </h4>
              <p className="font-bold text-xs text-[#444]">
                Booking Reference:{" "}
                <span className="font-black text-[#121212]">
                  #QK-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </p>
            </div>

            <div className="p-4 bg-[#FFFDF6] border-[2.5px] border-[#121212] rounded-xl text-left space-y-2 text-xs font-bold text-[#333]">
              <div className="flex items-center justify-between pb-1 border-b border-gray-300 font-black text-sm">
                <span>Class Details</span>
                <span className="text-[#2EC4B6]">1 Free Trial Session</span>
              </div>
              <p>
                🗓 <strong>Date:</strong> {formData.date} at {formData.timeSlot}
              </p>
              <p>
                🎒 <strong>Track:</strong> Ages {formData.ageGroup} ({formData.goal})
              </p>
              <p>
                📧 <strong>Confirmation Sent To:</strong> {formData.email}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full neo-btn-mint py-3 font-black text-base border-[3px] border-[#121212] rounded-xl"
            >
              Done! Back to Academy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

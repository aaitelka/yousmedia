import { useEffect, useRef } from "react";
import { Send } from "lucide-react";
import "./ContactButton.css";

type ContactButtonProps = {
  label: string;
  sendingLabel: string;
  isSubmitting: boolean;
};

export const ContactButton = ({ label, sendingLabel, isSubmitting }: ContactButtonProps) => {
  const boxRef = useRef<HTMLSpanElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    const fillElement = fillRef.current;
    if (!boxElement || !fillElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          boxElement.classList.add("animate-on-scroll");

          fillElement.style.transition = "opacity 6s ease";
          fillElement.style.opacity = "1";

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(boxElement);

    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`relative w-full py-3 px-6 text-white rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg overflow-hidden
        ${isSubmitting ? "opacity-50 cursor-not-allowed hover:scale-100" : ""}`}
    >
      {/* Border animation */}
      <span
        ref={boxRef}
        className="cbox absolute inset-0 rounded-full pointer-events-none"
      ></span>

      {/* Gradient fill (fade-in) */}
      <div
        ref={fillRef}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #00cfff, #ff2d55)",
          opacity: 0,
        }}
      ></div>

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            {sendingLabel}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {label}
          </>
        )}
      </span>
    </button>
  );
};

import { useEffect, useRef } from "react";
import "./ContactButton.css";

type ContactButtonProps = {
  t: (key: string) => string;
};

export const ContactButton = () => {
  const boxRef = useRef<HTMLSpanElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    const fillElement = fillRef.current;
    if (!boxElement || !fillElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger border animation
          boxElement.classList.add("animate-on-scroll");

          // Trigger fill fade-in
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
      className="relative w-full py-3 px-6 text-white rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg overflow-hidden"
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
          opacity: 0, // start hidden
        }}
      ></div>

      {/* Button content */}
      <span className="relative z-10">{"submit"}</span>
    </button>
  );
};

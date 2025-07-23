import { useRef } from "react";

/**
 * GlowCard - A component that shows a glowing effect
 * based on mouse angle relative to its center.
 */
const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const currentCard = cardRefs.current[index];
    if (!currentCard) return;

    const rect = currentCard.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    currentCard.style.setProperty("--start", `${angle + 60}deg`);
  };

  return (
    <div
      ref={(el) => {
        if (el) cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative overflow-hidden"
    >
      <div className="glow" aria-hidden="true" />
      
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};

export default GlowCard;

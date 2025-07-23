import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // Loop through all counter blocks
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const { value, suffix } = counterItems[index];

      if (!numberElement) return;

      gsap.set(numberElement, { innerText: 0 });

      gsap.to(numberElement, {
        innerText: value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
          once: true, // prevent retriggering-check
        },
        onUpdate: () => {
          numberElement.textContent = `${Math.floor(numberElement.innerText)}${suffix}`;
        },
        onComplete: () => {
          numberElement.textContent = `${value}${suffix}`;
        },
      });
    });

    // Cleanup scroll triggers on unmount
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

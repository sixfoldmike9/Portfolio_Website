import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* UPay */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="UPay" />
            </div>
            <div className="text-content">
              <h2>
                UPay
              </h2>
              <p className="text-white-50 md:text-xl">
                A secure LMS with payment gateway
              </p>
            </div>
          </div>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="NYAYASETU" />
              </div>
              <h2>NYAYASETU- Ai powered Law Chatbot(in development)</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Utube" />
              </div>
              <h2>Utube-YouTube Clone</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;

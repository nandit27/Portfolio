import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Achievements() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const achievementsData = [
    {
      year: "2025",
      title: "Makers Fest 2026 Gold Award Winner",
      description: "Qualified among the top 100 teams across Gujarat for creating an AI-driven educational platform.",
      org: "Yuvalay Foundation and Gujarat State Government"
    },
    {
      year: "2026",
      title: "SSIP Grantee 2026",
      description: "Received funding and mentorship from the Gujarat government for developing QuickLearn AI.",
      org: "Govt. Of Gujarat - SSIP"
    },
    {
      year: "2025",
      title: "Hack The Spring 2025 Winner",
      description: "Secured first place amoung 250+ teams across multiple tracks for developing innovative project.",
      org: "GEC Gandhinagar"
    },
    {
      year: "2025",
      title: "CVM University Hackathon 2025 Runner's Up",
      description: "Achieved second place among 150+ teams for creating a QuickLearn AI-powered learning assistant.",
      org: "CVM University"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="my-[10%] overflow-hidden" aria-label="achievements">
      <Heading title="Achievements" />
      <div className="mt-10 flex flex-col gap-8 md:mt-16 lg:gap-12 w-full mx-auto md:w-4/5 lg:w-3/4">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="group relative flex flex-col md:flex-row justify-between items-start md:items-center border-b border-secondary-400/30 pb-8 md:pb-10 hover:border-accent-400 transition-colors duration-500"
          >
            <div className="flex flex-col md:w-2/3">
              <span className="text-secondary-600 font-general text-body-4 uppercase tracking-widest mb-2 font-semibold">
                {achievement.org} — {achievement.year}
              </span>
              <h3 className="text-heading-3 font-medium text-accent-400 font-general group-hover:text-accent-300 transition-colors duration-300 mb-3">
                {achievement.title}
              </h3>
              <p className="text-body-2 text-accent-200 font-grotesk max-w-2xl">
                {achievement.description}
              </p>
            </div>
            <div className="hidden md:flex justify-end w-1/3">
                <div className="w-12 h-12 rounded-full border border-secondary-600/50 flex flex-col items-center justify-center group-hover:bg-accent-400 group-hover:text-secondary-100 text-secondary-600 transition-all duration-300 group-hover:-rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiVolume2, FiVolumeX } from "react-icons/fi";

import signature from "./assets/signature.png";
import music from "./assets/lofi.mp3";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TechnicalSkillsSection from "./components/TechnicalSkillsSection";
import SkillRatingSection from "./components/SkillRatingSection";
import QualificationSection from "./components/QualificationSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const sectionRefs = useRef({});
  const audioRef = useRef(null);

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      if (sectionRefs.current[id]) {
        observer.observe(sectionRefs.current[id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Cursor
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const move = (e) => {
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Music Autoplay
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current
        .play()
        .catch(() => console.warn("Autoplay blocked by browser"));
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-[#0f0f0f] text-white font-sans overflow-x-hidden relative">
      {/* Cursor Dot */}
      <div id="cursor-dot" className="cursor-dot"></div>

      {/* Background Music */}
      <audio ref={audioRef} src={music} loop />

      {/* Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 z-50 bg-[#f9cb80] text-[#020c1b] p-3 rounded-full shadow-md hover:bg-[#d2a860] transition"
      >
        {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
      </button>

      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 px-8 py-4 justify-between items-center transition-all duration-500 ${
          active !== "hero"
            ? "bg-[#020c1b] bg-opacity-95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img
            src={signature}
            alt="Signature"
            className="h-10 bg-[#020c1b] p-1 rounded-md"
          />
          <span className="text-[#f9cb80] text-lg font-bold">
            Samuel Adeleye
          </span>
        </div>

        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                active === item.id
                  ? "text-[#f9cb80] border-b-2 border-[#f9cb80] font-semibold"
                  : "text-gray-300 hover:text-[#f9cb80] hover:border-b-2 hover:border-[#f9cb80]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between transition-all duration-500 ${
          active !== "hero" ? "bg-[#020c1b] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img
            src={signature}
            alt="Signature"
            className="h-8 w-auto bg-[#020c1b] p-1 rounded-md"
          />
          <span className="text-sm font-semibold text-[#f9cb80]">
            Samuel Adeleye
          </span>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX size={28} color="#f9cb80" />
          ) : (
            <FiMenu size={28} color="#f9cb80" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#020c1bcc] backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 transition duration-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-2xl uppercase tracking-wider transition duration-300 ${
                active === item.id
                  ? "text-[#f9cb80] font-bold"
                  : "text-white hover:text-[#f9cb80]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Main Sections */}
      <main className="relative z-0">
        <section id="hero" ref={(el) => (sectionRefs.current.hero = el)}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <HeroSection />
          </motion.div>
        </section>

        <section id="about" ref={(el) => (sectionRefs.current.about = el)}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AboutSection />
            <ServicesSection />
          </motion.div>
        </section>

        <TechnicalSkillsSection />
        <SkillRatingSection />
        <QualificationSection />

        <section
          id="projects"
          ref={(el) => (sectionRefs.current.projects = el)}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectsSection />
          </motion.div>
        </section>

        <section id="resume" ref={(el) => (sectionRefs.current.resume = el)}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ResumeSection />
          </motion.div>
        </section>

        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactSection />
          </motion.div>
        </section>
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;

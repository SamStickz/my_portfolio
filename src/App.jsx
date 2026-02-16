import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

import signature from "./assets/signature.png";

import { ThemeProvider, useTheme } from "./components/ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TechnicalSkillsSection from "./components/TechnicalSkillsSection";
import SkillRatingSection from "./components/SkillRatingSection";
import QualificationSection from "./components/QualificationSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import GitHubActivity from "./components/GitHubActivity";
import BookCallSection from "./components/BookCallSection";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import MyApproachSection from "./components/MyApproachSection";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionRefs = useRef({});

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // True immediately when scrolling starts
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      { rootMargin: "-50% 0px -50% 0px" },
    );

    navItems.forEach(({ id }) => {
      if (sectionRefs.current[id]) {
        observer.observe(sectionRefs.current[id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Cursor dot
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

  return (
    <div className="font-sans overflow-x-hidden relative transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Cursor Dot */}
      <div id="cursor-dot" className="cursor-dot"></div>

      {/* Fixed Controls - Bottom Right - Only Theme Toggle */}
      <div className="fixed bottom-5 right-5 z-[60]">
        <button
          onClick={toggleTheme}
          className="bg-[#f9cb80] text-[#020c1b] p-3 rounded-full shadow-lg hover:bg-[#d2a860] transition-all hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 px-8 py-4 justify-between items-center transition-all duration-500 ${
          isScrolled
            ? "bg-[#020c1b]/95 backdrop-blur-md shadow-md"
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

        <div className="flex items-center space-x-6">
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

      {/* Mobile Top Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "bg-[#020c1b]/95 backdrop-blur-md" : "bg-transparent"
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

        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <FiX size={28} color="#f9cb80" />
          ) : (
            <FiMenu size={28} color="#f9cb80" />
          )}
        </button>
      </div>

      {/* Mobile Slide-in Nav */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#020c1b]/95 backdrop-blur-sm z-[45] flex flex-col items-center justify-center space-y-8 transition duration-300">
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

      {/* Sections */}
      <main className="relative z-[1]">
        <section id="hero" ref={(el) => (sectionRefs.current.hero = el)}>
          <HeroSection />
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

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MyApproachSection />
        </motion.div>

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

        <GitHubActivity />
        <ResumeSection />
        <BookCallSection />
        <QuoteSection />

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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

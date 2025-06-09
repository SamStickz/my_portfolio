import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Marquee Background Text: top, middle, bottom */}
      {["top-[10%]", "top-1/2 -translate-y-1/2", "bottom-[10%]"].map(
        (position, idx) => (
          <div
            key={idx}
            className={`absolute ${position} left-0 w-full overflow-hidden z-0 opacity-5 pointer-events-none`}
          >
            <div className="whitespace-nowrap animate-marquee text-[4rem] font-bold text-[#f9cb80]">
              FULL STACK WEB DEVELOPMENT · FULL STACK WEB DEVELOPMENT · FULL
              STACK WEB DEVELOPMENT ·
            </div>
          </div>
        )
      )}

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-[90vw] sm:max-w-3xl mx-auto">
        {/* Bordered top badges */}
        <div className="flex space-x-4 mb-6 justify-center">
          <span className="border border-[#f9cb80] text-[#f9cb80] px-4 py-1 rounded-full text-sm uppercase">
            Hello there 👋
          </span>
          <span className="border border-green-500 text-green-500 px-4 py-1 rounded-full text-sm uppercase">
            Open to work
          </span>
        </div>

        {/* Animated Name */}
        <TypeAnimation
          sequence={["I'm Samuel Adeleye", 2000, "", 1000]}
          wrapper="h1"
          speed={60}
          className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#f9cb80] leading-tight break-words"
          repeat={Infinity}
        />

        {/* Title */}
        <h2 className="text-[#fcdca5] text-lg sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mt-6 mb-4 px-2 sm:px-0">
          A Full Stack Web Developer
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-sm sm:text-lg md:text-xl font-semibold leading-relaxed mb-6 px-4 sm:px-0">
          Crafting exceptional digital experiences with clean code and creative
          solutions.
        </p>

        {/* Animated Colored Tech Stack */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium text-center flex whitespace-nowrap mb-10"
          animate={{ x: ["100%", "0%", "-100%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="text-gray-400">I use&nbsp;</span>
          <span className="text-green-400">React</span>
          <span className="text-gray-400">,&nbsp;</span>
          <span className="text-green-400">Tailwind CSS</span>
          <span className="text-gray-400">, and&nbsp;</span>
          <span className="text-green-400">Framer Motion</span>
          <span className="text-gray-400">
            &nbsp;to build interactive web apps.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex space-x-4 justify-center">
          <a
            href="#projects"
            className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="Samuel-Adeleye.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

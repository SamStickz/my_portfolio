import { motion } from "framer-motion";
import profileImg from "../assets/me.JPG";
import bannerImg from "../assets/banner.jpg";
import SpotifyWidget from "./SpotifyWidget";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-transparent pt-16 pb-16">
      {/* Banner Image with Quote - Smaller height */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden z-0">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-full object-cover md:object-[center_85%]"
          style={{
            objectFit: "cover",
            objectPosition: "center 70%",
          }}
        />
        {/* Quote Overlay on Banner */}
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
          <p className="text-white text-base sm:text-lg md:text-xl font-serif italic px-6 text-center drop-shadow-lg">
            You make your own luck if you stay at it long enough.
          </p>
        </div>
      </div>

      {/* Main Content - LEFT aligned like athrix.me */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT COLUMN - Profile and Bio */}
          <div className="flex-1">
            {/* Profile Photo - Smaller, overlapping banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="-mt-12 relative z-10 mb-4"
            >
              <img
                src={profileImg}
                alt="Samuel Adeleye"
                className="w-24 h-24 rounded-full border-4 border-[#0a0a0a] shadow-2xl object-cover bg-[#0a0a0a]"
              />
            </motion.div>

            {/* Name & Title - Smaller fonts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                Samuel Adeleye
              </h1>
              <p className="text-gray-400 text-sm">
                23 • Developer • Builder • Web Dev
              </p>
            </motion.div>

            {/* Bio - Smaller text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-base text-gray-300 leading-relaxed">
                I build from zero. Whether it's frontend, backend, full-stack
                applications, or AI-powered experiences, I work across the
                entire development lifecycle. From UI/UX to deployment to user
                feedback, I care less about technology debates and more about
                delivering results that people love using.
              </p>
            </motion.div>

            {/* Spotify Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <SpotifyWidget />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-[#f9cb80] text-[#020c1b] rounded-lg font-semibold hover:bg-[#f4c36b] transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="/Samuel-Adeleye.pdf"
                download
                className="px-8 py-3 bg-transparent border-2 border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-[#f9cb80] hover:text-[#f9cb80] transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty space or future widgets */}
          <div className="lg:w-80">
            {/* You can add widgets here later if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

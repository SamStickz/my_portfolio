import { motion } from "framer-motion";

import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";
import projectImg4 from "../assets/project4.png";
import projectImg5 from "../assets/project5.png";

const projects = [
  {
    title: "Portfolio Website",
    image: projectImg1,
    liveLink: "https://samadeleyeportfolio.vercel.app/",
    codeLink: "https://github.com/SamStickz/my_portfolio",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Sass-Moss E-commerce",
    image: projectImg3,
    liveLink: "https://sassmoss.com/",
    codeLink: "https://github.com/SamStickz/Sassmoss",
    tech: ["React", "API", "CSS", "Stripe"],
  },
  {
    title: "EverySinnerHasAFuture",
    image: projectImg4,
    liveLink:
      "https://https://www.everysainthasapasteverysinnerhasafuture.com/",
    codeLink: "https://github.com/SamStickz/Frank-Skully",
    tech: ["React", "Tailwind"],
  },
  {
    title: "CoinTracker App",
    image: projectImg2,
    liveLink: "https://coinwebtracker.vercel.app/",
    codeLink: "https://github.com/SamStickz/coinTracker",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "HomeSavvy Real Estate",
    image: projectImg3,
    liveLink: "https://sam-home-savvy.vercel.app/",
    codeLink: "https://github.com/SamStickz/home-savvy",
    tech: ["React", "Tailwind", "SwiperJS"],
  },
  
];

// Duplicate projects for infinite loop
const infiniteProjects = [...projects, ...projects];

function ProjectsSection() {
  return (
    <section className="bg-[#020c1b] py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f9cb80]">
          Projects
        </h2>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1800], // Move by total width of original projects
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {infiniteProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#f9cb80]/30 hover:border-[#f9cb80] transition-all duration-300 flex-shrink-0 w-[350px]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Always show buttons on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#f9cb80] text-[#020c1b] rounded-lg font-medium hover:bg-[#f4c36b] transition text-sm z-10"
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-transparent border-2 border-[#f9cb80] text-[#f9cb80] rounded-lg font-medium hover:bg-[#f9cb80] hover:text-[#020c1b] transition text-sm z-10"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 bg-[#1a1a1a]">
                <h3 className="text-base font-semibold text-[#f9cb80] mb-2">
                  {project.title}
                </h3>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#0a192f] text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020c1b] to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020c1b] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}

export default ProjectsSection;

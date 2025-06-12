import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Samuel Adeleye's Portfolio is a modern, responsive web portfolio that showcases creative web development projects, skills, and professional background. Designed with React, Tailwind CSS, and Framer Motion, it delivers smooth animations, clean layouts, and a personal brand experience across desktop and mobile devices.",
    image: projectImg1,
    liveLink: "https://samadeleyeportfolio.vercel.app/",
    codeLink: "https://github.com/SamStickz/my_portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "CoinTracker App",
    description:
      "CoinTracker is a sleek and responsive web application that lets users track real-time cryptocurrency prices, monitor market trends, and manage their digital asset portfolio—all in one place. Built with React and styled using Tailwind CSS, it delivers a seamless experience across both desktop and mobile devices.",
    image: projectImg2,
    liveLink: "https://coinwebtracker.vercel.app/",
    codeLink: "https://github.com/SamStickz/coinTracker",
    tech: ["React", "API", "CSS"],
  },
  {
      title: "HomeSavvy Real Estate",
      description:
        "HomeSavvy is a responsive real estate web application that helps users discover, filter, and explore property listings across various locations. Designed with React and Tailwind CSS, it features intuitive search filters, a carousel of current listings, and a sleek user interface optimized for both desktop and mobile views.",
      image: projectImg3,
      liveLink: "https://sam-home-savvy.vercel.app/",
      codeLink: "https://github.com/SamStickz/home-savvy",
      tech: ["React", "Tailwind CSS", "SwiperJS"],
    
  },
];

function ProjectsSection() {
  return (
    <section className="bg-[#020c1b] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#f9cb80] mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col border border-[#f9cb80] rounded-lg overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300 h-full bg-[#1a1a1a]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl text-[#f9cb80] font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-white hover:text-[#f9cb80] transition duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#0a192f] text-white px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex space-x-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:text-[#f9cb80] transition duration-300"
                  >
                    Live <FiArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:text-[#f9cb80] transition duration-300"
                  >
                    Code <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

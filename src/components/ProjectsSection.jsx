import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";
import projectImg4 from "../assets/project4.png";
import projectImg5 from "../assets/project5.png";

const projects = [
  {
    title: "Sass-Moss E-commerce",
    image: projectImg5,
    liveLink: "https://sassmoss.com/",
    codeLink: "https://github.com/SamStickz/Sassmoss",
    tech: ["React", "API", "CSS", "Stripe"],
  },
  {
    title: "EverySinnerHasAFuture",
    image: projectImg4,
    liveLink: "https://www.everysainthasapasteverysinnerhasafuture.com/",
    codeLink: "https://github.com/SamStickz/Frank-Skully",
    tech: ["React", "Tailwind"],
  },
  {
    title: "HomeSavvy Real Estate",
    image: projectImg3,
    liveLink: "https://sam-home-savvy.vercel.app/",
    codeLink: "https://github.com/SamStickz/home-savvy",
    tech: ["React", "Tailwind", "SwiperJS"],
  },
  {
    title: "CoinTracker App",
    image: projectImg2,
    liveLink: "https://coinwebtracker.vercel.app/",
    codeLink: "https://github.com/SamStickz/coinTracker",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: projectImg1,
    liveLink: "https://samadeleyeportfolio.vercel.app/",
    codeLink: "https://github.com/SamStickz/my_portfolio",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9cb80] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020c1b]";

function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#020c1b] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f9cb80] mb-12">
          Projects
        </h2>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={project.title}
                className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block overflow-hidden rounded-lg border border-[#f9cb80]/30 hover:border-[#f9cb80] transition-colors ${
                    flipped ? "md:order-2" : ""
                  } ${linkFocus}`}
                >
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>

                <div className={flipped ? "md:order-1 md:text-right" : ""}>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#f9cb80]">
                    {project.title}
                  </h3>

                  <ul
                    className={`mt-4 flex flex-wrap gap-2 ${
                      flipped ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs bg-[#0a192f] text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-6 flex gap-4 ${
                      flipped ? "md:justify-end" : ""
                    }`}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2 bg-[#f9cb80] text-[#020c1b] rounded-lg font-medium text-sm hover:bg-[#f4c36b] transition ${linkFocus}`}
                    >
                      View live site
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2 border-2 border-[#f9cb80] text-[#f9cb80] rounded-lg font-medium text-sm hover:bg-[#f9cb80] hover:text-[#020c1b] transition ${linkFocus}`}
                    >
                      View code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

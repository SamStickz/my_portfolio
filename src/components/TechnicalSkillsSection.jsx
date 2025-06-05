function TechnicalSkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "TypeScript",
    "Node.js",
    "Framer Motion",
  ];

  return (
    <section className="bg-[#020c1b] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-manrope text-white text-4xl mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-[#f9cb80] text-[#f9cb80] py-3 px-4 text-center rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkillsSection;

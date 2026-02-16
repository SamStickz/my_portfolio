import { motion } from "framer-motion";

function SkillRatingSection() {
  const skills = [
    { name: "React", percent: 90 },
    { name: "Next.js", percent: 85 },
    { name: "TypeScript", percent: 75 },
    { name: "Tailwind CSS", percent: 95 },
  ];

  return (
    <section className="bg-[#020c1b] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-manrope text-white text-4xl mb-10">
          Frontend Development
        </h2>

        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.percent}%</span>
              </div>

              <div className="w-full md:w-[70%] bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: "#4ade80" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillRatingSection;

import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";

const approachPhases = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    description:
      "We’ll collaborate to map out your website’s goal, target audience, key functionality, and content requirements.",
    icon: <FaLightbulb size={28} />,
    bg: "bg-gradient-to-br from-teal-600 to-teal-400",
  },
  {
    phase: "Phase 2",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lo-fi playlist and dive into code. From sketches to polished code, I keep you updated every step of the way.",
    icon: <FaLaptopCode size={28} />,
    bg: "bg-gradient-to-br from-pink-600 to-pink-400",
  },
  {
    phase: "Phase 3",
    title: "Development & Launch",
    description:
      "This is where the magic happens. Based on the approved design, I’ll translate everything into functional code, building your website from the ground up.",
    icon: <FaRocket size={28} />,
    bg: "bg-gradient-to-br from-sky-600 to-sky-400",
  },
];

const MyApproachSection = () => {
  return (
    <section className="bg-[#020c1b] text-white py-20 px-6" id="approach">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#f9cb80] mb-16 font-manrope">
          My Approach
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {approachPhases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative h-64 rounded-xl p-6 bg-[#1e293b] text-center overflow-hidden cursor-pointer border border-slate-700"
            >
              {/* Default View with icon and phase label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {item.phase}
                </span>
                <div className="text-[#f9cb80]">{item.icon}</div>
              </div>

              {/* Hover or Tap Content */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 p-6 rounded-xl ${item.bg} flex flex-col justify-center text-center`}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproachSection;
